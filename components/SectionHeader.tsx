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
        <p className="text-sm font-normal leading-7 text-sky-600">{subtitle}</p>
      )}
      <h2 className="mt-2 font-normal tracking-tight text-gray-900 text-2xl sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 bg-sky-600 rounded-full mx-auto" />
    </div>
  )
}
