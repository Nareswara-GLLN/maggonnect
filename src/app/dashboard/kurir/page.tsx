"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Banknote, Truck, MapPin, Edit3 } from "lucide-react"

export default function KurirDashboard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  const tasks = [
    { id: "TGS-01", supplier: "Warung Makan Indomie Sekaran", weight: "15 kg", status: "Selesai" },
    { id: "TGS-02", supplier: "Ayam Geprek Kampus", weight: "22 kg", status: "Dalam Perjalanan" },
    { id: "TGS-03", supplier: "Padang Murah", weight: "Estimasi 8 kg", status: "Menunggu" },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-slate-800 text-white rounded-xl p-6 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Halo, Budi Santoso!</h2>
          <p className="text-slate-300 max-w-lg mb-6">Hari ini Anda memiliki 3 titik penjemputan limbah. Hati-hati di jalan dan selalu pastikan timbangan sudah dikalibrasi.</p>
          <Button className="bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]/90 font-bold" asChild>
            <Link href="/dashboard/kurir/input">
              <Edit3 className="w-4 h-4 mr-2" /> Input Limbah Sekarang
            </Link>
          </Button>
        </div>
        <Truck className="absolute -right-6 -bottom-8 w-48 h-48 text-slate-700/50 z-0" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Saldo Insentif</p>
              <Banknote className="h-4 w-4 text-[var(--color-primary)]" />
            </div>
            <div className="text-3xl font-bold text-[var(--color-foreground)]">{formatCurrency(145000)}</div>
            <p className="text-xs text-muted-foreground mt-1">Bisa dicairkan kapan saja</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Limbah Terkumpul Hari Ini</p>
              <Truck className="h-4 w-4 text-[var(--color-secondary)]" />
            </div>
            <div className="text-3xl font-bold text-[var(--color-foreground)]">37 <span className="text-lg">kg</span></div>
            <p className="text-xs text-muted-foreground mt-1">Dari target harian 100 kg</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Sisa Tugas</p>
              <MapPin className="h-4 w-4 text-slate-800" />
            </div>
            <div className="text-3xl font-bold text-[var(--color-foreground)]">2 <span className="text-lg">titik</span></div>
            <p className="text-xs text-muted-foreground mt-1">Belum dijemput</p>
          </CardContent>
        </Card>
      </div>

      {/* Rute / Tugas Hari ini */}
      <Card className="bg-white border-border/50 shadow-sm">
        <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Rute Penjemputan Hari Ini</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/kurir/tugas">Lihat Semua</Link>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {tasks.map((task) => (
              <div key={task.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {task.status === "Selesai" ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                    ) : task.status === "Dalam Perjalanan" ? (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                        <span className="animate-pulse w-3 h-3 bg-blue-500 rounded-full" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                        <div className="w-3 h-3 bg-slate-400 rounded-full" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-foreground)]">{task.supplier}</p>
                    <p className="text-sm text-muted-foreground">Berat: {task.weight}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <Badge variant="outline" className={
                    task.status === "Selesai" ? "border-green-400 text-green-600 bg-green-50" : 
                    task.status === "Dalam Perjalanan" ? "border-blue-400 text-blue-600 bg-blue-50" : 
                    "bg-slate-100 text-slate-600 border-slate-200"
                  }>
                    {task.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
