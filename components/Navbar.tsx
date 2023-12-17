import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)

  return (
    <div className="bg-stone-50">
      <div className="bg-sky-900 w-full h-4" />
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Learning & Growing Academy</span>
            <Image
              src="/logo.png"
              alt="Learning & Growing Academy"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-black hover:underline underline-offset-2 p-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-black hover:underline underline-offset-2 p-2"
          >
            About
          </Link>
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black hover:underline underline-offset-2 p-2"
              aria-expanded={programsOpen}
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs
              <svg
                className="h-5 w-5 flex-none text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {programsOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-stone-50 p-2 shadow-lg ring-1 ring-gray-900/5">
                <Link
                  href="/blog"
                  className="block rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  Blog
                </Link>
                <Link
                  href="/events"
                  className="block rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  Events
                </Link>
                <Link
                  href="/resources"
                  className="block rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  Resources
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/donate"
            className="text-sm font-semibold leading-6 text-black hover:underline underline-offset-2 p-2"
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-black hover:underline underline-offset-2 p-2"
          >
            Contact
          </Link>
        </div>
      </nav>
      {mobileOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-stone-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-2"
                      aria-expanded="false"
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    >
                      Programs
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {mobileProgramsOpen && (
                      <div className="mt-2 space-y-2" id="disclosure-2">
                        <Link
                          href="/blog"
                          className="block rounded-md py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Blog
                        </Link>
                        <Link
                          href="/events"
                          className="block rounded-md py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Events
                        </Link>
                        <Link
                          href="/resources"
                          className="block rounded-md py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Resources
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/donate"
                    className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Donate
                  </Link>
                  <Link
                    href="/donate"
                    className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
