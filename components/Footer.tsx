import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-100">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <Link
              href="/"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              Home
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/about"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              About
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/blog"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              Blog
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/events"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              Events
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/resources"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              Resources
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/donate"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              Donate
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/donate"
              className="text-sm leading-6 text-black hover:underline underline-offset-2"
            >
              Contact
            </Link>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-900">
          &copy; {new Date().getFullYear()} All rights reserved.{' '}
          <Link href="https://captivastudio.com" target="_blank">
            Website by Captiva.
          </Link>
        </p>
      </div>
    </footer>
  )
}
