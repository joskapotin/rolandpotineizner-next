import Image from "next/image"
import { PATH } from "../../constants/constants"
import { IPainting } from "../../services/paintings"

type Props = {
  painting: IPainting
}

function PaintingDetails({ painting }: Props) {
  const { title, year, height, width, filename, imageWidth, imageHeight, imageBlurhash } = painting
  return (
    <>
      <Image
        alt={title}
        src={`${PATH.PAINTINGS.SOURCE}/${filename}`}
        width={imageWidth}
        height={imageHeight}
        blurDataURL={imageBlurhash}
        placeholder="blur"
      />

      <ul className="self-center text-center lg:text-start">
        <li className="mb-2 text-2xl">
          <span className="mb-4 tracking-widest text-amber-900">Titre:</span> {title}
        </li>
        <li>
          <time dateTime={year}>
            <span className="mb-4 tracking-widest text-amber-900">Année:</span> {year}
          </time>
        </li>
        <li>
          <span className="mb-4 tracking-widest text-amber-900">Hauteur:</span> {height} cm
        </li>
        <li>
          <span className="mb-4 tracking-widest text-amber-900">Largeur:</span> {width} cm
        </li>
      </ul>
    </>
  )
}
export default PaintingDetails
