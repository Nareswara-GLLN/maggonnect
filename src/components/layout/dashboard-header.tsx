"use client"

import { usePathname } from "next/navigation"
import { LogOut, Menu, X } from "lucide-react"
import { logout } from "@/app/login/actions"
import { useState } from "react"
import { DashboardSidebarSwitcher } from "./dashboard-sidebar-switcher"

export function DashboardHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isKurir = pathname.includes("/dashboard/kurir")
  const isPemasok = pathname.includes("/dashboard/pemasok")
  
  return (
    <header className="h-16 bg-white border-b border-border/50 flex items-center justify-between px-4 md:px-8 flex-shrink-0">
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className={`md:hidden w-8 h-8 ${isKurir ? "bg-slate-800 text-white" : isPemasok ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]"} font-bold flex items-center justify-center rounded-lg shadow-sm`}
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="font-bold text-lg md:text-xl text-[var(--color-foreground)]">
          {isKurir ? "Dashboard Kurir" : isPemasok ? "Dashboard Pemasok" : "Dashboard"}
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full ${isKurir ? "bg-slate-800 text-white" : isPemasok ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]"} flex items-center justify-center font-bold`}>
          {isKurir ? "KR" : isPemasok ? "WS" : "PB"}
        </div>
        <div className="hidden sm:block text-sm">
          <p className="font-semibold leading-none">{isKurir ? "Budi Santoso" : isPemasok ? "Warung Sederhana" : "Peternakan Berkah"}</p>
          <p className="text-xs text-muted-foreground mt-1">{isKurir ? "Kurir Magonnect" : isPemasok ? "Pemasok Limbah" : "Penjual (Peternak)"}</p>
        </div>
        
        <div className="ml-2 border-l border-border/50 pl-4">
          <form action={logout}>
            <button type="submit" className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-red-50 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar Panel */}
          <div className="relative z-50 w-64 max-w-[80%] h-full flex animate-slide-in-right">
            <DashboardSidebarSwitcher />
            
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 -right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
