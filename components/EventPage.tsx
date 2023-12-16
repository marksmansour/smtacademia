import Container from 'components/BlogContainer'
import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import type { Event } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import PostBody from './PostBody'
import PostTitle from './PostTitle'

export interface EventPageProps {
  preview?: boolean
  loading?: boolean
  event: Event
}

export default function EventPage(props: EventPageProps) {
  const { preview, loading, event } = props

  const slug = event?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <PageHeader title={event.title} date={event.date} />
        <Container>
          {preview && !event ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <PostBody content={event.description} />
          )}
        </Container>
      </Layout>
    </>
  )
}
