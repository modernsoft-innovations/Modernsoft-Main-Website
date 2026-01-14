import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import OurStory from "@/components/about/our-story"
import Leadership from "@/components/about/leadership"
import OurValues from "@/components/about/our-values"
import DevelopmentProcess from "@/components/DevelopmentProcess"

export const metadata: Metadata = {
  title: "About ModernSoft Innovations | Trusted Software Development Partner",
  description:
    "ModernSoft Innovations is a software and web development agency helping SMEs, startups, and global businesses build reliable, scalable digital products.",

  keywords: ["about modernsoft innovations", "software development team", "bangladesh software agency","tech company bangladesh"],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutHero />
      <OurStory />
      <DevelopmentProcess />
      <Leadership />
      
      {/* <OurValues /> */}
    </main>
  )
}
