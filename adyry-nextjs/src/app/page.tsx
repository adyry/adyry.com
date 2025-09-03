import { Metadata } from 'next';
import ContentContainer from '../components/layout/ContentContainer';

export const metadata: Metadata = {
  title: 'adyry.com - Adrian Kowalczewski',
  description: 'Personal portfolio of Adrian Kowalczewski - Web Developer, Musician, and Creative Professional',
  keywords: ['Adrian Kowalczewski', 'web developer', 'musician', 'portfolio', 'JavaScript', 'React', 'Next.js'],
  openGraph: {
    title: 'adyry.com - Adrian Kowalczewski',
    description: 'Personal portfolio of Adrian Kowalczewski - Web Developer, Musician, and Creative Professional',
    url: 'https://adyry.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'adyry.com - Adrian Kowalczewski',
    description: 'Personal portfolio of Adrian Kowalczewski - Web Developer, Musician, and Creative Professional',
  },
};

export default function Home() {
  return (
    <main>
      <ContentContainer>
        <h1 style={{ textAlign: 'center', margin: '20px 0', fontSize: '24px' }}>
          adyry.com
        </h1>
        <p style={{ textAlign: 'center', margin: '20px 0' }}>
          Next.js 15 Migration - All Phases Complete! 🎉
        </p>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <p>✅ Phase 1: Next.js 15 Setup & Infrastructure</p>
          <p>✅ Phase 2: UI Framework Migration with React Components</p>
          <p>✅ Phase 3: Enhanced Routing & Navigation</p>
          <p>✅ Phase 4: State Management & Interactive Features</p>
          <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' }} />
          <p>🚀 Features: Zustand state management, interactive music player</p>
          <p>🖼️ Photo galleries with lightbox functionality</p>
          <p>🔍 Search & filtering capabilities</p>
          <p>⚡ Lazy loading and performance monitoring</p>
          <p>� Fully responsive design with modern animations</p>
        </div>
      </ContentContainer>
    </main>
  );
}
