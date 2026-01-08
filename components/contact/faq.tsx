"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How much does custom software development cost?",
    answer:
      "Project costs vary based on complexity, features, and timeline. We provide detailed quotes after understanding your requirements in a free consultation.",
  },
  {
    question: "What's your development process?",
    answer:
      "We follow an Agile methodology with 2-week sprints. You'll receive weekly demos, daily communication via Slack/email, and access to project management tools. Our process includes: Discovery → Design → Development → Testing → Deployment → Support.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We've helped numerous startups build their MVPs and scale their products. We understand startup constraints and can work with flexible payment terms, equity arrangements, or phased development to fit your budget.",
  },
  {
    question: "What's the typical project timeline?",
    answer:
      "Timelines vary by project scope. Simple websites take 4-6 weeks, mobile apps 12-16 weeks, and complex enterprise systems 16-24+ weeks. We provide accurate estimates after requirements analysis and can adjust timelines based on your launch needs.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes! All projects include 30 days of post-launch support. We offer ongoing maintenance packages including bug fixes, updates, security patches, and feature enhancements. We also provide 24/7 emergency support for critical issues.",
  },
  {
    question: "Can you work in our timezone?",
    answer:
      "Yes, we're flexible with meeting times to accommodate US, UK, and Australian clients. Our team overlaps with multiple timezones, and we schedule regular calls at times convenient for you. We also provide daily async updates.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, proven technologies including React, Next.js, Node.js, Python, Flutter, AWS, and more. We select the best tech stack for your specific needs, considering scalability, performance, and long-term maintainability.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "Quality is non-negotiable. We implement code reviews, automated testing, manual QA, security audits, and performance optimization. Every project follows industry best practices and undergoes rigorous testing before deployment.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quick answers to common questions about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card
                className="border-2 border-slate-200 hover:border-cyan-300 transition-all cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-200"
                    >
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
