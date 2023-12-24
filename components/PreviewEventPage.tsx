import EventPage, { EventPageProps } from './EventPage'
import { type Event, eventBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewEventPage(props: EventPageProps) {
  const [event, loadingEvent] = useLiveQuery<Event>(
    props.event,
    eventBySlugQuery,
    {
      slug: props.event.slug,
    },
  )

  return <EventPage preview loading={loadingEvent} event={event} />
}
