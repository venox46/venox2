"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRODUCTS_CONFIG } from "@/config/products-config"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = PRODUCTS_CONFIG.find((p) => p.id === Number.parseInt(params.id)) || PRODUCTS_CONFIG[0]
  const images = [product.image1, product.image2]

  const handleBuyNow = () => {
    // Navigate to checkout with product data
    const checkoutData = {
      product: product.name,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity,
      category: product.category,
    }

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData))
    window.location.href = "/checkout"
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur-sm border-b border-dark-600">
        <div className="container mx-auto px-4 py-4">
          <Link href="/shop" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zum Shop</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-dark-800">
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-green-500" : "border-dark-600"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-400 ml-2">(127 Bewertungen)</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-green-400">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Anzahl:</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-dark-600 text-white hover:bg-dark-500 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold text-white w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-dark-600 text-white hover:bg-dark-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleBuyNow}
                className="w-full py-4 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
                size="lg"
              >
                Jetzt kaufen - ${(product.price * quantity).toFixed(2)}
              </Button>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Favoriten
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Teilen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
