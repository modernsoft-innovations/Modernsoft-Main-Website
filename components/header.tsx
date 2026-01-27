"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const serviceMegaMenu = {
  tagline: "Premium offshore software solutions designed to accelerate your business growth.",
  services: [
    { name: "Custom Software Development", href: "/services/software-development" },
    { name: "Website Design & Development", href: "/services/website-development" },
    { name: "E-commerce Solutions", href: "/services/ecommerce" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "AI & Business Automation", href: "/services/ai-automation" },
    { name: "QA & Automation Testing", href: "/services/software-testing" },
  ],
  collaboration: [
    { name: "Managed Development Partner", href: "/partnerships" },
    { name: "White Label Partnership", href: "/partnerships" },
    { name: "Staff Augmentation", href: "/partnerships" },
    { name: "MVP Development", href: "/partnerships" },
    { name: "Project-Based Development", href: "/partnerships" },
  ],
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [collaborationOpen, setCollaborationOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="ModernSoft Innovations" width={56} height={56} />
            <span className="font-bold text-lg">
              <span className="text-[#042246]">ModernSoft</span> Innovations
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-6 w-[1000px] rounded-2xl bg-white p-10 shadow-2xl"
                  >
                    <p className="font-semibold mb-6 text-slate-700 text-lg">
                      {serviceMegaMenu.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-12">
                      {/* SERVICES */}
                      <div>
                        <h4 className="mb-6 font-bold text-xl text-amber-500">Services</h4>
                        {serviceMegaMenu.services.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2 text-lg hover:text-[#FFB400] transition-colors"
                          >
                            → {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* COLLABORATION MODELS */}
                      <div>
                        <h4 className="mb-6 font-bold text-xl text-amber-500 underline-offset-4">
                          Collaboration Models
                        </h4>
                        {serviceMegaMenu.collaboration.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2 text-lg hover:text-[#FFB400] transition-colors"
                          >
                            → {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* VIEW ALL CTA */}
                    <div className="mt-8 pt-6 border-t flex justify-center">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-4 font-semibold text-black hover:bg-yellow-500 transition"
                      >
                        View All Services
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio">Portfolio</Link>
            <Link href="/careers">Career</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>

            <a
              href="https://calendly.com/sadmansakib4112/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-base">
                Schedule Call
              </Button>
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="md:hidden bg-white border-t shadow-xl"
          >
            <nav className="px-6 py-8 flex flex-col gap-5 text-base font-semibold">

              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>

              {/* SERVICES */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between"
                >
                  Services <ChevronDown
                    size={18}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-2 text-lg">
                    {serviceMegaMenu.services.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block hover:text-[#FFB400] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* COLLABORATION */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setCollaborationOpen(!collaborationOpen)}
                  className="flex items-center justify-between"
                >
                  Collaboration Models <ChevronDown
                    size={18}
                    className={`transition-transform ${collaborationOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {collaborationOpen && (
                  <div className="pl-4 flex flex-col gap-2 text-lg">
                    {serviceMegaMenu.collaboration.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block hover:text-[#FFB400] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link href="/careers" onClick={() => setMobileOpen(false)}>Career</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>

              {/* CTA */}
              <a
                href="https://calendly.com/sadmansakib4112/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-5 text-base">
                  Schedule a Call
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
