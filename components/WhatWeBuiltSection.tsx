"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI-powered B2B supply chain management software.",
    image: "/supply-chain.png",
  },
  {
    title: "Cafe & Restaurant Website",
    image: "/cafe-website.jpg",
  },
  {
    title: "Electrohub E-commerce Platform",
    image: "/electro-products.png",
  },
  {
    title: "Restaurant Management System",
    image: "/restaurant-management.jpg",
  },
]

export default function WhatWeBuiltSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[30%_70%] overflow-hidden rounded-3xl shadow-xl">

          {/* LEFT — STATEMENT */}
{/* LEFT — STATEMENT (DESKTOP ONLY) */}
<div className="relative hidden lg:flex items-center bg-slate-900 px-8 py-14">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-2"
  >
    <h2 className="text-white font-extrabold text-5xl xl:text-6xl leading-tight">
      What
    </h2>
    <h2 className="text-white font-extrabold text-5xl xl:text-6xl leading-tight">
      we’ve
    </h2>
    <h2 className="text-white font-extrabold text-5xl xl:text-6xl leading-tight">
      built
    </h2>
    <h2 className="text-white font-extrabold text-5xl xl:text-6xl leading-tight">
      so
    </h2>
    <h2 className="text-white font-extrabold text-5xl xl:text-6xl leading-tight">
      far
    </h2>
  </motion.div>
</div>


          {/* RIGHT — PROJECTS */}
          <div className="bg-white px-10 py-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                Featured Projects
              </h3>

              {/* PROJECT GRID */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="text-base font-semibold text-slate-900 group-hover:underline">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 rounded-full">
                    View All Projects →
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-8 py-6 rounded-full border-slate-300 text-slate-800 hover:bg-slate-100"
                  >
                    Start a Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
