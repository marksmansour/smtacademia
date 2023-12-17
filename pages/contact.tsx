import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import ContactForm from 'components/ContactForm'

export default function Page() {
  return (
    <Layout preview={false}>
      <PageHeader title="Contact Us" />
      <ContactForm />
    </Layout>
  )
}
