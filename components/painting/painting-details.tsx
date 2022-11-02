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
        src={`${PATH.PAINTINGS.NORMAL}/${filename}`}
        width={imageWidth}
        height={imageHeight}
        blurDataURL={imageBlurhash}
        placeholder="blur"
        priority
      />

      <div className="self-center text-center">
        <h1 className="mb-8 text-4xl">{title}</h1>
        <ul>
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
      </div>
    </>
  )
}
export default PaintingDetails
