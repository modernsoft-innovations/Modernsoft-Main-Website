"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"

interface TechItem {
  name: string;
  experience: string;
  logo: string;
}

const techCategories: Record<string, TechItem[]> = {
  Frontend: [
    { name: "React.js", experience: "5+ years", logo: "/tech/react.svg" },
    { name: "Next.js", experience: "5+ years", logo: "/tech/nextjs.svg" },
    { name: "Vue.js", experience: "4+ years", logo: "/tech/vue.svg" },
    { name: "Angular", experience: "4+ years", logo: "/tech/angular.svg" },
    { name: "TypeScript", experience: "5+ years", logo: "/tech/typescript.svg" },
    { name: "Tailwind CSS", experience: "3+ years", logo: "/tech/tailwind.svg" },
  ],
  Backend: [
    { name: "Node.js", experience: "5+ years", logo: "/tech/nodejs.svg" },
    { name: "Python Django", experience: "5+ years", logo: "/tech/django.svg" },
    { name: "PHP Laravel", experience: "5+ years", logo: "/tech/laravel.svg" },
    { name: "ASP.NET Core", experience: "4+ years", logo: "/tech/dotnet.svg" },
    { name: "FastAPI", experience: "3+ years", logo: "/tech/fastapi.svg" },
    { name: "Ruby on Rails", experience: "3+ years", logo: "/tech/rails.svg" },
  ],
  Mobile: [
    { name: "Flutter", experience: "4+ years", logo: "/tech/flutter.svg" },
    { name: "React Native", experience: "4+ years", logo: "/tech/react-native.svg" },
    { name: "Swift (iOS)", experience: "5+ years", logo: "/tech/swift.svg" },
    { name: "Kotlin (Android)", experience: "5+ years", logo: "/tech/kotlin.svg" },
    { name: "Xamarin", experience: "3+ years", logo: "/tech/xamarin.svg" },
  ],
  "AI/ML": [
    { name: "OpenAI GPT-4", experience: "2+ years", logo: "/tech/openai.svg" },
    { name: "LangChain", experience: "2+ years", logo: "/tech/langchain.svg" },
    { name: "TensorFlow", experience: "4+ years", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", experience: "3+ years", logo: "/tech/pytorch.svg" },
    { name: "Hugging Face", experience: "2+ years", logo: "/tech/huggingface.svg" },
    { name: "Pinecone", experience: "2+ years", logo: "/tech/pinecone.svg" },
  ],
  Cloud: [
    { name: "Amazon AWS", experience: "5+ years", logo: "/tech/aws.svg" },
    { name: "Microsoft Azure", experience: "4+ years", logo: "/tech/azure.svg" },
    { name: "Google Cloud", experience: "4+ years", logo: "/tech/gcp.svg" },
    { name: "Docker", experience: "5+ years", logo: "/tech/docker.svg" },
    { name: "Kubernetes", experience: "4+ years", logo: "/tech/kubernetes.svg" },
    { name: "Terraform", experience: "3+ years", logo: "/tech/terraform.svg" },
  ],
}

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof techCategories>("Frontend")

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Modern, battle-tested technologies chosen specifically for performance, scalability, and long-term
            maintainability
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof techCategories)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-blue-600/50"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {techCategories[activeCategory].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="p-6 bg-white border-slate-200 hover:border-purple-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center">
                      <img
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {tech.name}
                    </h3>
                    {/* <p className="text-sm text-slate-600">{tech.experience}</p> */}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
