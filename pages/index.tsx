import type { InferGetStaticPropsType } from "next/types"
import Carousel from "../components/carousel/carousel"
import Quote from "../components/quote/quote"
import { PATH } from "../constants/constants"
import { getPaintings } from "../services/paintings"

export default function Home({
  featuredPaintings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const carouselItems = featuredPaintings.map(painting => ({
    id: painting.id,
    title: painting.title,
    imageUrl: `${PATH.PAINTINGS.NORMAL}/${painting.filename}`,
    imageWidth: painting.imageWidth,
    imageHeight: painting.imageHeight,
    imageBlurhash: painting.imageBlurhash,
  }))

  return (
    <>
      <Carousel items={carouselItems} />

      <section>
        <Quote>
          <p>
            Dans des huiles posées avec précision sur un décor soigné, support en bois ou portail en
            biseau, il décline des ostéomorphes placés plus souvent verticalement sur fond uni noir
            de préférence, fichés sur un tube d&apos;acier ou articulés les uns aux autres, formant
            un monde sculptural étrange.
          </p>
          <p>
            De temps à autre une allusion au vivant comme cette construction dans laquelle se
            détache un bec d&apos;oiseau.
          </p>
          <p>
            Si Hellée, (1999) représente cette peinture dans laquelle la sculpture est implicite, il
            annonce une explicite sculpture de bois, peint, Hellée, (2009).
          </p>
          <p>
            Un portique laisse pendre, ossement acérés, des cadres et des boules dans une allégorie
            létale de tarlatane colorée. 2007
          </p>
          <cite className="mt-10 block">
            <p className="text-end">Le Delarge</p>
          </cite>
        </Quote>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const paintings = await getPaintings()
  const featuredPaintings = paintings.slice(0, 5)
  return {
    props: {
      featuredPaintings,
    },
    revalidate: 3600,
  }
}
