import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import SectionHeader from './SectionHeader'

export default function BlogSection({
  posts,
  limit = 3,
  title,
  subtitle,
}: {
  posts: Post[]
  limit?: number
  title?: string
  subtitle?: string
}) {
  if (!posts) return null

  if (limit > 0) {
    posts = posts.slice(0, limit)
  }

  return (
    <div className="my-16 sm:my-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && <SectionHeader title={title} subtitle={subtitle} />}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostPreview
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
