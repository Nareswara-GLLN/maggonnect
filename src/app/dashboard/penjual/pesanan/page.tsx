"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Truck } from "lucide-react"

export default function ManajemenPesanan() {
  const [orders, setOrders] = useState([
    { id: "ORD-001", customer: "Peternakan Lele Pak Budi", product: "Maggot BSF Fresh Premium", qty: "10 kg", total: 70000, status: "Menunggu" },
    { id: "ORD-002", customer: "Ayam Kampung Sehat", product: "Paket Hemat Maggot Fresh", qty: "2 paket", total: 60000, status: "Diproses" },
    { id: "ORD-003", customer: "Urban Farming Jaya", product: "Pupuk Organik Kasgot", qty: "5 kg", total: 17500, status: "Selesai" },
  ])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  const handleProcessOrder = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "Diproses" } : o))
  }

  const handleCompleteOrder = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "Selesai" } : o))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Pesanan Masuk</h2>
        <p className="text-muted-foreground">Kelola pesanan dari pembeli dan atur status pengiriman.</p>
      </div>

      <Card className="bg-white border-border/50 shadow-sm">
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {orders.map((order) => (
              <div key={order.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-sm bg-muted px-2 py-1 rounded text-[var(--color-foreground)]">{order.id}</span>
                    <Badge variant="outline" className={
                      order.status === "Menunggu" ? "border-yellow-400 text-yellow-600 bg-yellow-50" : 
                      order.status === "Diproses" ? "border-[var(--color-secondary)] text-[var(--color-secondary)] bg-[var(--color-secondary)]/5" : 
                      "border-green-400 text-green-600 bg-green-50"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="font-semibold text-lg text-[var(--color-foreground)]">{order.customer}</p>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><span className="font-medium text-[var(--color-foreground)]">Produk:</span> {order.product}</p>
                    <p><span className="font-medium text-[var(--color-foreground)]">Kuantitas:</span> {order.qty}</p>
                    <p><span className="font-medium text-[var(--color-foreground)]">Total:</span> {formatCurrency(order.total)}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 min-w-[160px]">
                  {order.status === "Menunggu" && (
                    <Button onClick={() => handleProcessOrder(order.id)} className="w-full bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Proses
                    </Button>
                  )}
                  {order.status === "Diproses" && (
                    <Button onClick={() => handleCompleteOrder(order.id)} className="w-full bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]/90 font-semibold shadow-sm">
                      <Truck className="w-4 h-4 mr-2" /> Kirim / Selesai
                    </Button>
                  )}
                  {order.status === "Selesai" && (
                    <Button disabled variant="outline" className="w-full border-border/50 text-muted-foreground">
                      Selesai
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
