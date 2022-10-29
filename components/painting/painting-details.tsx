import Image from "next/image"
import { PATH } from "../../constants/constants"
import { IPainting } from "../../services/painting"

type Props = {
  painting: IPainting
}

function PaintingDetails({ painting }: Props) {
  const { title, year, height, width, filename, imageWidth, imageHeight } = painting
  return (
    <>
      <Image
        className="md:justify-self-end"
        alt={title}
        src={`${PATH.PAINTINGS.SOURCE}/${filename}`}
        width={imageWidth}
        height={imageHeight}
      />

      <ul className="self-center">
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
