import BlogPage from 'components/BlogPage'
import PreviewBlogPage from 'components/PreviewBlogPage'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { posts, draftMode } = props

  if (draftMode) {
    return <PreviewBlogPage posts={posts} />
  }

  return <BlogPage posts={posts} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [posts = []] = await Promise.all([getAllPosts(client)])

  return {
    props: {
      posts,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
