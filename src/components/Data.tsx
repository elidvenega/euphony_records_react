export interface ImageInfo {
    src?: string;
    alt?: string;
  }
  
  export interface HeroInfo {
    title: string;
    image: ImageInfo;
  }
  
  export interface LinkInfo {
    href: string;
    className?: string;
  }
  
  export interface BlockInfo {
    heading?: string;
    title?: string;
    content?: string;
    image?: ImageInfo;
    link?: LinkInfo;
    button?: string;
  }
  
  export interface Content {
    hero?: HeroInfo;
    alternatingBlocks?: BlockInfo[];
    cellBlocks: BlockInfo[];
  }