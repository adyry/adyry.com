export interface Album {
  id: string;
  title: string;
  description: string;
  year: number;
  coverImage?: string;
  tracks?: Track[];
  links?: AlbumLink[];
}

export interface Track {
  id: string;
  title: string;
  duration?: string;
  order: number;
}

export interface AlbumLink {
  platform: string;
  url: string;
  type: 'streaming' | 'download' | 'purchase';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technology: string[];
  url?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Photo {
  id: string;
  title?: string;
  description?: string;
  url: string;
  thumbnailUrl?: string;
  tags?: string[];
  date?: Date;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
