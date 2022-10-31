import Head from "next/head"
import type { ReactNode } from "react"
import photoRoland from "../../assets/images/roland01.jpg"
import SkipToMainContent from "../skip-to-main-content/skip-to-main-content"
import Footer from "./footer/footer"
import Header from "./header/header"

type props = {
  children: ReactNode
}

function RootLayout({ children }: props) {
  return (
    <>
      <Head>
        <title>Roland Potin Eizner | Artiste peintre</title>
        <meta name="description" content="Présentation des oeuvres de Roland Potin Eizner" />
        <meta name="author" content="Joska Potin" />
        <meta property="og:image" content={photoRoland.src} />
        <meta property="og:description" content="Présentation des oeuvres de Roland Potin Eizner" />
        <meta property="og:title" content="Roland Potin Eizner | Artiste peintre" />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="VHhtS-qoUBGXUBXcSk98korjSE2QdGAXuA40bDrEn5I"
        />
        {/* So google knows i am the admin */}
      </Head>

      <SkipToMainContent />
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
