"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Users,
  ShieldCheck,
  LineChart,
  Settings2,
  MessageSquare,
} from "lucide-react"

const reasons = [
  {
    title: "Business-First Thinking",
    description:
      "We design software around real business operations, not generic templates or trends. Every decision is tied to measurable outcomes.",
    icon: Briefcase,
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Managed, Not Just Delivered",
    description:
      "We stay involved after launch — handling maintenance, improvements, and scaling as a long-term technology partner.",
    icon: Settings2,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Dedicated Teams & Ownership",
    description:
      "Clients work with stable, dedicated engineers who understand the product deeply and take ownership of long-term success.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Security & Reliability",
    description:
      "Security-first development, clean architecture, and proactive monitoring ensure your systems remain reliable as you grow.",
    icon: ShieldCheck,
    gradient: "from-slate-700 to-slate-500",
  },
  {
    title: "Built to Scale",
    description:
      "From MVPs to enterprise platforms, our systems are designed to scale without costly rewrites or operational chaos.",
    icon: LineChart,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Clear Communication",
    description:
      "Structured updates, clear documentation, and direct leadership involvement keep projects transparent and predictable.",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-sky-400",
  },
]

export default function WhyClientsChooseUs() {
  return (
    <section
      className="py-28 bg-slate-50"
      aria-labelledby="why-clients-choose-us"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2
            id="why-clients-choose-us"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Why Clients Choose ModernSoft Innovations
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Companies partner with us not just to build software,
            but to operate, improve, and scale it with confidence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group rounded-2xl p-8 bg-white border border-slate-200 hover:shadow-xl transition-shadow"
              >
                {/* Gradient Header */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${reason.gradient}`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${reason.gradient} text-white flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
