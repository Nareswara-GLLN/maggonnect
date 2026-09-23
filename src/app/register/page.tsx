"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { register } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShieldAlert, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setError(null)
    
    // Panggil server action
    const result = await register(formData)
    
    // Jika result memiliki error, tampilkan
    if (result?.error) {
      setError(result.error)
      setIsPending(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-[var(--color-background)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-[var(--color-border)] relative">
        <Link href="/" className="absolute top-6 left-6 text-muted-foreground hover:text-[var(--color-primary)] transition-colors flex items-center text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Beranda
        </Link>
        <div className="text-center pt-4">
          <Image src="/Logo 3.svg" alt="Magonnect" width={64} height={64} className="mx-auto drop-shadow-sm" />
          <h2 className="mt-4 text-3xl font-extrabold text-[var(--color-foreground)]">
            Daftar
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
            Bergabunglah bersama revolusi pakan hijau.
          </p>
        </div>

        <form action={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-start gap-2">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nama Lengkap / Instansi</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Budi Santoso"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="email@contoh.com"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Kata Sandi</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="Minimal 6 karakter"
                className="w-full"
              />
            </div>

            <div className="space-y-3 pt-2">
              <Label>Pilih Peran Anda</Label>
              <RadioGroup defaultValue="SUPPLIER" name="role" className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 border p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <RadioGroupItem value="SUPPLIER" id="role-supplier" />
                  <Label htmlFor="role-supplier" className="flex-1 cursor-pointer">
                    <span className="font-bold block">Pemasok Limbah</span>
                    <span className="text-xs text-muted-foreground font-normal">Pemilik warung/rumah makan penyumbang sisa organik</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <RadioGroupItem value="SELLER" id="role-seller" />
                  <Label htmlFor="role-seller" className="flex-1 cursor-pointer">
                    <span className="font-bold block">Peternak Maggot (Penjual)</span>
                    <span className="text-xs text-muted-foreground font-normal">Pengelola budidaya maggot BSF</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <RadioGroupItem value="COURIER" id="role-courier" />
                  <Label htmlFor="role-courier" className="flex-1 cursor-pointer">
                    <span className="font-bold block">Kurir Logistik</span>
                    <span className="text-xs text-muted-foreground font-normal">Petugas distribusi dan penjemputan limbah</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <RadioGroupItem value="BUYER" id="role-buyer" />
                  <Label htmlFor="role-buyer" className="flex-1 cursor-pointer">
                    <span className="font-bold block">Pembeli (Katalog)</span>
                    <span className="text-xs text-muted-foreground font-normal">Pembeli maggot BSF, kasgot, dan produk turunan</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-bold"
            disabled={isPending}
          >
            {isPending ? "Mendaftarkan..." : "Daftar Sekarang"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-[var(--color-primary)] font-bold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </form>

      </div>
    </div>
  )
}
