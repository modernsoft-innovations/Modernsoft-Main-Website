"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techLogos = [
  { name: "AWS", src: "/tech/aws.svg" },
  { name: "Azure", src: "/tech/azure.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "Flutter", src: "/tech/flutter.svg" },
  { name: "Python", src: "/python.png" },
  { name: "Laravel", src: "/tech/laravel.svg" },
  { name: "ASP.NET", src: "/tech/asp.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Node.js", src: "/tech/js.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
]

export default function PoweredByScroller() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* 🔥 HEADLINE */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-500 mb-8"
        >
          Powered by Modern Technologies
        </motion.h3>

        {/* 🔁 TECH SCROLLER */}
        <div className="overflow-hidden mb-10">
          <motion.div
            className="flex gap-10 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
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
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 🖱️ MOUSE SCROLL INDICATOR */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
