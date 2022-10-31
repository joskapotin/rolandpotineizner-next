import Head from "next/head"
import type { InferGetStaticPropsType } from "next/types"
import PaintingList from "../../components/painting/painting-list"
import { getPaintings } from "../../services/paintings"

function Paintings({ paintings }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Roland Potin Eizner | Œuvres</title>
      </Head>
      <section className="col-span-full w-full">
        <PaintingList paintings={paintings} />
      </section>
    </>
  )
}
export default Paintings

export const getStaticProps = async () => {
  const paintings = await getPaintings()
  return {
    props: {
      paintings,
    },
  }
}
