import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import OurStory from "@/components/about/our-story"
import Leadership from "@/components/about/leadership"
import OurValues from "@/components/about/our-values"

export const metadata: Metadata = {
  title: "About Us - Leadership & Team | Modernsoft Innovations",
  description:
    "Learn about Modernsoft Innovations - Founded in 2023 by Sadman Sakib and Nafiz Ahmed. 10+ expert engineers, global standards built in Bangladesh.",
  keywords: "about modernsoft innovations, software development team, company leadership, tech company bangladesh",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutHero />
      <OurStory />
      <Leadership />
      {/* <OurValues /> */}
    </main>
  )
}
