"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Truck, History, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function SupplierSidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Ringkasan", href: "/dashboard/pemasok", icon: LayoutDashboard },
    { name: "Request Penjemputan", href: "/dashboard/pemasok/request", icon: Truck },
    { name: "Riwayat Penyetoran", href: "/dashboard/pemasok/riwayat", icon: History },
  ]

  return (
    <aside className="w-64 bg-[var(--color-primary)] text-primary-foreground flex-col flex h-full">
      <div className="p-6 border-b border-primary-foreground/10">
        <Link href="/" className="flex items-center">
          <Image src="/Logo 1.svg" alt="Magonnect" width={140} height={32} className="object-contain" />
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60 mb-2 px-2">Menu Pemasok</div>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
                isActive 
                  ? "bg-white/20 text-white shadow-sm" 
                  : "text-primary-foreground/80 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-primary-foreground/10">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary-foreground/80 font-medium transition-colors hover:bg-white/10 hover:text-white">
          <LogOut className="w-5 h-5" />
          Keluar
        </Link>
      </div>
    </aside>
  )
}
