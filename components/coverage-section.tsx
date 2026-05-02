"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

const coreRegions = [
  {
    code: "BC",
    name: "Western Canada Hub",
    location: "British Columbia",
    description: "A strategic Pacific gateway with deep carrier relationships across BC and the mountain corridor.",
    strengths: ["Vancouver Port", "Pacific Gateway", "Mountain Corridor"],
  },
  {
    code: "AB",
    name: "Prairie Powerhouse",
    location: "Alberta",
    description: "Carrier networks built around energy, agriculture, and the Calgary–Edmonton distribution backbone.",
    strengths: ["Energy Sector", "Agricultural Logistics", "Distribution"],
  },
  {
    code: "ON",
    name: "Central Canadian Core",
    location: "Ontario",
    description: "Manufacturing and GTA distribution support — the industrial spine of Canadian freight.",
    strengths: ["Manufacturing", "GTA Distribution", "Industrial"],
  },
  {
    code: "QC",
    name: "Eastern Excellence",
    location: "Quebec",
    description: "Montreal-anchored partnerships connecting Eastern Canada and major distribution centres.",
    strengths: ["Port of Montreal", "Regional", "Eastern Distribution"],
  },
]

const otherProvinces = [
  "Saskatchewan", "Manitoba", "New Brunswick", "Nova Scotia", "P.E.I.", "Newfoundland & Labrador",
]

function RefinedTruck() {
  return (
    <svg width="74" height="36" viewBox="0 0 74 36" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0d4a0" />
          <stop offset="100%" stopColor="#c89544" />
        </linearGradient>
        <linearGradient id="cabGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8c478" />
          <stop offset="100%" stopColor="#bf8a3b" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d1525" />
          <stop offset="100%" stopColor="#2a3349" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="37" cy="33" rx="30" ry="1.3" fill="#000" opacity="0.22" />

      {/* Cargo box body */}
      <rect x="2" y="4" width="40" height="22" rx="1.5" fill="url(#boxGrad)" stroke="#0a0f1a" strokeWidth="0.9" />

      {/* Top dark accent */}
      <rect x="2.5" y="4.5" width="39" height="3" rx="1" fill="#0a0f1a" opacity="0.25" />

      {/* Subtle panel lines on box */}
      <g stroke="#0a0f1a" strokeOpacity="0.15" strokeWidth="0.4">
        <line x1="12" y1="8" x2="12" y2="25" />
        <line x1="32" y1="8" x2="32" y2="25" />
      </g>

      {/* ALTO wordmark on box side */}
      <text
        x="22"
        y="18.5"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="6.5"
        fill="#0a0f1a"
        opacity="0.72"
        letterSpacing="1.2"
      >
        ALTO
      </text>

      {/* Cab body — sloped front windshield */}
      <path
        d="M 42 26 L 42 9 L 54 9 L 62 13 L 66 15 L 68 17 L 68 26 Z"
        fill="url(#cabGrad)"
        stroke="#0a0f1a"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />

      {/* Windshield */}
      <path d="M 43.5 10.5 L 53 10.5 L 60 14 L 43.5 14 Z" fill="url(#windowGrad)" />
      {/* Windshield highlight */}
      <path d="M 43.5 10.5 L 46 10.5 L 45 14 L 43.5 14 Z" fill="#fff" opacity="0.22" />

      {/* Side cab window */}
      <rect x="44" y="15.5" width="6" height="4" rx="0.3" fill="url(#windowGrad)" opacity="0.85" />

      {/* Door division */}
      <line x1="54" y1="15" x2="54" y2="26" stroke="#0a0f1a" strokeOpacity="0.4" strokeWidth="0.5" />

      {/* Door handle */}
      <line x1="56" y1="20.5" x2="57" y2="20.5" stroke="#0a0f1a" strokeOpacity="0.55" strokeWidth="0.7" />

      {/* Side mirror */}
      <rect x="54.5" y="11" width="2" height="3" fill="#0a0f1a" opacity="0.7" rx="0.3" />

      {/* Headlight */}
      <ellipse cx="66" cy="19" rx="1.1" ry="0.9" fill="#fff8d9" stroke="#0a0f1a" strokeWidth="0.3" />

      {/* Front bumper */}
      <rect x="63" y="22.5" width="5" height="3" fill="#1a2235" rx="0.4" />

      {/* Wheels — tandem rear axle (×2) + front under cab door */}
      {[11, 19, 46, 56].map((cx) => (
        <g key={cx}>
          {/* Tire */}
          <circle cx={cx} cy="29" r="3.5" fill="#0a0f1a" />
          {/* Outer rim ring */}
          <circle cx={cx} cy="29" r="3.5" fill="none" stroke="#1a2235" strokeWidth="0.4" />
          {/* Hubcap */}
          <circle cx={cx} cy="29" r="2" fill="#2a3349" />
          {/* Center bolt */}
          <circle cx={cx} cy="29" r="0.7" fill="#d4a553" />
          {/* Spoke detail */}
          <line x1={cx} y1={29 - 1.4} x2={cx} y2={29 + 1.4} stroke="#0a0f1a" strokeWidth="0.3" />
          <line x1={cx - 1.4} y1="29" x2={cx + 1.4} y2="29" stroke="#0a0f1a" strokeWidth="0.3" />
        </g>
      ))}
    </svg>
  )
}

function CityMarker({
  label,
  leftPct,
  topPct,
}: {
  label: string
  leftPct: number
  topPct: number
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
    >
      <span
        aria-hidden="true"
        className="block w-2.5 h-2.5 rounded-full bg-[#d4a553] ring-[3px] ring-[#0a0f1a]"
      />
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 font-mono text-[10px] tracking-[0.3em] text-white/90 uppercase whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

function RegionCard({
  region,
  index,
}: {
  region: (typeof coreRegions)[number]
  index: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group bg-[#1a2235] border border-white/10 hover:border-[#d4a553]/40 hover:-translate-y-1 transition-all duration-500 p-8`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#d4a553]" strokeWidth={1.5} />
          <span className="font-mono text-xs tracking-widest text-[#d4a553]">{region.code}</span>
        </div>
        <span className="eyebrow text-white/40">{region.location}</span>
      </div>
      <h3 className="font-display text-2xl text-white tracking-tight mb-4 group-hover:text-[#d4a553] transition-colors duration-500">
        {region.name}
      </h3>
      <p className="text-white/65 text-sm leading-relaxed mb-6">{region.description}</p>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
        {region.strengths.map((s, i) => (
          <span
            key={i}
            className="text-[10px] font-mono tracking-widest uppercase text-white/60"
          >
            {s}{i < region.strengths.length - 1 ? <span className="text-[#d4a553] mx-2">·</span> : null}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CoverageSection() {
  return (
    <section id="coverage" className="py-24 lg:py-28 bg-[#0f1729]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14">
          <p className="eyebrow text-[#d4a553] mb-4">— Our Network</p>
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            From Pacific to <span className="italic text-[#d4a553]">Atlantic.</span>
          </h2>
        </div>

        {/* Banner with route line, city markers, animated truck, and caption */}
        <div className="relative mb-14 rounded-sm overflow-hidden border border-white/10">
          <Image
            src="/images/freight-hero-2.jpg"
            alt="Cross-Canada Coverage"
            width={1400}
            height={400}
            className="w-full h-72 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729] via-[#0f1729]/60 to-transparent" />

          {/* Route line */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full hidden md:block"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              id="alto-route"
              d="M 8 28 Q 50 16 90 28"
              fill="none"
              stroke="#d4a553"
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: "draw-route 2.5s ease-out 0.4s forwards",
                opacity: 0.6,
              }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* City markers (labels above dots) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <CityMarker label="Vancouver" leftPct={8} topPct={56} />
            <CityMarker label="Calgary" leftPct={28} topPct={47} />
            <CityMarker label="Toronto" leftPct={60} topPct={45} />
            <CityMarker label="Halifax" leftPct={90} topPct={56} />
          </div>

          {/* Refined truck driving the curve */}
          <div className="hidden md:block absolute pointer-events-none truck-on-route" aria-hidden="true">
            <RefinedTruck />
          </div>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 p-8 lg:p-10 max-w-xl">
            <p className="font-display italic text-xl lg:text-2xl text-white leading-snug">
              Coast-to-coast capability anchored by deep regional expertise.
            </p>
            <p className="eyebrow text-[#d4a553] mt-3">
              — Four hubs · Ten provinces · One network
            </p>
          </div>
        </div>

        {/* Region cards */}
        <div className="mb-12">
          <p className="eyebrow text-[#d4a553] mb-6">— Core Regions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreRegions.map((region, i) => (
              <RegionCard key={i} region={region} index={i} />
            ))}
          </div>
        </div>

        {/* Also serving */}
        <div className="bg-[#1a2235] border border-white/10 p-8">
          <p className="eyebrow text-white/50 mb-4">— Also Serving</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {otherProvinces.map((p, i) => (
              <span key={i} className="font-display text-lg text-white/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
