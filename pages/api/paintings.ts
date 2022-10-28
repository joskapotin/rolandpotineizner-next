import { sheets as gSheets } from "@googleapis/sheets"
import { GaxiosError } from "gaxios"
import type { NextApiRequest, NextApiResponse } from "next"
import { API, SHEET } from "../../constants/constants"
import { paintingFactory } from "../../helpers/painting-factory"

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaintingInterface[] | Error>
) {
  if (req.method === "GET") {
    try {
      // First we get the data from google sheet API
      const sheets = gSheets({ version: "v4", auth: API.KEY })
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET.ID,
        range: SHEET.RANGE,
      })

      const values = response.data.values as string[][]

      if (!values || values.length <= 0)
        return res.status(500).json(new Error("Could not format data"))

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
      const data = rawData.map(entry => paintingFactory(entry))

      // And forth we return the data
      return res.status(200).json(data)
    } catch (error) {
      // the GaxiosError should have a code error that we can use
      if (error instanceof GaxiosError)
        return res.status(parseInt(error.code || "500", 10)).json(error)

      // A normal error return a status 500
      if (error instanceof Error) return res.status(500).json(error)

      // Unhandled error return a custom message with also a status 500
      return res
        .status(500)
        .json(new Error("Could not fetch data", { cause: error }))
    }
  }
}
