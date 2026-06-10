"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0f1729] transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <style>{`
        @keyframes fade-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-fade-pulse {
          animation: fade-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center gap-12">
        {/* Logo container */}
        <div className="relative flex items-center justify-center">
          {/* Logo with fade pulse */}
          <Image
            src="/Logo1.jpeg"
            alt="Alto Freight Network"
            width={180}
            height={180}
            className="h-44 w-44 animate-fade-pulse"
            priority
          />
        </div>

        {/* Minimal loading indicator */}
        <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#d4a553] rounded-full"
            style={{ animation: "loader-bar 1.2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  )
}
