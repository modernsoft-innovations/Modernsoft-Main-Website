"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type ServicePageProps = {
  title: string
  subtitle: string
  whatIsTitle: string
  whatIsDescription: string[]
  mockups: string[]
}

export default function ServicePage({
  title,
  subtitle,
  whatIsTitle,
  whatIsDescription,
  mockups,
}: ServicePageProps) {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            {subtitle}
          </p>

          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* WHAT IS THIS SERVICE */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {whatIsTitle}
              </h2>

              {whatIsDescription.map((text, index) => (
                <p
                  key={index}
                  className="text-lg text-slate-600 mb-6"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* RIGHT MOCKUPS */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={mockups[0]}
                  alt={title}
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {mockups[1] && (
                <div className="absolute -bottom-12 -left-12 w-64 hidden lg:block">
                  <Image
                    src={mockups[1]}
                    alt={`${title} mobile`}
                    width={400}
                    height={600}
                    className="rounded-xl shadow-xl"
                  />
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
