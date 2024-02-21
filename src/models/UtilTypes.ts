// UtilTypes.ts
export interface IItem {
  image?: {
    src: string
    alt: string
    caption: string
  }
  teaser?: {
    alt: string
    teaser?: boolean
    src: string
  }
  title: string
  abbreviation?: string
  aside?: {
    src: string
    alt: string
    caption: string
  }
}

export interface IBuildItemReturn {
  slug: string
  image?: {
    src: string
    alt: string
    caption: string
  }  
  teaser?: {
    alt: string
    teaser?: boolean
    src: string
  }
  title: string
  abbreviation?: string
  aside?: {
    src: string
    alt: string
    caption: string
  }
}