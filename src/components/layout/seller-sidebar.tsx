"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Package, ShoppingBag, Truck, LayoutDashboard, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function SellerSidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/dashboard/penjual", icon: LayoutDashboard },
    { name: "Pesanan Masuk", href: "/dashboard/penjual/pesanan", icon: ShoppingBag },
    { name: "Katalog Produk", href: "/dashboard/penjual/produk", icon: Package },
    { name: "Jadwal Penjemputan", href: "/dashboard/penjual/penjemputan", icon: Truck },
  ]

  return (
    <aside className="w-64 bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] flex-col flex h-full">
      <div className="p-6 border-b border-black/10">
        <Link href="/" className="flex items-center">
          <Image src="/Logo 1.svg" alt="Magonnect" width={140} height={32} className="object-contain" />
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-2 px-2">Menu Penjual</div>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
                isActive 
                  ? "bg-black/15 text-[var(--color-secondary-foreground)] shadow-sm" 
                  : "text-black/70 hover:bg-black/10 hover:text-[var(--color-secondary-foreground)]"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-black/10">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-black/70 font-medium transition-colors hover:bg-black/10 hover:text-[var(--color-secondary-foreground)]">
          <LogOut className="w-5 h-5" />
          Keluar
        </Link>
      </div>
    </aside>
  )
}
