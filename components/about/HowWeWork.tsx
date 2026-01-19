"use client"

import { motion } from "framer-motion"
import {
  Search,
  Code2,
  Settings,
  TrendingUp,
} from "lucide-react"

const steps = [
  {
    title: "Discover & Plan",
    description:
      "We understand your business goals, constraints, and users. Together we define scope, priorities, and a realistic execution plan.",
    icon: Search,
  },
  {
    title: "Build & Deliver",
    description:
      "We design and develop your software in structured phases, with regular updates, reviews, and clear ownership of outcomes.",
    icon: Code2,
  },
  {
    title: "Operate & Support",
    description:
      "After launch, we stay involved — handling maintenance, monitoring, fixes, and ongoing improvements as a managed partner.",
    icon: Settings,
  },
  {
    title: "Scale & Optimize",
    description:
      "As your business grows, we help scale systems, optimize performance, and evolve the product without disruption.",
    icon: TrendingUp,
  },
]

export default function HowWeWork() {
  return (
    <section
      className="py-28 bg-white"
      aria-labelledby="how-we-work-heading"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2
            id="how-we-work-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            How We Work
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our process is designed for long-term collaboration — not
            one-off delivery. We operate as a continuous technology partner,
            adapting as your business evolves.
          </p>
        </motion.div>

        {/* CYCLE */}
        <div className="relative max-w-6xl mx-auto">

          {/* CENTER TEXT
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center max-w-xs">
              <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                Continuous Partnership
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Build • Run • Scale
              </p>
            </div>
          </div> */}

          {/* CIRCLE LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full bg-[#0B1E3C] text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}
