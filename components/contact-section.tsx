"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        alert("Thank you! We will contact you shortly.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        alert(data.error || "Failed to send message.")
      }
    } catch (error) {
      alert("Error sending message.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 lg:py-28 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#d4a553] mb-4">— Get in Touch</p>
            <h2 className="font-display text-[#0f1729] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Let's move <span className="italic text-[#d4a553]">your freight.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[#0f1729]/70 leading-relaxed">
              Tell us what you're shipping. Our team responds in minutes
              with a tailored quote and a clear next step.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white border border-[#0f1729]/10 p-8 lg:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Full Name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
              <Field label="Company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
              <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" />
            </div>
            <div>
              <label htmlFor="message" className="block eyebrow text-[#0f1729]/70 mb-3">
                Shipment Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Origin, destination, cargo type, timeline…"
                className="w-full bg-transparent border border-[#0f1729]/15 focus:border-[#d4a553] focus:outline-none focus:ring-1 focus:ring-[#d4a553] px-4 py-3 text-[#0f1729] placeholder:text-[#0f1729]/30 resize-none transition-colors duration-200 rounded-sm"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#0f1729] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#d4a553] hover:text-[#0f1729] transition-colors duration-300"
            >
              Send Message
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          <aside className="lg:col-span-5 lg:col-start-8 space-y-6">
            <a href="tel:2368280808" className="group block bg-[#0f1729] text-white p-8 hover:bg-[#1a2235] transition-colors duration-300">
              <p className="eyebrow text-[#d4a553] mb-3">— Direct Line</p>
              <p className="font-display text-3xl lg:text-4xl tracking-tight group-hover:text-[#d4a553] transition-colors duration-300">
                236-828-0808
              </p>
              <p className="text-white/60 text-sm mt-3">24/7 dispatch · Mon–Fri 8AM–6PM PST</p>
            </a>

            <div className="bg-white border border-[#0f1729]/10 p-8 space-y-5">
              <InfoBlock icon={Mail} label="Email">
                <a href="mailto:admin@altofreight.ca" className="text-[#0f1729] hover:text-[#d4a553] transition-colors text-sm">
                  admin@altofreight.ca
                </a>
              </InfoBlock>
              <InfoBlock icon={MapPin} label="Address">
                <span className="text-[#0f1729] text-sm leading-relaxed">
                  13137 82A Ave<br />Surrey, BC V3W 9Y6<br />Canada
                </span>
              </InfoBlock>
              <InfoBlock icon={Clock} label="Hours">
                <span className="text-[#0f1729] text-sm leading-relaxed">
                  Mon – Fri: 8:00 AM – 6:00 PM PST<br />
                  Sat: 9:00 AM – 2:00 PM PST<br />
                  <span className="text-[#d4a553] font-semibold">24/7 Emergency Support</span>
                </span>
              </InfoBlock>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  required,
  placeholder,
  type = "text",
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block eyebrow text-[#0f1729]/70 mb-3">
        {label}{required ? " *" : ""}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[#0f1729]/15 focus:border-[#d4a553] focus:outline-none focus:ring-1 focus:ring-[#d4a553] px-4 py-3 text-[#0f1729] placeholder:text-[#0f1729]/30 transition-colors duration-200 rounded-sm"
      />
    </div>
  )
}

function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="w-4 h-4 text-[#d4a553] mt-1 shrink-0" strokeWidth={1.5} />
      <div>
        <p className="eyebrow text-[#0f1729]/60 mb-1">{label}</p>
        <div>{children}</div>
      </div>
    </div>
  )
}
