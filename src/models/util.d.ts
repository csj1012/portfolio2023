export function buildItem(item: {
  image?: string;
  teaser?: string;
  title: string;
  abbreviation: string;
  aside?: string;
}): Promise<{
  slug: string;
  image?: string;
  teaser?: string;
  title: string;
  abbreviation: string;
  aside?: string;
}>;

export function buildImage(image: string, title: string): Promise<string>;

export function toSlug(title: string, abbreviation: string): string;