"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

/* ORDER: 
1. White Label
2. Team Extension
3. Project Based
*/

const models = [
  {
  id: "white-label",
  title: "White Label Partnership",
  description:
    "We work silently behind the scenes while you sell software services under your own brand. Your clients see you — we handle all development.",
  image: "/white-label.png",
  bestFor: [
    "Digital & marketing agencies",
    "IT consultants and freelancers",
    "Businesses wanting to offer software without building a tech team",
  ],
  howItWorks: [
    "You sell projects to your clients",
    "We design and develop the software",
    "Everything is delivered under your brand name",
    "You stay in full control of client communication",
  ],
  timeline: "Long-term or project-based partnership",
  cta: "Become a White Label Partner",
}
,
 {
  id: "team-extension",
  title: "Team Extension (Staff Augmentation)",
  description:
    "Hire skilled developers from our team to work as part of your in-house team. You manage priorities — we provide the talent.",
  image: "/TeamExtension.png",
  bestFor: [
    "Companies with an existing tech team",
    "Startups scaling fast",
    "Businesses needing extra developers without hiring full-time staff",
  ],
  howItWorks: [
    "You tell us the skills and experience you need",
    "We assign dedicated developers to your team",
    "They work with your tools, process, and timezone",
    "You pay monthly with full flexibility",
  ],
  timeline: "Monthly engagement — cancel or scale anytime",
  cta: "Extend Your Development Team",
}
,
  {
  id: "project-based",
  title: "Project-Based Development",
  description:
    "We handle your entire software project from idea to launch with a fixed scope, timeline, and budget.",
  image: "/fixedbudget.png",
  bestFor: [
    
    "Businesses with clear requirements",
    "Startups building MVPs",
    "Companies wanting predictable cost and delivery",
  ],
  howItWorks: [
    "You share your idea or requirements",
    "We define scope, timeline, and fixed price",
    "Development happens in milestones with regular updates",
    "You receive full ownership of the final product",
  ],
  timeline: "Typically 4–16 weeks",
  cta: "Start Your Project",
}
,
]

export default function PartnershipsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-28 bg-[#0B1E3C] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Collaboration Models
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Offshore development, white-label delivery, and scalable engineering
              teams — built for global partners.
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MODELS */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-24">
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
                  <strong>Timeline:</strong> {model.timeline}
                </div>

                <Link href="/contact">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    {model.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* IMAGE */}
              <div
                className={`relative h-96 rounded-2xl overflow-hidden shadow-xl ${
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

      {/* COMPARISON */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Comparison Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead className="bg-[#0B1E3C] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Project-Based</th>
                  <th className="px-6 py-4 text-left">Team Extension</th>
                  <th className="px-6 py-4 text-left">White Label</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4 font-semibold">Commitment</td>
                  <td className="px-6 py-4">Per project</td>
                  <td className="px-6 py-4">Monthly</td>
                  <td className="px-6 py-4">Flexible</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Pricing</td>
                  <td className="px-6 py-4">Fixed</td>
                  <td className="px-6 py-4">Monthly rate</td>
                  <td className="px-6 py-4">Negotiable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0B1E3C] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Not sure which model fits you?
        </h2>
        <p className="text-blue-100 mb-8">
          Book a 15-minute call and let’s decide the smartest path.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Schedule Call
          </Button>
        </Link>
      </section>
    </main>
  )
}
