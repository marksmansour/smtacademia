import type { Resource } from 'lib/sanity.queries'

export default function ResourcePreview({ name }: Omit<Resource, '_id'>) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      {name}
    </article>
  )
}
