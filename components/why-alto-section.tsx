"use client"

import { CheckCircle, TrendingUp, Users, Award, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

const reasons = [
  { icon: Users, title: "Carrier Relationships", description: "Deep partnerships with vetted carriers across Canada ensure reliable capacity in every season." },
  { icon: TrendingUp, title: "Competitive Rates", description: "Our network volume secures better rates — savings we pass directly to our customers." },
  { icon: Zap, title: "Fast Response", description: "Quick quotes and rapid load matching. We respond promptly because time is money." },
  { icon: Award, title: "Industry Expertise", description: "Years of Canadian logistics experience means we understand the unique challenges of this country." },
  { icon: Globe, title: "Technology Driven", description: "Modern systems for tracking, communication, and documentation keep you informed every mile." },
  { icon: CheckCircle, title: "Reliability First", description: "We stand behind our commitments. When we say your freight will arrive — it will arrive." },
]

function ReasonItem({
  reason,
  index,
}: {
  reason: (typeof reasons)[number]
  index: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex gap-5 p-6 rounded-sm hover:bg-white/[0.03] transition-colors duration-500`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#d4a553]/10 group-hover:bg-[#d4a553] transition-colors duration-500 rounded-sm">
        <reason.icon className="w-5 h-5 text-[#d4a553] group-hover:text-[#0f1729] transition-colors duration-500" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-display text-xl text-white tracking-tight mb-2">
          {reason.title}
        </h4>
        <p className="text-white/65 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </div>
  )
}

export function WhyAltoSection() {
  return (
    <section id="why-alto" className="relative py-24 lg:py-28 bg-[#0f1729] overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-[#d4a553]/8 blur-3xl animate-blob-2" />

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#d4a553] mb-6">— The Alto Advantage</p>
            <blockquote className="font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
              "We don't move boxes. <span className="italic text-[#d4a553]">We move livelihoods —</span> freight that keeps Canadian businesses running."
            </blockquote>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10 max-w-md">
              <div className="w-px h-10 bg-[#d4a553]" />
              <div>
                <p className="text-white text-sm font-semibold tracking-wider">ALTO FREIGHT NETWORK</p>
                <p className="eyebrow text-white/50">— Founding Principle</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
              <Image
                src="/images/freight-hero-3.jpg"
                alt="Alto operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="eyebrow text-[#d4a553] mb-2">— On the Road</p>
                <p className="font-display text-white text-xl italic">Your cargo. Our priority.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow text-[#d4a553] mb-6">— Why Choose Alto</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, i) => (
              <ReasonItem key={i} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
