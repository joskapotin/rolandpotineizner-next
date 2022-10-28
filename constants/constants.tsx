export const API = {
  URL: "https://sheets.googleapis.com/v4/spreadsheets",
  KEY: process.env.API_KEY,
} as const

export const SHEET = {
  ID: "1dr9hLoZCBNTkpql2pfanrTIK3PDgMXswX1zZEJwNAQM",
  RANGE: {
    ALL: "!A1:O156",
    FEATURED: "!A1:O6",
  },
} as const

export const PATH = {
  PAINTINGS: {
    SOURCE: "/paintings/source",
    SQUARE: "/paintings/square",
  },
} as const

export const ROUTES = {
  HOME: { URL: "/", NAME: "Accueil" },
  ABOUT: { URL: "/about", NAME: "Biographie" },
  PAINTINGS: { URL: "/paintings", NAME: "Œuvres" },
  PAINTING: { URL: ":slug", NAME: "Œuvre" },
  NOT_FOUND: { URL: "/not-found", NAME: "Introuvable" },
} as const
