import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Album, PhotoGallery } from '@/types/music';
import { albums, photoGalleries } from '@/data/music';

interface AppState {
  // Music state
  albums: Album[];
  
  // Photos state
  photoGalleries: PhotoGallery[];
  selectedGallery: PhotoGallery | null;
  lightboxImage: number | null;
  
  // UI state
  isLoading: boolean;
  
  // Actions
  setSelectedAlbum: (album: Album | null) => void;
  setSelectedGallery: (gallery: PhotoGallery | null) => void;
  setLightboxImage: (imageId: number | null) => void;
  setIsLoading: (loading: boolean) => void;
  
  // Computed getters
  getAlbumById: (id: number) => Album | undefined;
  getGalleryById: (id: number) => PhotoGallery | undefined;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set, get) => ({
      // Initial state
      albums,
      photoGalleries,
      selectedGallery: null,
      lightboxImage: null,
      isLoading: false,
      
      setSelectedGallery: (gallery) => set({ selectedGallery: gallery }),
      setLightboxImage: (imageId) => set({ lightboxImage: imageId }),
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      // Computed getters
      getAlbumById: (id) => {
        return get().albums.find(album => album.id === id);
      },
      
      getGalleryById: (id) => {
        return get().photoGalleries.find(gallery => gallery.id === id);
      }
    }),
    {
      name: 'adyry-store'
    }
  )
);
