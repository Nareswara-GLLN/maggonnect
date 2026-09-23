"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Truck, CheckCircle2 } from "lucide-react"

export default function TugasKurir() {
  const [tasks, setTasks] = useState([
    { 
      id: "TGS-01", 
      supplier: "Warung Makan Indomie Sekaran", 
      address: "Jl. Taman Siswa No. 12, Sekaran",
      phone: "0812-3456-7890",
      weight: "15 kg", 
      status: "Selesai" 
    },
    { 
      id: "TGS-02", 
      supplier: "Ayam Geprek Kampus", 
      address: "Gg. Pete Raya, Patemon",
      phone: "0856-7788-9900",
      weight: "22 kg", 
      status: "Dalam Perjalanan" 
    },
    { 
      id: "TGS-03", 
      supplier: "Padang Murah", 
      address: "Kawasan BNI UNNES, Sekaran",
      phone: "0895-1122-3344",
      weight: "Estimasi 8 kg", 
      status: "Menunggu" 
    },
  ])

  const handleUpdateStatus = (id: string, newStatus: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tugas Penjemputan</h2>
          <p className="text-muted-foreground">Daftar lokasi warung/pemasok yang harus Anda datangi hari ini.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-white border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row">
              {/* Map/Icon Area */}
              <div className="w-full md:w-48 bg-slate-100 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                    task.status === "Selesai" ? "bg-green-100 text-green-600" : 
                    task.status === "Dalam Perjalanan" ? "bg-blue-100 text-blue-600" : 
                    "bg-white border-2 border-slate-200 text-slate-400"
                  }`}>
                    {task.status === "Selesai" ? <CheckCircle2 className="w-8 h-8" /> : 
                     task.status === "Dalam Perjalanan" ? <Truck className="w-8 h-8 animate-pulse" /> : 
                     <MapPin className="w-8 h-8" />}
                  </div>
                  <Badge variant="outline" className={
                    task.status === "Selesai" ? "border-green-400 text-green-600 bg-green-50" : 
                    task.status === "Dalam Perjalanan" ? "border-blue-400 text-blue-600 bg-blue-50" : 
                    "bg-white text-slate-600 border-slate-300"
                  }>
                    {task.status}
                  </Badge>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-[var(--color-foreground)]">{task.supplier}</h3>
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">{task.id}</span>
                  </div>
                  
                  <div className="space-y-2 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 text-slate-400" />
                      <p>{task.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <p>{task.phone}</p>
                    </div>
                    <div className="flex items-center gap-3 font-semibold text-[var(--color-foreground)] mt-2 bg-muted/30 p-2 rounded w-max border border-border/50">
                      Berat: {task.weight}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {task.status === "Menunggu" && (
                    <Button onClick={() => handleUpdateStatus(task.id, "Dalam Perjalanan")} className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm">
                      <Truck className="w-4 h-4 mr-2" /> Menuju Lokasi (OTW)
                    </Button>
                  )}
                  {task.status === "Dalam Perjalanan" && (
                    <Button onClick={() => handleUpdateStatus(task.id, "Selesai")} className="bg-green-600 text-white hover:bg-green-700 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Penjemputan Selesai
                    </Button>
                  )}
                  {task.status === "Selesai" && (
                    <Button disabled variant="outline" className="border-green-200 text-green-600 bg-green-50">
                      Tugas Selesai
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
