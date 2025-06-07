"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "پیراهن مجلسی گلدار",
    price: 450000,
    originalPrice: 550000,
    image: "/placeholder.svg?height=400&width=300",
    category: "پیراهن",
    isNew: true,
    colors: ["صورتی", "آبی", "سفید"],
  },
  {
    id: 2,
    name: "مانتو اسپرت کتان",
    price: 320000,
    originalPrice: 380000,
    image: "/placeholder.svg?height=400&width=300",
    category: "مانتو",
    isNew: false,
    colors: ["مشکی", "خاکی", "سرمه‌ای"],
  },
  {
    id: 3,
    name: "شلوار جین راسته",
    price: 280000,
    originalPrice: 320000,
    image: "/placeholder.svg?height=400&width=300",
    category: "شلوار",
    isNew: true,
    colors: ["آبی", "مشکی"],
  },
  {
    id: 4,
    name: "بلوز حریر مجلسی",
    price: 380000,
    originalPrice: 450000,
    image: "/placeholder.svg?height=400&width=300",
    category: "بلوز",
    isNew: false,
    colors: ["طلایی", "نقره‌ای", "صورتی"],
  },
  {
    id: 5,
    name: "کت تک دکمه",
    price: 520000,
    originalPrice: 600000,
    image: "/placeholder.svg?height=400&width=300",
    category: "کت",
    isNew: true,
    colors: ["مشکی", "سرمه‌ای", "خاکستری"],
  },
  {
    id: 6,
    name: "دامن پلیسه کوتاه",
    price: 220000,
    originalPrice: 280000,
    image: "/placeholder.svg?height=400&width=300",
    category: "دامن",
    isNew: false,
    colors: ["مشکی", "صورتی", "سفید"],
  },
]

const categories = ["همه", "پیراهن", "مانتو", "شلوار", "بلوز", "کت", "دامن"]

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("همه")

  const filteredProducts =
    selectedCategory === "همه" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">محصولات پرفروش</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            بهترین و جدیدترین مدل‌های لباس زنانه را از مجموعه ما انتخاب کنید
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "border-pink-200 text-pink-600 hover:bg-pink-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
            مشاهده محصولات بیشتر
          </Button>
        </div>
      </div>
    </section>
  )
}
