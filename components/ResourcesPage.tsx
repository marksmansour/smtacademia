import Layout from 'components/Layout'
import type { Resource } from 'lib/sanity.queries'
import PageHeader from './PageHeader'
import ResourceSection from './ResourceSection'

export interface ResourcesPageProps {
  preview?: boolean
  loading?: boolean
  resources: Resource[]
}

export default function ResourcesPage(props: ResourcesPageProps) {
  const { preview, loading, resources } = props

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <PageHeader title="Resources" />
        <ResourceSection resources={resources} limit={0} />
      </Layout>
    </>
  )
}
