"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Twitter,
  Github,
  BadgeCheck,
  Instagram,
} from "lucide-react"

const emails = [
  {
    label: "Sales & Partnerships",
    email: "sales@modernsoftinnovations.com",
    highlight: true,
  },
  {
    label: "Customer Support",
    email: "support@modernsoftinnovations.com",
    highlight: false,
  },
  {
    label: "General Inquiries",
    email: "contact@modernsoftinnovations.com",
    highlight: false,
  },
  {
    label: "Careers / HR",
    email: "hr@modernsoftinnovations.com",
    highlight: false,
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Direct Contact */}
      <Card className="p-6 border-2 border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          Direct Contact
        </h3>

        <div className="space-y-5">
          {/* Email Section */}
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-cyan-600 mt-1" />
            <div className="w-full">
              <p className="text-sm text-slate-600 mb-3">
                Email (Fastest way to reach us)
              </p>

              <div className="space-y-2">
                {emails.map((item) => (
                  <a
                    key={item.email}
                    href={`mailto:${item.email}`}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 transition-all
                      ${
                        item.highlight
                          ? "border-yellow-500 bg-cyan-50 hover:bg-cyan-100"
                          : "border-slate-200 hover:border-cyan-400 hover:bg-slate-50"
                      }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-600">
                        {item.email}
                      </p>
                    </div>

                    {item.highlight && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-yellow-700">
                        <BadgeCheck className="w-4 h-4" />
                        Priority
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-cyan-600 mt-1" />
            <div>
              <p className="text-sm text-slate-600 mb-1">
                Phone / WhatsApp
              </p>
              <a
                href="tel:+8801765821148"
                className="text-slate-900 font-medium hover:text-cyan-600"
              >
                +880 1765-821148
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-cyan-600 mt-1" />
            <div>
              <p className="text-sm text-slate-600 mb-1">Location</p>
              <p className="text-slate-900 font-medium">
                Dhaka, Bangladesh
              </p>
              <p className="text-sm text-slate-600">
                Serving clients worldwide
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-cyan-600 mt-1" />
            <div>
              <p className="text-sm text-slate-600 mb-1">
                Business Hours
              </p>
              <p className="text-slate-900 font-medium">
                9 AM – 9 PM (GMT +6)
              </p>
              <p className="text-sm text-slate-600">
                Flexible for US / UK / AU time zones
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Response Time */}
      <Card className="p-6 border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Fast Response Guarantee
        </h3>
        <p className="text-slate-700 mb-4">
          We respond quickly because your time matters.
        </p>
        <div className="flex items-center gap-2 text-cyan-700 font-semibold">
          <Clock className="w-5 h-5" />
          <span>Usually within 2 business hours</span>
        </div>
      </Card>

      {/* Social Media */}
      <Card className="p-6 border-2 border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Connect With Us
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/modernsoftinnovations/" },
            { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61572229409047" },
            { icon: Twitter, label: "Twitter", href: "https://x.com/Modernsoftin" },
            { icon: Instagram, label: "instagram", href: "https://www.instagram.com/modernsoft_innovations/" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
