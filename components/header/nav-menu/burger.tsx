type BurgerProps = {
  isOpen: boolean
  toggleIsOpen: () => void
}

function Burger({ isOpen, toggleIsOpen }: BurgerProps) {
  return (
    <button
      title={isOpen ? "Close the menu" : "Open the menu"}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      onClick={toggleIsOpen}
      className="relative z-10 h-14 w-14 text-gray-900 sm:hidden"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <span
        className={`relative right-0 ml-auto block h-0.5 w-8 select-none transition duration-300 before:absolute before:block before:h-0.5 before:w-8 before:bg-gray-900 before:transition before:duration-300 before:content-[''] after:absolute after:block after:h-0.5 after:w-8 after:bg-gray-900 after:transition after:duration-300 after:content-[''] ${
          isOpen
            ? "bg-transparent before:-top-2 before:translate-y-2 before:-rotate-45 after:-top-2 after:translate-y-2 after:rotate-45"
            : "bg-gray-900 before:-top-2 after:top-2"
        }`}
      />
    </button>
  )
}
export default Burger
