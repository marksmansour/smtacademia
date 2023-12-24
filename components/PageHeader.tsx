import Image from 'next/image'
import type { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'

export default function PageHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>,
) {
  const { title, coverImage } = props

  return (
    <div className="bg-gradient-to-br from-sky-900 to-sky-700 rounded-md">
      <div className="relative isolate overflow-hidden rounded-md">
        {coverImage && (
          <>
            <Image
              src={urlForImage(coverImage).height(1080).width(1920).url()}
              alt="Learning & Growing Academy"
              width={1920}
              height={1080}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900 -z-10 opacity-50" />
          </>
        )}
        <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
