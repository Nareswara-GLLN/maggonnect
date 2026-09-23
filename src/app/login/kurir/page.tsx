import Link from "next/link"
import { Truck, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function KurirLoginPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-[var(--color-background)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)]">
        <div>
          <Link href="/login" className="inline-flex items-center text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Pilihan Peran
          </Link>
          <div className="h-12 w-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
            <Truck className="h-6 w-6" />
          </div>
          <h2 className="text-center text-2xl font-extrabold text-[var(--color-foreground)]">
            Masuk sebagai Kurir
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--color-muted-foreground)]">
            Cek jadwal penjemputan dan rute Anda hari ini.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email atau ID Kurir</Label>
              <Input id="email" name="email" type="text" autoComplete="email" required placeholder="KR-001 / nama@email.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Kata Sandi</Label>
                <Link href="#" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                  Lupa kata sandi?
                </Link>
              </div>
              <Input id="password" name="password" type="password" autoComplete="current-password" required />
            </div>
          </div>

          <div>
            <Button type="button" className="w-full font-semibold">
              Masuk
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-[var(--color-muted-foreground)]">
          Ingin bergabung sebagai kurir?{" "}
          <Link href="/register/kurir" className="font-medium text-[var(--color-primary)] hover:underline">
            Daftar sekarang
          </Link>
        </div>
      </div>
    </div>
  )
}
