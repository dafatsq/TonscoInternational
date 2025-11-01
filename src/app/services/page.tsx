import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServicesDetail from '@/components/ServicesDetail'
import WhyChoose from '@/components/WhyChoose'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Our Services - Tonsco International',
  description: 'Comprehensive pipeline and integrity services including inspection, hot tapping, NDT, and construction solutions',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions for pipeline integrity and industrial services"
        backgroundImage="/images/Worker Operating Pipeline Launcher Hatch.jpg"
      />
      <ServicesDetail />
      <WhyChoose />
      <CTA />
    </main>
  )
}
