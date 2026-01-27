"use client"

import { motion } from "framer-motion"

const items = [
  {
    title: "Team Culture",
    modernsoft: "Young, focused, and engineering-driven",
    others: "Rigid, corporate, slower to adapt",
  },
  {
    title: "Talent Selection",
    modernsoft: "Carefully selected engineers from top institutions",
    others: "Generic hiring, often outsourced or junior",
  },
  {
    title: "Workflow & Delivery",
    modernsoft: "Structured execution with full delivery visibility",
    others: "Loosely defined processes and timelines",
  },
  {
    title: "Long-Term Commitment",
    modernsoft: "Same core team retained across project lifecycle",
    others: "Frequent resource changes post-kickoff",
  },
  {
    title: "Communication",
    modernsoft: "Direct, real-time collaboration with engineers",
    others: "Indirect communication via account layers",
  },
  {
    title: "Security & IP",
    modernsoft: "Strict NDAs and full IP ownership",
    others: "Shared environments and unclear IP control",
  },
]

export default function WhatMakesModernsoftDifferent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
            What Makes <span className="text-amber-600">Modernsoft</span> Different
          </h2>
        </motion.div>

        {/* Comparison Table Container */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          
          {/* Table Header Row */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 px-8 py-5 bg-slate-50 border-b border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Category</div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Modernsoft</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Others</div>
          </div>

          {items.map((item, index) => (
            <div
              key={item.title}
              className={`grid md:grid-cols-3 gap-6 px-8 py-6 items-center transition-colors hover:bg-slate-50/50 ${
                index !== items.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              {/* Title (Mobile Label Included) */}
              <div className="font-semibold text-slate-900 md:font-medium">
                <span className="md:hidden block text-xs uppercase text-slate-400 mb-1">Category</span>
                {item.title}
              </div>

              {/* Modernsoft Column */}
              <div className="text-slate-800 font-medium">
                <span className="md:hidden block text-xs uppercase text-blue-400 mb-1">Modernsoft</span>
                {item.modernsoft}
              </div>

              {/* Others Column */}
              <div className="text-slate-500">
                <span className="md:hidden block text-xs uppercase text-slate-400 mb-1">Others</span>
                {item.others}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}