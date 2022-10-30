import type { IPainting } from "../../services/paintings"
import PaintingListItem from "./painting-list-item"

type props = {
  paintings: IPainting[]
}

function PaintingList({ paintings }: props) {
  return (
    <ul className="grid grid-cols-autofill gap-4">
      {paintings.map((painting: IPainting) => (
        <li key={painting.id}>
          <PaintingListItem painting={painting} />
        </li>
      ))}
    </ul>
  )
}
export default PaintingList
