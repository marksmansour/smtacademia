import Footer from 'components/Footer'
import AlertBanner from 'components/AlertBanner'

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
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
