"use client"

import { AnimatedCounter } from "./animated-counter"

const stats = [
  { value: 12000, suffix: "+", label: "Loads Delivered", note: "Since launch" },
  { value: 500, suffix: "+", label: "Vetted Carriers", note: "Coast to coast" },
  { value: 98, suffix: "%", label: "On-Time Rate", note: "Last 12 months" },
  { value: 24, suffix: "/7", label: "Dispatch Support", note: "Always on" },
]

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-28 bg-[#0a0f1a] overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#d4a553] mb-4">— By the Numbers</p>
            <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              A track record measured in <span className="italic text-[#d4a553]">trust.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-white/65 leading-relaxed">
              Every metric reflects relationships built load by load.
              We don't chase volume — we earn it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0a0f1a] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="font-display text-white text-4xl lg:text-5xl font-medium leading-none mb-5 tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white text-sm font-semibold tracking-wide mb-1">{stat.label}</p>
              <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
