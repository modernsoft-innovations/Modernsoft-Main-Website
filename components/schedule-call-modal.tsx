"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ScheduleCallModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ScheduleCallModal({ open, onOpenChange }: ScheduleCallModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white border-2 border-blue-100">
        <DialogTitle className="text-2xl font-bold text-slate-900 mb-4">Schedule a Call</DialogTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="max-w-md mx-auto">
            <p className="text-slate-700 text-lg mb-8">
              Prefer to discuss your project directly? Schedule a 30-minute consultation call with our team.
            </p>
            <Button
              type="button"
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 shadow-lg shadow-blue-500/30 font-semibold"
              onClick={() => {
                window.open("https://calendly.com/sadmansakib4112/30min?month=2025-12", "_blank")
                onOpenChange(false)
              }}
            >
              Schedule 30-Min Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}