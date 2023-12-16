import AboutSection from 'components/AboutSection'
import BlogSection from 'components/BlogSection'
import ContactSection from 'components/ContactSection'
import CtaSection from 'components/CtaSection'
import DonateSection from 'components/DonateSection'
import EventSection from 'components/EventSection'
import HeroSection from 'components/HeroSection'
import Layout from 'components/Layout'
import IndexPageHead from 'components/IndexPageHead'
import type { Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const { title, description, excerpt } = settings

  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
        <HeroSection title={title} description={description} />
        <AboutSection excerpt={excerpt} />
        <BlogSection posts={posts} />
        <CtaSection />
        <EventSection />
        <ContactSection />
        <CtaSection />
        <DonateSection />
      </Layout>
    </>
  )
}
