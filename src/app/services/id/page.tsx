import { CheckCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getServiceBySlug, type Service } from "@/lib/services"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.id)
  if (!service) return { title: "Service Not Found" }
  
  return {
    title: service.title,
    description: service.description,
  }
}

export async function generateStaticParams() {
  const services = await import("@/lib/services").then((mod) => mod.services)
  return services.map((service: Service) => ({
    id: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = getServiceBySlug(params.id)

  if (!service) {
    notFound()
  }

  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-teal-50"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-800"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-teal-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-600"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/services">
            <Button variant="ghost" className="group text-teal-800 hover:text-teal-900 hover:bg-teal-100">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Service header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block relative">
            <span className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-teal-800 opacity-70"></span>
            <span className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-teal-800 opacity-70"></span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800 px-8">
              {service.title}
            </h1>
          </div>
          <p className="max-w-[700px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {service.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-800/30 via-teal-800 to-teal-800/30 mt-4"></div>
        </div>

        {/* Service content */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Main content */}
          <div className="bg-white rounded-xl shadow-xl p-8 lg:p-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Icon header */}
            <div className="absolute -top-8 -left-2 w-16 h-16 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg transform -rotate-6">
              <div
                className={`w-full h-full rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}
              >
                {service.icon}
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <h2 className="text-2xl font-bold text-teal-800">About This Service</h2>
              <p className="text-teal-700">
                {service.fullDescription || service.description}
              </p>

              {/* Styled list items */}
              <div>
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.items?.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-800/10 flex items-center justify-center group-hover:bg-teal-800/20 transition-colors">
                        <CheckCircle className="h-4 w-4 text-teal-800" />
                      </span>
                      <span className="text-sm md:text-base text-teal-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional content */}
              {service.additionalContent && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">Additional Information</h3>
                  {service.additionalContent}
                </div>
              )}
            </div>
          </div>

          {/* Related services */}
          {service.relatedServices && service.relatedServices.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Related Services</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
                {service.relatedServices.map((relatedSlug: string) => {
                  const relatedService = getServiceBySlug(relatedSlug)
                  if (!relatedService) return null

                  return (
                    <Link href={`/services/${relatedService.slug}`} key={relatedService.slug} className="group">
                      <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${relatedService.color} flex items-center justify-center`}
                          >
                            {relatedService.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-teal-800">{relatedService.title}</h3>
                        </div>
                        <p className="text-teal-700 text-sm">{relatedService.description}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
