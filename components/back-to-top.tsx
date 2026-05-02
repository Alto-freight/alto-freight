"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 group inline-flex items-center gap-3 px-5 py-3 bg-[#0f1729] text-white border border-[#d4a553]/40 hover:bg-[#d4a553] hover:text-[#0f1729] transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2} />
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Top</span>
    </button>
  )
}
