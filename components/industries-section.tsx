"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Heart,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home,
  Truck,
  Rocket,
} from "lucide-react"
import { Card } from "@/components/ui/card"

const industries = [
  {
    icon: ShoppingBag,
    name: "E-commerce Businesses",
    description:
      "Online stores, marketplaces, POS systems, inventory management and payment solutions",
  },
  {
    icon: Building2,
    name: "Corporate & Enterprises",
    description:
      "ERP, CRM, internal systems, dashboards and enterprise-grade software solutions",
  },
  {
    icon: Rocket,
    name: "Startups & SaaS Companies",
    description:
      "MVP development, SaaS platforms, scalable cloud-based products and automation",
  },
  {
    icon: Home,
    name: "Small & Local Businesses",
    description:
      "Business websites, booking systems, management software and automation tools",
  },
  {
    icon: Heart,
    name: "Healthcare & Clinics",
    description:
      "Patient management systems, appointment scheduling and healthcare platforms",
  },
  {
    icon: GraduationCap,
    name: "Education & Training",
    description:
      "Learning platforms, student portals, online courses and education management systems",
  },
  {
    icon: Truck,
    name: "Logistics & Delivery",
    description:
      "Order tracking, fleet management, warehouse and supply chain solutions",
  },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    description:
      "Production tracking, ERP systems, process automation and reporting software",
  },
]


export default function HomeIndustriesSection() {
  return (
    <section className="py-24 bg-[#0B1C2D]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industries We Serve
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our custom software solutions are trusted across industries to solve
            real business challenges with scalable, secure and future-ready technology.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card
                  className="h-full p-6 flex flex-col bg-[#12263F] border border-white/10
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-black" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {industry.name}
                      </h3>

                      <p className="text-slate-300 leading-relaxed text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
