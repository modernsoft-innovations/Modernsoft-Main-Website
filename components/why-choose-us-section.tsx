"use client"

import { motion } from "framer-motion"
import {
  Award,
  Users,
  Zap,
  MessageSquare,
  DollarSign,
  HeartHandshake,
} from "lucide-react"

const reasons = [
  {
  
    icon: Award,
    title: "Modern Technology",
    description:
      "We use the latest tools and frameworks to build fast, secure, and future-ready software.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "A skilled team of engineers and designers who understand both business and technology.",
  },
  {
    icon: Zap,
    title: "Clear & Simple Process",
    description:
      "Transparent workflow with regular updates, demos, and open communication.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description:
      "High-quality software at competitive pricing—no hidden costs or surprises.",
  },
  {
    icon: MessageSquare,
    title: "Quality You Can Trust",
    description:
      "Thorough testing and quality checks to ensure reliability and performance.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "We stay with you after launch, offering support, updates, and improvements.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Reliable IT Partner You Can Trust
          </h2>

          <p className="text-lg text-slate-600">
            We focus on clarity, quality, and long-term value—so you get software
            that actually helps your business grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 
                           hover:shadow-xl hover:-translate-y-1 
                           transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-orange-500/10 
                                flex items-center justify-center">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
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
