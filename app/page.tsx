import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import TechStack from '@/components/TechStack'
import Timeline from '@/components/Timeline'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <About />
      <TechStack />
      <Services />
      <Timeline />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  )
}

