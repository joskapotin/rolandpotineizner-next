import Link from "next/link"
import { ROUTES } from "../../../constants/constants"
import NavMenu from "./nav-menu/nav-menu"

function Header() {
  return (
    <header className="container sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 border-b border-b-gray-400 bg-gray-50 px-2 shadow dark:bg-gray-900 sm:relative sm:border-none sm:py-5 sm:px-0 sm:shadow-none md:py-10">
      <Link
        title="Retourner sur la page d'accueil"
        href={ROUTES.HOME.URL}
        className="flex-shrink-0 pt-4 font-daniel text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        Roland Potin Eizner
      </Link>
      <NavMenu />
    </header>
  )
}

export default Header
