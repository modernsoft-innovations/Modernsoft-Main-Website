import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function underConstruction() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Page under construction</h1>
          <p className="text-xl text-slate-300 mb-8">
            We're working hard to bring you the best experience possible.
          </p>

      
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
