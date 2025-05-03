import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Mundit Investment Ltd | Get in Touch',
  description: 'Contact Mundit Investment Ltd for premium property consultancy services. Visit our office in Juba, South Sudan, or reach out via phone or email.',
  keywords: 'contact Mundit Investment, property consultancy contact, real estate consultation, Juba office, South Sudan real estate',
  openGraph: {
    title: 'Contact Mundit Investment Ltd | Get in Touch',
    description: 'Contact Mundit Investment Ltd for premium property consultancy services. Visit our office in Juba, South Sudan, or reach out via phone or email.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mundit Investment Ltd Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
}

export default function ContactPage() {
  return <ContactContent />
}