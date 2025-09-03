'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { Album } from '@/types/music';

interface AlbumCardProps {
  album: Album;
  className?: string;
}

export function AlbumCard({ album, className = '' }: AlbumCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '50px' });
  


  const handleAlbumClick = () => {
      setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleAlbumClick}
                        whileHover={{ scale: 1.01 }}

    >
      <div className="relative overflow-hidden rounded-lg bg-black/10 backdrop-blur-sm">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          {isInView && (
            album.image ? <Image
              src={album.image}
              alt={album.name}
              fill
              className={`object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            /> : <motion.div
                          className={`object-cover transition-all duration-500 `}

            ></motion.div>
          )}
          
          {!imageLoaded && isInView && (
            <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />
          )}
          
          {/* Always visible overlay with basic info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
            <div className="text-white">
              <h3 className="text-lg font-bold mb-1">{album.name}</h3>
              {album.releaseYear && (
                <p className="text-sm opacity-80 mb-1">{album.releaseYear}</p>
              )}
            </div>
          </div>
        </div>

        {/* Album Info - Always visible */}
        <div className="p-4 bg-white/10 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{album.name}</h3>
              <p className="text-sm opacity-80">
                {album.releaseYear} {album.netlabel && `• ${album.netlabel}`}
              </p>
            </div>
            
            {/* Always visible action links */}
            <div className="flex gap-2 ml-4">
              {album.bandcampUrl && (
                <a
                  href={album.bandcampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded text-sm hover:bg-blue-500/30 transition-colors touch-manipulation"
                  onClick={(e) => e.stopPropagation()}
                >
                  Bandcamp
                </a>
              )}
              {album.listenUrl && (
                <a
                  href={album.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-green-500/20 text-green-200 rounded text-sm hover:bg-green-500/30 transition-colors touch-manipulation"
                  onClick={(e) => e.stopPropagation()}
                >
                  Listen
                </a>
              )}
            </div>
          </div>
          
          {/* Expandable Description */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm mb-4 leading-relaxed">{album.description}</p>
                  
                  {/* Track List */}
                  {album.tracks && album.tracks.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold mb-2">Tracks:</h4>
                      {album.tracks.map((track, index) => (
                          <div key={track.id} className="flex items-center gap-1">
                            <span className="text-sm opacity-60 min-w-[24px]">{String(index + 1).padStart(2, '0')}.</span>
                            <span className="text-sm">{track.title}</span>
                          </div>

                      ))}
                    </div>
                  )}

                  {/* Review Links */}
                  {album.reviews && album.reviews.length > 0 && (
                    <div className="space-y-2 mt-4">
                      <h4 className="font-semibold mb-2">Reviews:</h4>
                      <div className="space-y-2">
                        {album.reviews.map((review, index) => (
                          <motion.a
                            key={index}
                            href={review.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-blue-800 hover:text-blue-100 active:text-blue-100 transition-colors p-2 rounded bg-white/5 hover:bg-white/10 touch-manipulation"
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            → {review.title}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
