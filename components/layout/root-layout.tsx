import type { ReactNode } from "react"

type props = {
  children: ReactNode
}

function RootLayout({ children }: props) {
  return (
    <>
      <header>this is the header</header>
      <main>
        This is the main
        {children}
      </main>
      <footer>This is the footer</footer>
    </>
  )
}
export default RootLayout
