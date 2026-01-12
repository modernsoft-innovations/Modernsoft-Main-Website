"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ScheduleCallModal } from "./schedule-call-modal"

const techLogos = [
  "React",
  "Next.js",
  "Python",
  "Flutter",
  "Node.js",
  "Laravel",
  "Django",
  "ASP.NET",
  "AWS",
  "TypeScript",
  "PostgreSQL",
]

export default function HeroSection() {
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
          >
            We Build <span className="text-orange-500">Digital Products</span> for Growing Businesses
          </motion.h1>

          <motion.p
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
  className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
>
  Your trusted IT partner for websites, apps, and custom software
  <br />
  that help your business grow faster and work smarter.

  
</motion.p>


          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-sm font-semibold text-yello-800">Clutch Verified Software Development Company</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-600 text-black text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => setShowScheduleModal(true)}
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 bg-yellow-400 hover:bg-white-400 text-black text-lg px-8 py-6 rounded-lg bg-transparent"
              >
                View Our Works
              </Button>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 text-base mb-12"
          >
            {/* Trusted by businesses in 5+ countries */}
          </motion.p>

          {/* Tech stack showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100"
          >
            <p className="text-gray-700 font-semibold mb-6">Powered by Modern Technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techLogos.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="px-4 py-2 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-colors shadow-sm"
                >
                  <span className="text-gray-800 font-medium text-sm">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal open={showScheduleModal} onOpenChange={setShowScheduleModal} />
    </section>
  )
}
