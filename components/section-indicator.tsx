"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", path: "/", label: "Home" },
  { id: "services", path: "/services", label: "Services" },
  { id: "coverage", path: "/coverage", label: "Coverage" },
  { id: "why-alto", path: "/why-alto", label: "Why Alto" },
  { id: "contact", path: "/contact", label: "Contact" },
]

export function SectionIndicator() {
  const [active, setActive] = useState<string>("hero")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: "-30% 0px -50% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-5 lg:right-7 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5"
    >
      {sections.map(({ id, path, label }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={path}
            aria-label={`Go to ${label}`}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center justify-end gap-3"
          >
            <span
              className={`font-mono text-xs tracking-[0.3em] uppercase font-semibold transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-[#d4a553]"
                  : "opacity-0 group-hover:opacity-100 text-[#d4a553]/70"
              }`}
            >
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-[#d4a553] ring-2 ring-[#d4a553]/30 ring-offset-0"
                  : "w-2 h-2 bg-[#d4a553]/40 group-hover:bg-[#d4a553]/80 group-hover:w-2.5 group-hover:h-2.5"
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
