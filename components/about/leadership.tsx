"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    name: "Sadman Sakib",
    role: "CEO & Co-Founder",
    bio: "Driving company vision, technical strategy, and long-term partnerships with a strong focus on scalable business software.",
    expertise: ["Business Strategy", ".NET Architecture", "Client Partnerships", "Growth Planning"],
    education:
      "BSc in Computer Science & Engineering — American International University Bangladesh",
    image: "/sakib.png",
    linkedin: "https://www.linkedin.com/in/sadmansakib04/",
  },
  {
    name: "Nafiz Ahmed",
    role: "Co-Founder & Operations Lead",
    bio: "Ensuring operational excellence and delivery quality across all projects and offshore engagements.",
    expertise: ["Operations Management", "Quality Control", "Full-Stack Delivery", "Team Leadership"],
    education:
      "BSc in Computer Science & Engineering — American International University Bangladesh",
    image: "/nafiz-ahmed-cto.jpg",
  },
]

export default function Leadership() {
  return (
    <section className="py-28 bg-[#0B1F33]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-orange-400 font-semibold mb-4">
            Leadership
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built by Engineers, Led by Vision
          </h2>

          <p className="text-slate-300 text-lg">
            Meet the leadership team behind ModernSoft Innovations — combining technical depth with business clarity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden bg-[#102A44] border border-white/10 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300">

                {/* Image */}
                <div className="relative h-100 overflow-hidden">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <p className="text-yellow-400 font-medium">{leader.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    {leader.bio}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-orange-400 mb-3">
                      Core Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-[#163B5B] text-blue-100 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-orange-400 mb-2">
                      Education
                    </p>
                    <p className="text-slate-400 text-sm">
                      {leader.education}
                    </p>
                  </div>

                  {/* CTA Icons */}
                  <div className="flex gap-3 pt-6 border-t border-white/10">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-lg bg-[#163B5B] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href="/contact"
                      className="w-11 h-11 rounded-lg bg-[#163B5B] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            Talk Directly with Leadership
          </a>
        </div>
      </div>
    </section>
  )
}
