// types.ts
export interface IProject {
  organization: {
    name: string;
    url: string;
  };
  title: string;
  abbreviation?: string;
  featured?: boolean;
  shortDescription: string;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  video?: {
    src: string;
  };
  year: string;
  teaser?: {
    alt: string;
    teaser?: boolean;
    src: string;
  };
  aside?: {
    src: string;
    alt: string;
    caption: string;
  };
  description: string[];
  techs: string[];
  role: string;
  links: {
    href: string;
    text: string;
  }[];
  id?: string;
  view?: string;
  credits?: string;
}

export type IProjectsSrcList = IProject[];
