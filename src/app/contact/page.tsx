import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Contact Us - Tonsco International',
  description: 'Contact Tonsco International for pipeline and integrity services. Reach us at our Jakarta office or Bekasi workshop.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get In Touch"
        subtitle="Let's discuss how we can help with your pipeline integrity needs"
        backgroundImage="/images/Team Monitoring and Operational Briefing.jpg"
      />
      <ContactSection />
      <MapSection />
    </main>
  )
}
