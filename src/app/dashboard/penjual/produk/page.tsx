"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package, X, Upload } from "lucide-react"
import Image from "next/image"

export default function KatalogProduk() {
  const [maggotStock, setMaggotStock] = useState(150)
  const [kasgotStock, setKasgotStock] = useState(300)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Katalog Produk</h2>
          <p className="text-muted-foreground">Kelola stok dan harga produk yang Anda jual di marketplace.</p>
        </div>
        <Button 
          className="bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-sm"
          onClick={() => setIsAddModalOpen(true)}
        >
          + Tambah Produk
        </Button>
      </div>

      <Card className="bg-white border-border/50 shadow-sm">
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {/* Product 1 */}
            <div className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <Image src="/Maggot Fresh.webp" alt="Maggot Fresh" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-foreground)]">Maggot BSF Fresh Premium</h3>
                  <p className="text-sm text-muted-foreground mt-1">Kategori: Pakan • Harga: Rp7.000 / kg</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-muted/50 p-2 rounded-lg border border-border/50">
                <div className="text-center">
                  <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Stok Tersedia (Kg)</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setMaggotStock(Math.max(0, maggotStock - 10))} className="h-8 w-8 p-0">-</Button>
                    <span className="font-bold text-lg w-12 text-center text-[var(--color-secondary)]">{maggotStock}</span>
                    <Button variant="outline" size="sm" onClick={() => setMaggotStock(maggotStock + 10)} className="h-8 w-8 p-0">+</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <Image src="/Paket Maggot.webp" alt="Paket Hemat Maggot Fresh 5 Kg" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-foreground)]">Paket Hemat Maggot Fresh 5 Kg</h3>
                  <p className="text-sm text-muted-foreground mt-1">Kategori: Pakan • Harga: Rp30.000 / paket</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-muted/50 p-2 rounded-lg border border-border/50">
                <div className="text-center">
                  <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Stok Tersedia (Paket)</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setKasgotStock(Math.max(0, kasgotStock - 50))} className="h-8 w-8 p-0">-</Button>
                    <span className="font-bold text-lg w-12 text-center text-[var(--color-info)]">{kasgotStock}</span>
                    <Button variant="outline" size="sm" onClick={() => setKasgotStock(kasgotStock + 50)} className="h-8 w-8 p-0">+</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal Tambah Produk */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="relative z-50 w-full max-w-md bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4 border-b pb-4">
              <h3 className="text-xl font-bold">Tambah Produk Baru</h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }}>
              <div className="space-y-2">
                <Label htmlFor="product-name">Nama Produk</Label>
                <Input id="product-name" placeholder="Cth: Maggot Kering Grade A" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <select 
                  id="category" 
                  className="w-full border-border rounded-md px-3 py-2 text-sm bg-white"
                  required
                >
                  <option value="pakan">Pakan Ternak</option>
                  <option value="pupuk">Pupuk Organik</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Foto Produk</Label>
                <label htmlFor="product-image" className="border-2 border-dashed border-border rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
                  <Upload className="w-6 h-6 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Klik untuk unggah foto</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG atau WebP (Maks. 2MB)</p>
                  <input type="file" id="product-image" className="hidden" accept="image/png, image/jpeg, image/webp" />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Harga (Rp)</Label>
                  <Input id="price" type="number" placeholder="Cth: 15000" min="0" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stok Awal</Label>
                  <Input id="stock" type="number" placeholder="Cth: 50" min="0" required />
                </div>
              </div>

              <div className="pt-4 border-t mt-6 flex justify-end gap-3">
                <Button variant="outline" type="button" onClick={() => setIsAddModalOpen(false)}>
                  Batal
                </Button>
                <Button type="submit" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white">
                  Simpan Produk
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
