'use client';

import { motion } from 'framer-motion';
import { AlbumCard } from '@/components/music/AlbumCard';
import { useAppStore } from '@/store/useAppStore';
import { otherAlbums } from '@/data/music';
import Image from 'next/image';
import ContentContainer from '../../components/layout/ContentContainer';

export default function MusicPage() {
  const { albums } = useAppStore();

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
          {/* SoundCloud Embed */}
          <div className="w-full">
            <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1775859903&color=%2318282f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>

          {/* Main Albums */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Featured Albums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album) => (
                <AlbumCard key={album.name} album={album} />
              ))}
            </div>
          </section>

          {/* Other Releases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Other Releases</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {otherAlbums.sort((a,b) => Number(b.year) - Number(a.year)).map((album) => (
                <motion.div
                  key={album.id}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={album.image}
                      alt={album.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 14vw"
                    />
                    {album.listenUrl && (
                      <a
                        href={album.listenUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg"
                      >
                        <span className="text-white text-sm">Listen</span>
                      </a>
                    )}
                  </div>
                  <div className="mt-2">
                    <h3 className="text-base font-semibold line-clamp-2">{album.name}</h3>
                    <p className="text-sm opacity-60">{album.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Music Credits */}
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Other</h4>
                <p className="mb-2">
                  <a href="http://the-questionnaire.blogspot.com/2008/10/adrian-adr-kowalczewski.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    The questionnaire - ad.r
                  </a>
                </p>
                <p className="text-sm opacity-80 mb-4">
                  The questionnaire project is based on the original &quot;questionnaire of Marcel Proust&quot; (french writer), created by Antoinette Faure around 1890 and now, submitted to a few personalities – the interest is on the confrontation and crossover between the original questions and nowadays vision on things
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Productions / Produkcje</h4>
                <div className="space-y-1 text-sm opacity-80">
                  <p>PNP - Gracjan Roztocki [2008]</p>
                  <p>Ad.R - Bez przesady feat. Peno [2008]</p>
                  <p>Ad.R - Zaczarowany ołówek feat. AZR [2007]</p>
                  <p>Zaginiona Mike&apos;a Głowa - Rozkurcz [2008]</p>
                  <p>Zaginiona Mike&apos;a Głowa - Cała prawda o nas [2008]</p>
                  <p>Zaginiona Mike&apos;a Głowa - Skit [2008]</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Scratching & Cuts / Skrecze</h4>
                <div className="space-y-1 text-sm opacity-80">
                  <p>NSR feat.Peno+dj ad.r - Znasz Mnie [2008]</p>
                  <p>Peno + Raszu - Pierwszy raz feat. dj ad.r [2008]</p>
                  <p>Kdj - Być tu feat. Peno, dj. ad.r [2008]</p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </ContentContainer>
    </main>
  );
}
