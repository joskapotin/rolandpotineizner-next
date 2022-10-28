import type {
  PaintingBeforeTypeInterface,
  PaintingInterface,
} from "../services/painting"

export const paintingFactory = (
  painting: PaintingBeforeTypeInterface
): PaintingInterface => {
  const order =
    typeof painting.order === "number"
      ? painting.order
      : parseInt(painting.order, 10)
  const visible = painting.visible === "true"
  const imageWidth =
    typeof painting.imageWidth === "number"
      ? painting.imageWidth
      : parseInt(painting.imageWidth, 10)
  const imageHeight =
    typeof painting.imageHeight === "number"
      ? painting.imageHeight
      : parseInt(painting.imageHeight, 10)
  const thumbWidth =
    typeof painting.thumbWidth === "number"
      ? painting.thumbWidth
      : parseInt(painting.thumbWidth, 10)
  const thumbHeight =
    typeof painting.thumbHeight === "number"
      ? painting.thumbHeight
      : parseInt(painting.thumbHeight, 10)

  return {
    ...painting,
    order,
    visible,
    imageWidth,
    imageHeight,
    thumbWidth,
    thumbHeight,
  }
}
