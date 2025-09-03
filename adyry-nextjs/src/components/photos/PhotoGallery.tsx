'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PhotoGallery } from '@/types/music';
import { useAppStore } from '@/store/useAppStore';

interface PhotoGalleryComponentProps {
  gallery: PhotoGallery;
  className?: string;
}

export function PhotoGalleryComponent({ gallery, className = '' }: PhotoGalleryComponentProps) {
  const { setLightboxImage, lightboxImage } = useAppStore();
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const currentImage = lightboxImage !== null 
    ? gallery.images.find(img => img.id === lightboxImage)
    : null;

  const getCurrentImageIndex = () => {
    if (lightboxImage === null) return -1;
    return gallery.images.findIndex(img => img.id === lightboxImage);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % gallery.images.length;
    } else {
      newIndex = currentIndex === 0 ? gallery.images.length - 1 : currentIndex - 1;
    }
    
    setLightboxImage(gallery.images[newIndex].id);
  };

  return (
    <>
      <motion.div
        className={`space-y-6 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Gallery Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{gallery.title}</h2>
          {gallery.externalUrl && (
            <a
              href={gallery.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              View Full Gallery →
            </a>
          )}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-black/10 backdrop-blur-sm"
              onHoverStart={() => setHoveredImage(image.id)}
              onHoverEnd={() => setHoveredImage(null)}
              onClick={() => openLightbox(image.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <AnimatePresence>
                {hoveredImage === image.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-white text-center p-4"
                    >
                      {image.title && (
                        <h3 className="font-bold mb-2">{image.title}</h3>
                      )}
                      {image.description && (
                        <p className="text-sm opacity-80">{image.description}</p>
                      )}
                      <div className="mt-2 text-sm opacity-60">
                        Click to view full size
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>

              {/* Navigation Buttons */}
              {gallery.images.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => navigateLightbox('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    →
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Image Info */}
              {(currentImage.title || currentImage.description) && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                  {currentImage.title && (
                    <h3 className="font-bold mb-2">{currentImage.title}</h3>
                  )}
                  {currentImage.description && (
                    <p className="text-sm opacity-80">{currentImage.description}</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
