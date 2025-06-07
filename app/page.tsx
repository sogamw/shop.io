"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-context"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Header />
        <HeroSection />
        <ProductGrid />
        <Footer />
      </div>
    </CartProvider>
  )
}
