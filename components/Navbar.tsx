import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type NavLink = {
  title: string
  href?: string
  dropdown?: boolean
  sublinks?: NavLink[]
  button?: boolean
}

export const links: NavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  {
    title: 'Programs',
    dropdown: true,
    sublinks: [
      { title: 'Blog', href: '/blog' },
      { title: 'Events', href: '/events' },
      { title: 'Resources', href: '/resources' },
    ],
  },
  { title: 'Contact', href: '/contact' },
  { title: 'Donate', href: '/donate', button: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)

  return (
    <div>
      <div className="bg-sky-700 w-full h-2" />
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-8 px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Learning & Growing Academy</span>
            <Image
              src="/logo.png"
              alt="Learning & Growing Academy"
              width={64}
              height={64}
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
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.dropdown ? (
                <div
                  className="relative"
                  onClick={() => setProgramsOpen(!programsOpen)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-normal leading-6 text-gray-900 hover:bg-stone-50"
                    aria-expanded={programsOpen}
                  >
                    {link.title}
                    <svg
                      className={`h-5 w-5 flex-none text-black ${
                        programsOpen ? 'transform rotate-180' : ''
                      }`}
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
                    <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-md bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                      {link.sublinks?.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          className="block rounded-md px-3 py-2 text-sm font-normal leading-6 text-gray-900 hover:bg-stone-50"
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.button ? (
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-normal leading-6 text-white bg-sky-600 hover:bg-sky-700"
                >
                  {link.title}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-normal leading-6 text-gray-900 hover:bg-stone-50"
                >
                  {link.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
      {mobileOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                  {links.map((link, index) => (
                    <React.Fragment key={index}>
                      {link.dropdown ? (
                        <div className="-mx-3">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 pl-3 pr-3.5 text-base font-normal leading-6 text-gray-900 hover:bg-stone-50"
                            aria-controls={`disclosure-${index}`}
                            aria-expanded={mobileProgramsOpen}
                            onClick={() =>
                              setMobileProgramsOpen(!mobileProgramsOpen)
                            }
                          >
                            {link.title}
                            <svg
                              className={`h-5 w-5 flex-none ${
                                mobileProgramsOpen ? 'transform rotate-180' : ''
                              }`}
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
                            <div
                              className="mt-2 space-y-2"
                              id={`disclosure-${index}`}
                            >
                              {link.sublinks?.map((sublink, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={sublink.href}
                                  className="block rounded-md py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-stone-50"
                                >
                                  {sublink.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="-mx-3 block rounded-md px-3 py-2 text-base font-normal leading-7text-gray-900 hover:bg-stone-50"
                        >
                          {link.title}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
