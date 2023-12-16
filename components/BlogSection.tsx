import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <div className="bg-white my-24 sm:my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
