import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'

export default function ContactSection({
  title,
  subtitle,
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="my-24 sm:my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && <SectionHeader title={title} subtitle={subtitle} />}
        <ContactForm />
      </div>
    </div>
  )
}
