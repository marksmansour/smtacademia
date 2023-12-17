import { Resource } from 'lib/sanity.queries'
import ResourcePreview from './ResourcePreview'

export default function ResourceSection({
  resources,
  limit = 3,
}: {
  resources: Resource[]
  limit?: number
}) {
  if (limit > 0) {
    resources = resources.slice(0, limit)
  }

  return (
    <div className="my-24 sm:my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mt-10 space-y-16">
            {resources.map((resource) => (
              <ResourcePreview key={resource._id} name={resource.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
