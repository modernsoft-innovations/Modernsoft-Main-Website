import type { Metadata } from "next"
import { notFound } from "next/navigation"
import CaseStudyDetail from "@/components/portfolio/case-study-detail"
import Link from "next/link"
/* =====================================================
   CASE STUDY DATA – ModernSoft Innovations
===================================================== */

export const projects = [
  {
    slug: "megamart-ecommerce",
    title: "megamart-ecommerce",
    industry: "E-commerce",
    location: "Australia",
    year: "2025",
    category: "Web",
    description:
      "Your trusted online shopping destination for toys, electronics, fashion and more.",
    challenge:
      "The client needed a scalable e-commerce platform that could handle multiple product categories, smooth checkout, and high traffic without relying on third-party marketplaces.",
    solution:
      "We built a custom e-commerce website with optimized product browsing, fast checkout flow, and a flexible admin system.",
    features: [
      { title: "Multi-category Store", description: "Toys, electronics, fashion and lifestyle products." },
      { title: "Optimized Checkout", description: "Fast, mobile-first checkout experience." },
      { title: "Admin Dashboard", description: "Manage products, orders and discounts easily." },
      { title: "Performance Focused", description: "Optimized for speed and scalability." },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    results: [
      { metric: "Fast launch", label: "time to market", description: "Store launched within a tight timeline." },
      { metric: "Stable traffic", label: "handling", description: "Smooth performance during peak usage." },
      { metric: "Mobile-first", label: "experience", description: "Optimized shopping on mobile devices." },
    ],
    images: ["/megamart.png"],
  },
  {
    slug: "electrohub",
    title: "electrohub",
    industry: "E-commerce",
    location: "USA",
    year: "2025",
    category: "Web",
    description:
      "US-based electronics store with advanced filtering, cart and secure checkout.",
    challenge:
      "The client wanted a secure, scalable electronics store with smooth browsing and checkout.",
    solution:
      "Developed a modern e-commerce platform with advanced filters, cart, and payment integration.",
    features: [
      { title: "Product Filters", description: "Smart filtering and sorting." },
      { title: "Secure Checkout", description: "Integrated payment gateways." },
      { title: "Admin Dashboard", description: "Manage inventory, orders and discounts." },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    results: [
      { metric: "High conversion", label: "rate", description: "Smooth checkout increased sales." },
    ],
    images: ["/electrohub.png"],
  },
  {
    slug: "paperless-smes",
    title: "paperless-smes",
    industry: "ERP / SME",
    location: "Bangladesh",
    year: "2025",
    category: "Web",
    description:
      "Unified SME business management system replacing spreadsheets and manual tracking.",
    challenge:
      "Disconnected spreadsheets made it difficult to track sales, inventory, and payments.",
    solution:
      "Developed an ERP-lite system covering sales, inventory, accounts and reports.",
    features: [
      { title: "Sales & POS", description: "Invoices, returns and receipts." },
      { title: "Inventory", description: "Stock tracking and alerts." },
      { title: "Accounting", description: "Ledgers and profit reports." },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    results: [
      { metric: "90%", label: "digital", description: "Operations moved online." },
      { metric: "Realtime", label: "visibility", description: "Live stock and sales data." },
    ],
    images: ["/paperless.png"],
  },
  {
    slug: "cafe-website",
    title: "cafe-website",
    industry: "Food & Beverage",
    location: "Australia",
    year: "2025",
    category: "Web",
    description:
      "Modern marketing website designed to convert visitors into reservations and orders.",
    challenge:
      "The café needed a fast, mobile-friendly site to increase reservations.",
    solution:
      "Delivered an SEO-optimized website with clear CTAs and review integration.",
    features: [
      { title: "Menu Highlights", description: "Top dishes and offers." },
      { title: "Google Reviews", description: "Trust-building social proof." },
      { title: "Reservation CTA", description: "Clear conversion points." },
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      { metric: "+45%", label: "reservations", description: "Increase in online bookings." },
    ],
    images: ["/cafe-website.jpg"],
  },
  {
    slug: "Automobile Servicing System",
    title: "Bike Servicing Slot Booking",
    industry: "Automotive",
    location: "Bangladesh",
    year: "2025",
    category: "Web",
    description:
      "Online appointment booking platform for bike servicing centers with date and time-slot selection.",
    challenge:
      "Service centers struggled with phone-based bookings causing congestion and poor capacity planning.",
    solution:
      "Built a real-time booking system with slot limits, notifications, and admin scheduling controls.",
    features: [
      { title: "Calendar Availability", description: "Day-wise capacity and holiday control." },
      { title: "Slot Booking", description: "Real-time slot locking and confirmation." },
      { title: "Notifications", description: "SMS and email alerts." },
      { title: "Admin Controls", description: "Service bay and schedule management." },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    results: [
      { metric: "-60%", label: "calls", description: "Reduced booking calls significantly." },
      { metric: "+35%", label: "utilization", description: "Better service bay usage." },
    ],
    images: ["/bike-servicing-slot-booking.jpg"],
  },
  {
    slug: "Restaurant Management System",
    title: "Restaurant Management System",
    industry: "Food & Beverage",
    location: "Bangladesh",
    year: "2025",
    category: "Web",
    description:
      "Back-office system covering POS, kitchen orders and reporting.",
    challenge:
      "Multiple disconnected tools caused delays and mistakes.",
    solution:
      "Unified POS and kitchen workflow into a single system.",
    features: [
      { title: "POS & Billing", description: "Fast order processing." },
      { title: "Kitchen Orders", description: "Live order tracking." },
      { title: "Reports", description: "Daily sales insights." },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    results: [
      { metric: "+25%", label: "speed", description: "Faster order handling." },
    ],
    images: ["/restaurant-management.jpg"],
  },
  {
    slug: "pos-system",
    title: "pos-system",
    industry: "Retail / POS",
    location: "Bangladesh",
    year: "2025",
    category: "Web",
    description:
      "Point-of-sale system for retail with inventory and sales reporting.",
    challenge:
      "Manual billing and fragmented systems slowed operations.",
    solution:
      "Developed a unified POS system with inventory management and analytics.",
    features: [
      { title: "Billing & POS", description: "Quick invoice generation." },
      { title: "Inventory Tracking", description: "Real-time stock updates." },
      { title: "Reports & Analytics", description: "Daily and monthly insights." },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    results: [
      { metric: "+30%", label: "efficiency", description: "Improved daily operations." },
    ],
    images: ["/pos-system-interface.jpg"],
  },
];

/* =====================================================
   REQUIRED FOR DYNAMIC ROUTES (FIXES 404)
===================================================== */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

/* =====================================================
   METADATA
===================================================== */

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return { title: "Project Not Found | ModernSoft Innovations" }
  }

  return {
    title: `${project.title} – Case Study | ModernSoft Innovations`,
    description: project.description,
  }
}

/* =====================================================
   PAGE
===================================================== */

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyDetail project={project} />
    </main>
  )
}
