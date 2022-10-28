import type { PaintingInterface } from "../../services/painting"
import PaintingListItem from "./painting-list-item"

type props = {
  paintings: PaintingInterface[]
}

function PaintingList({ paintings }: props) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {paintings.map((painting: PaintingInterface) => (
        <li
          key={painting.id}
          className=" w-40 rounded-full border-4 border-gray-100 shadow-2xl overflow-hidden"
        >
          <PaintingListItem painting={painting} />
        </li>
      ))}
    </ul>
  )
}
export default PaintingList
