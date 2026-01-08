"use client"

import { motion } from "framer-motion"
import { Rocket, Award, Gem, Handshake } from "lucide-react"

const values = [
  {
    icon: Rocket,
    title: "We Speak Your Language",
    description:
      "We don't hide behind technical jargon. We explain every step in plain English so you always feel in control.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Award,
    title: "Transparency First",
    description:
      "No hidden costs. No surprise delays. You get weekly updates and direct access to the team building your product.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Gem,
    title: "Long-Term Partnership",
    description:
      "We don't just build and run. We offer support, maintenance, and updates to ensure your software grows with your business.",
    color: "from-teal-500 to-teal-600",
  },
]

export default function OurValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Businesses Choose ModernSoft</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">The reasons our clients trust us with their most important projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}
              >
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
