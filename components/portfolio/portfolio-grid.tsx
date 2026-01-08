"use client"

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
  icon: any
  image?: string | null
  description: string
}

const projects: Project[] = [
  {
    slug: "megamart-ecommerce",
    title: "megamart-ecommerce",
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
    title: "electrohub",
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
    title: "paperless-smes",
    subtitle: "Business Management Software",
    category: "ERP / SME",
    location: "Bangladesh",
    year: "2024",
    icon: Briefcase,
    image: "/paperless.png",
    description:
      "All-in-one system for invoices, inventory, payments and business reporting.",
  },
  {
    slug: "cafe-website",
    title: "cafe-website",
    subtitle: "Restaurant Marketing Website",
    category: "Website",
    location: "Australia",
    year: "2024",
    icon: Utensils,
    image: "/cafe-website.jpg",
    description:
      "SEO-optimized cafe website designed to increase reservations and walk-ins.",
  },
  {
    slug: "Automobile Servicing System",
    title: "Automobile Servicing System",
    subtitle: "Online Booking Platform",
    category: "Business Software",
    location: "Bangladesh",
    year: "2024",
    icon: Car,
    image: "/bike-servicing-slot-booking.jpg",
    description:
      "Online service booking and job management system for automobile workshops.",
  },
  {
    slug: "Restaurant Management System",
    title: "Restaurant Management System",
    subtitle: "Order & Operations Management",
    category: "Business Software",
    location: "Bangladesh",
    year: "2024",
    icon: ClipboardList,
    image: "/restaurant-management.jpg",
    description:
      "System for managing orders, tables, staff and daily sales reports.",
  },
  {
    slug: "Coaching Center Management",
    title: "Coaching Center Management",
    subtitle: "Education Management System",
    category: "Education",
    location: "Bangladesh",
    year: "2024",
    icon: GraduationCap,
    image: null, // intentionally no image
    description:
      "Manages students, batches, attendance, fees and teacher records.",
  },
  {
    slug: "pos-system",
    title: "pos-system",
    subtitle: "Retail Billing Software",
    category: "POS",
    location: "Bangladesh",
    year: "2024",
    icon: CreditCard,
    image: "/pos-system-interface.jpg",
    description:
      "Point-of-sale system with billing, inventory and sales reporting.",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#0B1C2D]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects We’ve Built
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Real business solutions — focused on management systems, automation
            and growth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full bg-[#12263F] border border-white/10 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                  {/* Image or Icon fallback */}
                  <div className="h-44 w-full bg-[#0F2238] flex items-center justify-center">
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

                  {/* Content */}
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

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    <Link href={`/portfolio/${project.title}`} className="mt-5">
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
        </div>
      </div>
    </section>
  )
}
