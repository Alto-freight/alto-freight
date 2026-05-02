"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const heroStats = [
  { value: "12K+", label: "Loads Delivered" },
  { value: "500+", label: "Vetted Carriers" },
  { value: "10", label: "Provinces Served" },
  { value: "24/7", label: "Dispatch Support" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#0f1729] overflow-hidden">
      {/* Background image bleeds in from the right */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <Image
          src="/images/freight-hero-1.jpg"
          alt="Cross-Canada Freight"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729] via-[#0f1729]/85 lg:via-[#0f1729]/40 to-[#0f1729]/40" />
      </div>

      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#d4a553]/10 blur-3xl animate-blob-1 z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-36 pb-20 lg:pt-44 lg:pb-28 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ animation: "fade-up 0.8s ease-out both" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#d4a553] animate-pulse-gold" />
            <span className="eyebrow text-[#d4a553]">Canadian Freight Brokerage</span>
          </div>

          <h1
            className="font-display text-white leading-[1.02] tracking-tight mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium"
            style={{ animation: "fade-up 0.9s ease-out 0.1s both" }}
          >
            Moving freight <span className="italic text-[#d4a553]">forward,</span> coast to coast.
          </h1>

          <p
            className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-10"
            style={{ animation: "fade-up 0.9s ease-out 0.3s both" }}
          >
            A Canadian freight brokerage built on relationships, reliability,
            and results. From Vancouver to Halifax, we connect shippers with
            vetted carriers — and treat every load like our own.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ animation: "fade-up 0.9s ease-out 0.45s both" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#d4a553] text-[#0f1729] text-xs font-bold tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-[#d4a553]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-white/80 hover:text-[#d4a553] text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#0a0f1a]/70 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="py-6 px-4 lg:px-6 first:pl-0 last:pr-0 flex flex-col gap-1"
                style={{ animation: `fade-up 0.7s ease-out ${0.6 + i * 0.08}s both` }}
              >
                <span className="font-display text-2xl lg:text-3xl text-white font-medium tracking-tight">
                  {stat.value}
                </span>
                <span className="eyebrow text-white/50 text-[10px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
