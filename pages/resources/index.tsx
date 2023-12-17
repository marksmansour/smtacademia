import ResourcesPage from 'components/ResourcesPage'
import PreviewResourcesPage from 'components/PreviewResourcesPage'
import { readToken } from 'lib/sanity.api'
import { getAllResources, getClient } from 'lib/sanity.client'
import { Resource } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  resources: Resource[]
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { resources, draftMode } = props

  if (draftMode) {
    return <PreviewResourcesPage resources={resources} />
  }

  return <ResourcesPage resources={resources} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [resources = []] = await Promise.all([getAllResources(client)])

  return {
    props: {
      resources,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
