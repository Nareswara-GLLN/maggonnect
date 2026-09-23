"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, ShoppingBag, Banknote, RefreshCw } from "lucide-react"

export default function PenjualDashboard() {
  // Dummy data
  const maggotStock = 150
  const kasgotStock = 300

  const orders = [
    { id: "ORD-001", customer: "Peternakan Lele Pak Budi", product: "Maggot BSF Fresh Premium", qty: "10 kg", total: 70000, status: "Menunggu" },
    { id: "ORD-002", customer: "Ayam Kampung Sehat", product: "Paket Hemat Maggot Fresh", qty: "2 paket", total: 60000, status: "Diproses" },
    { id: "ORD-003", customer: "Peternakan Unggas Makmur", product: "Paket Hemat Maggot Fresh", qty: "5 paket", total: 150000, status: "Selesai" },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Pendapatan Bulan Ini</p>
              <Banknote className="h-4 w-4 text-[var(--color-secondary)]" />
            </div>
            <div className="text-2xl font-bold text-[var(--color-foreground)]">{formatCurrency(1250000)}</div>
            <p className="text-xs text-[var(--color-secondary)] mt-1 flex items-center"><RefreshCw className="w-3 h-3 mr-1" /> +15% dari bulan lalu</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Pesanan Aktif</p>
              <ShoppingBag className="h-4 w-4 text-[var(--color-secondary)]" />
            </div>
            <div className="text-2xl font-bold text-[var(--color-foreground)]">{orders.filter(o => o.status !== "Selesai").length}</div>
            <p className="text-xs text-muted-foreground mt-1">Menunggu diproses</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Stok Maggot (Kg)</p>
              <Package className="h-4 w-4 text-[var(--color-secondary)]" />
            </div>
            <div className="text-2xl font-bold text-[var(--color-foreground)]">{maggotStock}</div>
            <p className="text-xs text-muted-foreground mt-1">Siap panen & kemas</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Stok Paket (Unit)</p>
              <Package className="h-4 w-4 text-[var(--color-info)]" />
            </div>
            <div className="text-2xl font-bold text-[var(--color-foreground)]">{kasgotStock}</div>
            <p className="text-xs text-muted-foreground mt-1">Paket maggot siap jual</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Preview */}
      <Card className="bg-white border-border/50 shadow-sm">
        <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Pesanan Terbaru</CardTitle>
          <Button variant="ghost" size="sm" className="text-[var(--color-secondary)]" asChild>
            <Link href="/dashboard/penjual/pesanan">Lihat Semua</Link>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {orders.slice(0, 3).map((order) => (
              <div key={order.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{order.id}</span>
                    <Badge variant="outline" className={
                      order.status === "Menunggu" ? "border-yellow-400 text-yellow-600 bg-yellow-50" : 
                      order.status === "Diproses" ? "border-[var(--color-secondary)] text-[var(--color-secondary)] bg-[var(--color-secondary)]/5" : 
                      "border-green-400 text-green-600 bg-green-50"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">{order.customer}</p>
                  <p className="text-xs text-muted-foreground">{order.product} ({order.qty})</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[var(--color-secondary)]">{formatCurrency(order.total)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
