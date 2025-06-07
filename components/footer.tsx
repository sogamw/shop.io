import { Instagram, Send, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                {/* Main logo container */}
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  {/* Dress icon */}
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13V22H9V13L3 7V9H1V7C1 6.45 1.45 6 2 6H8.5L10.5 8H13.5L15.5 6H22C22.55 6 23 6.45 23 7V9H21Z" />
                  </svg>
                </div>
                {/* Flower decoration */}
                <div className="absolute -top-1 -right-1 w-3 h-3">
                  <svg className="w-3 h-3 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">بهار</h3>
                <p className="text-xs text-gray-500">مد و پوشاک</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">بهترین و جدیدترین مدل‌های لباس زنانه را از ما بخرید</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  راهنمای خرید
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">دسته‌بندی‌ها</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  پیراهن
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  مانتو
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  شلوار
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  اکسسوری
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">تماس با ما</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>021-12345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 1403 بهار. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
