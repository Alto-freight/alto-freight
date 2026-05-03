"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

const coreRegions = [
  {
    name: "WESTERN CANADA HUB",
    location: "British Columbia",
    description:
      "Our home base in the Lower Mainland serves as a strategic gateway for Pacific trade routes. Deep connections with carriers throughout BC ensure reliable capacity for provincial movements.",
    strengths: ["Vancouver Port Access", "Pacific Gateway", "Mountain Corridor Specialists"],
  },
  {
    name: "PRAIRIE POWERHOUSE",
    location: "Alberta",
    description:
      "Strong carrier relationships across Alberta support the energy sector, agriculture, and growing e-commerce demands. Calgary and Edmonton serve as key distribution points for Western Canada.",
    strengths: ["Energy Sector Expertise", "Agricultural Logistics", "Distribution Networks"],
  },
  {
    name: "CENTRAL CANADIAN CORE",
    location: "Ontario",
    description:
      "The industrial heart of Canada. Our Ontario network connects manufacturers with markets across the nation. The GTA serves as a crucial hub for warehousing and distribution.",
    strengths: ["Manufacturing Support", "Industrial Logistics", "GTA Distribution"],
  },
  {
    name: "EASTERN EXCELLENCE",
    location: "Quebec",
    description:
      "Strong regional partnerships ensure seamless operations throughout Quebec. Montreal acts as a vital connection point for Eastern Canada and serves major distribution centers.",
    strengths: ["Port of Montreal", "Regional Expertise", "Eastern Distribution"],
  },
]

const otherProvinces = [
  "Saskatchewan",
  "Manitoba",
  "New Brunswick",
  "Nova Scotia",
  "Prince Edward Island",
  "Newfoundland & Labrador",
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
      <ellipse cx="37" cy="33" rx="30" ry="1.3" fill="#000" opacity="0.22" />
      <rect x="2" y="4" width="40" height="22" rx="1.5" fill="url(#boxGrad)" stroke="#0a0f1a" strokeWidth="0.9" />
      <rect x="2.5" y="4.5" width="39" height="3" rx="1" fill="#0a0f1a" opacity="0.25" />
      <g stroke="#0a0f1a" strokeOpacity="0.15" strokeWidth="0.4">
        <line x1="12" y1="8" x2="12" y2="25" />
        <line x1="32" y1="8" x2="32" y2="25" />
      </g>
      <text x="22" y="18.5" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="6.5" fill="#0a0f1a" opacity="0.72" letterSpacing="1.2">ALTO</text>
      <path d="M 42 26 L 42 9 L 54 9 L 62 13 L 66 15 L 68 17 L 68 26 Z" fill="url(#cabGrad)" stroke="#0a0f1a" strokeWidth="0.9" strokeLinejoin="round" />
      <path d="M 43.5 10.5 L 53 10.5 L 60 14 L 43.5 14 Z" fill="url(#windowGrad)" />
      <path d="M 43.5 10.5 L 46 10.5 L 45 14 L 43.5 14 Z" fill="#fff" opacity="0.22" />
      <rect x="44" y="15.5" width="6" height="4" rx="0.3" fill="url(#windowGrad)" opacity="0.85" />
      <line x1="54" y1="15" x2="54" y2="26" stroke="#0a0f1a" strokeOpacity="0.4" strokeWidth="0.5" />
      <line x1="56" y1="20.5" x2="57" y2="20.5" stroke="#0a0f1a" strokeOpacity="0.55" strokeWidth="0.7" />
      <rect x="54.5" y="11" width="2" height="3" fill="#0a0f1a" opacity="0.7" rx="0.3" />
      <ellipse cx="66" cy="19" rx="1.1" ry="0.9" fill="#fff8d9" stroke="#0a0f1a" strokeWidth="0.3" />
      <rect x="63" y="22.5" width="5" height="3" fill="#1a2235" rx="0.4" />
      {[11, 19, 46, 56].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="29" r="3.5" fill="#0a0f1a" />
          <circle cx={cx} cy="29" r="3.5" fill="none" stroke="#1a2235" strokeWidth="0.4" />
          <circle cx={cx} cy="29" r="2" fill="#2a3349" />
          <circle cx={cx} cy="29" r="0.7" fill="#d4a553" />
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
      <span aria-hidden="true" className="block w-2.5 h-2.5 rounded-full bg-[#d4a553] ring-[3px] ring-[#0a0f1a]" />
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
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#d4a553]/10 rounded-lg flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6 text-[#d4a553]" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-[#d4a553] text-sm font-semibold tracking-wider">
            {region.location}
          </p>
          <h3 className="font-display text-xl text-white tracking-tight group-hover:text-[#d4a553] transition-colors duration-500">
            {region.name}
          </h3>
        </div>
      </div>
      <p className="text-white/65 leading-relaxed mb-6">{region.description}</p>
      <div className="flex flex-wrap gap-2">
        {region.strengths.map((s, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-[#d4a553]/10 text-[#d4a553] text-xs rounded-full font-medium"
          >
            {s}
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
        <div className="mb-14 lg:text-right">
          <p className="eyebrow text-[#d4a553] mb-4">— Our Network</p>
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            <span className="italic text-[#d4a553]">Coverage</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#d4a553] mt-6 lg:ml-auto" />
          <p className="mt-6 text-white/65 leading-relaxed lg:max-w-2xl lg:ml-auto">
            Coast-to-coast capabilities with regional expertise. We move freight
            across all of Canada with particularly strong capacity in our core regions.
          </p>
        </div>

        {/* Banner with curve, city markers, animated truck */}
        <div className="relative mb-14 rounded-sm overflow-hidden border border-white/10">
          <Image
            src="/images/freight-hero-2.jpg"
            alt="Cross-Canada Freight Coverage"
            width={1400}
            height={400}
            className="w-full h-72 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729] via-[#0f1729]/60 to-transparent" />

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

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <CityMarker label="Vancouver" leftPct={8} topPct={56} />
            <CityMarker label="Calgary" leftPct={28} topPct={47} />
            <CityMarker label="Toronto" leftPct={60} topPct={45} />
            <CityMarker label="Halifax" leftPct={90} topPct={56} />
          </div>

          <div className="hidden md:block absolute pointer-events-none truck-on-route" aria-hidden="true">
            <RefinedTruck />
          </div>

          <div className="absolute bottom-0 left-0 p-8 lg:p-10 max-w-xl">
            <h3 className="font-display text-white text-2xl lg:text-3xl tracking-tight">
              CROSS-CANADA <span className="italic text-[#d4a553]">Coverage</span>
            </h3>
            <p className="text-white/75 mt-3 leading-snug">
              From Vancouver to Halifax, our network spans the entire nation.
              Reliable freight solutions wherever your business needs them.
            </p>
          </div>
        </div>

        {/* Core Regional Cards */}
        <div className="mb-12">
          <p className="eyebrow text-[#d4a553] mb-6">— Core Regions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreRegions.map((region, i) => (
              <RegionCard key={i} region={region} index={i} />
            ))}
          </div>
        </div>

        {/* Other Provinces */}
        <div className="bg-[#1a2235] border border-white/10 p-8">
          <p className="eyebrow text-white/50 mb-4">— Also Serving</p>
          <div className="flex flex-wrap gap-3">
            {otherProvinces.map((province, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#0f1729] border border-white/10 rounded-lg text-white/70 text-sm font-medium hover:border-[#d4a553]/40 hover:text-white transition-colors duration-200"
              >
                {province}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
