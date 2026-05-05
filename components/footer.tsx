import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#070b15]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-10">
        {/* CTA panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#d4a553] mb-4">— Ready to Ship</p>
            <h3 className="font-display text-white text-3xl lg:text-4xl leading-tight tracking-tight">
              Move freight with a partner who <span className="italic text-[#d4a553]">treats it like their own.</span>
            </h3>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end space-y-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 text-white text-xs font-bold tracking-[0.25em] uppercase hover:text-[#d4a553] transition-colors duration-300"
            >
              <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
              Request a Quote
            </a>
            <a
              href="tel:2368280808"
              className="block font-display text-2xl lg:text-3xl text-white hover:text-[#d4a553] transition-colors duration-300"
            >
              236-828-0808
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Alto Freight Network"
              width={120}
              height={120}
              className="h-20 w-20 mb-6"
            />
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
              Your trusted partner for cross-Canada freight brokerage —
              built on relationships, run with reliability.
            </p>
          </div>

          <div>
            <p className="eyebrow text-[#d4a553] mb-5">— Navigate</p>
            <ul className="space-y-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/coverage", label: "Coverage" },
                { href: "/why-alto", label: "Why Alto" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-[#d4a553] transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[#d4a553] mb-5">— Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#d4a553] mt-0.5 shrink-0" strokeWidth={1.5} />
                <a href="mailto:admin@altofreight.ca" className="hover:text-[#d4a553] transition-colors">admin@altofreight.ca</a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-[#d4a553] mt-0.5 shrink-0" strokeWidth={1.5} />
                <a href="tel:2368280808" className="hover:text-[#d4a553] transition-colors">236-828-0808</a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#d4a553] mt-0.5 shrink-0" strokeWidth={1.5} />
                <span>13137 82A Ave<br />Surrey, BC V3W 9Y6</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-8 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
            © {currentYear} Alto Freight Network · All Rights Reserved
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
            Surrey, BC · Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
