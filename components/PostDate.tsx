import { format, parseISO } from 'date-fns'

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  try {
    const date = parseISO(dateString)
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return null
    }
    return (
      <time dateTime={dateString} className="text-gray-500">
        {format(date, 'LLLL	d, yyyy')}
      </time>
    )
  } catch (error) {
    console.error('Invalid date string:', dateString)
    return null
  }
}
