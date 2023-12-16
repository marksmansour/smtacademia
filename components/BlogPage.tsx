import BlogSection from 'components/BlogSection'
import Layout from 'components/Layout'
import type { Post } from 'lib/sanity.queries'
import PageHeader from './PageHeader'

export interface BlogPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
}

export default function BlogPage(props: BlogPageProps) {
  const { preview, loading, posts } = props

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <PageHeader title="Blog" />
        <BlogSection posts={posts} limit={0} />
      </Layout>
    </>
  )
}
