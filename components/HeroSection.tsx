import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default function HeroSection({ title, description, image }) {
  return (
    <div className="bg-sky-900">
      <div className="relative isolate overflow-hidden pt-14">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <Image
            src="/hero.jpg"
            alt="Learning & Growing Academy"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-stone-900 -z-10 opacity-40" />
        <div className="mx-auto max-w-2xl py-28 sm:py-36 lg:py-40 px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <h4 className="mt-6 text-lg leading-8 text-gray-50">
              <PortableText value={description} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
