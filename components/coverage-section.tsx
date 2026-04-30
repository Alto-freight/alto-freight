import { MapPin } from "lucide-react"
import Image from "next/image"

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

export function CoverageSection() {
  return (
    <section id="coverage" className="py-24 bg-[#0f1729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Right Aligned */}
        <div className="mb-16 text-right">
          <p className="text-[#d4a553] font-semibold tracking-wider mb-2">OUR NETWORK</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            COVERAGE
          </h2>
          <div className="w-24 h-1 bg-[#d4a553] ml-auto" />
          <p className="mt-6 text-gray-300 max-w-2xl ml-auto text-lg">
            Coast-to-coast capabilities with regional expertise. We move freight 
            across all of Canada with particularly strong capacity in our core regions.
          </p>
        </div>

        {/* Canada-Wide Banner */}
        <div className="relative mb-16 rounded-xl overflow-hidden">
          <Image
            src="/images/freight-hero-2.jpg"
            alt="Cross-Canada Freight Coverage"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 to-[#0f1729]/70 flex items-center">
            <div className="px-8 sm:px-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                CROSS-CANADA <span className="text-[#d4a553]">COVERAGE</span>
              </h3>
              <p className="text-gray-300 max-w-xl text-lg">
                From Vancouver to Halifax, our network spans the entire nation. 
                Reliable freight solutions wherever your business needs them.
              </p>
            </div>
          </div>
        </div>

        {/* Core Regional Cards */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[#d4a553] mb-6 tracking-wider">CORE REGIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreRegions.map((region, index) => (
              <div
                key={index}
                className="bg-[#1a2235] rounded-xl p-8 border border-[#2a3349] hover:border-[#d4a553]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#d4a553]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4a553]" />
                  </div>
                  <div>
                    <p className="text-[#d4a553] text-sm font-semibold tracking-wider">
                      {region.location}
                    </p>
                    <h3 className="text-xl font-bold text-white">{region.name}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{region.description}</p>
                <div className="flex flex-wrap gap-2">
                  {region.strengths.map((strength, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#d4a553]/10 text-[#d4a553] text-sm rounded-full font-medium"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Provinces */}
        <div className="bg-[#1a2235] rounded-xl p-8 border border-[#2a3349]">
          <h3 className="text-xl font-bold text-white mb-4">
            ALSO SERVING
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherProvinces.map((province, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#0f1729] border border-[#2a3349] rounded-lg text-gray-300 font-medium hover:border-[#d4a553]/50 hover:text-white transition-colors duration-200"
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
