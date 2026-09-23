import { NavbarServer as Navbar } from "@/components/layout/navbar-server"
import { Footer } from "@/components/layout/footer"

export default function KatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
