import Head from "next/head"
import photoRoland from "../../assets/images/roland01.jpg"
import PageTransition from "../motion/page-transition"
import SkipToMainContent from "../skip-to-main-content/skip-to-main-content"
import Footer from "./footer/footer"
import Header from "./header/header"

type props = {
  children: React.ReactNode
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

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#111827" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#f9fafb" />
        <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#f9fafb" />
      </Head>

      <SkipToMainContent />

      <Header />

      <PageTransition>{children}</PageTransition>

      <Footer />
    </>
  )
}
export default RootLayout
