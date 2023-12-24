import Link from 'next/link'

export default function CtaSection({
  title,
  text,
  primary,
  primaryText,
  secondary,
  secondaryText,
  style = 'vertical',
}) {
  if (style == 'horizontal') {
    return (
      <div className="bg-blue-50 rounded-md">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8 rounded-md">
          <div>
            <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            {text && (
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                {text}
              </p>
            )}
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href={primary ?? '/'}
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              {primaryText}
            </Link>
            {secondary && (
              <Link
                href={secondary ?? '/'}
                className="text-sm font-normal leading-6 text-gray-900"
              >
                {secondaryText} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 rounded-md">
      <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8 rounded-md">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {text && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {text}
            </p>
          )}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={primary ?? '/'}
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {primaryText}
            </Link>
            {secondary && (
              <Link
                href={secondary ?? '/'}
                className="text-sm font-normal leading-6 text-gray-900"
              >
                {secondaryText} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
