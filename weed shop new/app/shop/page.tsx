import { ProductCard } from "@/components/product-card"
import { ShopHeader } from "@/components/shop-header"
import { PRODUCTS_CONFIG } from "@/config/products-config"
import { SHOP_CONFIG } from "@/config/shop-config"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <ShopHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
            PREMIUM COLLECTION
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{SHOP_CONFIG.hero.subtitle}</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            {SHOP_CONFIG.hero.features.map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS_CONFIG.map((product, index) => (
              <div
                key={product.id}
                className="transform hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-600 to-dark-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{SHOP_CONFIG.newsletter.title}</h2>
          <p className="text-gray-300 mb-8">{SHOP_CONFIG.newsletter.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail Adresse"
              className="flex-1 px-4 py-3 rounded-lg bg-dark-400 text-white placeholder-gray-400 border border-dark-300 focus:border-green-500 focus:outline-none"
            />
            <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
