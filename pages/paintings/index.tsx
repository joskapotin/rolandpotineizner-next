import type { InferGetStaticPropsType } from "next/types"
import PaintingList from "../../components/painting/painting-list"
import { getPaintings } from "../../services/paintings"

function Paintings({ paintings }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="col-span-full">
      <PaintingList paintings={paintings} />
    </section>
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
