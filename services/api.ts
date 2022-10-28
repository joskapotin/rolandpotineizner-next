import { API } from "../constants/constants"
import { getWithExpiry, setWithExpiry } from "../helpers/storage"
import type { ResumeInterface } from "../hooks/useResume"

type Entries = string[]
type Values = Entries[]

export type IncomingData = {
  majorDimension: string
  range: string
  values: Values
}

export const getPaintings: () => Promise<IncomingData> = async () => {
  const localData = getWithExpiry("paintings")
  if (localData) return Promise.resolve(JSON.parse(localData))

  try {
    const response = await fetch(API.PAINTINGS)
    if (!response.ok) {
      throw new Error("Network response was not OK")
    }

    const data = await response.json()

    setWithExpiry({
      key: "paintings",
      value: JSON.stringify(data),
    })

    return data
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
    throw new Error("Oops something went wrong!", { cause: error })
  }
}

export const getResume = async (): Promise<ResumeInterface[]> => {
  const localData = getWithExpiry("resume")
  if (localData) return Promise.resolve(JSON.parse(localData))

  // fetch data
  const response = await fetch(API.RESUME)
  const data = await response.json()

  // store local data
  setWithExpiry({
    key: "resume",
    value: JSON.stringify(data),
  })

  return data
}
