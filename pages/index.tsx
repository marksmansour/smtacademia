import AboutSection from 'components/Home/AboutSection'
import BlogSection from 'components/Home/BlogSection'
import ContactSection from 'components/Home/ContactSection'
import CtaSection from 'components/Home/CtaSection'
import DonateSection from 'components/Home/DonateSection'
import EventSection from 'components/Home/EventSection'
import HeroSection from 'components/Home/HeroSection'
import Layout from 'components/Layout'

export default function Page() {
  return (
    <Layout>
      <HeroSection
        title="Learning & Growing Academy"
        subtitle="Discover what it takes to embody
        contemplative wisdom in our daily lives
        with this brand new podcast series from the
        Center for Action and Contemplation"
      />
      <AboutSection />
      <BlogSection />
      <EventSection />
      <CtaSection />
      <ContactSection />
      <DonateSection />
    </Layout>
  )
}
