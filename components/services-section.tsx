"use client"

import { Truck, Package, Clock, Shield, BarChart3, Headphones, ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    icon: Truck,
    title: "FULL TRUCKLOAD (FTL)",
    description:
      "Dedicated truck capacity for your shipments. Ideal for large volumes requiring direct, expedited delivery across Canada.",
  },
  {
    icon: Package,
    title: "LESS THAN TRUCKLOAD (LTL)",
    description:
      "Cost-effective solutions for smaller shipments. Consolidate your freight with other loads to maximize efficiency and savings.",
  },
  {
    icon: Clock,
    title: "EXPEDITED FREIGHT",
    description:
      "Time-critical deliveries when every hour counts. Our network ensures your urgent shipments arrive on schedule.",
  },
  {
    icon: Shield,
    title: "SPECIALIZED CARGO",
    description:
      "Temperature-controlled, oversized, and hazmat shipping solutions. Expert handling for your most demanding freight requirements.",
  },
  {
    icon: BarChart3,
    title: "SUPPLY CHAIN SOLUTIONS",
    description:
      "End-to-end logistics management. From warehousing to distribution, we optimize your entire supply chain.",
  },
  {
    icon: Headphones,
    title: "24/7 SUPPORT",
    description:
      "Round-the-clock customer service and real-time shipment tracking. We are here whenever you need us.",
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
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4a553]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight className="w-5 h-5 text-[#0f1729]/30 group-hover:text-[#d4a553] group-hover:rotate-45 transition-all duration-500" />
      </div>

      <service.icon className="w-8 h-8 text-[#0f1729] group-hover:text-[#d4a553] transition-colors duration-500 mb-6" strokeWidth={1.4} />

      <h3 className="font-display text-xl text-[#0f1729] leading-tight mb-3 tracking-tight">
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
        <div className="mb-14">
          <p className="eyebrow text-[#d4a553] mb-4">— What We Offer</p>
          <h2 className="font-display text-[#0f1729] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            <span className="italic text-[#d4a553]">Services</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#d4a553] mt-6" />
          <p className="mt-6 text-[#0f1729]/70 max-w-2xl leading-relaxed">
            Comprehensive freight brokerage solutions tailored to meet the unique demands
            of Canadian businesses. From coast to coast, we deliver reliability.
          </p>
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
