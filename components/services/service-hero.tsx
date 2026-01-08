"use client"

import { motion } from "framer-motion"

interface ServiceHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

export default function ServiceHero({ 
  title = "Complete Software Development Services",
  description = "Enterprise-grade solutions tailored to your business needs. From concept to deployment, we deliver excellence at every stage.",
  backgroundImage = "/service-hero-background.jpg"
}: ServiceHeroProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90" />
      
      {/* Background pattern */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Complete Software Development Services</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Enterprise-grade solutions tailored to your business needs. From concept to deployment, we deliver
            excellence at every stage.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
