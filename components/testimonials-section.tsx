"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Modernsoft Innovations helped us automate customer support using AI. We reduced costs by 70% and improved response time dramatically. Communication was clear and delivery was on point.",
    author: "Sarah Martinez",
    role: "VP of Operations",
    company: "TechFlow Solutions",
    location: "United States",
    rating: 5,
  },
  {
    quote:
      "They built a high-performance web platform that now serves over 10,000 daily users without issues. The quality, scalability, and professionalism exceeded our expectations.",
    author: "James Wilson",
    role: "CTO",
    company: "FinanceHub",
    location: "United Kingdom",
    rating: 5,
  },
  {
    quote:
      "From idea to launch, the team delivered a world-class mobile application. Their technical expertise and structured process made everything smooth.",
    author: "Emily Chen",
    role: "Product Manager",
    company: "HealthTrack",
    location: "Australia",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#0B1C2D]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-yellow-400 font-semibold mb-4">
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Businesses Worldwide
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Real results. Real partnerships. Here’s what our global clients say
            about working with Modernsoft Innovations.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative h-full bg-[#12263F] border border-white/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-yellow-400/30" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-200 leading-relaxed mb-8">
                “{testimonial.quote}”
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-400">
                  {testimonial.role} · {testimonial.company}
                </p>
                <p className="text-sm text-yellow-400 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
