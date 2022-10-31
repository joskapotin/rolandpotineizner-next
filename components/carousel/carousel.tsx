import { useCallback, useEffect, useRef, useState } from "react"
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

  const handleClick = useCallback(
    (newIndex: number) => {
      if (newIndex !== currentIndex) setCurrentIndex(newIndex)
    },
    [currentIndex]
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPlaying) {
        const nextIndex = (currentIndex + 1) % items.length
        handleClick(nextIndex)
      }
    }, 9000)
    return () => clearTimeout(timeout)
  }, [isPlaying, currentIndex, handleClick, items.length])

  return (
    <section className="flex max-w-md flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-3">
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
      >
        {items.map((item, index) => (
          <CarouselItem key={item.id} item={item} index={index} currentIndex={currentIndex} />
        ))}
      </div>
    </section>
  )
}
export default Carousel
