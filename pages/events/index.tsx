import EventsPage from 'components/EventsPage'
import PreviewEventsPage from 'components/PreviewEventsPage'
import { readToken } from 'lib/sanity.api'
import { getAllEvents, getClient } from 'lib/sanity.client'
import { Event } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  events: Event[]
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { events, draftMode } = props

  if (draftMode) {
    return <PreviewEventsPage events={events} />
  }

  return <EventsPage events={events} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [events = []] = await Promise.all([getAllEvents(client)])

  return {
    props: {
      events,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
