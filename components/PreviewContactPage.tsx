import ContactPage, { type ContactPageProps } from 'components/ContactPage'
import {
  type Settings,
  settingsQuery,
  Page,
  pageQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewContactPage(props: ContactPageProps) {
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )
  const [page, loadingPage] = useLiveQuery<Page>(props.page, pageQuery, {
    title: 'Contact',
  })

  return (
    <ContactPage
      preview
      loading={loadingPage || loadingSettings}
      settings={settings || {}}
      page={page}
    />
  )
}
