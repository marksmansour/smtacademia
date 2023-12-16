import IndexPage, { type IndexPageProps } from 'components/IndexPage'
import {
  type Post,
  postsQuery,
  type Settings,
  settingsQuery,
  type Event,
  eventsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const [events] = useLiveQuery<Event[]>(props.events, eventsQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingPosts || loadingSettings}
      posts={posts || []}
      events={events || []}
      settings={settings || {}}
    />
  )
}
