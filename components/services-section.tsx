"use client"

import { motion } from "framer-motion"
import {
  Settings,
  Globe,
  Smartphone,
  Brain,
  PenTool,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Custom Software Development",
    description:
      "ERP, POS, HRM, supply chain and internal management systems tailored to your business workflow.",
    icon: Settings,
    link: "/services/software-development",
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, secure and scalable websites built to convert visitors into customers.",
    icon: Globe,
    link: "/services/website-development",
  },
  {
    title: "E-commerce Website Development",
    description:
      "High-converting e-commerce websites designed to sell products, build trust, and grow online revenue",
    icon: ShoppingCart,
    link: "/services/ecommerce",
  },
  {
    title: "Mobile App Development",
    description:
      "Android and iOS applications designed for performance, usability and growth.",
    icon: Smartphone,
    link: "/services/mobile-app",
  },
  {
    title: "AI & Business Automation",
    description:
      "Automate repetitive work using AI tools, chatbots and smart workflows.",
    icon: Brain,
    link: "/services/ai-automation",
  },
  {
    title: "QA & Software Testing",
    description:
      "Manual and automated testing to ensure quality, stability and security.",
    icon: ShieldCheck,
    link: "/services/software-testing",
  },
]


export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0B1C2D]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Practical solutions built for real businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 flex flex-col bg-[#12263F] border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 mb-5 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-4xl font-medium text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-1xl leading-relaxed mb-6 grow">
                    {service.description}
                  </p>

                  <Link href={service.link} className="mt-auto">
                    <Button
                      variant="ghost"
                      className="p-0 text-yellow-400 font-semibold hover:text-yellow-300 flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
