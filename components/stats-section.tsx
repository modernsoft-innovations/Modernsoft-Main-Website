"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Expert Engineers" },
  { value: 3, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-cyan-600 font-semibold mb-4">
            Proven Results
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Numbers That Build Trust
          </h2>

          <p className="text-slate-600">
            Delivering consistent results for startups, enterprises and offshore partners.
          </p>
        </motion.div>

        {/* Stats container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
