"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Truck, Edit3, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function CourierSidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Ringkasan", href: "/dashboard/kurir", icon: LayoutDashboard },
    { name: "Input Limbah", href: "/dashboard/kurir/input", icon: Edit3 },
    { name: "Tugas Penjemputan", href: "/dashboard/kurir/tugas", icon: Truck },
  ]

  return (
    <aside className="w-64 bg-slate-800 text-slate-100 flex-col flex h-full">
      <div className="p-6 border-b border-slate-700">
        <Link href="/" className="flex items-center">
          <Image src="/Logo 1.svg" alt="Magonnect" width={140} height={32} className="object-contain" />
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-2">Menu Kurir</div>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
                isActive 
                  ? "bg-slate-700 text-white shadow-sm" 
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 font-medium transition-colors hover:bg-slate-700/50 hover:text-white">
          <LogOut className="w-5 h-5" />
          Keluar
        </Link>
      </div>
    </aside>
  )
}
