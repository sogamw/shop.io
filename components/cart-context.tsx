"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  color: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number, color: string) => void
  updateQuantity: (id: number, color: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id && item.color === newItem.color)
      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id && item.color === newItem.color ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: number, color: string) => {
    setItems((prev) => prev.filter((item) => !(item.id === id && item.color === color)))
  }

  const updateQuantity = (id: number, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, color)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id && item.color === color ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
