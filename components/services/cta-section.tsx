"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScheduleCallModal } from "@/components/schedule-call-modal"

export function ServicesCTASection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-[#0F2742] to-[#132F4C] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Build Something Impactful
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether it’s a website, software or AI solution — we’ll help you
            turn ideas into scalable products.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-[#0F2742] hover:bg-yellow-300"
            onClick={() => setOpen(true)}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <ScheduleCallModal open={open} onOpenChange={setOpen} />
    </>
  )
}
