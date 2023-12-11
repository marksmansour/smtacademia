import Footer from './Footer'
import Header from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  )
}
