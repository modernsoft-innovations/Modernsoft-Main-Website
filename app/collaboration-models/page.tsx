import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { CollaborationCTA } from "./collaboration-cta"

export const metadata: Metadata = {
  title: "Collaboration Models | Partnership Options | Modernsoft Innovations",
  description:
    "Flexible collaboration models tailored to your needs. Choose from dedicated teams, project-based, staff augmentation, managed services, consulting, hybrid, or retainer support.",
  keywords: "collaboration models, partnership, dedicated team, staff augmentation, managed services, consulting",
}

const collaborationModels = [
  {
    id: "dedicated-team",
    title: "Dedicated Team",
    icon: "👥",
    description: "A fully committed team working exclusively on your project",
    benefits: [
      "Exclusive team focus",
      "Deep project knowledge",
      "Seamless communication",
      "Long-term commitment",
      "Scalable team size",
      "Full accountability",
    ],
    bestFor: "Long-term projects, startups, continuous development",
    commitment: "3-12 months",
    price: "Custom",
  },
  {
    id: "project-based",
    icon: "📋",
    title: "Project-Based",
    description: "Fixed scope, timeline, and budget for specific projects",
    benefits: [
      "Clear deliverables",
      "Fixed budget",
      "Defined timeline",
      "Predictable costs",
      "Quality assurance",
      "Milestone tracking",
    ],
    bestFor: "Well-defined projects, MVPs, specific features",
    commitment: "1-6 months",
    price: "Fixed",
  },
  {
    id: "staff-augmentation",
    icon: "🔧",
    title: "Staff Augmentation",
    description: "Extend your team with skilled developers on-demand",
    benefits: [
      "Flexible scaling",
      "Specific expertise",
      "Quick onboarding",
      "Cost-effective",
      "No hiring overhead",
      "Skill diversity",
    ],
    bestFor: "Temporary resource needs, skill gaps, peak workloads",
    commitment: "Flexible",
    price: "Hourly/Monthly",
  },
  {
    id: "managed-services",
    icon: "⚙️",
    title: "Managed Services",
    description: "End-to-end management of your software development",
    benefits: [
      "Full responsibility",
      "Proactive management",
      "Quality monitoring",
      "Regular reporting",
      "Continuous improvement",
      "Risk mitigation",
    ],
    bestFor: "Companies without in-house tech teams, outsourced development",
    commitment: "6-24 months",
    price: "Monthly retainer",
  },
  {
    id: "consulting",
    icon: "💡",
    title: "Consulting & Strategy",
    description: "Expert guidance for your technology decisions",
    benefits: [
      "Strategic planning",
      "Technology roadmap",
      "Architecture design",
      "Best practices",
      "Risk assessment",
      "Implementation guidance",
    ],
    bestFor: "Digital transformation, technology planning, optimization",
    commitment: "Project-based",
    price: "Hourly/Project",
  },
  {
    id: "hybrid-model",
    icon: "🔄",
    title: "Hybrid Model",
    description: "Combination of dedicated team and project-based work",
    benefits: [
      "Flexibility",
      "Cost optimization",
      "Scalability",
      "Dedicated core team",
      "Project flexibility",
      "Balanced approach",
    ],
    bestFor: "Growing companies, variable workloads, multiple projects",
    commitment: "3-12 months",
    price: "Custom",
  },
  {
    id: "retainer-support",
    icon: "🛡️",
    title: "Retainer Support",
    description: "Ongoing support and maintenance for your applications",
    benefits: [
      "Continuous support",
      "Bug fixes & updates",
      "Performance monitoring",
      "Security updates",
      "Priority response",
      "Predictable costs",
    ],
    bestFor: "Existing applications, maintenance, ongoing support",
    commitment: "Ongoing",
    price: "Monthly",
  },
]

export default function CollaborationModelsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Collaboration Models</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Choose the partnership model that best fits your business needs and goals
            </p>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborationModels.map((model) => (
              <Card
                key={model.id}
                id={model.id}
                className="p-8 border-2 border-slate-200 hover:border-cyan-500 transition-all group flex flex-col"
              >
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{model.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{model.description}</p>

                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 font-medium">Commitment</p>
                      <p className="text-slate-900 font-semibold">{model.commitment}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium">Pricing</p>
                      <p className="text-slate-900 font-semibold">{model.price}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Key Benefits:</p>
                  <ul className="space-y-2">
                    {model.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-cyan-50 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">Best for: </span>
                    {model.bestFor}
                  </p>
                </div>

                <div className="mt-auto block">
                  <CollaborationCTA text="Get Started" variant="inline" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose Modernsoft?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible & Scalable</h3>
                    <p className="text-slate-600">
                      Scale your team up or down based on your project needs without long-term commitments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h3>
                    <p className="text-slate-600">
                      Access to 10+ experienced engineers with expertise across modern technologies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Cost-Effective</h3>
                    <p className="text-slate-600">
                      Get enterprise-grade development at competitive offshore rates without compromising quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Transparent Communication</h3>
                    <p className="text-slate-600">
                      Regular updates, clear reporting, and direct access to your team throughout the project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Assurance</h3>
                    <p className="text-slate-600">
                      Rigorous testing, code reviews, and quality standards ensure exceptional results.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-slate-600">
                      75+ successful projects delivered across diverse industries and technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which collaboration model works best for your project and business goals.
          </p>
          <CollaborationCTA text="Schedule a Consultation" variant="section" showIcon={false} />
        </div>
      </section>
    </main>
  )
}
