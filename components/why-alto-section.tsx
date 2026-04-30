import { CheckCircle, TrendingUp, Users, Award, Zap, Globe } from "lucide-react"
import Image from "next/image"

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

const stats = [
  { value: "500+", label: "Trusted Carriers" },
  { value: "10K+", label: "Loads Delivered" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "24/7", label: "Customer Support" },
]

export function WhyAltoSection() {
  return (
    <section id="why-alto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="mb-16">
          <p className="text-[#d4a553] font-semibold tracking-wider mb-2">THE ALTO ADVANTAGE</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1729] mb-4">
            WHY ALTO
          </h2>
          <div className="w-24 h-1 bg-[#d4a553]" />
          <p className="mt-6 text-gray-600 max-w-2xl text-lg">
            Choosing the right freight partner impacts your bottom line. Here is why 
            businesses across Canada trust Alto Freight Network.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
              <Image
                src="/images/freight-hero-3.jpg"
                alt="Alto Freight Network Operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  YOUR CARGO, <span className="text-[#d4a553]">OUR PRIORITY</span>
                </h3>
                <p className="text-gray-300">
                  Every shipment matters. We treat your freight as if it were our own.
                </p>
              </div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-[#0f1729] rounded-lg flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-[#d4a553]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f1729] mb-1">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#0f1729] rounded-xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#d4a553] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
