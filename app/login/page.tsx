"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    rememberMe: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 flex items-center justify-center p-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-rose-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors mb-6 group"
        >
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          بازگشت به فروشگاه
        </Link>

        {/* Login/Register Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-pink-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                {/* Main logo container */}
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl">
                  {/* Dress icon */}
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13V22H9V13L3 7V9H1V7C1 6.45 1.45 6 2 6H8.5L10.5 8H13.5L15.5 6H22C22.55 6 23 6.45 23 7V9H21Z" />
                  </svg>
                </div>
                {/* Flower decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6">
                  <svg className="w-6 h-6 text-pink-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z" />
                  </svg>
                </div>
                {/* Additional small flowers */}
                <div className="absolute -bottom-1 -left-1 w-4 h-4">
                  <svg
                    className="w-4 h-4 text-rose-400 animate-pulse delay-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                  بهار
                </h1>
                <p className="text-sm text-gray-500">مد و پوشاک</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{isLogin ? "خوش آمدید!" : "عضویت در بهار"}</h2>
            <p className="text-gray-600">{isLogin ? "به حساب کاربری خود وارد شوید" : "حساب کاربری جدید ایجاد کنید"}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Only for Register) */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  نام و نام خانوادگی
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="نام کامل خود را وارد کنید"
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl h-12"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                ایمیل
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl h-12"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                رمز عبور
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl h-12 pl-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Only for Register) */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  تکرار رمز عبور
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="رمز عبور را مجدداً وارد کنید"
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl h-12"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Remember Me & Forgot Password (Only for Login) */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))}
                    className="border-pink-300 data-[state=checked]:bg-pink-500"
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer">
                    مرا به خاطر بسپار
                  </Label>
                </div>
                <Link href="#" className="text-sm text-pink-600 hover:text-pink-700 transition-colors">
                  فراموشی رمز عبور؟
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl h-12 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isLogin ? "ورود به حساب" : "ایجاد حساب کاربری"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">یا</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full border-gray-200 hover:bg-gray-50 rounded-xl h-12 font-medium"
            >
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              ورود با گوگل
            </Button>
          </div>

          {/* Toggle Login/Register */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              {isLogin ? "حساب کاربری ندارید؟" : "قبلاً ثبت‌نام کرده‌اید؟"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-pink-600 hover:text-pink-700 font-semibold mr-2 transition-colors"
              >
                {isLogin ? "ثبت‌نام کنید" : "وارد شوید"}
              </button>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-pink-100">
            <Heart className="w-6 h-6 text-pink-500 mx-auto mb-2" />
            <p className="text-xs text-gray-600">محصولات با کیفیت</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-pink-100">
            <div className="w-6 h-6 text-pink-500 mx-auto mb-2 text-lg">🚚</div>
            <p className="text-xs text-gray-600">ارسال رایگان</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-pink-100">
            <div className="w-6 h-6 text-pink-500 mx-auto mb-2 text-lg">💎</div>
            <p className="text-xs text-gray-600">ضمانت کیفیت</p>
          </div>
        </div>
      </div>
    </div>
  )
}
