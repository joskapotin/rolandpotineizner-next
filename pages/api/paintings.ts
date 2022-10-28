import { GaxiosError } from "gaxios"
import type { NextApiRequest, NextApiResponse } from "next"
import type { PaintingInterface } from "../../services/painting"
import { getPaintings } from "../../services/painting"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaintingInterface[] | Error>
) {
  if (req.method === "GET") {
    try {
      const paintings = await getPaintings()
      return res.status(200).json(paintings)
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
