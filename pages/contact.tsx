import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import ContactForm from 'components/ContactForm'
import CtaSection from 'components/CtaSection'

export default function Page() {
  return (
    <Layout preview={false}>
      <PageHeader title="Contact" />
      <ContactForm />
      <CtaSection />
    </Layout>
  )
}
