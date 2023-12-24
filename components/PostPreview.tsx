import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="w-full">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <Date dateString={date} />
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-normal leading-6 text-gray-900 group-hover:text-sky-700">
            <Link href={`/blog/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          {excerpt && (
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {excerpt}
            </p>
          )}
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <Link href={`/blog/${slug}`}>Read more &rarr;</Link>
      </div>
    </article>
  )
}
