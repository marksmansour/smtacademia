import Link from 'next/link'
import { links } from './Navbar'

export default function Footer() {
  const navLinks = links.flatMap((link) =>
    link.dropdown
      ? link.sublinks?.map((sub) => ({ href: sub.href, title: sub.title })) ||
        []
      : [{ href: link.href, title: link.title }],
  )

  return (
    <footer className="bg-stone-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-20 sm:pt-24 lg:px-8 pb-10 sm:pb-12">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <div className="pb-6">
              <Link
                href={link.href}
                className="block rounded-sm px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-stone-100"
              >
                {link.title}
              </Link>
            </div>
          ))}
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
