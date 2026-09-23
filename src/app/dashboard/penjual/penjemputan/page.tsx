"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, MapPin, CheckCircle2 } from "lucide-react"

export default function JadwalPenjemputan() {
  const schedules = [
    { 
      id: "JDW-001", 
      kurir: "Budi Santoso", 
      waktu: "Hari ini, 14:30 WIB", 
      estimasiBerat: "45 kg", 
      asal: "Area Sekaran (3 Warung Makan)", 
      status: "Dalam Perjalanan" 
    },
    { 
      id: "JDW-002", 
      kurir: "Agus Pratama", 
      waktu: "Hari ini, 16:00 WIB", 
      estimasiBerat: "30 kg", 
      asal: "Area Patemon (2 Rumah Makan)", 
      status: "Menunggu Penjemputan" 
    },
    { 
      id: "JDW-003", 
      kurir: "Rudi Hermawan", 
      waktu: "Kemarin, 15:00 WIB", 
      estimasiBerat: "52 kg", 
      asal: "Area Gunungpati (4 Warung Makan)", 
      status: "Selesai Diterima" 
    },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Jadwal Penjemputan Limbah</h2>
        <p className="text-muted-foreground">Pantau kedatangan kurir yang mengantar limbah organik ke tempat pengolahan Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Schedule List */}
        <div className="md:col-span-2 space-y-4">
          {schedules.map((schedule) => (
            <Card key={schedule.id} className="bg-white border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row border-l-4" style={{ 
                borderLeftColor: schedule.status === "Selesai Diterima" ? "var(--color-secondary)" : 
                                 schedule.status === "Dalam Perjalanan" ? "var(--color-secondary)" : "#e5e7eb" 
              }}>
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-muted-foreground" />
                      <span className="font-bold text-lg">{schedule.kurir}</span>
                    </div>
                    <Badge variant="outline" className={
                      schedule.status === "Dalam Perjalanan" ? "border-[var(--color-secondary)] text-[var(--color-secondary-foreground)] bg-[var(--color-secondary)]/10" : 
                      schedule.status === "Selesai Diterima" ? "border-[var(--color-secondary)] text-[var(--color-secondary)] bg-[var(--color-secondary)]/10" : 
                      "bg-muted text-muted-foreground"
                    }>
                      {schedule.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      {schedule.waktu}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate" title={schedule.asal}>{schedule.asal}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/30 p-5 flex flex-row sm:flex-col items-center justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-border/50 min-w-[120px]">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Estimasi</p>
                    <p className="text-2xl font-bold text-[var(--color-foreground)]">{schedule.estimasiBerat}</p>
                  </div>
                  
                  {schedule.status === "Dalam Perjalanan" && (
                    <div className="mt-0 sm:mt-3 flex items-center text-xs font-semibold text-[var(--color-secondary)]">
                      <span className="animate-pulse flex h-2 w-2 bg-[var(--color-secondary)] rounded-full mr-2"></span>
                      OTW
                    </div>
                  )}
                  {schedule.status === "Selesai Diterima" && (
                    <div className="mt-0 sm:mt-3">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] mx-auto" />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="bg-white border-border/50 shadow-sm">
            <CardHeader className="pb-3 border-b border-border/50">
              <CardTitle className="text-base flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-[var(--color-secondary)]" />
                Status Hari Ini
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Limbah Diterima</span>
                <span className="font-bold text-lg text-[var(--color-foreground)]">0 kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Estimasi Kedatangan</span>
                <span className="font-bold text-lg text-[var(--color-secondary)]">75 kg</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-secondary)] w-0 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-transparent shadow-sm">
            <CardContent className="p-4">
              <h4 className="font-bold text-[var(--color-secondary)] mb-2">Informasi Pengolahan</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pastikan area pengolahan dan wadah (biopond) maggot sudah disiapkan sebelum kurir datang untuk mempercepat proses penimbangan ulang (QC) dan penuangan limbah.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
