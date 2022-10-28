import type { PaintingInterface } from "../../pages/api/paintings"
import PaintingItem from "./painting-item"

type props = {
  paintings: PaintingInterface[]
}

function PaintingList({ paintings }: props) {
  return (
    <ul>
      {paintings.map((painting: PaintingInterface) => (
        <PaintingItem key={painting.id} painting={painting} />
      ))}
    </ul>
  )
}
export default PaintingList
