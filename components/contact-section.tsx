"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = `New Quote Request:
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Details:
${formData.message}`

    const url = `https://wa.me/12368280808?text=${encodeURIComponent(text)}`

    window.open(url, "_blank")

    alert("Thank you for your inquiry! We will get back to you shortly.")

    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-[#0f1729] relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/freight-hero-1.jpg"
          alt="Contact Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-16 text-right">
          <p className="text-[#d4a553] font-semibold tracking-wider mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-[#d4a553] ml-auto" />
          <p className="mt-6 text-gray-300 max-w-2xl ml-auto text-lg">
            Ready to move your freight? Get in touch with our team for a quote 
            or to discuss your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div>
            <div className="bg-[#1a2235] rounded-xl p-8 border border-[#2a3349] mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                CONTACT <span className="text-[#d4a553]">INFORMATION</span>
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#d4a553]" />
                  <a href="mailto:admin@altofreight.ca" className="text-white">
                    admin@altofreight.ca
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#d4a553]" />
                  <a href="tel:2368280808" className="text-white">
                    236-828-0808
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#d4a553]" />
                  <p className="text-white">
                    13137 82A Ave<br />
                    Surrey, BC V3W 9Y6
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#d4a553]" />
                  <p className="text-white">
                    Mon–Fri: 8AM–6PM
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-xl p-8">

            <h3 className="text-2xl font-bold text-[#0f1729] mb-6">
              REQUEST A <span className="text-[#d4a553]">QUOTE</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full p-3 border rounded"
              />

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full p-3 border rounded"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full p-3 border rounded"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 border rounded"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Shipment details..."
                className="w-full p-3 border rounded"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0f1729] text-white font-semibold rounded-lg"
              >
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}