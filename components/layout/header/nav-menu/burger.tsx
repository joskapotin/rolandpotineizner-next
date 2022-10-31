type BurgerProps = {
  isOpen: boolean
  toggleIsOpen: () => void
}

function Burger({ isOpen, toggleIsOpen }: BurgerProps) {
  return (
    <button
      title={isOpen ? "Close the menu" : "Open the menu"}
      type="button"
      onClick={toggleIsOpen}
      className="relative z-10 h-10 w-10 text-gray-900 sm:hidden"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <span
        className={`${
          isOpen ? "translate-y-3 rotate-45" : "translate-y-0 rotate-0"
        } my-2 block h-[2px] rounded bg-gray-400 transition-transform duration-300`}
      />
      <span
        className={`${
          isOpen ? "opacity-0" : "opacity-100"
        } my-2 block h-[2px] rounded bg-gray-400 transition-opacity duration-300`}
      />
      <span
        className={`${
          isOpen ? "-translate-y-3 -rotate-45" : "translate-y-0 rotate-0"
        } my-2 block h-[2px] rounded bg-gray-400 transition-transform duration-300`}
      />
    </button>
  )
}
export default Burger
