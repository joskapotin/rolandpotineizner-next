import { ROUTES } from "../../../../constants/constants"
import useToggle from "../../../../hooks/useToggle"
import AboutHeadSvg from "../../../svg/about-head-svg"
import HomeHeadSvg from "../../../svg/home-head-svg"
import PaintingsHeadSvg from "../../../svg/paintings-head-svg"
import Burger from "./burger"
import NavMenuItem from "./nav-menu-item"

function NavMenu() {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <nav className="flex flex-col sm:flex-row" aria-label="main">
      <Burger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

      <ul
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        }  fixed top-0 right-0 bottom-0 left-1/2 flex origin-top flex-col justify-center gap-20 bg-gray-50 text-center transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-grow sm:translate-x-0 sm:flex-row sm:justify-between sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10`}
      >
        <li>
          <NavMenuItem
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            url={ROUTES.HOME.URL}
            title={ROUTES.HOME.NAME}
          >
            <HomeHeadSvg />
          </NavMenuItem>
        </li>
        <li>
          <NavMenuItem
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            url={ROUTES.ABOUT.URL}
            title={ROUTES.ABOUT.NAME}
          >
            <AboutHeadSvg />
          </NavMenuItem>
        </li>
        <li>
          <NavMenuItem
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            url={ROUTES.PAINTINGS.URL}
            title={ROUTES.PAINTINGS.NAME}
          >
            <PaintingsHeadSvg />
          </NavMenuItem>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
