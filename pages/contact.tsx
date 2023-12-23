import ContactPage from 'components/ContactPage'
import PreviewContactPage from 'components/PreviewContactPage'
import { readToken } from 'lib/sanity.api'
import { getClient, getPageByTitle, getSettings } from 'lib/sanity.client'
import { Page, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  settings: Settings
  page: Page
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { settings, draftMode, page } = props

  if (draftMode) {
    return <PreviewContactPage settings={settings} page={page} />
  }

  return <ContactPage settings={settings} page={page} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page, settings] = await Promise.all([
    getPageByTitle(client, 'Contact'),
    getSettings(client),
  ])

  return {
    props: {
      page,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
