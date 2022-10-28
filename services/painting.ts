import { sheets as gSheets } from "@googleapis/sheets"
import { API, SHEET } from "../constants/constants"
import { paintingFactory } from "../helpers/painting-factory"

export interface PaintingBeforeTypeInterface {
  id: string
  slug: string
  title: string
  year: string
  height: string
  width: string
  filename: string
  order: string
  visible: string
  imageBlurhash: string
  imageWidth: string
  imageHeight: string
  thumbWidth: string
  thumbHeight: string
  thumbBlurhash: string
}

export interface PaintingInterface {
  id: string
  slug: string
  title: string
  year: string
  height: string
  width: string
  filename: string
  order: number
  visible: boolean
  imageBlurhash: string
  imageWidth: number
  imageHeight: number
  thumbWidth: number
  thumbHeight: number
  thumbBlurhash: string
}

export const getPaintings = async () => {
  // First we get the data from google sheet API
  const sheets = gSheets({ version: "v4", auth: API.KEY })
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET.ID,
    range: SHEET.RANGE,
  })

  const values = response.data.values

  if (!values || values.length <= 0) throw new Error("Could not format data")

  // Second we need to format the data
  const labels = values.at(0) as [keyof PaintingBeforeTypeInterface]
  const entries = values.slice(1)

  const rawData = entries.map(entry =>
    entry.reduce((acc, current, index) => {
      const property = labels.at(index)
      if (property) acc[property] = current
      return acc
    }, {} as PaintingBeforeTypeInterface)
  )

  // Third we need to provide data type
  return rawData.map(entry => paintingFactory(entry))
}
