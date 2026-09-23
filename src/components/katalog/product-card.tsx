import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, ShoppingCart, Store } from "lucide-react"
import { type Product } from "@/data/products"

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border-border/50 bg-white">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image 
          src={product.imageUrl} 
          alt={product.name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className={
              product.category === "Pakan" 
                ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 border-transparent shadow-sm" 
                : "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]/90 border-transparent shadow-sm"
            }
          >
            {product.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-0 flex-none">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg text-[var(--color-foreground)] line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-xl font-extrabold text-[var(--color-primary)] mt-2">
          {formatCurrency(product.price)} <span className="text-sm font-normal text-muted-foreground">/ {product.unit}</span>
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-3 flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2 text-[var(--color-primary)]/70" />
          <span className="truncate">{product.location}</span>
        </div>
        
        <div className="flex items-center text-sm">
          <Store className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="truncate">{product.seller}</span>
        </div>

        <div className="flex items-center justify-between text-sm pt-4 border-t border-border/50">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-medium">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground text-xs">Terjual {product.sold}+</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-semibold shadow-sm transition-transform active:scale-95 group-hover:shadow-md" asChild>
          <Link href={`/katalog/${product.id}`}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Beli
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
