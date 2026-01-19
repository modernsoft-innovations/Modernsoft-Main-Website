"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Code2,
  Settings,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    title: "Build Software Products",
    icon: Code2,
    description:
      "We design and develop custom software solutions that solve real business problems — from early-stage MVPs to full-scale SaaS platforms and internal systems.",
    points: [
      "MVP & SaaS product development",
      "Web & mobile application development",
      "ERP, CRM, and internal business systems",
      "Custom integrations and APIs",
    ],
    keywords:
      "software development, MVP development, SaaS development, ERP software, custom software",
  },
  {
    title: "Run & Maintain Systems",
    icon: Settings,
    description:
      "We take responsibility for keeping your software stable, secure, and operational — so your internal team can focus on growth, not firefighting.",
    points: [
      "Ongoing maintenance & bug fixing",
      "Performance optimization",
      "Security updates & monitoring",
      "System upgrades and refactoring",
    ],
    keywords:
      "software maintenance, managed services, application support, system maintenance",
  },
  {
    title: "Scale with Managed Services",
    icon: TrendingUp,
    description:
      "We operate as a long-term offshore technology partner, providing managed development teams and white-label delivery for growing businesses and agencies.",
    points: [
      "Managed development services",
      "Dedicated offshore teams",
      "Staff augmentation & team extension",
      "White-label software delivery",
    ],
    keywords:
      "managed development services, offshore development, staff augmentation, white label software",
  },
]

export default function WhatWeActuallyDo() {
  return (
    <section
      className="py-28 bg-slate-50"
      aria-labelledby="what-we-do-heading"
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
            id="what-we-do-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            What We Actually Do
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ModernSoft Innovations helps businesses build, operate, and scale
            software systems through a structured offshore and managed
            development model.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-blue-950 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col">

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B1E3C] text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* POINTS */}
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* SEO (hidden but semantic) */}
                  <span className="sr-only">
                    {service.keywords}
                  </span>

                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
