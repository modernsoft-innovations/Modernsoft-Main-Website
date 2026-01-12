"use client"

export default function JobRow({
  title,
  stack,
  description,
}: {
  title: string
  stack: string
  description: string
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-8 py-8">
      <div>
        <h3 className="text-lg font-medium text-slate-900">
          {title}
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          {stack}
        </p>
      </div>

      <div className="md:col-span-1 text-slate-600">
        {description}
      </div>

      <div className="flex md:justify-end items-start">
        <a
          href="mailto:hr@modernsoftinnovations.com"
          className="text-sm font-medium text-slate-900 border border-slate-300 px-5 py-2 rounded-md hover:border-slate-900 transition"
        >
          Mail your CV
        </a>
      </div>
    </div>
  )
}
