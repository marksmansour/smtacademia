import IndexPage, { type IndexPageProps } from 'components/IndexPage'
import {
  type Settings,
  settingsQuery,
  Page,
  pageQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )
  const [page, loadingPage] = useLiveQuery<Page>(props.page, pageQuery)

  return (
    <IndexPage
      preview
      loading={loadingPage || loadingSettings}
      settings={settings || {}}
      page={page}
    />
  )
}
