import Link from "next/link"
import { useRouter } from "next/router"

type Props = {
  isOpen: boolean
  toggleIsOpen: () => void
  url: string
  title: string
  children: React.ReactNode
}

function NavMenuItem({ children, isOpen, toggleIsOpen, url, title }: Props) {
  const router = useRouter()
  const isActive = router.pathname === url

  return (
    <Link
      title={title}
      className={`${isOpen ? "opacity-100 delay-100" : "opacity-0"} ${
        isActive ? "text-gray-900" : "text-gray-400"
      } block transition duration-300 ease-in-out hover:text-gray-900 sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
      href={url}
      onClick={toggleIsOpen}
    >
      <i className="mx-auto block w-20 p-2 sm:w-12 md:w-14 lg:w-16">{children}</i>
      <span className="sr-only">{title}</span>
    </Link>
  )
}

export default NavMenuItem
