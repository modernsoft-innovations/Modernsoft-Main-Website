"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
const steps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "We align business goals, technical scope, timelines, and success metrics before any development begins.",
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description:
      "Our architects define system design, tech stack, and delivery roadmap to ensure scalability and security.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Dedicated engineers build in sprints with continuous feedback, demos, and transparent progress tracking.",
  },
  {
    step: "04",
    title: "Quality & Validation",
    description:
      "Rigorous testing, code reviews, and performance checks ensure production-ready software.",
  },
  {
    step: "05",
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and scale your product with ongoing support and optimization.",
  },
]

export default function DevelopmentProcess() {
  return (
    <section className="py-28 bg-blue-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-slate-600">
            A proven, structured approach designed to minimize risk and deliver predictable outcomes.
          </p>
        </div>

        {/* PROCESS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-yellow-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all"
            >
              {/* STEP NUMBER */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0B1E3C]">
                  {item.step}
                </span>
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
