"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { login } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShieldAlert, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setError(null)
    
    // Panggil server action
    const result = await login(formData)
    
    // Jika result memiliki error (misalnya kata sandi salah), tampilkan
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
            Masuk
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
            Silakan masukkan email dan kata sandi Anda.
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Kata Sandi</Label>
                <a href="#" className="text-xs text-[var(--color-primary)] font-medium hover:underline">
                  Lupa kata sandi?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="w-full"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-bold"
            disabled={isPending}
          >
            {isPending ? "Memproses..." : "Masuk"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Belum punya akun?{" "}
            <Link href="/register" className="text-[var(--color-primary)] font-bold hover:underline">
              Daftar di sini
            </Link>
          </p>
        </form>

      </div>
    </div>
  )
}
