import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services"

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="relative container">
      <div className={`relative grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:rtl" : ""}`}>
        {/* Service card with overlapping elements */}
        <div className="relative z-20 bg-white rounded-xl shadow-xl p-8 lg:p-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          {/* Icon header */}
          <div className="absolute -top-8 -left-2 w-16 h-16 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg transform -rotate-6">
            <div
              className={`w-full h-full rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}
            >
              {service.icon}
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <h3 className="text-2xl font-bold text-teal-800">{service.title}</h3>
            <p className="text-teal-700">{service.description}</p>

            {/* Styled list items */}
            <ul className="space-y-3 pt-4">
              {service.items.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-800/10 flex items-center justify-center group-hover:bg-teal-800/20 transition-colors">
                    <CheckCircle className="h-4 w-4 text-teal-800" />
                  </span>
                  <span className="text-sm md:text-base text-teal-900">{item}</span>
                </li>
              ))}
            </ul>

            
          </div>
        </div>

        {/* Image with decorative elements */}
        <div className={`relative lg:ltr ${index % 2 === 1 ? "lg:-ml-8" : "lg:-mr-8"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/20 to-transparent rounded-xl transform rotate-3 scale-105"></div>
          <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className=" transition-transform duration-700 hover:scale-110"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-8 border-teal-50 rounded-xl -z-10"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-teal-800/30 rounded-xl -z-10"></div>
        </div>
      </div>
    </div>
  )
}
