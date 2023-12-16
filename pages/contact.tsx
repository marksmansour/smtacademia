import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import ContactForm from 'components/ContactForm'
import CtaSection from 'components/Home/CtaSection'

export default function Page() {
  return (
    <Layout>
      <PageHeader title="Contact" />
      <ContactForm />
      <CtaSection />
    </Layout>
  )
}
