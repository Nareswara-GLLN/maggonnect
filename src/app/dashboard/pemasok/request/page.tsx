"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Truck, Calculator, MapPin, Send } from "lucide-react"

export default function RequestPenjemputan() {
  const [weight, setWeight] = useState<number | "">("")
  const [time, setTime] = useState("siang")
  const pricePerKg = 750

  const estimatedTotal = typeof weight === "number" ? weight * pricePerKg : 0

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!weight) return
    alert(`Permintaan penjemputan untuk ${weight} kg limbah pada waktu ${time} berhasil dikirim! Kurir terdekat akan segera merespons.`)
    setWeight("")
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Request Penjemputan</h2>
        <p className="text-muted-foreground">Panggil kurir Magonnect untuk mengambil limbah organik di lokasi Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="bg-white border-border/50 shadow-sm overflow-hidden">
            <div className="bg-[var(--color-primary)] text-[white] p-4 border-b border-black/10 flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <h3 className="font-bold">Formulir Panggilan Kurir</h3>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-3">
                  <Label htmlFor="weight" className="text-sm font-bold text-[var(--color-foreground)]">Estimasi Berat Limbah (Kg)</Label>
                  <p className="text-xs text-muted-foreground">Masukkan perkiraan berat limbah agar kurir bisa menyiapkan wadah yang sesuai.</p>
                  <div className="relative max-w-xs">
                    <Input 
                      id="weight" 
                      type="number"
                      step="0.5"
                      min="1"
                      placeholder="0.0" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value === "" ? "" : parseFloat(e.target.value))}
                      required
                      className="h-12 pr-12 border-border/50 focus:border-[var(--color-primary)]"
                    />
                    <div className="absolute right-0 top-0 bottom-0 flex items-center px-4 bg-muted/50 border-l border-border/50 rounded-r-md text-muted-foreground font-semibold">
                      Kg
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-bold text-[var(--color-foreground)]">Kapan limbah ini siap dijemput?</Label>
                  <RadioGroup defaultValue={time} onValueChange={setTime} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 border border-border/50 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                      <RadioGroupItem value="pagi" id="waktu-pagi" className="text-[var(--color-primary)] border-[var(--color-primary)]" />
                      <Label htmlFor="waktu-pagi" className="flex-1 cursor-pointer font-medium">Pagi (08:00 - 11:00)</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border/50 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                      <RadioGroupItem value="siang" id="waktu-siang" className="text-[var(--color-primary)] border-[var(--color-primary)]" />
                      <Label htmlFor="waktu-siang" className="flex-1 cursor-pointer font-medium">Siang (12:00 - 15:00)</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border/50 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                      <RadioGroupItem value="sore" id="waktu-sore" className="text-[var(--color-primary)] border-[var(--color-primary)]" />
                      <Label htmlFor="waktu-sore" className="flex-1 cursor-pointer font-medium">Sore (15:00 - 18:00)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="notes" className="text-sm font-bold text-[var(--color-foreground)]">Catatan Tambahan (Opsional)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Contoh: Tolong masuk lewat pintu belakang warung ya mas..."
                    className="resize-none border-border/50 focus:border-[var(--color-primary)] h-24"
                  />
                </div>

                <div className="bg-[var(--color-primary)] border border-[var(--color-primary)]/50 rounded-lg p-4 text-sm text-[white] flex gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-primary)]" />
                  <div>
                    <span className="font-bold">Lokasi Penjemputan:</span> Sesuai dengan alamat profil Anda (Warung Sederhana, Jl. Pisang No 4).
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={!weight}
                  className="w-full h-12 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-[white] font-bold text-lg shadow-sm"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Panggil Kurir Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-6">
            <Card className="bg-white border-[var(--color-primary)]/50 shadow-md overflow-hidden">
              <div className="bg-[var(--color-primary)] p-4 border-b border-[var(--color-primary)]/30 flex items-center justify-between">
                <span className="font-bold text-[white]">Kalkulator Estimasi</span>
                <Calculator className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Berdasarkan harga dasar <strong>{formatCurrency(pricePerKg)} / Kg</strong>, estimasi pendapatan yang akan Anda peroleh dari penjemputan ini adalah:
                </p>
                <div className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
                  {formatCurrency(estimatedTotal)}
                </div>
                <p className="text-xs text-slate-400">
                  *Nominal akhir akan disesuaikan dengan hasil timbangan aktual oleh kurir di lokasi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
