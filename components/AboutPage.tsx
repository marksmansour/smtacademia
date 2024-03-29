import Layout from 'components/Layout'
import IndexPageHead from 'components/IndexPageHead'
import type { Page, Settings } from 'lib/sanity.queries'
import PageComponents from './PageComponents'
import PageHeader from './PageHeader'

export interface AboutPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  page: Page
}

export default function AboutPage(props: AboutPageProps) {
  const { preview, loading, settings, page } = props
  const { title, description } = settings

  return (
    <>
      <IndexPageHead
        settings={{
          title,
          description,
        }}
      />
      <Layout preview={preview} loading={loading}>
        {page.title !== 'Home' && <PageHeader title={page.title} />}
        {page?.pageBuilder && <PageComponents sections={page.pageBuilder} />}
      </Layout>
    </>
  )
}
