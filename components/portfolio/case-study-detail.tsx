"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

interface Project {
  slug: string
  title: string
  industry: string
  location: string
  year: string
  category: string
  description: string
  challenge: string
  solution: string
  features: Array<{
    title: string
    description: string
  }>
  technologies: string[]
  results: Array<{
    metric: string
    label: string
    description: string
  }>
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  images: string[]
}

export default function CaseStudyDetail({ project }: { project: Project }) {
  return (
    <div className="bg-white">
      {/* Hero */}
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-1.5 bg-cyan-500 text-white rounded-full text-sm font-semibold">
                  {project.category}
                </span>
                <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm">{project.industry}</span>
                <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm">{project.location}</span>
                <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm">{project.year}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
              <p className="text-xl text-slate-300 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={project.images[0] || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Challenge</h2>
              <p className="text-lg text-slate-700 leading-relaxed">{project.challenge}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Solution</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">{project.solution}</p>

              {/* Additional images */}
              {project.images.length > 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 2}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <Card key={index} className="p-6 border-2 border-slate-200 hover:border-cyan-300 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                    </div>
                    <p className="text-slate-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white border-2 border-slate-200 rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <Card key={index} className="p-8 border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
                    <p className="text-4xl font-bold text-cyan-600 mb-2">{result.metric}</p>
                    <p className="text-sm font-semibold text-slate-700 mb-3">{result.label}</p>
                    <p className="text-slate-600">{result.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed italic">
                  "{project.testimonial.quote}"
                </p>
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-white font-bold text-lg">{project.testimonial.author}</p>
                  <p className="text-slate-300">{project.testimonial.role}</p>
                  <p className="text-cyan-400">{project.testimonial.company}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Let's discuss how we can help transform your business with custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
              href="https://calendly.com/sadmansakib4112/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-400 hover:bg-yellow-600 text-black px-8 py-6">
                Schedule Consultant
              </Button>
            </a>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View More Projects</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
