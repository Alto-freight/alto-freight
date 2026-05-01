"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "services", label: "SERVICES" },
  { href: "coverage", label: "COVERAGE" },
  { href: "why-alto", label: "WHY ALTO" },
  { href: "contact", label: "CONTACT" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ✅ FIXED: use hash instead of real routes
  const handleNavClick = (e: any, id: string) => {
    e.preventDefault()

    // update URL safely (NO 404 risk)
    window.history.pushState(null, "", `/#${id}`)

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMobileMenuOpen(false)
  }

  // ✅ handle refresh + direct link
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")

    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
        })
      }, 100)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1729]/95 backdrop-blur-sm border-b border-[#d4a553]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-28">

          {/* Logo */}
          <a href="/" className="flex items-center -ml-2">
            <Image
              src="/logo.png"
              alt="Alto Freight Network"
              width={320}
              height={110}
              className="h-24 w-auto mix-blend-lighten"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-semibold tracking-wider text-white hover:text-[#d4a553] transition-colors duration-200 bg-transparent"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="ml-4 px-6 py-2.5 bg-[#d4a553] text-[#0f1729] font-semibold text-sm tracking-wider rounded hover:bg-[#e8c478] transition-colors duration-200"
            >
              GET A QUOTE
            </button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#d4a553]/20">

            <div className="flex flex-col gap-4">

              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-semibold tracking-wider text-white hover:text-[#d4a553] transition-colors duration-200 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-2 px-6 py-2.5 bg-[#d4a553] text-[#0f1729] font-semibold text-sm tracking-wider rounded hover:bg-[#e8c478] transition-colors duration-200 text-center"
              >
                GET A QUOTE
              </button>

            </div>

          </nav>
        )}

      </div>
    </header>
  )
}