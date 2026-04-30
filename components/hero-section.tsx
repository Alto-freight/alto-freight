"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/90 via-[#0f1729]/70 to-[#0f1729]/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4a553] mb-6 leading-tight">
                {slides[currentSlide].subtitle}
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d4a553] text-[#0f1729] font-semibold text-sm tracking-wider rounded hover:bg-[#e8c478] transition-colors duration-200"
              >
                REQUEST A QUOTE
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider rounded hover:bg-white hover:text-[#0f1729] transition-colors duration-200"
              >
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#0f1729]/50 hover:bg-[#d4a553] text-white hover:text-[#0f1729] rounded-full transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#0f1729]/50 hover:bg-[#d4a553] text-white hover:text-[#0f1729] rounded-full transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#d4a553] w-8"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
