import type { InferGetStaticPropsType } from "next/types"
import PaintingList from "../../components/painting/painting-list"
import { getPaintings } from "../../services/painting"

function Paintings({ paintings }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="col-span-full">
      <PaintingList paintings={paintings} />
    </section>
  )
}
export default Paintings

export const getStaticProps = async () => {
  const paintings = getPaintings()
  return {
    props: {
      paintings,
    },
  }
}
