import Hero from '@/components/Hero'
import About from '@/components/About'
import ServicesOverview from '@/components/ServicesOverview'
import Clients from '@/components/Clients'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Clients />
      <ServicesOverview />
      <CTA />
    </main>
  )
}
