import { createClient } from "@/utils/supabase/server"
import { Navbar } from "./navbar"

export async function NavbarServer() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()

  let role = null
  if (user) {
    // Ambil role dari tabel profiles
    try {
      const { data } = await supabase.from('profiles').select('role').eq('id', user.id).single()
      role = data?.role || user.user_metadata?.role
    } catch (e) {
      role = user.user_metadata?.role
    }
  }

  return <Navbar user={user} role={role} />
}
