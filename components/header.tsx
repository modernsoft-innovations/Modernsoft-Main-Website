"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
const [mobileOpen, setMobileOpen] = useState(false)
const [servicesOpen, setServicesOpen] = useState(false)
const [collaborationOpen, setCollaborationOpen] = useState(false)

const serviceMegaMenu = {
  tagline: "AI-powered development for 10× faster software delivery.",
  collaboration: [
    { name: "White Label Partnership", href: "/partnerships" },
    { name: "Staff Augmentation", href: "/partnerships" },
    { name: "MVP Development", href: "/partnerships" },
    { name: "Solution Partner", href: "/partnerships" },
    { name: "Project-Based Development", href: "/partnerships" },
  ],
  services: [
    { name: "Website Design & Development", href: "/services/website-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "E-commerce Solution", href: "/services/ecommerce" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "AI & Business Automation", href: "/services/ai-automation" },
    { name: "QA & Automation Testing", href: "/services/software-testing" },
  ],
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

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
          <nav className="hidden md:flex items-center gap-8 font-normal">
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
                    className="absolute left-1/2 -translate-x-1/2 mt-6 w-[1000px] rounded-2xl bg-[#ffffff] p-8 shadow-2xl"
                  >
                    <p className="text-white font-semibold mb-6">
                      {serviceMegaMenu.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-10 text-slate-800">
                      <div>
                        <h4 className="mb-4 font-bold text-orange-400">
                          Services
                        </h4>
                        {serviceMegaMenu.services.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-1.5 text-1xl hover:text-orange-300"
                          >
                            → {item.name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block mt-4 font-semibold text-orange-400 hover:underline"
                        >
                          View All Services →
                        </Link>
                      </div>

                      <div>
                        <h4 className="mb-4 font-bold text-orange-400">
                          Collaboration Models
                        </h4>
                        {serviceMegaMenu.collaboration.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-1.5 text-1xl hover:text-orange-300"
                          >
                            → {item.name}
                          </Link>
                        ))}
                      </div>
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
              <Button className="bg-yellow-400 hover:bg-yellow-600 text-black px-8 py-6">
                Schedule Call
              </Button>
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
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
      className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t"
    >
      <nav className="px-6 py-8 space-y-6 text-[16px]">

        {/* HOME */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="block py-2"
        >
          Home
        </Link>

        {/* ABOUT */}
        <Link
          href="/about"
          onClick={() => setMobileOpen(false)}
          className="block py-2"
        >
          About
        </Link>

        {/* SERVICES DROPDOWN */}
        <div className="border-t pt-4">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex w-full items-center justify-between py-2 font-semibold"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 space-y-3 pl-4 text-sm text-slate-700"
              >
                {serviceMegaMenu.services.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setMobileOpen(false)
                      setServicesOpen(false)
                    }}
                    className="block py-1"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/services"
                  onClick={() => {
                    setMobileOpen(false)
                    setServicesOpen(false)
                  }}
                  className="block pt-2 font-semibold text-orange-600"
                >
                  View All Services →
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* COLLABORATION MODELS DROPDOWN */}
        <div className="border-t pt-4">
          <button
            onClick={() => setCollaborationOpen(!collaborationOpen)}
            className="flex w-full items-center justify-between py-2 font-semibold"
          >
            Collaboration Models
            <ChevronDown
              size={18}
              className={`transition-transform ${
                collaborationOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {collaborationOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 space-y-3 pl-4 text-sm text-slate-700"
              >
                {serviceMegaMenu.collaboration.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setMobileOpen(false)
                      setCollaborationOpen(false)
                    }}
                    className="block py-1"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/partnerships"
                  onClick={() => {
                    setMobileOpen(false)
                    setCollaborationOpen(false)
                  }}
                  className="block pt-2 font-semibold text-orange-600"
                >
                  View All Models →
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PORTFOLIO */}
        <Link
          href="/portfolio"
          onClick={() => setMobileOpen(false)}
          className="block py-2"
        >
          Portfolio
        </Link>

        {/* CAREER */}
        <Link
          href="/careers"
          onClick={() => setMobileOpen(false)}
          className="block py-2"
        >
          Career
        </Link>

        {/* CONTACT */}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="block py-2"
        >
          Contact
        </Link>

        {/* BLOG */}
        <Link
          href="/blog"
          onClick={() => setMobileOpen(false)}
          className="block py-2"
        >
          Blog
        </Link>

        {/* CTA */}
        <a
          href="https://calendly.com/sadmansakib4112/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black py-5 text-base">
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
