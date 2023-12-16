import AboutPage, { type AboutPageProps } from 'components/AboutPage'
import { type Settings, settingsQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewAboutPage(props: AboutPageProps) {
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <AboutPage preview loading={loadingSettings} settings={settings || {}} />
  )
}
