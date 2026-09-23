"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Save, AlertCircle } from "lucide-react"

export default function InputLimbah() {
  const [supplier, setSupplier] = useState("")
  const [weight, setWeight] = useState<number | "">("")
  const pricePerKg = 750 // Instruksi: Rp 750 per kilogram

  const total = typeof weight === "number" ? weight * pricePerKg : 0

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!supplier || !weight) return
    
    alert(`Berhasil menyimpan penjemputan dari ${supplier} seberat ${weight} kg. Total dibayarkan: ${formatCurrency(total)}.`)
    setSupplier("")
    setWeight("")
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Input Penjemputan Limbah</h2>
        <p className="text-muted-foreground">Catat berat limbah sisa makanan yang Anda ambil dari lokasi pemasok (warung/rumah makan).</p>
      </div>

      <Card className="bg-white border-border/50 shadow-sm overflow-hidden">
        <div className="bg-slate-800 text-white p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-[var(--color-secondary)]" />
            <div>
              <h3 className="font-bold text-lg">Kalkulator Limbah</h3>
              <p className="text-sm text-slate-300">Harga beli hari ini: <span className="font-bold text-[var(--color-secondary)]">{formatCurrency(pricePerKg)} / kg</span></p>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="supplier" className="text-sm font-bold text-[var(--color-foreground)]">Nama Pemasok / Warung Makan</Label>
              <Input 
                id="supplier" 
                placeholder="Cth: Warung Nasi Padang Sederhana" 
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                required
                className="h-12 border-border/50 focus:border-[var(--color-primary)]"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="weight" className="text-sm font-bold text-[var(--color-foreground)]">Berat Limbah yang Ditimbang (Kg)</Label>
              <div className="relative">
                <Input 
                  id="weight" 
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="0.0" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value === "" ? "" : parseFloat(e.target.value))}
                  required
                  className="h-14 text-2xl font-bold pr-16 border-border/50 focus:border-[var(--color-primary)]"
                />
                <div className="absolute right-0 top-0 bottom-0 flex items-center px-4 bg-muted/50 border-l border-border/50 rounded-r-md text-muted-foreground font-semibold">
                  Kg
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-500 font-medium">Total Harga Beli</span>
                <span className="text-xs text-[var(--color-info)] font-semibold flex items-center bg-[var(--color-info)]/10 px-2 py-1 rounded-full">
                  Otomatis Dihitung
                </span>
              </div>
              <div className="text-4xl font-extrabold text-[var(--color-primary)]">
                {formatCurrency(total)}
              </div>
              
              <div className="flex items-start gap-2 mt-4 text-xs text-slate-500">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-slate-400 mt-0.5" />
                <p>Pastikan nominal ini sesuai sebelum diserahkan/dibayarkan ke pihak warung melalui saldo atau tunai.</p>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={!supplier || !weight}
              className="w-full h-12 bg-slate-800 hover:bg-slate-900 text-white font-bold text-lg shadow-sm transition-transform active:scale-95 disabled:bg-slate-300"
            >
              <Save className="w-5 h-5 mr-2" />
              Simpan & Konfirmasi
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
