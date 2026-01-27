"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ScheduleCallModal } from "./schedule-call-modal"

const techLogos = [
  { name: "AWS", src: "/tech/aws.svg" },
  { name: "Azure", src: "/tech/azure.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "Flutter", src: "/tech/flutter.svg" },
  { name: "Python", src: "/python.png" },
  { name: "Laravel", src: "/tech/laravel.svg" },
  { name: "Asp.net", src: "/tech/asp.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Node.js", src: "/tech/js.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
]

export default function HeroSection() {
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  return (
    <section className="relative min-h-screen bg-blue-50 pt-18 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(37,99,235,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* 🔥 CLUTCH TRUST BADGE - MOVED TO TOP */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-blue-100 rounded-full px-6 py-2 border border-blue-200">
              <p className="text-sm font-semibold text-slate-800">
                Clutch Verified Offshore Software Development Agency
              </p>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-black mb-6"
          >
            <span className="text-[#0B1C2D]">
              Build Your Product with a
            </span>{" "}
            <span className="text-yellow-700">
              Reliable Offshore Team
            </span>
          </motion.h1>

          {/* Smart Tagline (SHORT) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mb-12"
          >
            Helping startups and growing businesses build, scale, and ship
            software faster with dedicated offshore teams from Bangladesh.
          </motion.p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg"
              onClick={() => setShowScheduleModal(true)}
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black px-8 py-6 text-lg"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Powered by */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-500 mb-8"
          >
            Powered by Modern Technologies
          </motion.h3>

          {/* Tech Scroller */}
          <div className="overflow-hidden mb-12">
            <motion.div
              className="flex gap-8 w-max items-center"
              animate={{ x: ["0%", "-70%"] }}
              transition={{
                repeat: Infinity,
                duration: 26,
                ease: "linear",
              }}
            >
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center justify-center min-w-[120px]"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="object-contain"
                    priority
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Modal */}
      <ScheduleCallModal
        open={showScheduleModal}
        onOpenChange={setShowScheduleModal}
      />
    </section>
  )
}
