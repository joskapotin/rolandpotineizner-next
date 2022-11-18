import { useCallback, useEffect, useRef, useState } from "react"
import { modulo } from "../../helpers/math"
import useSwipe from "../../hooks/useSwipe"
import CarouselDot from "./carousel-dot"
import type { CarouselItemType } from "./carousel-item"
import CarouselItem from "./carousel-item"

type Props = {
  items: CarouselItemType[]
}

function Carousel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const carouselRef = useRef<HTMLDivElement>(null)

  const prevIndex = modulo(currentIndex - 1, items.length)
  const nextIndex = modulo(currentIndex + 1, items.length)

  // Click
  const handleClick = useCallback(
    (newIndex: number) => {
      if (newIndex !== currentIndex) setCurrentIndex(newIndex)
    },
    [currentIndex]
  )

  // Auto play
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPlaying) {
        handleClick(nextIndex)
      }
    }, 9000)
    return () => clearTimeout(timeout)
  }, [isPlaying, nextIndex, handleClick])

  // Swipe
  const prev = () => {
    setCurrentIndex(prevIndex)
  }

  const next = () => {
    setCurrentIndex(nextIndex)
  }

  const { handleTouchStart, handleTouchMove } = useSwipe({ prev, next })

  return (
    <section className="flex max-w-md flex-col gap-4">
      <div className="mt-2 mb-4 flex flex-wrap justify-center gap-3">
        {items.map((item, index) => (
          <CarouselDot
            key={item.id}
            isCurrent={index === currentIndex}
            title={item.title}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div
        className="grid justify-items-center"
        ref={carouselRef}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            index={index}
            currentIndex={currentIndex}
            priority={index < 5 ? true : false} // only preload 5 first
          />
        ))}
      </div>
    </section>
  )
}
export default Carousel
