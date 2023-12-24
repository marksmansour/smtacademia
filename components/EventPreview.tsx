import Avatar from 'components/AuthorAvatar'
import Date from 'components/PostDate'
import type { Event } from 'lib/sanity.queries'
import Link from 'next/link'

export default function EventPreview({
  title,
  date,
  description,
  author,
  slug,
}: Omit<Event, '_id'>) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <Date dateString={date} />
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/events/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </article>
  )
}
