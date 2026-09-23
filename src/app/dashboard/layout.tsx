import { ReactNode } from "react"
import { DashboardSidebarSwitcher } from "@/components/layout/dashboard-sidebar-switcher"
import { DashboardHeader } from "@/components/layout/dashboard-header"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-muted/30">
      {/* Sidebar Switcher (Auto detects Courier/Seller) */}
      <div className="hidden md:flex h-full">
        <DashboardSidebarSwitcher />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        {/* Header Switcher */}
        <DashboardHeader />

        {/* Page Content */}
        <div className="p-4 md:p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  )
}
