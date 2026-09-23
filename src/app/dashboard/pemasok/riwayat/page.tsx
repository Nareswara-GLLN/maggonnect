"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { History, Calendar, Scale, Banknote, Truck } from "lucide-react"

export default function RiwayatPemasok() {
  const historyData = [
    {
      id: "REQ-002",
      date: "12 Nov 2026",
      time: "14:30 WIB",
      courier: "Budi Santoso",
      actualWeight: "15 kg",
      income: 11250,
      status: "Selesai"
    },
    {
      id: "REQ-003",
      date: "10 Nov 2026",
      time: "10:15 WIB",
      courier: "Agus Pratama",
      actualWeight: "12.5 kg",
      income: 9375,
      status: "Selesai"
    },
    {
      id: "REQ-004",
      date: "08 Nov 2026",
      time: "16:45 WIB",
      courier: "Budi Santoso",
      actualWeight: "18 kg",
      income: 13500,
      status: "Selesai"
    },
    {
      id: "REQ-005",
      date: "05 Nov 2026",
      time: "13:20 WIB",
      courier: "Rudi Hermawan",
      actualWeight: "10 kg",
      income: 7500,
      status: "Selesai"
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Riwayat Penyetoran</h2>
          <p className="text-muted-foreground">Catatan semua limbah yang telah Anda berikan kepada kurir Magonnect.</p>
        </div>
        <div className="bg-[var(--color-primary)] text-[white] px-4 py-2 rounded-lg font-bold border border-[var(--color-primary)]/50">
          Total Pendapatan Bulan Ini: {formatCurrency(41625)}
        </div>
      </div>

      <Card className="bg-white border-border/50 shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 p-4 font-bold text-slate-700 flex items-center gap-2">
          <History className="w-5 h-5" />
          <span>Bulan November 2026</span>
        </div>
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {historyData.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-[var(--color-primary)] text-[white] w-12 h-12 rounded-full flex flex-col items-center justify-center flex-shrink-0 border border-[var(--color-primary)]/50">
                    <span className="text-xs font-bold">{item.date.split(' ')[0]}</span>
                    <span className="text-[10px] font-semibold uppercase">{item.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-lg">{item.id}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">{item.status}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {item.time}
                      </div>
                      <div className="flex items-center">
                        <Truck className="w-4 h-4 mr-1.5" />
                        Kurir: {item.courier}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col justify-between md:justify-center md:items-end gap-2 bg-slate-50 md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none border md:border-0 border-slate-200 mt-4 md:mt-0">
                  <div className="flex items-center text-slate-600 font-medium">
                    <Scale className="w-4 h-4 mr-1.5" />
                    Berat Aktual: {item.actualWeight}
                  </div>
                  <div className="flex items-center text-[var(--color-primary)] font-bold text-lg">
                    <Banknote className="w-5 h-5 mr-1.5" />
                    +{formatCurrency(item.income)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
