import Navbar from 'components/Navbar'
import Image from 'next/image'
import AuthorAvatar from './AuthorAvatar'
import type { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'

export default function PageHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>,
) {
  const { title, coverImage, date, slug } = props

  return (
    <div className="bg-sky-900">
      <div className="relative isolate overflow-hidden">
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
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6785a0] to-[#071654] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6785a0] to-[#071654] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
