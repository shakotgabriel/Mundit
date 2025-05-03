// services.tsx - React component file (can contain JSX)
import { CheckCircle, Briefcase, FileText, BarChart } from "lucide-react"
import { ReactNode } from "react"
import { ServiceData, servicesData, getServiceDataById } from "./services-data"

export interface Service extends ServiceData {
  icon: ReactNode
  additionalContent?: ReactNode
}

export function getServiceIcon(iconType: string): ReactNode {
  switch (iconType) {
    case "Briefcase":
      return <Briefcase className="h-8 w-8 text-white" />
    case "CheckCircle":
      return <CheckCircle className="h-8 w-8 text-white" />
    case "FileText":
      return <FileText className="h-8 w-8 text-white" />
    case "BarChart":
      return <BarChart className="h-8 w-8 text-white" />
    default:
      return null
  }
}

export function getAdditionalContent(id: number): ReactNode {
  switch (id) {
    case 1:
      return (
        <div>
          <p className="mb-4">
            We offer property development advice from the inception stage to the final/completion stage. Our property
            management services ensure that your investment is well-maintained and profitable.
          </p>
          <p>
            Our team of experienced professionals will handle all aspects of property management, from tenant relations to
            maintenance and financial reporting, allowing you to focus on your core business.
          </p>
        </div>
      )
    case 3:
      return (
        <div>
          <p className="mb-4">
            By analyzing the construction contract and the parties' performance throughout the construction duration, our
            consultants can identify liability, quantify damages, and assist in resolving the dispute in a timely and
            cost-effective manner.
          </p>
          <p>
            Our dispute resolution services are designed to help you avoid costly litigation and resolve disputes quickly
            and efficiently, allowing you to focus on your business.
          </p>
        </div>
      )
    case 4:
      return (
        <div>
          <p className="mb-4">
            We engage in market research which enables us to advise our clients in need of long-term finances for real
            estate development. We scan our database of potential financers/lending institutions and recommend the
            cheapest source of funds available on the market.
          </p>
          <p>
            Worth mentioning is the fact that we are in the process of constructing a variety of real estate indices
            required for property performance measurement purposes.
          </p>
        </div>
      )
    default:
      return null
  }
}

// Convert ServiceData to Service with React components
export function getServices(): Service[] {
  return servicesData.map(serviceData => ({
    ...serviceData,
    icon: getServiceIcon(serviceData.iconType),
    additionalContent: serviceData.additionalContentId 
      ? getAdditionalContent(serviceData.additionalContentId)
      : undefined
  }))
}

export function getServiceById(id: number): Service | undefined {
  const serviceData = getServiceDataById(id)
  if (!serviceData) return undefined
  
  return {
    ...serviceData,
    icon: getServiceIcon(serviceData.iconType),
    additionalContent: serviceData.additionalContentId
      ? getAdditionalContent(serviceData.additionalContentId)
      : undefined
  }
}

export function getServiceBySlug(slug: string): Service | undefined {
  const serviceData = servicesData.find(s => s.slug === slug)
  if (!serviceData) return undefined
  
  return {
    ...serviceData,
    icon: getServiceIcon(serviceData.iconType),
    additionalContent: serviceData.additionalContentId 
      ? getAdditionalContent(serviceData.additionalContentId)
      : undefined
  }
}

export const services = getServices()