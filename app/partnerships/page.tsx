"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"




const models = [
  {
    id: "white-label",
    title: "White Label Partnership",
    description:
      "Deliver software solutions under your own brand while we work silently in the background. You own the client relationship — we handle design, development, and delivery as your invisible engineering team.",
    image: "/white-label.png",
    bestFor: [
      "Digital & marketing agencies offering software services",
      "IT consultants and freelancers serving multiple clients",
      "Businesses selling software solutions without an internal tech team",
    ],
    howItWorks: [
      "You sell software projects under your brand",
      "We design, develop, and test the solution",
      "All deliverables are provided without our branding",
      "You manage clients — we stay invisible",
    ],
    timeline: "Long-term or project-based engagement",
    rate: "USD $18–$40 per hour",
    cta: "Become a White Label Partner",
  },
  {
    id: "team-extension",
    title: " Staff Augmentation (Offshore Developers)",
    description:
      "Scale your development capacity without long-term hiring risk. Our engineers integrate seamlessly with your in-house team, tools, and workflows.",
    image: "/TeamExtension.png",
    bestFor: [
      "Companies with an existing technical team",
      "Startups scaling product development",
      "Organizations needing specific skills on demand",
    ],
    howItWorks: [
      "You define required skills and availability",
      "We assign vetted developers matched to your needs",
      "Developers work directly with your team and tools",
      "You can scale up, down, or pause anytime",
    ],
    timeline: "Monthly engagement — fully flexible",
    rate: "USD $18–$40 per hour",
    cta: "Extend Your Development Team",
  },
  {
    id: "project-based",
    title: "Project-Based Development",
    description:
      "End-to-end software development delivered with a clearly defined scope, timeline, and budget — ideal for predictable outcomes.",
    image: "/fixedbudget.png",
    bestFor: [
      "Businesses with clearly defined requirements",
      "Startups building MVPs or prototypes",
      "Companies seeking fixed cost and delivery timelines",
    ],
    howItWorks: [
      "You share your idea or documentation",
      "We define scope, timeline, and fixed pricing",
      "Development runs in milestones with regular updates",
      "You receive full source code and ownership",
    ],
    timeline: "Typically 4–16 weeks",
    rate: "Calculated using USD $18–$40 per hour",
    cta: "Start Your Project",
  },
]

export default function PartnershipsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="pt-32 pb-28 bg-[#0B1E3C] text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Collaboration Models
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Flexible engagement models designed for agencies, startups, and
          technology-driven businesses worldwide.
        </p>
      </section>

      {/* MODELS */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">

          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >
              {/* TEXT */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                  {model.title}
                </h2>

                <p className="text-xl text-slate-600 mb-8">
                  {model.description}
                </p>

                {/* MOBILE IMAGE */}
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-10 lg:hidden">
                  <Image
                    src={model.image}
                    alt={model.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-semibold mb-3">Best For</h3>
                <ul className="space-y-2 mb-8">
                  {model.bestFor.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-orange-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold mb-3">How It Works</h3>
                <ol className="space-y-2 mb-8">
                  {model.howItWorks.map((step, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="mb-8 p-4 bg-sky-50 border border-sky-200 rounded-lg">
                  <p><strong>Timeline:</strong> {model.timeline}</p>
                  <p><strong>Rate:</strong> {model.rate}</p>
                </div>

                {/* MODEL CTA */}
                <Link href="/contact">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    {model.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* DESKTOP IMAGE */}
              <div
                className={`relative h-96 rounded-2xl overflow-hidden shadow-xl hidden lg:block ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={model.image}
                  alt={model.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0B1E3C] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Not sure which model fits your business?
        </h2>
        <p className="text-blue-100 mb-8">
          Book a free strategy call and let’s choose the smartest approach.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Book a Strategy Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>

    </main>
  )
}
