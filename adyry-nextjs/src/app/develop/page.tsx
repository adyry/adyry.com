import { Metadata } from 'next';
import Image from 'next/image';
import ContentContainer from '../../components/layout/ContentContainer';

export const metadata: Metadata = {
  title: 'Development Portfolio - Adrian Kowalczewski',
  description: 'Web development projects by Adrian Kowalczewski - JavaScript, React, Next.js, WordPress, Python and more',
  keywords: ['web development', 'JavaScript', 'React', 'Next.js', 'WordPress', 'Python', 'portfolio'],
  openGraph: {
    title: 'Development Portfolio - Adrian Kowalczewski',
    description: 'Web development projects by Adrian Kowalczewski - JavaScript, React, Next.js, WordPress, Python and more',
    url: 'https://adyry.com/develop',
    type: 'website',
  },
};

export default function DevelopPage() {
  return (
    <main>
      <ContentContainer>
        <h3>Kompleksowe tworzenie i projektowanie profesjonalnych stron internetowych w oparciu o CMS Wordpress od roku 2016.
          Utrzymanie i
          zmiany na istniejących stronach. Fotografia na potrzeby stron internetowych. Realizacja dźwięku.</h3>
        <br />
        <a href="mailto:adrian.kowalczewski@gmail.com" className="text-slate-800 transition-colors duration-300 hover:text-gray-500">Napisz do mnie w celu otrzymania wyceny</a>
        <br />
        <br />
        <h3>Przykładowa realizacja:</h3>
        <a href="https://vowie.com.pl" target="_blank" className="text-slate-800 transition-colors duration-300 hover:text-gray-500">Vowie.com.pl</a>
        <h4>Strona - napisana w React (Interaktywność strony, animacje, brak przeładowań przy nawigacji)</h4>
        <a href="https://vowie.com.pl" target="_blank" className="text-slate-800 transition-colors duration-300 hover:text-gray-500">
          <Image src="/images/v1.jpg" className="content__image" alt="Vowie.com.pl website screenshot" width={800} height={600} />
        </a>
        <h4>Panel zarządzania stroną wraz z przygotowanym edytorem projektów. Intuicyjna możliwość dodawania kolejnych
          realizacji na stronie dla osoby nietechnicznej, bez przytłaczającej ilości wtyczek &quot;ułatwiajacych&quot; edycję strony.</h4>
        <a href="https://vowie.com.pl" target="_blank" className="text-slate-800 transition-colors duration-300 hover:text-gray-500">
          <Image src="/images/v2.jpg" className="content__image" alt="Vowie.com.pl admin panel screenshot" width={800} height={600} />
        </a>
      </ContentContainer>
    </main>
  );
}
