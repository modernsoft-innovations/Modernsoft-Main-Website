"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 space-y-24">

        {/* ================= WHO WE ARE ================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Practical Software & Managed Development Partner for Growing Businesses
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            We help startups, SMEs, and digital agencies build, run, and scale software products, from first MVP to long-term managed development — using a reliable offshore team based in Bangladesh.
          </p>
        </motion.div> */}

        {/* ================= OUR STORY ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-2 border-slate-200">
              <img
                src="/modern-software-development-team-collaborating.jpg"
                alt="Modernsoft Innovations Team"
                className="w-full h-auto"
              />
            </Card>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
              Our Story
            </h2>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-900">
                Founded to Simplify Complex Technology
              </h3>

              <p className="text-slate-500">
                ModernSoft Innovations was founded in 2025 by Sadman Sakib and Nafiz Ahmed
                with a clear goal: to help businesses avoid bloated, inefficient software
                and instead build systems that actually support daily operations.
              </p>

              <p className="text-slate-500">
                Starting with a small internal management system for a local business,
                we quickly realized that successful software is not about flashy features,
                it’s about clarity, reliability, and long-term scalability.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-6">
                Growing with a Business-First Mindset
              </h3>

              <p className="text-slate-500">
                Today, ModernSoft Innovations operates as a global offshore and white-label
                development partner, supporting startups, agencies, and enterprises with
                dedicated engineering teams.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= HOW WE WORK ================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#12263F] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">How We Work</h3>
          <p className="text-slate-200 max-w-3xl mb-8">
            We operate as an offshore and white-label technology partner,
            integrating seamlessly with your business or agency workflow.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Managed development partnerships",
              "Dedicated offshore teams",
              "White-label development for agencies",
              "Founder-led technical planning",
              "Clear documentation & reporting",
              "Long-term support & scalability",
              "Security-first development approach",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* ================= WHY CHOOSE US ================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Businesses Choose ModernSoft Innovations
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Business-first approach, not template-driven",
              "Direct leadership involvement in planning",
              "Flexible engagement models",
              "Cost-efficient offshore delivery",
              "Clear communication & accountability",
              "Built for long-term growth, not quick fixes",
            ].map((point) => (
              <div
                key={point}
                className="p-6 border border-slate-200 rounded-xl text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div> */}

      </div>
    </section>
  )
}
