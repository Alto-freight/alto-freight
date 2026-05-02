"use client"

import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    title: "Request",
    description: "Send your shipment details — origin, destination, cargo type, timeline. We reply in minutes.",
  },
  {
    number: "02",
    title: "Match",
    description: "We tap our vetted carrier network for the right rig, the right driver, and the right rate.",
  },
  {
    number: "03",
    title: "Move",
    description: "Real-time tracking and proactive dispatch keep your freight visible every mile.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Proof of delivery, transit recap, and a single point of accountability.",
  },
]

function Step({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} relative bg-white border border-[#0f1729]/10 hover:border-[#d4a553]/50 hover:-translate-y-1 transition-all duration-500 p-8`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-baseline justify-between mb-8">
        <span className="font-display text-5xl text-[#0f1729]/15">{step.number}</span>
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4a553]">STEP</span>
      </div>
      <h3 className="font-display text-2xl text-[#0f1729] tracking-tight mb-3">
        {step.title}
      </h3>
      <p className="text-[#0f1729]/65 text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#d4a553] mb-4">— How We Work</p>
            <h2 className="font-display text-[#0f1729] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              From quote to <span className="italic text-[#d4a553]">delivery,</span> in four steps.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[#0f1729]/70 leading-relaxed">
              A streamlined workflow refined over thousands of loads. No
              broker chains, no surprise fees — just reliable freight in motion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
