import Image from "next/image"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next/types"
import { ParsedUrlQuery } from "querystring"
import PaintingListItem from "../../../components/painting/painting-list-item"
import { PATH } from "../../../constants/constants"
import { getPaintings } from "../../../services/painting"

interface IParams extends ParsedUrlQuery {
  slug: string
}

function Painting({
  prevPainting,
  currentPainting,
  nextPainting,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, year, height, width, filename, imageWidth, imageHeight } = currentPainting

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

      <nav className="relative col-span-full flex w-full justify-evenly gap-2">
        <PaintingListItem painting={prevPainting} />
        <PaintingListItem painting={nextPainting} />
      </nav>
    </>
  )
}

export default Painting

export const getStaticPaths: GetStaticPaths = async () => {
  const paintings = getPaintings()
  const paths = paintings.map(painting => ({
    params: {
      slug: painting.slug,
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams

  const paintings = getPaintings()

  const currentPaintingIndex = paintings.findIndex(painting => painting.slug === slug)

  if (currentPaintingIndex) {
    return {
      props: {
        prevPainting: paintings.at(currentPaintingIndex - 1),
        currentPainting: paintings.at(currentPaintingIndex),
        nextPainting: paintings.at((currentPaintingIndex + 1) % paintings.length),
      },
    }
  }
  return {
    notFound: true,
  }
}
