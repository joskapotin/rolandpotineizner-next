import type { InferGetServerSidePropsType } from "next/types"
import { getPaintings } from "../../services/paintings"

//   id: string
//   slug: string
//   title: string
//   year: string
//   height: string
//   width: string
//   filename: string
//   order: number
//   visible: boolean
//   imageBlurhash: string
//   imageWidth: number
//   imageHeight: number
//   thumbWidth: number
//   thumbHeight: number
//   squareBlurhash: string
//   featured: boolean

function Test({ paintings }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const labels = Object.keys(paintings[0]) as Array<Partial<keyof typeof paintings[0]>>
  const hiddenLabels = [
    "id",
    "filename",
    "slug",
    "imageBlurhash",
    "imageWidth",
    "imageHeight",
    "thumbnailWidth",
    "thumbnailHeight",
    "squareBlurhash",
  ]

  return (
    <div className="col-span-full">
      <table className="table-auto">
        <thead>
          <tr>
            {labels.map(label => {
              if (hiddenLabels.includes(label))
                return (
                  <th key={label} className="hidden">
                    {label}
                  </th>
                )
              return <th key={label}>{label}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {paintings.map(painting => (
            <tr key={painting.id}>
              {labels.map(prop => {
                const value = painting[prop]
                if (hiddenLabels.includes(prop))
                  return (
                    <td key={`${painting.id}-${prop}`} className="hidden">
                      {value}
                    </td>
                  )

                return (
                  <td key={`${painting.id}-${prop}`}>
                    <label>
                      {prop}
                      {typeof value === "boolean" && <input type="checkbox" checked={value} />}
                      {typeof value === "number" && <input type="number" value={value} />}
                      {typeof value === "string" && <input type="text" value={value} />}
                    </label>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Test

export async function getServerSideProps() {
  const paintings = await getPaintings()
  return {
    props: { paintings },
  }
}
