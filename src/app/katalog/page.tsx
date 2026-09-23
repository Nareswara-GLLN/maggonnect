"use client"

import { useState } from "react"
import { ProductCard } from "@/components/katalog/product-card"
import { productsData } from "@/data/products"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

type FilterTab = "Semua" | "Pakan" | "Pupuk"

export default function KatalogPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false)
  const [sortBy, setSortBy] = useState("relevansi") // relevansi, termurah, termahal, terlaris, rating

  // Filter logic
  let filteredProducts = productsData.filter(product => {
    const matchesTab = activeTab === "Semua" || product.category === activeTab
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.seller.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // Sort logic
  if (sortBy === "termurah") filteredProducts.sort((a, b) => a.price - b.price)
  if (sortBy === "termahal") filteredProducts.sort((a, b) => b.price - a.price)
  if (sortBy === "terlaris") filteredProducts.sort((a, b) => b.sold - a.sold)
  if (sortBy === "rating") filteredProducts.sort((a, b) => b.rating - a.rating)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-muted/30">
        {/* Header Section */}
        <section className="bg-[var(--color-primary)] py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-fade-in-up">
                Katalog Produk Maggonnect
              </h1>
              <p className="text-lg text-white/80 animate-fade-in-up [animation-delay:150ms] mb-8">
                Temukan pakan alternatif berkualitas tinggi dan pupuk organik terbaik langsung dari peternak lokal.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl animate-fade-in-up [animation-delay:300ms]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Cari maggot, kasgot, atau nama penjual..."
                  className="pl-10 h-12 bg-white text-foreground rounded-full border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[var(--color-secondary)]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            
            {/* Tabs / Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex bg-white rounded-full p-1 shadow-sm border border-border/50">
                {(["Semua", "Pakan", "Pupuk"] as FilterTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      activeTab === tab 
                        ? "bg-[var(--color-primary)] text-white shadow-md" 
                        : "text-muted-foreground hover:text-[var(--color-foreground)] hover:bg-muted"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Button 
                  variant="outline" 
                  className={`rounded-full font-medium ${showAdvancedFilter ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/5' : ''}`}
                  onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Lanjutan
                </Button>

                {/* Dropdown Menu Filter */}
                {showAdvancedFilter && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-border/50 z-50 p-4 animate-fade-in-up">
                    <h4 className="font-semibold text-sm mb-3 text-foreground">Urutkan Berdasarkan</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input type="radio" name="sort" checked={sortBy === "relevansi"} onChange={() => {setSortBy("relevansi"); setShowAdvancedFilter(false)}} className="accent-[var(--color-primary)]" />
                        <span>Paling Relevan (Default)</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input type="radio" name="sort" checked={sortBy === "termurah"} onChange={() => {setSortBy("termurah"); setShowAdvancedFilter(false)}} className="accent-[var(--color-primary)]" />
                        <span>Harga: Terendah ke Tertinggi</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input type="radio" name="sort" checked={sortBy === "termahal"} onChange={() => {setSortBy("termahal"); setShowAdvancedFilter(false)}} className="accent-[var(--color-primary)]" />
                        <span>Harga: Tertinggi ke Terendah</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input type="radio" name="sort" checked={sortBy === "terlaris"} onChange={() => {setSortBy("terlaris"); setShowAdvancedFilter(false)}} className="accent-[var(--color-primary)]" />
                        <span>Terlaris (Paling Banyak Dibeli)</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input type="radio" name="sort" checked={sortBy === "rating"} onChange={() => {setSortBy("rating"); setShowAdvancedFilter(false)}} className="accent-[var(--color-primary)]" />
                        <span>Rating Tertinggi</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-border/50 border-dashed">
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Produk Tidak Ditemukan</h3>
                <p className="text-muted-foreground/70">
                  Maaf, tidak ada produk yang cocok dengan pencarian Anda.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 rounded-full"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveTab("Semua")
                  }}
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
            
          </div>
        </section>
      </main>
    </div>
  )
}
