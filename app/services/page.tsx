"use client"

import PoweredByScroller from "@/components/powered-by-scroller"

import { motion } from "framer-motion"
import {
  Settings,
  Globe,
  Smartphone,
  Brain,
  PenTool,
  ShieldCheck,
  ShoppingCart,
  Search,
  Building2,
  Database,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Metadata } from "next"

/* ================= DATA ================= */

const serviceGroups = [
  {
    groupTitle: "Core Services",
    services: [
      {
        title: "Website Design & Development",
        description: "High-performance, secure and conversion-focused websites.",
        icon: Globe,
        link: "/services/websites-seo",
      },
      {
        title: "Custom Software Development",
        description: "ERP, POS, HRM & internal systems tailored to your workflow.",
        icon: Settings,
        link: "/services/software-development",
      },
      {
        title: "Mobile App Development",
        description: "Scalable Android & iOS apps for growing businesses.",
        icon: Smartphone,
        link: "/services/mobile-apps",
      },
      {
        title: "AI & Business Automation",
        description: "Chatbots, workflows & automation to reduce manual work.",
        icon: Brain,
        link: "/services/ai-automation",
      },
      {
        title: "UI/UX Product Design",
        description: "User-focused, scalable and clean product design.",
        icon: PenTool,
        link: "/services/ui-ux-design",
      },
      {
        title: "QA & Automation Testing",
        description: "Manual & automated testing for stability and security.",
        icon: ShieldCheck,
        link: "/services/qa-testing",
      },
      {
        title: "SEO & Digital Marketing",
        description: "Search visibility, performance marketing & analytics.",
        icon: Search,
        link: "/services/seo-marketing",
      },
      {
        title: "E-commerce Development",
        description: "Single-vendor & multi-vendor eCommerce platforms.",
        icon: ShoppingCart,
        link: "/services/ecommerce",
      },
    ],
  },
  {
    groupTitle: "Enterprise Focused",
    services: [
      {
        title: "ERP Development",
        description: "Enterprise-grade ERP systems built for scale.",
        icon: Building2,
        link: "/services/erp",
      },
      {
        title: "CRM Development",
        description: "Custom CRM systems for sales & customer operations.",
        icon: Database,
        link: "/services/crm",
      },
      {
        title: "Business Management Software",
        description: "All-in-one platforms to manage operations efficiently.",
        icon: Settings,
        link: "/services/business-management",
      },
    ],
  },
]

/* ================= HERO ================= */

function ServicesHero() {
  return (
    <section className="bg-[#b8bfc5] py-32 mt-8">
      <div className="container mx-auto px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-black"
        >
          Software Services Built for Real Business
        </motion.h1>

        <p className="mt-8 text-gray-700 max-w-4xl mx-auto">
          From custom software to enterprise systems — we build solutions that
          actually work in real business environments.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
              Talk to Our Team
            </Button>
          </Link>

          <Link href="#services">
            <Button variant="outline" className="border-black text-black">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ================= SERVICES ================= */

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 space-y-20">
        {serviceGroups.map((group, groupIndex) => (
          <div key={group.groupTitle}>
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              {group.groupTitle}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.services.map((service, index) => {
                const Icon = service.icon

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: (groupIndex + index) * 0.05,
                    }}
                  >
                    <Card className="h-full p-6 bg-[#12263F] border border-white/10">
                      <div className="w-12 h-12 mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-white w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">
                        {service.title}
                      </h3>

                      <p className="text-slate-300 text-sm mb-6">
                        {service.description}
                      </p>

                      <Link href={service.link}>
                        <Button
                          variant="ghost"
                          className="p-0 text-yellow-400 hover:text-yellow-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export const metadata: Metadata = {
  title: "Software, Web & Mobile Development Services | ModernSoft Innovations",
  description:
    "From websites to enterprise software, we deliver scalable web, mobile, and AI solutions for SMEs, startups, and global partners.",

  keywords: ["modernsoft innovations services", "software development service", "best software development services","custom software solutions", "web development services","website development company in bangladesh", "tech company bangladesh","offshore development services"],
}

/* ================= CTA ================= */

function ServicesCTA() {
  return (
    <section className="bg-[#12263F] py-20 text-center">
      <h2 className="text-3xl font-bold text-white">
        Need Enterprise-Ready Software?
      </h2>

      <p className="mt-4 text-slate-300 max-w-xl mx-auto">
        Let’s discuss your requirements before you invest in the wrong solution.
      </p>

      <div className="mt-6">
        <Link href="/contact">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            Get Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  )
}

/* ================= PAGE ================= */

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PoweredByScroller />
      <ServicesSection />
      <ServicesCTA />
    </>
  )
}
