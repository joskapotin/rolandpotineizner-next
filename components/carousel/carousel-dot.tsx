type CarouselDotProps = {
  title: string
  handleClick: () => void
  isCurrent: boolean
}

function CarouselDot({ title, handleClick, isCurrent }: CarouselDotProps) {
  return (
    <button
      title={`Afficher "${title}" dans le carousel`}
      type="button"
      onClick={handleClick}
      className={`${
        isCurrent ? "scale-100" : "scale-50 bg-gray-400"
      } h-6 w-6 rounded-full bg-gray-400 transition duration-500 ease-in-out hover:bg-gray-900`}
    >
      <span className="sr-only">{title}</span>
    </button>
  )
}
export default CarouselDot
