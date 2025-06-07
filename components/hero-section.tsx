export function HeroSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            مجموعه جدید
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              بهار و تابستان
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            با مجموعه بهار، زیباترین و جدیدترین مدل‌های لباس زنانه را تجربه کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              مشاهده مجموعه
            </button>
            <button className="border-2 border-pink-300 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
              تخفیف‌های ویژه
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
    </section>
  )
}
