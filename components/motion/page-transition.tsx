import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

type props = {
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

function PageTransition({ children }: props) {
  const { asPath } = useRouter()

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.main
        key={asPath}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "spring", duration: 0.5 }} // Set the transition to linear
        id="main-content"
        className="container mx-auto grid flex-grow origin-top content-start justify-items-center gap-y-24 px-2 sm:px-0 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default PageTransition
