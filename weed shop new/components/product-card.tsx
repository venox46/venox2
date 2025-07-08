"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image1: string
  image2: string
  category: string
}

export function ProductCard({ id, name, price, image1, image2, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-green-500 transition-all duration-300 hover-glow">
      <Link href={`/shop/${id}`}>
        <div
          className="relative aspect-square overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? image2 : image1}
            alt={name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-green-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">{name}</h3>
        <p className="text-2xl font-bold text-white mb-4">${price.toFixed(2)}</p>
        <Link href={`/shop/${id}`}>
          <Button className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold transition-all duration-300 transform group-hover:scale-105">
            Details ansehen
          </Button>
        </Link>
      </div>
    </div>
  )
}
