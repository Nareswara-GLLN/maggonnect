import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  // Proteksi rute dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!user) {
      // Belum login, lempar ke halaman login
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }

    // Prioritaskan mengambil role dari tabel profiles untuk menghindari masalah sinkronisasi dengan user_metadata
    let role = null;
    try {
      const { data } = await supabase.from('profiles').select('role').eq('id', user.id).single()
      role = data?.role || user.user_metadata?.role
    } catch (e) {
      role = user.user_metadata?.role
    }

    // Redirect pintar (Smart Redirect) jika mencoba masuk ke rute yang salah
    if (pathname === "/dashboard") {
      const url = request.nextUrl.clone()
      if (role === "SELLER") url.pathname = "/dashboard/penjual"
      else if (role === "COURIER") url.pathname = "/dashboard/kurir"
      else if (role === "SUPPLIER") url.pathname = "/dashboard/pemasok"
      else if (role === "BUYER") url.pathname = "/katalog"
      else {
        // Fallback jika tidak punya role, logout secara otomatis untuk mencegah infinite loop
        await supabase.auth.signOut()
        url.pathname = "/login"
      }
      return NextResponse.redirect(url)
    }

    // Mencegah akses silang (Cross-access prevention)
    if (pathname.startsWith("/dashboard/penjual") && role !== "SELLER") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    if (pathname.startsWith("/dashboard/kurir") && role !== "COURIER") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    if (pathname.startsWith("/dashboard/pemasok") && role !== "SUPPLIER") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // Jika sudah login dan mencoba mengakses /login atau /register, lempar kembali ke dashboard
  if ((pathname.startsWith("/login") || pathname.startsWith("/register")) && user) {
    const url = request.nextUrl.clone()
    url.pathname = "/dashboard"
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
