"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const models = [
  {
    id: "dedicated",
    title: "Dedicated Development Team",
    headline: "Your Long-Term Engineering Team, Offshore",
    description:
      "Hire a fully dedicated software development team that works exclusively on your product. We handle recruitment, management, payroll, and delivery so you get a stable team without operational overhead.",
    bestFor:
      "Best for startups and SaaS companies building or scaling a core product long-term.",
    points: [
      {
        bold: "Dedicated engineers",
        text: "working only on your product and roadmap",
      },
      {
        bold: "Agile sprint execution",
        text: "with transparent delivery and reporting",
      },
      {
        bold: "Full team management",
        text: "including hiring, HR, payroll, and performance",
      },
      {
        bold: "Easy scaling",
        text: "add or reduce team members as needed",
      },
    ],
    price: "Starting from $19/hour",
    cta: "Hire a Dedicated Team",
  },
  {
    id: "offshore",
    title: "Offshore Software Development",
    headline: "End-to-End Software Development at Lower Cost",
    description:
      "Outsource complete software projects to an experienced offshore team in Bangladesh. Ideal for businesses that want reliable delivery, predictable cost, and high-quality engineering without building an in-house team.",
    bestFor:
      "Best for SMEs, agencies, and founders who want full project delivery with minimal involvement.",
    points: [
      {
        bold: "Cost-efficient development",
        text: "without compromising quality or security",
      },
      {
        bold: "End-to-end delivery",
        text: "from planning to deployment and support",
      },
      {
        bold: "Experienced engineers",
        text: "across web, mobile, and cloud platforms",
      },
      {
        bold: "Clear communication",
        text: "with regular updates and milestone tracking",
      },
    ],
    price: "Fixed or hourly pricing",
    cta: "Start Offshore Development",
  },
  {
    id: "augmentation",
    title: "Software Staff Augmentation",
    headline: "Extend Your Existing Team Instantly",
    description:
      "Add skilled offshore developers to your existing team without long-term contracts. Our engineers integrate directly into your workflow and report to your team.",
    bestFor:
      "Best for companies with in-house teams that need extra hands fast.",
    points: [
      {
        bold: "Quick access to talent",
        text: "without long hiring cycles",
      },
      {
        bold: "Direct control",
        text: "you manage tasks and priorities",
      },
      {
        bold: "Flexible engagement",
        text: "short-term or long-term",
      },
      {
        bold: "Fast onboarding",
        text: "engineers ready in days, not months",
      },
    ],
    price: "Starting from $18/hour",
    cta: "Augment Your Team",
  },
]

export default function CollaborationModels() {
  const [active, setActive] = useState(models[0])

  return (
    <section className="py-28 bg-blue-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3C] mb-4">
            Engagement Models
          </h2>
          <p className="text-lg text-slate-600">
            Choose the right collaboration model based on your business goals,
            team structure, and delivery needs.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT TABS */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActive(model)}
                className={`min-w-[260px] px-6 py-5 rounded-xl border text-left transition-all
                  ${
                    active.id === model.id
                      ? "bg-[#0B1E3C] text-white border-[#0B1E3C]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }
                `}
              >
                <h3 className="text-xl md:text-2xl font-semibold">
                  {model.title}
                </h3>
              </button>
            ))}
          </div>

          {/* RIGHT DETAILS */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-2 border border-slate-200 rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-[#0B1E3C] mb-4">
              {active.headline}
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              {active.description}
            </p>

            <p className="text-slate-800 font-medium mb-8">
              <span className="text-slate-500">Best for:</span> {active.bestFor}
            </p>

            <ul className="space-y-4 mb-10">
              {active.points.map((point, i) => (
                <li key={i} className="flex gap-4 text-slate-700">
                  <CheckCircle className="w-6 h-6 text-[#0B1E3C] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      {point.bold}
                    </strong>{" "}
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <p className="text-lg font-semibold text-slate-600">
                {active.price}
              </p>

              <Link href="/contact">
                <Button className="h-12 px-8 bg-amber-300 hover:bg-amber-400 text-black flex items-center">
                  {active.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
