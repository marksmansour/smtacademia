import AboutSection from 'components/Home/AboutSection'
import BlogSection from 'components/Home/BlogSection'
import ContactSection from 'components/Home/ContactSection'
import CtaSection from 'components/Home/CtaSection'
import DonateSection from 'components/Home/DonateSection'
import EventSection from 'components/Home/EventSection'
import HeroSection from 'components/Home/HeroSection'
import Layout from 'components/NextSanity/BlogLayout'
import IndexPageHead from 'components/NextSanity/IndexPageHead'
import type { Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const { title, description } = settings

  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
        <HeroSection title={title} description={description} />
        <AboutSection />
        <BlogSection posts={posts} />
        <EventSection />
        <CtaSection />
        <ContactSection />
        <DonateSection />
      </Layout>
    </>
  )
}
