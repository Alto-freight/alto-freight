"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#services", label: "SERVICES" },
  { href: "#coverage", label: "COVERAGE" },
  { href: "#why-alto", label: "WHY ALTO" },
  { href: "#contact", label: "CONTACT" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1729]/95 backdrop-blur-sm border-b border-[#d4a553]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Alto Freight Network"
              width={280}
              height={100}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Right Aligned */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-wider text-white hover:text-[#d4a553] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-[#d4a553] text-[#0f1729] font-semibold text-sm tracking-wider rounded hover:bg-[#e8c478] transition-colors duration-200"
            >
              GET A QUOTE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#d4a553]/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold tracking-wider text-white hover:text-[#d4a553] transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 px-6 py-2.5 bg-[#d4a553] text-[#0f1729] font-semibold text-sm tracking-wider rounded hover:bg-[#e8c478] transition-colors duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET A QUOTE
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
