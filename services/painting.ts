import paintings from "./paintingsData"

export type IPainting = typeof paintings[0]

export const getPaintings = () => paintings
