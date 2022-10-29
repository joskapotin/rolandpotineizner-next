import type { PaintingInterface } from "../../services/painting"
import PaintingListItem from "./painting-list-item"

type props = {
  paintings: PaintingInterface[]
}

function PaintingList({ paintings }: props) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {paintings.map((painting: PaintingInterface) => (
        <li key={painting.id} className="basis-40 flex-grow">
          <PaintingListItem painting={painting} />
        </li>
      ))}
    </ul>
  )
}
export default PaintingList
