import { LinksWithRelated } from "./responseInterface";

export interface MangaResponse {
  data?: Data
}

export interface Data {
  id: string
  type: string
  links?: Links
  attributes?: Attributes
  relationships?: Relationships
}

export interface Links {
  self: string
}

export interface Attributes {
  createdAt: string
  updatedAt: string
  slug: string
  synopsis: string
  description: string
  coverImageTopOffset: number
  titles: Titles
  canonicalTitle: string
  abbreviatedTitles: string[]
  averageRating: any
  ratingFrequencies: RatingFrequencies
  userCount: number
  favoritesCount: number
  startDate: string
  endDate: string
  nextRelease: any
  popularityRank: number
  ratingRank: any
  ageRating: any
  ageRatingGuide: any
  subtype: string
  status: string
  tba: any
  posterImage: PosterImage
  coverImage: any
  chapterCount: number
  volumeCount: number
  serialization: any
  mangaType: string
}

export interface Titles {
  en_jp: string
  ja_jp: string
}

export interface RatingFrequencies {
  [key: string]: string
}

export interface PosterImage {
  tiny: string
  large: string
  small: string
  medium: string
  original: string
  meta: Meta
}

export interface Meta {
  dimensions: Dimensions
}

export interface Dimensions {
  tiny: Tiny
  large: Large
  small: Small
  medium: Medium
}

export interface Tiny {
  width: number
  height: number
}

export interface Large {
  width: number
  height: number
}

export interface Small {
  width: number
  height: number
}

export interface Medium {
  width: number
  height: number
}

export interface Relationships {
  genres: Genres
  categories: Categories
  castings: Castings
  installments: Installments
  mappings: Mappings
  reviews: Reviews
  mediaRelationships: MediaRelationships
  characters: Characters
  staff: Staff
  productions: Productions
  quotes: Quotes
  chapters: Chapters
  mangaCharacters: MangaCharacters
  mangaStaff: MangaStaff
}

export interface Genres {
  links: LinksWithRelated
}



export interface Categories {
  links: LinksWithRelated
}


export interface Castings {
  links: LinksWithRelated
}

export interface Installments {
  links: LinksWithRelated
}

export interface Mappings {
  links: LinksWithRelated
}

export interface Reviews {
  links: LinksWithRelated
}

export interface MediaRelationships {
  links: LinksWithRelated
}


export interface Characters {
  links: LinksWithRelated
}


export interface Staff {
  links: LinksWithRelated
}


export interface Productions {
  links: LinksWithRelated
}


export interface Quotes {
  links: LinksWithRelated
}


export interface Chapters {
  links: LinksWithRelated
}


export interface MangaCharacters {
  links: LinksWithRelated
}



export interface MangaStaff {
  links: LinksWithRelated
}

