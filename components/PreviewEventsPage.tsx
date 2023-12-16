import EventsPage, { type EventsPageProps } from 'components/EventsPage'
import { eventsQuery, type Event } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewEventsPage(props: EventsPageProps) {
  const [events, loadingevents] = useLiveQuery<Event[]>(props.events, eventsQuery)

  return <EventsPage preview loading={loadingevents} events={events || []} />
}
