import { Event } from 'lib/sanity.queries'
import EventPreview from './EventPreview'
import SectionHeader from './SectionHeader'

export default function EventSection({
  events,
  limit = 3,
  title,
  subtitle,
}: {
  events: Event[]
  limit?: number
  title?: string
  subtitle?: string
}) {
  if (limit > 0) {
    events = events.slice(0, limit)
  }
  return (
    <div className="my-16 sm:my-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && <SectionHeader title={title} subtitle={subtitle} />}
        <div className="mx-auto max-w-2xl">
          <div className="mt-10 space-y-16">
            {events.map((e) => (
              <EventPreview
                key={e._id}
                title={e.title}
                slug={e.slug}
                description={e.description}
                date={e.date}
                url={e.url}
                repeat={e.repeat}
                author={e.author}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
