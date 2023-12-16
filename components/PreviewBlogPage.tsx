import BlogPage, { type BlogPageProps } from 'components/BlogPage'
import { postsQuery, type Post } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewBlogPage(props: BlogPageProps) {
  const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, postsQuery)

  return <BlogPage preview loading={loadingPosts} posts={posts || []} />
}
