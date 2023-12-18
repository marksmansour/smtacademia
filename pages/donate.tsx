import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import { readToken } from 'lib/sanity.api'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

export default function Page(props: SharedPageProps) {
  const { draftMode } = props

  return (
    <Layout preview={draftMode}>
      <PageHeader title="Donate" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        https://www.funraise.org/
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<SharedPageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
