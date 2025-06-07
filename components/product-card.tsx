"use client"

import { useState } from "react"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-context"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  isNew: boolean
  colors: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
    })
  }

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-green-500 text-white">جدید</Badge>}
          {discountPercentage > 0 && <Badge className="bg-red-500 text-white">{discountPercentage}% تخفیف</Badge>}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
          <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm">
            <Eye className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            افزودن به سبد
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">{product.name}</h4>

        {/* Colors */}
        <div className="flex gap-2 mb-4">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                selectedColor === color
                  ? "bg-pink-100 border-pink-300 text-pink-700"
                  : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-pink-50"
              }`}
            >
              {color}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">{product.price.toLocaleString("fa-IR")} تومان</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString("fa-IR")}
              </span>
            )}
          </div>
          <Badge variant="outline" className="text-pink-600 border-pink-200">
            {product.category}
          </Badge>
        </div>
      </div>
    </div>
  )
}
