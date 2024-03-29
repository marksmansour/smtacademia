/* eslint-disable @next/next/no-html-link-for-pages */
import Container from 'components/BlogContainer'
import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

export default function Alert({
  preview,
  loading,
}: {
  preview?: boolean
  loading?: boolean
}) {
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => window.top === window,
    () => false,
  )

  if (!shouldShow || !preview) return null

  return (
    <div
      className={`${
        loading ? 'animate-pulse' : ''
      } border-b border-accent-7 bg-accent-7 text-white fixed bottom-0 left-0 right-0 z-50 bg-stone-900`}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {'Previewing drafts. '}
          <a
            href="/api/disable-draft"
            className="underline transition-colors duration-200 hover:text-cyan"
          >
            Back to published
          </a>
        </div>
      </Container>
    </div>
  )
}
