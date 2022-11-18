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
          isOpen ? "translate-y-2" : "-translate-y-[1px]"
        } my-2 block h-[3px] rounded bg-gray-400 transition-transform duration-300`}
      />
      <span
        className={`${
          isOpen ? "-translate-x-full opacity-0" : "-translate-0 opacity-100"
        } my-2 block h-[3px] rounded bg-gray-400 transition-[opacity,transform] duration-300`}
      />
      <span
        className={`${
          isOpen ? "-translate-y-2" : "translate-y-[1px]"
        } my-2 block h-[3px] rounded bg-gray-400 transition-transform duration-300`}
      />
    </button>
  )
}
export default Burger
