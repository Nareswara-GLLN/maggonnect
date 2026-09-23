"use client"

import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound, useRouter } from "next/navigation"
import { productsData } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Minus, Plus, Store, MapPin, Star, ShieldCheck, Wallet, CheckCircle2, CreditCard, Landmark } from "lucide-react"

export default function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  
  const product = productsData.find((p) => p.id === id)
  
  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState("")
  const [notes, setNotes] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("magonnect")
  const [isSuccess, setIsSuccess] = useState(false)
  
  if (!product) {
    notFound()
  }

  const ongkir = 15000 // Dummy flat shipping rate
  const subtotal = product.price * quantity
  const total = subtotal + ongkir

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-muted/30">
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full border border-border/50">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-4">Pembayaran Berhasil!</h1>
            <p className="text-muted-foreground mb-8">
              Terima kasih! Pesanan <span className="font-semibold text-foreground">{product.name}</span> Anda sedang diproses oleh penjual. Anda dapat melacak status pengiriman di riwayat pesanan.
            </p>
            <div className="bg-muted p-4 rounded-xl mb-8 text-sm text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Bayar:</span>
                <span className="font-bold text-[var(--color-primary)]">{formatCurrency(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Metode:</span>
                <span className="font-medium text-foreground">
                  {paymentMethod === "magonnect" ? "Saldo Magonnect" : paymentMethod === "transfer" ? "Transfer Bank" : "E-Wallet"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button onClick={() => router.push("/katalog")} className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-full">
                Kembali Belanja
              </Button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1 bg-muted/30 pb-12">
        {/* Header Breadcrumb */}
        <div className="bg-white border-b border-border/50">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <Link href="/katalog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-[var(--color-primary)] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Katalog
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--color-foreground)]">Checkout Pesanan</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Product & Form */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Product Info Card */}
              <Card className="bg-white overflow-hidden border-border/50 shadow-sm">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/3 bg-muted aspect-square sm:aspect-auto">
                    <Image 
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className={product.category === "Pakan" ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-secondary)] text-foreground"}>
                        {product.category}
                      </Badge>
                      <div className="flex items-center text-sm text-yellow-500 font-medium">
                        <Star className="w-4 h-4 fill-yellow-500 mr-1" />
                        {product.rating.toFixed(1)}
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{product.name}</h2>
                    <p className="text-2xl font-extrabold text-[var(--color-primary)] mb-4">{formatCurrency(product.price)} <span className="text-sm font-normal text-muted-foreground">/ {product.unit}</span></p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Store className="w-4 h-4 mr-2" />
                      <span>{product.seller}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{product.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-auto">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Shipping Details */}
              <Card className="bg-white border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[var(--color-primary)]" />
                    Informasi Pengiriman
                  </h3>
                  <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat Lengkap</Label>
                      <Input 
                        id="address" 
                        required 
                        placeholder="Contoh: Jl. Taman Siswa No. 12, Sekaran..." 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Catatan untuk Penjual (Opsional)</Label>
                      <Input 
                        id="notes" 
                        placeholder="Contoh: Taruh di depan pagar ya pak." 
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="bg-muted/50"
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>

            </div>

            {/* Right Column: Order Summary */}
            <div className="space-y-6">
              <Card className="bg-white border-border/50 shadow-md sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-6">Ringkasan Belanja</h3>
                  
                  {/* Quantity */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium">Jumlah Pembelian</span>
                    <div className="flex items-center space-x-3 bg-muted/50 rounded-full p-1 border border-border/50">
                      <button 
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-muted shadow-sm transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-4 text-center font-semibold">{quantity}</span>
                      <button 
                        type="button"
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm border-t border-border/50 pt-6 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Harga ({quantity} barang)</span>
                      <span className="font-medium">{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Ongkos Kirim</span>
                      <span className="font-medium">{formatCurrency(ongkir)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold pt-3 border-t border-border/50">
                      <span>Total Belanja</span>
                      <span className="text-[var(--color-primary)]">{formatCurrency(total)}</span>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6 space-y-3">
                    <Label className="text-sm font-bold">Metode Pembayaran</Label>
                    
                    <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${paymentMethod === "magonnect" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-border/50 hover:bg-muted/50"}`}>
                      <input type="radio" name="payment" value="magonnect" checked={paymentMethod === "magonnect"} onChange={() => setPaymentMethod("magonnect")} className="mr-3 accent-[var(--color-primary)]" />
                      <CreditCard className="w-5 h-5 mr-3 text-[var(--color-primary)]" />
                      <div>
                        <p className="text-sm font-semibold">Saldo Maggonnect</p>
                        <p className="text-xs text-muted-foreground">Sisa Saldo: Rp250.000</p>
                      </div>
                    </label>

                    <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${paymentMethod === "transfer" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-border/50 hover:bg-muted/50"}`}>
                      <input type="radio" name="payment" value="transfer" checked={paymentMethod === "transfer"} onChange={() => setPaymentMethod("transfer")} className="mr-3 accent-[var(--color-primary)]" />
                      <Landmark className="w-5 h-5 mr-3 text-[var(--color-primary)]" />
                      <p className="text-sm font-semibold">Transfer Bank</p>
                    </label>

                    <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${paymentMethod === "ewallet" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-border/50 hover:bg-muted/50"}`}>
                      <input type="radio" name="payment" value="ewallet" checked={paymentMethod === "ewallet"} onChange={() => setPaymentMethod("ewallet")} className="mr-3 accent-[var(--color-primary)]" />
                      <Wallet className="w-5 h-5 mr-3 text-[var(--color-primary)]" />
                      <p className="text-sm font-semibold">E-Wallet</p>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    form="checkout-form"
                    className="w-full h-12 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white text-base font-bold rounded-xl shadow-lg transition-transform active:scale-95"
                  >
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Bayar Sekarang
                  </Button>

                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
