import type { PaintingInterface } from "../../pages/api/paintings"

type props = {
  painting: PaintingInterface
}

function PaintingItem({ painting }: props) {
  return <div>PaintingItem</div>
}
export default PaintingItem
