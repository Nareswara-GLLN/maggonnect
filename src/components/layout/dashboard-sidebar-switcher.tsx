"use client"

import { usePathname } from "next/navigation"
import { SellerSidebar } from "@/components/layout/seller-sidebar"
import { CourierSidebar } from "@/components/layout/courier-sidebar"
import { SupplierSidebar } from "@/components/layout/supplier-sidebar"

export function DashboardSidebarSwitcher() {
  const pathname = usePathname()
  
  if (pathname.includes("/dashboard/kurir")) {
    return <CourierSidebar />
  }
  
  if (pathname.includes("/dashboard/pemasok")) {
    return <SupplierSidebar />
  }
  
  return <SellerSidebar />
}
