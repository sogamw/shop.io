"use client"

import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-context"

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-right">سبد خرید شما</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🛍️</span>
                </div>
                <p className="text-gray-500 mb-4">سبد خرید شما خالی است</p>
                <Button
                  onClick={() => onOpenChange(false)}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                >
                  ادامه خرید
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.color}`} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">رنگ: {item.color}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="w-8 h-8 text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.id, item.color)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 mt-2">
                          {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>مجموع:</span>
                  <span>{total.toLocaleString("fa-IR")} تومان</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">تکمیل خرید</Button>
                  <Button variant="outline" className="w-full" onClick={clearCart}>
                    پاک کردن سبد
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
