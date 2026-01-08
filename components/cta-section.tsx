"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ScheduleCallModal } from "./schedule-call-modal"

export default function CTASection() {
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  return (
    <>
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-600 mb-8">Schedule a free consultation to discuss your requirements.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-blue-700 text-black text-lg px-8 py-6"
                onClick={() => setShowScheduleModal(true)}
              >
                Schedule Free Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8 py-6 bg-transparent"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <ScheduleCallModal open={showScheduleModal} onOpenChange={setShowScheduleModal} />
    </>
  )
}
