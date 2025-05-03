import { Metadata } from 'next'
import ProfileContent from './ProfileContent'

export const metadata: Metadata = {
  title: 'Company Profile | Mundit Investment Ltd South Sudan',
  description: 'Explore Mundit Investment Ltd\'s comprehensive profile, our journey in South Sudan\'s real estate sector, and our commitment to excellence in property consultancy.',
  keywords: 'Mundit Investment profile, South Sudan real estate company, property consultancy profile, real estate expertise, Juba property services',
  openGraph: {
    title: 'Company Profile | Mundit Investment Ltd South Sudan',
    description: 'Explore Mundit Investment Ltd\'s comprehensive profile, our journey in South Sudan\'s real estate sector, and our commitment to excellence in property consultancy.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mundit Investment Ltd Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
 
}

export default function ProfilePage() {
  return <ProfileContent />
}