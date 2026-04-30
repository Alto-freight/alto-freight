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
    // Handle form submission
    console.log("Form submitted:", formData)
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/freight-hero-1.jpg"
          alt="Contact Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Right Aligned */}
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
          {/* Contact Information */}
          <div>
            <div className="bg-[#1a2235] rounded-xl p-8 border border-[#2a3349] mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                CONTACT <span className="text-[#d4a553]">INFORMATION</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a553]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#d4a553]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">EMAIL</p>
                    <a
                      href="mailto:admin@altofreight.ca"
                      className="text-white hover:text-[#d4a553] transition-colors font-medium"
                    >
                      admin@altofreight.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a553]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#d4a553]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">PHONE</p>
                    <a
                      href="tel:7783889988"
                      className="text-white hover:text-[#d4a553] transition-colors font-medium"
                    >
                      778-388-9988
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a553]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4a553]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">ADDRESS</p>
                    <p className="text-white font-medium">
                      13137 82A Ave<br />
                      Surrey, BC V3W 9Y6<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a553]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#d4a553]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">BUSINESS HOURS</p>
                    <p className="text-white font-medium">
                      Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                      Saturday: 9:00 AM - 2:00 PM PST<br />
                      <span className="text-[#d4a553]">24/7 Emergency Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-[#d4a553] rounded-xl p-6 text-[#0f1729]">
              <h4 className="font-bold text-lg mb-3">READY TO SHIP?</h4>
              <p className="text-[#0f1729]/80">
                Call us directly for immediate quotes on your freight needs. 
                Our team is standing by to help move your cargo across Canada.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#0f1729] mb-6">
              REQUEST A <span className="text-[#d4a553]">QUOTE</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a553] focus:border-transparent transition-all text-[#0f1729]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a553] focus:border-transparent transition-all text-[#0f1729]"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a553] focus:border-transparent transition-all text-[#0f1729]"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a553] focus:border-transparent transition-all text-[#0f1729]"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message / Shipment Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a553] focus:border-transparent transition-all resize-none text-[#0f1729]"
                  placeholder="Tell us about your freight needs - origin, destination, cargo type, timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0f1729] text-white font-semibold rounded-lg hover:bg-[#1a2235] transition-colors duration-200"
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
