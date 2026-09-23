import { NavbarServer as Navbar } from "@/components/layout/navbar-server"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Leaf, RefreshCcw, HandCoins, Truck, Store, Sprout, Tag, ShoppingCart } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-32 bg-[var(--color-background)] overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#122b02]/82 z-10"></div>
            <div className="absolute inset-0 bg-[url('/Home-BG.webp')] bg-cover bg-center z-0"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-4 md:gap-6">
            <Image src="/Logo 4.svg" alt="Maggonnect Logo" width={240} height={60} className="object-contain opacity-0 animate-fade-in-up [animation-delay:150ms]" />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl opacity-0 animate-fade-in-up [animation-delay:300ms]">
              Ubah Limbah Makanan Menjadi <span className="text-[var(--color-secondary)]">Nilai Ekonomi</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl opacity-0 animate-fade-in-up [animation-delay:450ms]">
              Platform waste-to-feed tracker yang menghubungkan usaha kuliner dengan peternak melalui budidaya maggot BSF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in-up [animation-delay:600ms]">
              <Button size="lg" variant="secondary" className="font-semibold px-8 text-base hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg" asChild>
                <Link href="/register">Mulai Kelola Limbah</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 text-base hover:scale-105 transition-all duration-300" asChild>
                <Link href="/login/pembeli">Beli Produk Pakan</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tentang Kami Section (Problem & Solution) */}
        <section id="tentang" className="w-full py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">Misi Kami Menyelesaikan Masalah</h2>
              <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">Kami mengatasi tumpukan sampah organik dari usaha kuliner yang tidak terkelola dan memberikannya nilai ekonomi kembali.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ScrollReveal delay={0.1}>
                <div className="group flex flex-col h-full items-center text-center p-8 rounded-3xl bg-[var(--color-background)] border border-transparent hover:border-[var(--color-border)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="h-16 w-16 rounded-2xl bg-[var(--color-destructive)]/10 text-[var(--color-destructive)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-destructive)] transition-colors">Limbah Tak Terkelola</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">Sisa makanan usaha kuliner di sekitar UNNES menumpuk di TPA tanpa pemilahan yang optimal.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="group flex flex-col h-full items-center text-center p-8 rounded-3xl bg-[var(--color-background)] border border-transparent hover:border-[var(--color-border)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="h-16 w-16 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <RefreshCcw className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">Circular Economy</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">Maggonnect mengubah limbah makanan menjadi pakan bernutrisi tinggi (Maggot BSF) dengan sistem yang terintegrasi.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="group flex flex-col h-full items-center text-center p-8 rounded-3xl bg-[var(--color-background)] border border-transparent hover:border-[var(--color-border)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="h-16 w-16 rounded-2xl bg-[var(--color-secondary)]/20 text-[var(--color-secondary-foreground)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <HandCoins className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-secondary-foreground)] transition-colors">Pemberdayaan Ekonomi</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">Memberikan insentif tunai (saldo) bagi pemasok limbah dan alternatif pakan terjangkau bagi peternak.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="w-full py-20 bg-[var(--color-background)]">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">Satu Platform, Banyak Peran</h2>
              <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">Pilih peran Anda dan jadilah bagian dari revolusi pengelolaan limbah organik Maggonnect.</p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="group bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-[var(--color-primary)]/10 items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Store className="h-8 w-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Pemasok Limbah</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-6 flex-1">Rumah makan dan katering. Jual limbah makanan Anda dan dapatkan saldo digital langsung di aplikasi.</p>
                  <Button variant="outline" className="w-full group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors" asChild><Link href="/register">Gabung Mitra</Link></Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="group bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-[var(--color-primary)]/10 items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Truck className="h-8 w-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Kurir / Distributor</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-6 flex-1">Jemput limbah dari mitra pemasok, timbang di tempat, dan pastikan rantai pasok berjalan lancar.</p>
                  <Button variant="outline" className="w-full group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors" asChild><Link href="/register">Daftar Kurir</Link></Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="group bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-[var(--color-primary)]/10 items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <ShoppingCart className="h-8 w-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Pembeli Pakan & Pupuk</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-6 flex-1">Beli Maggot BSF untuk pakan unggas/ikan Anda dan pupuk organik Kasgot untuk tanaman.</p>
                  <Button variant="outline" className="w-full group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors" asChild><Link href="/login">Lihat Katalog</Link></Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="group bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-[var(--color-primary)]/10 items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Tag className="h-8 w-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Penjual</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-6 flex-1">Kelola peternakan Maggot BSF Anda dan jual hasilnya langsung kepada pembeli potensial.</p>
                  <Button variant="outline" className="w-full group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors" asChild><Link href="/login">Kelola Penjualan</Link></Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-[var(--color-primary)] text-white">
          <ScrollReveal className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Menyelamatkan Lingkungan Bersama Maggonnect?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Bergabunglah dengan ratusan usaha kuliner lainnya yang telah memilah sampah dan mendapatkan nilai tambah.
            </p>
            <Button size="lg" variant="secondary" className="font-bold text-lg px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
              <Link href="/register">Unduh Aplikasi / Daftar Sekarang</Link>
            </Button>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
