import PaintingList from "../../components/painting/painting-list"
import type { PaintingInterface } from "../api/paintings"

type props = {
  paintings: PaintingInterface[]
}

function Paintings({ paintings }: props) {
  return <PaintingList paintings={paintings} />
}
export default Paintings

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/paintings")
  const paintings = await response.json()
  return {
    props: {
      paintings,
    },
  }
}
