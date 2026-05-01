import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1a2235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Alto Freight Network"
              width={180}
              height={70}
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Alto Freight Network is your trusted partner for freight brokerage 
              across Canada. With strong regional capacities and a commitment to 
              excellence, we connect shippers with reliable carriers coast to coast.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-[#d4a553]/10 text-[#d4a553] text-sm rounded-full font-medium">
                Licensed Broker
              </span>
              <span className="px-3 py-1 bg-[#d4a553]/10 text-[#d4a553] text-sm rounded-full font-medium">
                Bonded & Insured
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">QUICK LINKS</h4>
            <nav className="space-y-3">
              <Link
                href="#services"
                className="block text-gray-400 hover:text-[#d4a553] transition-colors"
              >
                Services
              </Link>
              <Link
                href="#coverage"
                className="block text-gray-400 hover:text-[#d4a553] transition-colors"
              >
                Coverage
              </Link>
              <Link
                href="#why-alto"
                className="block text-gray-400 hover:text-[#d4a553] transition-colors"
              >
                Why Alto
              </Link>
              <Link
                href="#contact"
                className="block text-gray-400 hover:text-[#d4a553] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#contact"
                className="block text-gray-400 hover:text-[#d4a553] transition-colors"
              >
                Request a Quote
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">CONTACT US</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4a553] mt-0.5 shrink-0" />
                <a
                  href="mailto:admin@altofreight.ca"
                  className="text-gray-400 hover:text-[#d4a553] transition-colors"
                >
                  admin@altofreight.ca
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4a553] mt-0.5 shrink-0" />
                <a
                  href="tel:2368280808"
                  className="text-gray-400 hover:text-[#d4a553] transition-colors"
                >
                  236-828-0808
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a553] mt-0.5 shrink-0" />
                <span className="text-gray-400">
                  13137 82A Ave<br />
                  Surrey, BC V3W 9Y6
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1a2235]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Alto Freight Network. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-[#d4a553] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#d4a553] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
