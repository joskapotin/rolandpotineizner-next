import type { ReactNode } from "react"
import Footer from "./footer/footer"
import Header from "./header/header"

type props = {
  children: ReactNode
}

function RootLayout({ children }: props) {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="container mx-auto grid flex-grow content-start justify-items-center gap-y-24 px-2 sm:px-0 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9"
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
export default RootLayout
