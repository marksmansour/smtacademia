import Layout from 'components/Layout'
import IndexPageHead from 'components/IndexPageHead'
import type { Event, Page, Post, Settings } from 'lib/sanity.queries'
import PageComponents from './PageComponents'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  page: Page
}

export default function IndexPage(props: IndexPageProps) {
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
        {page?.pageBuilder && <PageComponents sections={page.pageBuilder} />}
      </Layout>
    </>
  )
}
