import Layout from 'components/Layout'
import type { Event } from 'lib/sanity.queries'
import PageHeader from './PageHeader'
import EventSection from './EventSection'

export interface EventsPageProps {
  preview?: boolean
  loading?: boolean
  events: Event[]
}

export default function EventsPage(props: EventsPageProps) {
  const { preview, loading, events } = props

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <PageHeader title="Events" />
        <EventSection events={events} limit={0} />
      </Layout>
    </>
  )
}
