import PageTransition from "../../motion/page-transition"

type Props = {
  children: React.ReactNode
}

function Main({ children }: Props) {
  return (
    <>
      <PageTransition>{children}</PageTransition>
    </>
  )
}
export default Main
