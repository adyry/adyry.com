export interface Track {
  id: number;
  title: string;
  duration: string;
  audioUrl?: string;
}

export interface Review {
  title: string;
  url: string;
  language: string;
}

export interface Album {
  name: string;
  image?: string;
  description: string;
  tracks?: Track[];
  releaseYear?: number;
  bandcampUrl?: string;
  listenUrl?: string;
  buyUrl?: string;
  netlabel?: string;
  reviews?: Review[];
}

export interface PhotoGallery {
  id: number;
  title: string;
  images: GalleryImage[];
  externalUrl?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}
