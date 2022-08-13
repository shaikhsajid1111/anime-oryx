export interface Links {
  self: string;
}

export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

export interface RatingFrequencies {
  [key: string]: string;
}

export interface Tiny {
  width: number;
  height: number;
}

export interface Large {
  width: number;
  height: number;
}

export interface Small {
  width: number;
  height: number;
}

export interface Medium {
  width: number;
  height: number;
}

export interface Dimensions {
  tiny: Tiny;
  large: Large;
  small: Small;
  medium: Medium;
}

export interface Meta {
  dimensions: Dimensions;
}

export interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: Meta;
}

export interface Dimensions2 {
  tiny: Tiny;
  large: Large;
  small: Small;
}


export interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: Meta;
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: RatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate?: any;
  nextRelease: Date;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba?: any;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount?: any;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface LinksWithRelated {
  self: string;
  related: string;
}

export interface Genres {
  links: LinksWithRelated;
}


export interface Categories {
  links: LinksWithRelated;
}


export interface Castings {
  links: LinksWithRelated;
}


export interface Installments {
  links: LinksWithRelated;
}


export interface Mappings {
  links: LinksWithRelated;
}


export interface Reviews {
  links: LinksWithRelated;
}

export interface MediaRelationships {
  links: LinksWithRelated;
}

export interface Characters {
  links: LinksWithRelated;
}

export interface Staff {
  links: LinksWithRelated;
}

export interface Productions {
  links: LinksWithRelated;
}

export interface Quotes {
  links: LinksWithRelated;
}

export interface Episodes {
  links: LinksWithRelated;
}


export interface StreamingLinks {
  links: LinksWithRelated;
}

export interface AnimeProductions {
  links: LinksWithRelated;
}


export interface AnimeCharacters {
  links: LinksWithRelated;
}

export interface AnimeStaff {
  links: LinksWithRelated;
}

export interface Relationships {
  genres: Genres;
  categories: Categories;
  castings: Castings;
  installments: Installments;
  mappings: Mappings;
  reviews: Reviews;
  mediaRelationships: MediaRelationships;
  characters: Characters;
  staff: Staff;
  productions: Productions;
  quotes: Quotes;
  episodes: Episodes;
  streamingLinks: StreamingLinks;
  animeProductions: AnimeProductions;
  animeCharacters: AnimeCharacters;
  animeStaff: AnimeStaff;
}

export interface Datum {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface SearchResponse {
  data: Datum[];
}



