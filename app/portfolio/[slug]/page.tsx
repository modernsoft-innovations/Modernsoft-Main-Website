import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

/* ================= TYPES ================= */

type Project = {
  slug: string
  title: string
  subtitle: string
  category: string
  location: string
  year: string
  image?: string | null
  description: string
  overview: string
  challenges: string[]
  solutions: string[]
  deliveryTime: string
  maintenance: string[]
  technologies: string[]
}


/* ================= DATA ================= */

const projects: Project[] = [
  {
    slug: "megamart-ecommerce",
    title: "MegaMart: Scaling a Multi-Category eCommerce Platform",
    subtitle:
      "A high-growth eCommerce system designed for performance, scalability, and conversions.",
    category: "E-commerce",
    location: "Australia",
    year: "2025",
    image: "/megamart.png",
    description:
      "A scalable multi-vendor eCommerce platform built to support rapid business growth.",
    overview:
      "MegaMart required a future-ready eCommerce platform capable of handling high traffic, complex product catalogs, and secure transactions. The project focused on performance optimization, SEO-friendly architecture, and conversion-driven UX.",
    challenges: [
      "Slow performance during peak traffic",
      "High cart abandonment rate",
      "Manual inventory tracking",
      "Poor SEO visibility",
      "Lack of centralized admin control",
    ],
    solutions: [
      "Custom scalable eCommerce architecture",
      "Optimized checkout experience",
      "Centralized admin dashboard",
      "SEO-ready product & category structure",
      "Mobile-first UI with fast load times",
    ],
    deliveryTime: "8–10 weeks",
    maintenance: [
      "Performance optimization",
      "Security updates",
      "Feature upgrades",
      "System monitoring",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },

  {
    slug: "electrohub",
    title: "ElectroHub: High-Performance Electronics Online Store",
    subtitle:
      "A conversion-optimized electronics store for the US market.",
    category: "E-commerce",
    location: "USA",
    year: "2025",
    image: "/electro.png",
    description:
      "An advanced electronics eCommerce platform with secure checkout and filtering.",
    overview:
      "ElectroHub needed a fast, secure, and user-friendly online store to sell electronics nationwide. The focus was on UX, filtering, performance, and trust.",
    challenges: [
      "Complex product filtering",
      "Checkout security concerns",
      "Slow page loads",
    ],
    solutions: [
      "Advanced product filtering",
      "Secure payment gateway integration",
      "Optimized frontend performance",
    ],
    deliveryTime: "6–8 weeks",
    maintenance: [
      "Security monitoring",
      "Performance tuning",
      "Feature enhancements",
    ],
    technologies: ["Next.js", "Stripe", "Tailwind", "Node.js"],
  },

  {
    slug: "paperless-smes",
    title: "Paperless SMEs: Business Management Software",
    subtitle:
      "An all-in-one ERP solution for small and medium businesses.",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2026",
    image: "/paperless.png",
    description:
      "ERP software to automate invoices, inventory, and reporting.",
    overview:
      "Paperless SMEs is a complete business management system designed to eliminate manual workflows and improve operational efficiency.",
    challenges: [
      "Manual accounting processes",
      "No centralized reporting",
      "Inventory mismatches",
    ],
    solutions: [
      "Custom ERP system",
      "Real-time reporting dashboard",
      "Automated invoicing & inventory",
    ],
    deliveryTime: "10–12 weeks",
    maintenance: [
      "System upgrades",
      "User support",
      "Security patches",
    ],
    technologies: ["Next.js", "ASP.NET Core", "PostgreSQL", "Azure"],
  },

  {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",
    subtitle:
      "Complete order, staff, and operations management software.",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2025",
    image: "/restaurant-management.jpg",
    description:
      "Software for managing restaurant operations and reporting.",
    overview:
      "This system helps restaurants manage orders, staff, inventory, and daily sales reports from a single dashboard.",
    challenges: [
      "Manual order tracking",
      "Staff scheduling issues",
      "Lack of real-time reports",
    ],
    solutions: [
      "Centralized restaurant dashboard",
      "Automated order processing",
      "Daily sales analytics",
    ],
    deliveryTime: "8 weeks",
    maintenance: [
      "Bug fixes",
      "Performance optimization",
      "Feature upgrades",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "cafe-website",
    title: "Cafe Website – Restaurant Marketing Website",
    subtitle:
      "A modern cafe website designed to attract customers and increase reservations.",
    category: "Website",
    location: "Australia",
    year: "2025",
    image: "/cafe-website.jpg",
    description:
      "The cafe needed a visually appealing website to increase foot traffic and online reservations.",
    overview:
      "This cafe website focuses on strong branding, SEO-optimized content, and smooth user experience to convert visitors into customers.",
    challenges: [
      "Low online visibility",
      "No reservation funnel",
      "Outdated branding",
    ],
    solutions: [
      "Modern UI with strong visual storytelling",
      "SEO-optimized pages",
      "Clear call-to-action for reservations",
    ],
    deliveryTime: "3–4 weeks",
    maintenance: [
      "Content updates",
      "SEO monitoring",
    ],
    technologies: ["Next.js", "Tailwind CSS", "SEO Best Practices"],
  },

  /* ================= AUTOMOBILE SERVICING ================= */
  {
    slug: "automobile-servicing-system",
    title: "Automobile Servicing System – Online Booking Platform",
    subtitle:
      "A digital solution for automobile service centers to manage bookings and operations.",
    category: "Business Software",
    location: "Bangladesh",
    year: "2026",
    image: "/bike-servicing-slot-booking.jpg",
    description:
      "Workshops needed a centralized platform to manage service bookings and job tracking.",
    overview:
      "This system allows customers to book services online while workshop owners manage jobs, schedules, and payments efficiently.",
    challenges: [
      "Manual booking management",
      "Poor customer experience",
      "Lack of service tracking",
    ],
    solutions: [
      "Online service booking system",
      "Job tracking dashboard",
      "Customer notification system",
    ],
    deliveryTime: "6–8 weeks",
    maintenance: [
      "System updates",
      "Feature improvements",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB"],
  },
   {
    slug: "coaching-center-management",
    title: "Coaching Center Management System",
    subtitle:
      "Education management software for coaching and training centers.",
    category: "Education",
    location: "Bangladesh",
    year: "2026",
    image: null,
    description:
      "Coaching centers needed a system to manage students, fees, and attendance.",
    overview:
      "This system simplifies academic and administrative operations for coaching centers.",
    challenges: [
      "Manual student records",
      "Fee tracking difficulties",
      "Attendance management",
    ],
    solutions: [
      "Student and batch management",
      "Fee and payment tracking",
      "Attendance automation",
    ],
    deliveryTime: "4–6 weeks",
    maintenance: [
      "Ongoing support",
      "Feature upgrades",
    ],
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
  },

  {
    slug: "pos-system",
    title: "Retail POS System",
    subtitle:
      "Fast and reliable point-of-sale software for retailers.",
    category: "Enterprise",
    location: "Bangladesh",
    year: "2025",
    image: "/pos-system-interface.jpg",
    description:
      "Retail POS software with inventory and sales tracking.",
    overview:
      "A modern POS system designed for fast billing, inventory control, and reporting.",
    challenges: [
      "Slow billing process",
      "Inventory mismatches",
    ],
    solutions: [
      "Fast POS interface",
      "Real-time inventory sync",
    ],
    deliveryTime: "6 weeks",
    maintenance: [
      "System updates",
      "Performance tuning",
    ],
    technologies: ["React", "Electron", "SQLite"],
  },
]

/* ================= HELPERS ================= */

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

/* ================= METADATA ================= */

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProject(params.slug)
  if (!project) return { title: "Case Study Not Found" }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  }
}
/* ================= PAGE ================= */

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <main className="bg-white">
      {/* HERO */}
    <section className="pt-36 pb-28 text-center">
  <div className="container mx-auto px-4 max-w-6xl">
    <h1 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
      {project.title}
    </h1>

    <p className="text-2xl text-slate-600 max-w-4xl mx-auto mb-12">
      {project.subtitle}
    </p>

    <Link href="/contact">
      <Button
        size="lg"
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-7 rounded-full text-lg font-medium"
      >
        Start Similar Project →
      </Button>
    </Link>

    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
      <Meta label="Industry" value={project.category} />
      <Meta label="Location" value={project.location} />
      <Meta label="Year" value={project.year} />
      <Meta label="Technology" value={project.technologies.join(", ")} />
    </div>
  </div>
</section>

      {project.image && (
        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="rounded-xl shadow-xl"
            />
          </div>
        </section>
      )}

      {/* OVERVIEW */}
      <Content title="Project Overview">
        <p>{project.overview}</p>
      </Content>

      {/* CHALLENGES VS SOLUTIONS */}
   <Content title="Business Challenges vs Our Solutions" gray>
  <div className="grid md:grid-cols-2 gap-16 mt-16">
    <div>
      <h3 className="text-3xl font-semibold mb-8 text-red-600 text-center">
        Business Challenges
      </h3>
      <ul className="space-y-6 text-xl">
        {project.challenges.map((item) => (
          <li key={item} className="flex gap-4">
            <CheckCircle className="w-7 h-7 text-red-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-3xl font-semibold mb-8 text-green-600 text-center">
        Our Solutions
      </h3>
      <ul className="space-y-6 text-xl">
        {project.solutions.map((item) => (
          <li key={item} className="flex gap-4">
            <CheckCircle className="w-7 h-7 text-green-600 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</Content>

      {/* BUSINESS IMPACT */}
     <Content title="Business Impact After Our Solution">
  <div className="grid md:grid-cols-2 gap-16">
    <div className="bg-red-50 p-10 rounded-2xl">
      <h3 className="text-3xl font-semibold mb-8 text-red-700 text-center">
        Before
      </h3>
      <ul className="space-y-5 text-xl text-slate-700">
        <li>• Manual workflows & inefficiencies</li>
        <li>• Performance bottlenecks</li>
        <li>• Low customer engagement</li>
        <li>• Limited scalability</li>
        <li>• Poor business visibility</li>
      </ul>
    </div>

    <div className="bg-green-50 p-10 rounded-2xl">
      <h3 className="text-3xl font-semibold mb-8 text-green-700 text-center">
        After
      </h3>
      <ul className="space-y-5 text-xl text-slate-700">
        <li>• Automated & streamlined operations</li>
        <li>• High-performance scalable system</li>
        <li>• Improved customer experience</li>
        <li>• Real-time reporting & insights</li>
        <li>• Higher operational efficiency</li>
      </ul>
    </div>
  </div>
</Content>

      {/* DELIVERY */}
      <Content title="Delivery Timeline" gray>
        <p className="text-xl font-medium">{project.deliveryTime}</p>
      </Content>

      {/* MAINTENANCE */}
      <Content title="Maintenance & Support">
        <List items={project.maintenance} />
      </Content>

      {/* TECHNOLOGY */}
      <Content title="Technology Stack" gray>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-5 py-2 bg-slate-900 text-white rounded-full text-base"
            >
              {t}
            </span>
          ))}
        </div>
      </Content>

      {/* CTA */}
   <section className="py-28 bg-slate-900 text-center text-white">
  <h2 className="text-4xl md:text-5xl font-semibold mb-10">
    Want a similar enterprise solution?
  </h2>

  <Link href="/contact">
    <Button
      size="lg"
      className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-7 rounded-full text-lg font-medium"
    >
      Talk to Our Experts →
    </Button>
  </Link>
</section>

    </main>
  )
}

/* ================= UI HELPERS ================= */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-lg font-medium text-slate-900">{value}</p>
    </div>
  )
}

function Content({
  title,
  children,
  gray = false,
}: {
  title: string
  children: React.ReactNode
  gray?: boolean
}) {
  return (
    <section className={`py-28 ${gray ? "bg-slate-50" : "bg-white"}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-center">
          {title}
        </h2>

        <div className="text-xl md:text-2xl text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}

  
function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-5 text-lg">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}