import type { IPainting } from "../../services/paintings"
import PaintingListItem from "./painting-list-item"

type props = {
  paintings: IPainting[]
}

function PaintingList({ paintings }: props) {
  return (
    <ul className="grid w-full grid-cols-autofill gap-4">
      {paintings.map((painting: IPainting, index) => (
        <li key={painting.id}>
          <PaintingListItem painting={painting} priority={index < 20} />
        </li>
      ))}
    </ul>
  )
}
export default PaintingList
