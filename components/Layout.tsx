import Footer from 'components/Footer'
import AlertBanner from 'components/AlertBanner'
import Navbar from './Navbar'

export default function Layout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <AlertBanner preview={preview} loading={loading} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
