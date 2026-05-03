import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CoverageSection } from "@/components/coverage-section"
import { WhyAltoSection } from "@/components/why-alto-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { HashRouter } from "@/components/hash-router"
import { SectionIndicator } from "@/components/section-indicator"
import { TrustedMarquee } from "@/components/trusted-marquee"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <HashRouter />
      <SectionIndicator />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <TrustedMarquee />
        <ServicesSection />
        <CoverageSection />
        <WhyAltoSection />
        <ContactSection />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
