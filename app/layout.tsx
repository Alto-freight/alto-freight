import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Alto Freight | Cross-Canada Freight Brokerage",
  description:
    "Alto Freight Network - Your trusted freight brokerage partner for cross-Canada logistics. Strong regional capacities across Canada with seamless transportation solutions.",
  keywords:
    "freight brokerage, Canada logistics, trucking, transportation, BC freight, Alberta freight, Ontario freight, Quebec freight",

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "Alto Freight",
    description: "Cross-Canada Freight Brokerage",
    url: "https://altofreight.ca",
    siteName: "Alto Freight",
    images: [
      {
        url: "https://altofreight.ca/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#0f1729]">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="e8b56d7ab2353405"
        />

        <meta name="robots" content="index, follow" />

        {/* ✅ Structured Data (IMPORTANT for Google + LinkedIn connection) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alto Freight",
              url: "https://altofreight.ca",
              logo: "https://altofreight.ca/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/alto-freight-network-inc/"
              ]
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}