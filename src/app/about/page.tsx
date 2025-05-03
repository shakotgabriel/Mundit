import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Mundit Investment Ltd | Premium Property Consultancy',
  description: 'Learn about Mundit Investment Ltd, a leading property consultancy firm committed to excellence in real estate solutions and professional services.',
  keywords: 'Mundit Investment, property consultancy, real estate solutions, premium property services, South Sudan real estate',
  openGraph: {
    title: 'About Mundit Investment Ltd | Premium Property Consultancy',
    description: 'Learn about Mundit Investment Ltd, a leading property consultancy firm committed to excellence in real estate solutions and professional services.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mundit Investment Ltd',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
}

export default function AboutPage() {
  return <AboutContent />
}