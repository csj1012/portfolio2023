export function buildItem(item: {
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  teaser?: {
    alt: string;
    teaser: boolean;
    src: string;
  };
  title: string;
  abbreviation?: string;
  aside?: {
    src: string;
    alt: string;
    caption: string;
  };
}): Promise<{
  slug: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };  
  teaser?: {
    alt: string;
    teaser: boolean;
    src: string;
  };
  title: string;
  abbreviation?: string;
  aside?: {
    src: string;
    alt: string;
    caption: string;
  };
}>;

export function buildImage(image: string, title: string): Promise<string>;

export function toSlug(title: string, abbreviation: string): string;