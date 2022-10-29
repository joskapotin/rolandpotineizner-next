import Image from "next/image"
import Link from "next/link"
import { PATH, ROUTES } from "../../constants/constants"
import type { IPainting } from "../../services/painting"

type props = {
  painting: IPainting
}

function PaintingListItem({ painting }: props) {
  const { title, filename, slug } = painting
  const imageSrc = `${PATH.PAINTINGS.SQUARE}/${filename}`

  return (
    <Link
      href={`${ROUTES.PAINTINGS.URL}/${slug}`}
      className="basis- opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={200}
        className="w-full overflow-hidden rounded-full border-4 border-gray-100 object-cover object-center shadow-2xl"
      />
      <span className="sr-only">Voir ${title}</span>
    </Link>
  )
}
export default PaintingListItem
