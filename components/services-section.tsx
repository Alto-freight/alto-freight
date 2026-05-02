"use client"

import { Truck, Package, Clock, Shield, BarChart3, Headphones, ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    icon: Truck,
    title: "Full Truckload",
    short: "FTL",
    description: "Dedicated capacity for high-volume shipments requiring direct, expedited delivery across Canada.",
  },
  {
    icon: Package,
    title: "Less Than Truckload",
    short: "LTL",
    description: "Cost-effective consolidation — pay only for the space you use.",
  },
  {
    icon: Clock,
    title: "Expedited Freight",
    short: "EXP",
    description: "Time-critical deliveries when every hour counts.",
  },
  {
    icon: Shield,
    title: "Specialized Cargo",
    short: "SPEC",
    description: "Temperature-controlled, oversized, and hazmat shipping handled by experts.",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Solutions",
    short: "SCM",
    description: "End-to-end logistics — warehousing, distribution, and optimization.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    short: "OPS",
    description: "Real-time tracking and round-the-clock dispatch.",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group relative bg-white border border-[#0f1729]/10 hover:border-[#0f1729]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0f1729]/5 p-8 flex flex-col`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4a553]">{service.short}</span>
        <ArrowUpRight className="w-5 h-5 text-[#0f1729]/30 group-hover:text-[#d4a553] group-hover:rotate-45 transition-all duration-500" />
      </div>

      <service.icon className="w-8 h-8 text-[#0f1729] group-hover:text-[#d4a553] transition-colors duration-500 mb-6" strokeWidth={1.4} />

      <h3 className="font-display text-2xl text-[#0f1729] leading-tight mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-[#0f1729]/65 text-sm leading-relaxed">
        {service.description}
      </p>

      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a553] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </article>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-28 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#d4a553] mb-4">— What We Offer</p>
            <h2 className="font-display text-[#0f1729] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Built for the way <span className="italic text-[#d4a553]">Canada moves.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[#0f1729]/70 leading-relaxed">
              Six dedicated services engineered for Canadian shippers — from
              flatbed runs across the Rockies to white-glove reefer transport
              between distribution centres.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
