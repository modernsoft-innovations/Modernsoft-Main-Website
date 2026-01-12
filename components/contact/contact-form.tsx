"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import ConfirmationModal from "@/components/confirmation-modal"

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  projectBrief: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    projectBrief: ''
  })

  const [status, setStatus] = useState<{
    submitting: boolean
    submitted: boolean
    error: string | null
  }>({
    submitting: false,
    submitted: false,
    error: null
  })

  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.service || !formData.projectBrief) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in all required fields'
      })
      setShowModal(true)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please enter a valid email address'
      })
      setShowModal(true)
      return
    }

    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      })
      setShowModal(true)

      // Clear form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        projectBrief: ''
      })

    } catch (err) {
      console.error('Form submission error:', err)
      const error = err as Error
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'Failed to send message. Please try again.'
      })
      setShowModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    if (status.submitted && !status.error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: null
      })
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
<Card className="p-5 sm:p-6 md:p-8 border-2 border-slate-200">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
          <p className="text-slate-600">
            Fill out the form below and we'll get back to you within 2 hours during business hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input 
                id="fullName"
                name="fullName"
                placeholder="John Doe" 
                className="w-full" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input 
                id="email"
                name="email"
                type="email" 
                placeholder="john@company.com" 
                className="w-full" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone (Optional)</label>
              <Input 
                id="phone"
                name="phone"
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="w-full"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company (Optional)</label>
              <Input 
                id="company"
                name="company"
                placeholder="Your Company" 
                className="w-full"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select 
              id="service"
              name="service"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Custom Web Applications">Custom Web Applications</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="AI Development & Integration">AI Development & Integration</option>
              <option value="E-commerce Solutions">E-commerce Solutions</option>
              <option value="Managed Cloud Services">Managed Cloud Services</option>
              <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
              <option value="QA & Testing Services">QA & Testing Services</option>
              <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Project Budget (Optional)</label>
            <select 
              id="budget"
              name="budget"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget range</option>
              <option value="Under $10,000">Under $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="$100,000+">$100,000+</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="projectBrief" className="block text-sm font-medium text-slate-700 mb-2">
              Project Brief <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="projectBrief"
              name="projectBrief"
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              className="w-full min-h-[150px]"
              value={formData.projectBrief}
              onChange={handleChange}
              required
            />
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-slate-700">
                <p className="font-semibold mb-1">What happens next?</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• We'll review your requirements within 2 hours</li>
                  <li>• Schedule a free 30-minute consultation call</li>
                  <li>• Receive a detailed proposal and timeline</li>
                </ul>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status.submitting}
          >
            {status.submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>

        <ConfirmationModal
          isOpen={showModal}
          onClose={handleCloseModal}
          message={status.error ? status.error : 'Thank you! Your message has been sent successfully. We will get back to you soon.'}
          status={status.error ? 'error' : 'success'}
        />

<div className="mt-10 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Schedule a Call</h3>
          <p className="text-slate-600 mb-4">
            Prefer to discuss your project directly? Schedule a 30-minute consultation call with our team.
          </p>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50"
            onClick={() => window.open("https://calendly.com/sadmansakib4112/30min", "_blank")}
          >
            Schedule 30-Min Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}