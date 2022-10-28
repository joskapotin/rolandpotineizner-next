import PaintingList from "../../components/painting/painting-list"
import type { PaintingInterface } from "../../services/painting"
import { getPaintings } from "../../services/painting"

type props = {
  paintings: PaintingInterface[]
}

function Paintings({ paintings }: props) {
  return <PaintingList paintings={paintings} />
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
