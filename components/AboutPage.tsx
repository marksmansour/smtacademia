import Layout from 'components/Layout'
import type { Settings } from 'lib/sanity.queries'
import PageHeader from './PageHeader'
import PostBody from './PostBody'
import Container from './BlogContainer'

export interface AboutPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
}

export default function AboutPage(props: AboutPageProps) {
  const { preview, loading, settings } = props
  const { about } = settings

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <PageHeader title="About" />
        <Container>
          <PostBody content={about} />
        </Container>
      </Layout>
    </>
  )
}
