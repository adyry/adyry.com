'use client';

import { motion } from 'framer-motion';
import { PhotoGalleryComponent } from '@/components/photos/PhotoGallery';
import { useAppStore } from '@/store/useAppStore';
import ContentContainer from '../../components/layout/ContentContainer';

export default function PhotosPage() {
  const { photoGalleries } = useAppStore();

  return (
    <main>
      <ContentContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold">Photos</h1>
          
          {photoGalleries.map((gallery) => (
            <PhotoGalleryComponent key={gallery.id} gallery={gallery} />
          ))}
        </motion.div>
      </ContentContainer>
    </main>
  );
}
