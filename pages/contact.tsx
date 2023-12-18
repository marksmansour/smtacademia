import ContactSection from 'components/ContactSection'
import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import { readToken } from 'lib/sanity.api'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

export default function Page(props: SharedPageProps) {
  const { draftMode } = props

  return (
    <Layout preview={draftMode}>
      <PageHeader title="Contact Us" />
      <ContactSection />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<SharedPageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
