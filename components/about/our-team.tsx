"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Palette, Shield, Rocket } from "lucide-react"

const teamStats = [
  {
    icon: Code,
    title: "Development",
    description: "Full-stack, mobile, AI/ML, cloud",
    count: "5+ Engineers",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, product design, branding",
    count: "2+ Designers",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "QA testing, security, performance",
    count: "2+ QA Specialists",
  },
  {
    icon: Rocket,
    title: "Operations",
    description: "Project management, DevOps, support",
    count: "2+ Specialists",
  },
]

export default function OurTeam() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            10+ professional software engineers, designers, and consultants with expertise across modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center border-2 border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{stat.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{stat.description}</p>
                <p className="text-2xl font-bold text-cyan-600">{stat.count}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-2 border-slate-200">
            <img
              src="/diverse-software-development-team-working-together.jpg"
              alt="Modernsoft Innovations Team"
              className="w-full h-auto"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
