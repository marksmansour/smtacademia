import EventPage from 'components/EventPage'
import PreviewEventPage from 'components/PreviewEventPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllEventSlugs,
  getClient,
  getEventBySlug,
  getSettings,
} from 'lib/sanity.client'
import { Event, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  event: Event
  settings?: Settings
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, event, draftMode } = props

  if (draftMode) {
    return <PreviewEventPage event={event} />
  }

  return <EventPage event={event} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [event] = await Promise.all([getEventBySlug(client, params.slug)])

  if (!event) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      event,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllEventSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/events/${slug}`) || [],
    fallback: 'blocking',
  }
}
