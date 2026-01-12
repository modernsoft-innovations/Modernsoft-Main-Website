"use client"

export default function ScrollStack({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative">
      {children}
    </section>
  )
}
