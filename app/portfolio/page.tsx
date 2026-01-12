import type { Metadata } from "next"
import PortfolioHero from "@/components/portfolio/portfolio-hero"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Modernsoft Innovations",
  description:
    "Explore our portfolio of successful software projects across AI, web applications, mobile apps, and enterprise solutions. Real projects delivering measurable business impact.",
  keywords: "software portfolio, case studies, project examples, AI projects, web development portfolio",
}


export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </main>
  )
}