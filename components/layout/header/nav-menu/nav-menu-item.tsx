import Link from "next/link"

type Props = {
  isOpen: boolean
  toggleIsOpen: () => void
  url: string
  title: string
  children: React.ReactNode
}

function NavMenuItem({ children, isOpen, toggleIsOpen, url, title }: Props) {
  return (
    <Link
      title={title}
      className={`${
        isOpen ? "opacity-100 delay-100" : "opacity-0"
      }  block transition-opacity  duration-300 ease-in-out sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
      href={url}
      onClick={toggleIsOpen}
    >
      <i className="mx-auto block h-20 w-20 p-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-900 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
        {children}
      </i>
      <span className="sr-only">{title}</span>
    </Link>
  )
}

export default NavMenuItem
