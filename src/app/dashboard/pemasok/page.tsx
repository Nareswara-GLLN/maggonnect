"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Leaf, ArrowRight, Truck } from "lucide-react"

export default function PemasokDashboard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-[var(--color-primary)] text-[white] rounded-xl p-6 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Halo, Warung Sederhana!</h2>
          <p className="text-[white]/80 max-w-lg mb-6">Terima kasih telah berkontribusi mengurangi jejak karbon. Limbah sisa makanan Anda telah membantu memberi makan ribuan maggot hari ini.</p>
          <Button className="bg-white text-[var(--color-primary)] hover:bg-white/90 font-bold shadow-sm" asChild>
            <Link href="/dashboard/pemasok/request">
              <Truck className="w-4 h-4 mr-2" /> Request Penjemputan Baru
            </Link>
          </Button>
        </div>
        <Leaf className="absolute -right-6 -bottom-8 w-48 h-48 text-white/20 z-0" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Saldo Magonnect</p>
              <Wallet className="h-5 w-5 text-[var(--color-primary)]" />
            </div>
            <div className="text-4xl font-bold text-[var(--color-foreground)] mb-2">{formatCurrency(85500)}</div>
            <p className="text-xs text-muted-foreground">Uang hasil tabungan menyetor limbah organik</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-border/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Total Limbah Diselamatkan</p>
              <Leaf className="h-5 w-5 text-[var(--color-primary)]" />
            </div>
            <div className="text-4xl font-bold text-[var(--color-foreground)] mb-2">114 <span className="text-lg text-muted-foreground">kg</span></div>
            <p className="text-xs text-muted-foreground">Sejak bergabung 2 bulan lalu</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Status */}
      <Card className="bg-white border-border/50 shadow-sm border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Dalam Proses</Badge>
                <span className="text-sm text-muted-foreground">Request ID: REQ-001</span>
              </div>
              <h3 className="font-bold text-lg">Kurir Budi Santoso sedang menuju lokasi Anda</h3>
              <p className="text-sm text-muted-foreground mt-1">Estimasi kedatangan: 15 menit lagi (Siang)</p>
            </div>
            <Button variant="outline" className="border-border/50 shadow-sm" asChild>
              <Link href="/dashboard/pemasok/riwayat">
                Lihat Detail <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
