"use client"

import { CheckCircle, TrendingUp, Users, Award, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

const reasons = [
  {
    icon: Users,
    title: "CARRIER RELATIONSHIPS",
    description:
      "Deep-rooted partnerships with vetted carriers across Canada ensure reliable capacity even during peak seasons.",
  },
  {
    icon: TrendingUp,
    title: "COMPETITIVE RATES",
    description:
      "Our network volume allows us to negotiate better rates, savings we pass directly to our customers.",
  },
  {
    icon: Zap,
    title: "FAST RESPONSE",
    description:
      "Quick quotes and rapid load matching. Our team responds promptly because we know time is money in freight.",
  },
  {
    icon: Award,
    title: "INDUSTRY EXPERTISE",
    description:
      "Years of experience in Canadian logistics means we understand the unique challenges of moving freight in this country.",
  },
  {
    icon: Globe,
    title: "TECHNOLOGY DRIVEN",
    description:
      "Modern systems for tracking, communication, and documentation keep you informed every step of the way.",
  },
  {
    icon: CheckCircle,
    title: "RELIABILITY FIRST",
    description:
      "We stand behind our commitments. When we say your freight will arrive, it will arrive.",
  },
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
      className={`reveal ${visible ? "is-visible" : ""} group flex gap-4`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 shrink-0 bg-[#0f1729] group-hover:bg-[#d4a553] rounded-lg flex items-center justify-center transition-colors duration-500">
        <reason.icon className="w-5 h-5 text-[#d4a553] group-hover:text-[#0f1729] transition-colors duration-500" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-display text-lg text-[#0f1729] tracking-tight mb-1">
          {reason.title}
        </h4>
        <p className="text-[#0f1729]/65 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </div>
  )
}

export function WhyAltoSection() {
  return (
    <section id="why-alto" className="py-24 lg:py-28 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14">
          <p className="eyebrow text-[#d4a553] mb-4">— The Alto Advantage</p>
          <h2 className="font-display text-[#0f1729] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Why <span className="italic text-[#d4a553]">Alto</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#d4a553] mt-6" />
          <p className="mt-6 text-[#0f1729]/70 max-w-2xl leading-relaxed">
            Choosing the right freight partner impacts your bottom line. Here is why
            businesses across Canada trust Alto Freight Network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <div className="relative rounded-sm overflow-hidden border border-[#0f1729]/10 min-h-[400px]">
            <Image
              src="/images/freight-hero-3.jpg"
              alt="Alto Freight Network Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/85 via-[#0f1729]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl text-white tracking-tight">
                YOUR CARGO, <span className="italic text-[#d4a553]">OUR PRIORITY</span>
              </h3>
              <p className="text-white/80 mt-3 leading-relaxed">
                Every shipment matters. We treat your freight as if it were our own.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <ReasonItem key={i} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
