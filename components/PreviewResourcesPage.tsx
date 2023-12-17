import ResourcesPage, { type ResourcesPageProps } from 'components/ResourcesPage'
import { resourcesQuery, type Resource } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewResourcesPage(props: ResourcesPageProps) {
  const [resources, loadingResources] = useLiveQuery<Resource[]>(props.resources, resourcesQuery)

  return <ResourcesPage preview loading={loadingResources} resources={resources || []} />
}
