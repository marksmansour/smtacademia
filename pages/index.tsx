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
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <EventSection />
      <CtaSection />
      <ContactSection />
      <DonateSection />
    </Layout>
  )
}
