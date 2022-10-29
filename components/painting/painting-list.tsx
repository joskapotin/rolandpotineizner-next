import type { IPainting } from "../../services/painting"
import PaintingListItem from "./painting-list-item"

type props = {
  paintings: IPainting[]
}

function PaintingList({ paintings }: props) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {paintings.map((painting: IPainting) => (
        <li key={painting.id} className="flex-grow basis-40">
          <PaintingListItem painting={painting} />
        </li>
      ))}
    </ul>
  )
}
export default PaintingList
