"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function JobAccordion({
  title,
  summary,
  items,
}: {
  title: string
  summary: string
  items: string[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            {title}
          </h3>
          <p className="text-slate-500 text-sm mt-1">{summary}</p>
        </div>

        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6">
          <ul className="list-disc pl-5 space-y-3 text-slate-700 text-base">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
