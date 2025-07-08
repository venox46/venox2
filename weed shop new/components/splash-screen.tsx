"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    let interval: NodeJS.Timeout

    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
        CLAY GROUP
      </div>

      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6">{`LOADING_SYSTEM: ${matrixText}`}</div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>

      {/* Made by Venox */}
      <div className="absolute bottom-8 text-center">
        <div className="text-gray-400 text-sm mb-1">Made by</div>
        <div className="text-green-400 font-bold text-lg tracking-wider">VENOX</div>
      </div>
    </div>
  )
}
