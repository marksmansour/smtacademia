import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getClient, getPageByTitle, getSettings } from 'lib/sanity.client'
import { Event, Page, Post, Settings } from 'lib/sanity.queries'
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
    return <PreviewIndexPage settings={settings} page={page} />
  }

  return <IndexPage settings={settings} page={page} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, page] = await Promise.all([
    getSettings(client),
    getPageByTitle(client, 'Home'),
  ])

  return {
    props: {
      settings,
      page,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
