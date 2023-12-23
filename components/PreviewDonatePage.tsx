import DonatePage, { type DonatePageProps } from 'components/DonatePage'
import {
  type Settings,
  settingsQuery,
  Page,
  pageQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewDonatePage(props: DonatePageProps) {
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )
  const [page, loadingPage] = useLiveQuery<Page>(props.page, pageQuery, {
    title: 'Donate',
  })

  return (
    <DonatePage
      preview
      loading={loadingPage || loadingSettings}
      settings={settings || {}}
      page={page}
    />
  )
}
