import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllEvents,
  getAllPosts,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import { Event, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  events: Event[]
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { events, posts, settings, draftMode } = props

  if (draftMode) {
    return (
      <PreviewIndexPage events={events} posts={posts} settings={settings} />
    )
  }

  return <IndexPage events={events} posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = [], events = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
    getAllEvents(client),
  ])

  return {
    props: {
      posts,
      events,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
