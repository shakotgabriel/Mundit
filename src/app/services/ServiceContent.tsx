import { services } from "@/lib/services"
import ServiceCard from "@/components/servicecard"

export default function ServicesPage() {
  return (
    <section className="relative container py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-teal-50"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-800"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-teal-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-600"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Section header with decorative elements */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block relative">
            <span className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-teal-800 opacity-70"></span>
            <span className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-teal-800 opacity-70"></span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800 px-8">
              Our Services
            </h1>
          </div>
          <p className="max-w-[700px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our comprehensive range of specialized services that set us apart in the industry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-800/30 via-teal-800 to-teal-800/30 mt-4"></div>
        </div>

        {/* Services cards with unique design */}
        <div className="space-y--8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
