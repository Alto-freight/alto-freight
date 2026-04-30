import { Truck, Package, Clock, Shield, BarChart3, Headphones } from "lucide-react"

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

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="mb-16">
          <p className="text-[#d4a553] font-semibold tracking-wider mb-2">WHAT WE OFFER</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1729] mb-4">
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-[#d4a553]" />
          <p className="mt-6 text-gray-600 max-w-2xl text-lg">
            Comprehensive freight brokerage solutions tailored to meet the unique demands 
            of Canadian businesses. From coast to coast, we deliver reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-lg hover:bg-[#0f1729] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-[#d4a553]/10 group-hover:bg-[#d4a553] rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#d4a553] group-hover:text-[#0f1729] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0f1729] group-hover:text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
