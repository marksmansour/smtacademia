import AboutPage, { type AboutPageProps } from 'components/AboutPage'
import {
  type Settings,
  settingsQuery,
  Page,
  pageQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewAboutPage(props: AboutPageProps) {
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )
  const [page, loadingPage] = useLiveQuery<Page>(props.page, pageQuery, {
    title: 'About',
  })

  return (
    <AboutPage
      preview
      loading={loadingPage || loadingSettings}
      settings={settings || {}}
      page={page}
    />
  )
}
