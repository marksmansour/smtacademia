export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto text-center">
      {subtitle && (
        <p className="text-sm font-semibold leading-7 text-sky-600">
          {subtitle}
        </p>
      )}
      <h2 className="mt-2 font-bold tracking-tight text-gray-900 text-2xl sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8 h-1 w-20 bg-sky-600 rounded-full mx-auto" />
    </div>
  )
}
