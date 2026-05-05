"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/coverage", label: "Coverage" },
  { href: "/why-alto", label: "Why Alto" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1729]/90 backdrop-blur-md border-b border-[#d4a553]/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden md:block border-b border-white/5 transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0 overflow-hidden" : "max-h-10 opacity-100"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-10 flex items-center justify-between text-[11px] text-white/60 font-mono tracking-widest">
          <span>EST. ALTO FREIGHT NETWORK · SURREY, BC</span>
          <div className="flex items-center gap-6">
            <a href="tel:2368280808" className="flex items-center gap-2 hover:text-[#d4a553] transition-colors">
              <Phone className="w-3 h-3" />
              236-828-0808
            </a>
            <a href="mailto:admin@altofreight.ca" className="flex items-center gap-2 hover:text-[#d4a553] transition-colors">
              <Mail className="w-3 h-3" />
              ADMIN@ALTOFREIGHT.CA
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Alto Freight Network"
              width={120}
              height={120}
              className={`rounded-xl transition-all duration-300 ${scrolled ? "h-12 w-12" : "h-16 w-16"}`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-white/85 hover:text-[#d4a553] transition-colors duration-200"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#d4a553] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-5 py-2.5 border border-[#d4a553]/40 text-[#d4a553] text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#d4a553] hover:text-[#0f1729] transition-all duration-300"
            >
              Get a Quote
              <span className="w-2 h-px bg-current transition-all duration-300 group-hover:w-4" />
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[#d4a553]/15">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base font-medium text-white hover:text-[#d4a553] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[#d4a553] text-[#0f1729] font-semibold text-xs tracking-[0.2em] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
