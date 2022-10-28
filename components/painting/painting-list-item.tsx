import Image from "next/image"
import { PATH } from "../../constants/constants"
import type { PaintingInterface } from "../../services/painting"

type props = {
  painting: PaintingInterface
}

function PaintingListItem({ painting }: props) {
  const { title, filename } = painting
  const imageSrc = `${PATH.PAINTINGS.SQUARE}/${filename}`

  return (
    <Image
      src={imageSrc}
      alt={title}
      width={200}
      height={200}
      className="object-cover object-center"
    />
  )
}
export default PaintingListItem
