"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [unmounted, setUnmounted] = useState(false)

  useEffect(() => {
    const hideTimer = setTimeout(() => setHidden(true), 1300)
    const removeTimer = setTimeout(() => setUnmounted(true), 2000)
    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (unmounted) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1729] transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="relative flex flex-col items-center gap-8">
        <span className="font-mono text-[10px] tracking-[0.6em] text-[#d4a553]">
          — ALTO FREIGHT NETWORK
        </span>
        <h1 className="font-display text-7xl sm:text-9xl text-white font-medium tracking-tight">
          A<span className="italic text-[#d4a553]">l</span>to
        </h1>

        <div className="relative w-72 h-px bg-white/15 overflow-hidden mt-4">
          <span
            className="absolute inset-y-0 left-0 w-1/3 bg-[#d4a553]"
            style={{ animation: "loader-bar 1.2s ease-in-out infinite" }}
          />
        </div>

        <p className="font-mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
          Coast to Coast · Since 2024
        </p>
      </div>
    </div>
  )
}
