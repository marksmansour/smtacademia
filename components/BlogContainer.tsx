import classNames from 'classnames'

export default function BlogContainer({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={classNames('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
