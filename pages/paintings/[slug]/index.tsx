import Head from "next/head"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next/types"
import type { ParsedUrlQuery } from "querystring"
import PaintingDetails from "../../../components/painting/painting-details"
import ArrowNextSvg from "../../../components/svg/arrow-next-svg"
import ArrowPrevSvg from "../../../components/svg/arrow-prev-svg"
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
        <title>Roland Potin Eizner | {currentPainting.title}</title>
      </Head>

      <PaintingDetails painting={currentPainting} />

      <nav aria-label="secondary" className="col-span-full w-full ">
        <ul className="relative flex justify-evenly gap-2">
          <li className="min-w-[8rem] max-w-[12rem] flex-grow ">
            <Link
              href={`${ROUTES.PAINTINGS.URL}/${prevPainting.slug}`}
              className="opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100"
              title={`Voir le tableau "${prevPainting.title}"`}
            >
              <ArrowPrevSvg />
              <span className="sr-only">Voir ${prevPainting.title}</span>
            </Link>
          </li>
          <li className="min-w-[8rem] max-w-[12rem] flex-grow ">
            <Link
              href={`${ROUTES.PAINTINGS.URL}/${nextPainting.slug}`}
              className="opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100"
              title={`Voir le tableau "${nextPainting.title}"`}
            >
              <ArrowNextSvg />
              <span className="sr-only">Voir ${nextPainting.title}</span>
            </Link>
          </li>
        </ul>
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
