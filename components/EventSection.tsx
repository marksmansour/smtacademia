import { Event } from 'lib/sanity.queries'
import EventPreview from './EventPreview'

export default function EventSection({
  events,
  limit = 3,
}: {
  events: Event[]
  limit?: number
}) {
  if (limit > 0) {
    events = events.slice(0, limit)
  }
  return (
    <div className="my-24 sm:my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
