import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'

export default function Page() {
  return (
    <Layout preview={false}>
      <PageHeader title="Donate" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        https://www.funraise.org/
      </div>
    </Layout>
  )
}
