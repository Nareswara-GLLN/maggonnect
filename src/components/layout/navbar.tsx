"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User as UserIcon, LogOut } from "lucide-react"
import { useState } from "react"
import { logout } from "@/app/login/actions"

interface NavbarProps {
  user?: any
  role?: string
}

export function Navbar({ user, role }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-[var(--color-primary)] text-white sticky top-0 z-50 w-full border-b border-[var(--color-primary)] shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/Logo 1.svg" alt="Maggonnect Logo" width={160} height={40} className="object-contain" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#tentang" className="text-sm font-medium hover:text-white/80 transition-colors">
              Tentang Kami
            </Link>
            <Link href="#roles" className="text-sm font-medium hover:text-white/80 transition-colors">
              Peran
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard" className="flex items-center gap-2 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] flex items-center justify-center font-bold">
                    {user.user_metadata?.full_name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <span className="text-sm font-semibold max-w-[120px] truncate">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </Link>
                <form action={logout}>
                  <Button type="submit" variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full" title="Keluar">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            ) : (
              <>
                <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/login">Masuk</Link>
                </Button>
                <Button variant="secondary" className="font-semibold" asChild>
                  <Link href="/register">Daftar</Link>
                </Button>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in-up">
            <nav className="flex flex-col gap-4 mb-6">
              <Link href="#tentang" className="text-base font-medium hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Tentang Kami
              </Link>
              <Link href="#roles" className="text-base font-medium hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Peran
              </Link>
            </nav>
            <div className="flex flex-col gap-3">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-2 py-3 mb-2 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] flex items-center justify-center font-bold text-lg">
                      {user.user_metadata?.full_name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div>
                      <p className="font-bold text-white">{user.user_metadata?.full_name || "Pengguna"}</p>
                      <p className="text-xs text-white/70">{user.email}</p>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full font-semibold" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/dashboard">Dashboard Saya</Link>
                  </Button>
                  <form action={logout} className="w-full">
                    <Button type="submit" variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-[var(--color-primary)]">
                      <LogOut className="h-4 w-4 mr-2" /> Keluar
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-[var(--color-primary)]" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/login">Masuk</Link>
                  </Button>
                  <Button variant="secondary" className="w-full font-semibold" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/register">Daftar</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
