"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const models = [
  {
    title: "Dedicated Offshore Teams",
    tag: "Long-term engagement",
    description:
      "A stable offshore team working exclusively on your product, aligned with your internal processes and standards.",
    points: [
      "Dedicated engineers assigned to your project",
      "Direct communication and timezone overlap",
      "Flexible team scaling based on workload",
    ],
    price: "$18–$40 / hour",
    cta: "Hire Developers",
  },
  {
    title: "White Label Partnership",
    tag: "Agency collaboration",
    description:
      "Engineering delivery under your brand while you retain full ownership of clients and commercial decisions.",
    points: [
      "Delivery handled under strict confidentiality",
      "Ideal for agencies and consulting firms",
      "Seamless extension of your delivery capacity",
    ],
    price: "$18–$40 / hour",
    cta: "Partner With Us",
  },
  {
    title: "Project-Based Delivery",
    tag: "Fixed scope execution",
    description:
      "Structured project delivery with defined scope, milestones, and clear accountability.",
    points: [
      "Clearly defined scope and timeline",
      "Milestone-based execution and reporting",
      "Suitable for MVPs and system development",
    ],
    price: "Fixed price or $18–$40/hr",
    cta: "Start a Project",
  },
]

export default function CollaborationModels() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Engagement Models
          </h2>
          <p className="text-lg text-slate-600">
            Flexible collaboration options designed to fit different business and delivery needs.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-10">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="mb-5">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                  {model.tag}
                </p>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {model.title}
                </h3>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {model.description}
              </p>

              <ul className="space-y-3 mb-6">
                {model.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t">
                <p className="text-sm font-medium text-slate-600 mb-4">
                  {model.price}
                </p>

                <Link href="/contact">
                  <Button className="w-full bg-[#0B1E3C] hover:bg-[#122b55] text-white h-11">
                    {model.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECONDARY CTA */}
        <div className="text-center mt-16">
          <Link href="/partnerships">
            <Button className="bg-yellow-400 hover:bg-yellow-300" size="lg">
              View Collaboration Details
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
