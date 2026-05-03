"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    image: "/images/freight-hero-1.jpg",
    title: "DELIVERING EXCELLENCE",
    subtitle: "ACROSS CANADA",
    description: "Your trusted freight brokerage partner connecting businesses coast to coast",
  },
  {
    image: "/images/freight-hero-2.jpg",
    title: "SEAMLESS LOGISTICS",
    subtitle: "SOLUTIONS",
    description: "Strategic distribution networks ensuring your cargo reaches its destination on time",
  },
  {
    image: "/images/freight-hero-3.jpg",
    title: "RELIABILITY YOU",
    subtitle: "CAN COUNT ON",
    description: "A fleet of trusted carriers standing ready to move your freight",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const parallaxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Subtle scroll-driven parallax on the image inside the card.
  useEffect(() => {
    let raf = 0
    const apply = () => {
      const el = parallaxRef.current
      if (!el) return
      const y = Math.max(0, window.scrollY)
      const t = Math.min(y / window.innerHeight, 1)
      const scale = 1.08 - 0.08 * t
      el.style.transform = `scale(${scale.toFixed(3)})`
      raf = 0
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(apply)
    }
    apply()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#0f1729] overflow-hidden flex items-center pt-28 pb-12 lg:pt-32 lg:pb-16"
    >
      {/* Ambient background blobs (sit outside the framed hero card) */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#d4a553]/12 blur-3xl animate-blob-1 z-0" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#d4a553]/8 blur-3xl animate-blob-2 z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        {/* Framed hero card */}
        <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/50 min-h-[78vh] lg:min-h-[80vh] flex">
          {/* Image carousel inside the card */}
          <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 1600px) 1500px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Readability gradient — strong on the left where text lives */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 via-[#0f1729]/70 to-[#0f1729]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/60 via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 w-full">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-3 mb-8"
                style={{ animation: "fade-up 0.8s ease-out both" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#d4a553] animate-pulse-gold" />
                <span className="eyebrow text-[#d4a553]">Canadian Freight Brokerage</span>
              </div>

              <h1
                key={`t-${currentSlide}`}
                className="font-display text-white leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-2"
                style={{ animation: "fade-up 0.7s ease-out both" }}
              >
                {slides[currentSlide].title}
              </h1>
              <h2
                key={`s-${currentSlide}`}
                className="font-display italic text-[#d4a553] leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8"
                style={{ animation: "fade-up 0.7s ease-out 0.15s both" }}
              >
                {slides[currentSlide].subtitle}
              </h2>

              <p
                key={`d-${currentSlide}`}
                className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed mb-10"
                style={{ animation: "fade-up 0.7s ease-out 0.3s both" }}
              >
                {slides[currentSlide].description}
              </p>

              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
                style={{ animation: "fade-up 0.7s ease-out 0.45s both" }}
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#d4a553] text-[#0f1729] text-xs font-bold tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-[#d4a553]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="group inline-flex items-center gap-3 text-white/80 hover:text-[#d4a553] text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                  Our Services
                </a>
              </div>
            </div>
          </div>

          {/* Slide counter (top-right of the frame) */}
          <div className="absolute top-5 right-5 z-10">
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/90 uppercase bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
              {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Carousel arrows (bottom-right) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute bottom-5 right-16 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#d4a553] text-white hover:text-[#0f1729] backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute bottom-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#d4a553] text-white hover:text-[#0f1729] backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicator dashes (bottom-left) */}
          <div className="absolute bottom-7 left-6 sm:left-10 lg:left-16 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-[#d4a553] w-12"
                    : "bg-white/30 hover:bg-white/60 w-6"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
