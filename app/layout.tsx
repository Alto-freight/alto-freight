import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Alto Freight Network | Cross-Canada Freight Brokerage',
  description: 'Alto Freight Network - Your trusted freight brokerage partner for cross-Canada logistics. Strong regional capacities in BC, Alberta, Ontario, and Quebec with seamless inter-regional transportation.',
  keywords: 'freight brokerage, Canada logistics, trucking, transportation, BC freight, Alberta freight, Ontario freight, Quebec freight',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0f1729]">
      <head>
        <meta name="google-site-verification" content="googlee8b56d7ab2353405.html" />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-[#0f1729]`}
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
