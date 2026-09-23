import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/Logo 2.svg" alt="Maggonnect Logo" width={160} height={40} className="object-contain" />
            </div>
            <p className="text-sm text-white/80 max-w-xs">
              Eco-Feed Platform yang mengubah limbah makanan menjadi produk bernilai ekonomi melalui budidaya maggot BSF.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/" className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#solution" className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#roles" className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-300">
                  Layanan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Universitas Negeri Semarang (UNNES)</li>
              <li>Sekaran, Patemon, Semarang</li>
              <li>
                <a href="mailto:hello@magonnect.id" className="hover:text-white hover:underline underline-offset-4 transition-all">
                  hello@magonnect.id
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Maggonnect. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
