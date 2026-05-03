const items = [
  "Full Truckload",
  "Less Than Truckload",
  "Expedited Freight",
  "Specialized Cargo",
  "Supply Chain Solutions",
  "24/7 Support",
  "Coast to Coast",
  "Real-Time Tracking",
]

export function TrustedMarquee() {
  const loop = [...items, ...items, ...items]
  return (
    <section
      aria-label="Service highlights"
      className="relative py-8 bg-[#070b15] border-y border-white/10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070b15] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070b15] to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-12">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-display italic text-2xl text-white/85 tracking-tight">
              {item}
            </span>
            <span className="text-[#d4a553] text-2xl">●</span>
          </div>
        ))}
      </div>
    </section>
  )
}
