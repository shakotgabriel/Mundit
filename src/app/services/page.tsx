import { Metadata } from 'next'
import ServicesContent from './ServiceContent'

export const metadata: Metadata = {
  title: 'Our Services | Mundit Investment Ltd Property Solutions',
  description: 'Discover our comprehensive range of property services including consultancy, management, valuation, and real estate solutions in South Sudan.',
  keywords: 'property services, real estate consultancy, property management, real estate valuation, South Sudan property services, Juba real estate',
  openGraph: {
    title: 'Our Services | Mundit Investment Ltd Property Solutions',
    description: 'Discover our comprehensive range of property services including consultancy, management, valuation, and real estate solutions in South Sudan.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mundit Investment Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function ServicesPage() {
  return <ServicesContent />
}