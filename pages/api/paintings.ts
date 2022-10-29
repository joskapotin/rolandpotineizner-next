import type { NextApiRequest, NextApiResponse } from "next"
import type { IPainting } from "../../services/painting"
import { getPaintings } from "../../services/painting"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPainting[] | Error>
) {
  if (req.method === "GET") {
    try {
      const paintings = getPaintings()
      return res.status(200).json(paintings)
    } catch (error) {
      // A normal error return a status 500
      if (error instanceof Error) return res.status(500).json(error)

      // Unhandled error return a custom message with also a status 500
      return res.status(500).json(new Error("Could not fetch data", { cause: error }))
    }
  }
}
