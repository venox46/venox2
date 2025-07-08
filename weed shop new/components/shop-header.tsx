"use client"

import Link from "next/link"
import { ArrowLeft, Search, Filter } from "lucide-react"
import { CartIcon } from "./cart-icon"
import { Button } from "@/components/ui/button"

export function ShopHeader() {
  return (
    <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur-sm border-b border-dark-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          {/* Brand Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            CLAY GROUP
          </div>

          {/* Search and Filter */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none w-64"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  )
}
