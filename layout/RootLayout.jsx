import {Outlet} from "react-router-dom"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
