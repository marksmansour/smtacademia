import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-10 w-10">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="h-10 w-10 rounded-full bg-gray-100"
          height={96}
          width={96}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className="text-sm leading-6">
        <p className="font-normal text-gray-900">
          <span className="absolute inset-0" />
          {name}
        </p>
      </div>
    </div>
  )
}

