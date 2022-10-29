import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next/types"
import { ParsedUrlQuery } from "querystring"
import PaintingDetails from "../../../components/painting/painting-details"
import PaintingListItem from "../../../components/painting/painting-list-item"
import { getPaintings } from "../../../services/painting"

interface IParams extends ParsedUrlQuery {
  slug: string
}

function Painting({
  prevPainting,
  currentPainting,
  nextPainting,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PaintingDetails painting={currentPainting} />

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
