"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export async function register(formData: FormData) {
  const supabase = await createClient()

  // Ambil data dari form
  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const role = formData.get("role") as string

  if (!fullName || !email || !password || !role) {
    return { error: "Semua kolom wajib diisi." }
  }

  // Daftarkan pengguna baru di Auth Supabase dan selipkan metadata
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role,
      },
    },
  })

  if (error) {
    // Kembalikan pesan error ke komponen form jika gagal
    return { error: `Pendaftaran gagal: ${error.message}` }
  }

  // Bersihkan cache
  revalidatePath("/", "layout")
  
  // Karena saat daftar pengguna langsung otomatis login di Supabase,
  // Kita lemparkan ke dashboard agar middleware mengatur routing pintar
  redirect("/dashboard")
}
