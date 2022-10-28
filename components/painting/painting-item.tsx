import type { PaintingInterface } from "../../services/painting"

type props = {
  painting: PaintingInterface
}

function PaintingItem({ painting }: props) {
  return <h2>{painting.title}</h2>
}
export default PaintingItem
