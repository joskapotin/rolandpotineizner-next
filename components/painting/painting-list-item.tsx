import Image from "next/image"
import Link from "next/link"
import { PATH, ROUTES } from "../../constants/constants"
import type { IPainting } from "../../services/paintings"

type props = {
  painting: IPainting
  priority?: boolean
}

function PaintingListItem({ painting, priority = false }: props) {
  const { title, filename, slug, squareBlurhash } = painting
  const imageSrc = `${PATH.PAINTINGS.SQUARE}/${filename}`

  return (
    <Link
      href={`${ROUTES.PAINTINGS.URL}/${slug}`}
      className="opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100"
      title={`Voir le tableau "${title}"`}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={200}
        className="w-full overflow-hidden rounded-full border-4 border-gray-100 object-cover object-center shadow-2xl"
        blurDataURL={squareBlurhash}
        placeholder="blur"
        priority={priority}
      />
      <span className="sr-only">Voir ${title}</span>
    </Link>
  )
}
export default PaintingListItem
