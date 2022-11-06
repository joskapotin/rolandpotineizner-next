import fsPromises from "fs/promises"
import path from "path"
import { DB } from "../constants/constants"

export interface IPainting {
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
	thumbnailWidth: number
	thumbnailHeight: number
	squareBlurhash: string
	featured: boolean
}

export const getPaintings = async (): Promise<IPainting[]> => {
	const filePath = path.join(process.cwd(), DB.URL)
	const jsonData = await fsPromises.readFile(filePath, "utf-8")

	return JSON.parse(jsonData)
}
