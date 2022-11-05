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
      <div className="grid grid-cols-7 gap-3">
        {labels.map(label => {
          const isHidden = hiddenLabels.includes(label)
          return (
            <span key={label} className={`${isHidden ? "hidden" : "flex flex-grow"}`}>
              {label}
            </span>
          )
        })}
      </div>

      <ul className="mt-4 flex flex-col gap-3">
        {paintings.map(painting => (
          <li key={painting.id}>
            <form className="grid grid-cols-7 gap-3">
              {labels.map(label => {
                const value = painting[label]
                const isHidden = hiddenLabels.includes(label)
                return (
                  <label
                    key={`${painting.id}-${label}`}
                    className={`${isHidden ? "hidden" : "flex"}`}
                  >
                    <span className="sr-only">{label}</span>
                    {typeof value === "boolean" && (
                      <input
                        hidden={isHidden}
                        readOnly={isHidden}
                        type="checkbox"
                        checked={value}
                        className="w-full"
                        name={`${painting.slug}-${label}`}
                      />
                    )}
                    {typeof value === "number" && (
                      <input
                        hidden={isHidden}
                        readOnly={isHidden}
                        type="number"
                        value={value}
                        className="w-full"
                        name={`${painting.slug}-${label}`}
                      />
                    )}
                    {typeof value === "string" && (
                      <input
                        hidden={isHidden}
                        readOnly={isHidden}
                        type="text"
                        value={value}
                        className="w-full"
                        name={`${painting.slug}-${label}`}
                      />
                    )}
                  </label>
                )
              })}
            </form>
          </li>
        ))}
      </ul>
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
