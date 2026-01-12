"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  Store,
  Briefcase,
  Utensils,
  Car,
  ClipboardList,
  GraduationCap,
  CreditCard,
  LucideIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  slug: string
  title: string
  subtitle: string
  category: string
  location: string
  year: string
  icon: LucideIcon
  image?: string | null
  description: string
}

const projects: Project[] = [
  {
    slug: "megamart-ecommerce",
    title: "MegaMart",
    subtitle: "Multi-category eCommerce Platform",
    category: "E-commerce",
    location: "Australia",
    year: "2025",
    icon: ShoppingCart,
    image: "/megamart.png",
    description:
      "A scalable eCommerce platform selling toys, electronics, fashion and daily essentials.",
  },
  {
    slug: "electrohub",
    title: "ElectroHub",
    subtitle: "Electronics Online Store",
    category: "E-commerce",
    location: "USA",
    year: "2025",
    icon: Store,
    image: "/electro.png",
    description:
      "US-based electronics store with advanced filtering, cart and secure checkout.",
  },
  {
    slug: "paperless-smes",
    title: "Paperless SMEs",
    subtitle: "Business Management Software",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2026",
    icon: Briefcase,
    image: "/paperless.png",
    description:
      "All-in-one system for invoices, inventory, payments and business reporting.",
  },
  {
    slug: "cafe-website",
    title: "Cafe Website",
    subtitle: "Restaurant Marketing Website",
    category: "Web",
    location: "Australia",
    year: "2025",
    icon: Utensils,
    image: "/cafe-website.jpg",
    description:
      "SEO-optimized cafe website designed to increase reservations and walk-ins.",
  },
  {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",
    subtitle: "Order & Operations Management",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2025",
    icon: ClipboardList,
    image: "/restaurant-management.jpg",
    description:
      "System for managing orders, tables, staff and daily sales reports.",
  },
  {
    slug: "automobile-servicing-system",
    title: "Automobile Servicing System",
    subtitle: "Online Booking Platform",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2026",
    icon: Car,
    image: "/bike-servicing-slot-booking.jpg",
    description:
      "Online service booking and job management system for automobile workshops.",
  },
  {
    slug: "coaching-center-management",
    title: "Coaching Center Management",
    subtitle: "Education Management System",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2026",
    icon: GraduationCap,
    image: null,
    description:
      "Manages students, batches, attendance, fees and teacher records.",
  },
  {
    slug: "pos-system",
    title: "POS System",
    subtitle: "Retail Billing Software",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2025",
    icon: CreditCard,
    image: "/pos-system-interface.jpg",
    description:
      "Point-of-sale system with billing, inventory and sales reporting.",
  },
]

const categories = [
  "All",
  "Web",
  "E-commerce",
  "Enterprise",
  "Mobile",
  "AI/ML",
  "Cloud",
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 bg-[#ffffff5b]">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Projects We’ve Built
          </h2>
          <p className="mt-4 text-slate-800 max-w-2xl mx-auto">
            Real business solutions focused on automation, management and growth.
          </p>
        </motion.div> */}

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 justify-start md:justify-center mb-14 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all
                ${
                  activeCategory === cat
                    ? "bg-yellow-400 text-black shadow-md"
                    : "bg-white text-slate-700 hover:bg-yellow-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="h-full bg-[#12263F] border border-white/10 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                  <div className="h-44 bg-[#0F2238] flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Icon className="w-12 h-12 text-white opacity-80" />
                    )}
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 mt-4 grow">
                      {project.description}
                    </p>

                    <div className="mt-4 flex justify-between text-xs text-slate-400">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    <Link href={`/portfolio/${project.slug}`} className="mt-5">
                      <Button
                        variant="ghost"
                        className="p-0 text-yellow-400 hover:text-yellow-300 font-semibold"
                      >
                        View Case Study →
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
