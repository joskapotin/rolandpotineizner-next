import Head from "next/head"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next/types"
import type { ParsedUrlQuery } from "querystring"
import PaintingDetails from "../../../components/painting/painting-details"
import NextHeadSvg from "../../../components/svg/next-head-svg"
import PreviousHeadSvg from "../../../components/svg/previous-head-svg"
import { ROUTES } from "../../../constants/constants"
import { getPaintings } from "../../../services/paintings"

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
      <Head>
        <title>{`Roland Potin Eizner | ${currentPainting.title}`}</title>
      </Head>

      <PaintingDetails painting={currentPainting} />

      <nav className="col-span-full flex justify-evenly">
        <Link
          href={`${ROUTES.PAINTINGS.URL}/${prevPainting.slug}`}
          className="text-gray-400 opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100"
          title={`Voir le tableau "${prevPainting.title}"`}
        >
          <i className="block w-20 p-2 transition-colors duration-300 ease-in-out hover:text-gray-900 sm:w-24">
            <PreviousHeadSvg />
          </i>
          <span className="sr-only">Voir ${prevPainting.title}</span>
        </Link>
        <Link
          href={`${ROUTES.PAINTINGS.URL}/${nextPainting.slug}`}
          className="text-gray-400 opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100"
          title={`Voir le tableau "${nextPainting.title}"`}
        >
          <i className="block w-20 p-2 transition-colors duration-300 ease-in-out hover:text-gray-900 sm:w-24">
            <NextHeadSvg />
          </i>
          <span className="sr-only">Voir ${nextPainting.title}</span>
        </Link>
      </nav>
    </>
  )
}

export default Painting

export const getStaticPaths: GetStaticPaths = async () => {
  const paintings = await getPaintings()
  const paths = paintings.map(painting => ({
    params: {
      slug: painting.slug,
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams

  const paintings = await getPaintings()

  const currentPaintingIndex = paintings.findIndex(painting => painting.slug === slug)

  if (isNaN(currentPaintingIndex)) return { notFound: true }

  return {
    props: {
      prevPainting: paintings.at(currentPaintingIndex - 1),
      currentPainting: paintings.at(currentPaintingIndex),
      nextPainting: paintings.at((currentPaintingIndex + 1) % paintings.length),
    },
  }
}
