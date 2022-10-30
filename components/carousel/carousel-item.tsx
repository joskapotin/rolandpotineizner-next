import Image from "next/image"

export type CarouselItemType = {
  id: string
  title: string
  imageUrl: string
  imageWidth: number
  imageHeight: number
  imageBlurhash: string
}

type CarouselItemProps = {
  item: CarouselItemType
  index: number
  currentIndex: number
}

function CarouselItem({ item, index, currentIndex }: CarouselItemProps) {
  const isCurrent = index === currentIndex

  return (
    <Image
      src={item.imageUrl}
      width={item.imageWidth}
      height={item.imageHeight}
      alt={item.title}
      title={item.title}
      className={`
        ${isCurrent ? "opacity-100" : "pointer-events-none opacity-0"} 
        col-span-full row-span-full transition-opacity duration-500 ease-in`}
      blurDataURL={item.imageBlurhash}
      placeholder="blur"
    />
  )
}
export default CarouselItem
