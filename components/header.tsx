"use client"

import { useState } from "react"
import { ShoppingBag, Search, Menu, Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import Link from "next/link"

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* Main logo container */}
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  {/* Dress icon */}
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13V22H9V13L3 7V9H1V7C1 6.45 1.45 6 2 6H8.5L10.5 8H13.5L15.5 6H22C22.55 6 23 6.45 23 7V9H21Z" />
                  </svg>
                </div>
                {/* Flower decoration */}
                <div className="absolute -top-1 -right-1 w-4 h-4">
                  <svg className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                  بهار
                </h1>
                <p className="text-xs text-gray-500 -mt-1">مد و پوشاک</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                صفحه اصلی
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                لباس‌ها
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                اکسسوری
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                کیف و کفش
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                تخفیف‌ها
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="جستجو در محصولات..." className="pr-10 border-pink-200 focus:border-pink-400" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-600">
                <Heart className="w-5 h-5" />
              </Button>
              <Link href="/login">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-600">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-pink-600 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-pink-500">
                    {itemCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}
