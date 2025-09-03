import { Album, PhotoGallery } from '@/types/music';

export const albums: Album[] = [
      {
    name: 'Summoner',
    // image: '/images/dystopiates.jpg',
    releaseYear: 2026,
    tracks: [
      { id: 1, title: 'Dystopiates', duration: '05:23' },
      { id: 2, title: 'Retaliation', duration: '06:31' },
    ],
    description: `Two tracks from the archive, created between 2020 - 2022`
  },
  {
    name: 'Dystopiates',
    // image: '/images/dystopiates.jpg',
    releaseYear: 2024,
    tracks: [
      { id: 1, title: 'Dystopiates', duration: '05:23' },
      { id: 2, title: 'Retaliation', duration: '06:31' },
    ],
    description: `Two tracks from the archive, created between 2020 - 2022`
  },
  {
    name: '2013',
    image: '/images/2013.jpg',
    releaseYear: 2013,
    bandcampUrl: 'https://ad1r.bandcamp.com/album/2013',
    tracks: [
      { id: 1, title: 'Clocks', duration: '05:31' },
      { id: 2, title: 'Music is delay', duration: '03:21' },
      { id: 3, title: 'String', duration: '03:35' },
      { id: 4, title: 'Parus Major', duration: '02:58' },
      { id: 5, title: 'Delay is math', duration: '06:33' },
      { id: 6, title: 'Bridge', duration: '02:58' }
    ],
    description: `All tracks made in 2013 by Adrian Kowalczewski. Track 2 (except drums) is made exclusively from guitar string sound. Track 3 (except drums) is made exclusively from Parus major sound. Track 5 is based on "Short dance song with glitch surprise" from "Short dance songs EP". Thank you to everything and everyone what/who is my inspiration.`
  },
  {
    name: 'Decay',
    image: '/images/decayfront.jpg',
    releaseYear: 2012,
    bandcampUrl: 'https://ad1r.bandcamp.com/album/2013',
    tracks: [
      { id: 1, title: 'Granates', duration: '07:31' },
      { id: 2, title: 'Tętno I', duration: '03:18' },
      { id: 3, title: 'Perypetie', duration: '07:36' },
      { id: 4, title: 'Do/Know', duration: '06:27' },
      { id: 5, title: 'Sleep', duration: '07:37' },
      { id: 6, title: 'Oddychaj', duration: '03:52' },
      { id: 7, title: 'Tętno II', duration: '03:18' }
    ],
    description: `Limited physical release only. Digital on request. It's called decay because it's about it. It's dedicated to love and dissolve, farewells and welcomes, without which I wouldn't make those tracks. All tracks made in 2009-2012 by Adrian Kowalczewski.`,
    listenUrl: 'decay.html'
  },
  {
    name: 'Select (parts 1 + 2)',
    image: '/images/select.jpg',
    releaseYear: 2008,
    netlabel: 'testube netlabel [Tube162]',
    listenUrl: 'http://testtube.monocromatica.com/releases/tube162.htm',
    tracks: [
      { id: 1, title: 'Static: c', duration: '' },
      { id: 2, title: 'Static: Select a', duration: '' },
      { id: 3, title: 'Static: Select b', duration: '' },
      { id: 4, title: 'Static: Select c', duration: '' },
      { id: 5, title: 'Static: b', duration: '' },
      { id: 6, title: 'Move: a', duration: '' },
      { id: 7, title: 'Move: Short Guitar Song Part 2', duration: '' },
      { id: 8, title: 'Move: Part 3', duration: '' }
    ],
    reviews: [
      { title: 'Pedro Leitao [English]', url: 'http://testtube.monocromatica.com/releases/tube162.htm', language: 'English' },
      { title: 'Fabrik [English]', url: 'http://fabrikproject.com.mx/blog/?p=4514', language: 'English' }
    ],
    description: `Released on testube netlabel [Tube162]. Electronic compositions exploring static and movement.`
  },
  {
    name: 'Short Dance Songs EP',
    image: '/images/sds.jpg',
    releaseYear: 2008,
    netlabel: 'testube netlabel [Tube130]',
    listenUrl: 'http://testtube.monocromatica.com/releases/tube130.htm',
    tracks: [
      { id: 1, title: 'Short Guitar Song', duration: '' },
      { id: 2, title: 'Out Moon (Of)', duration: '' },
      { id: 3, title: 'Short Movie Song', duration: '' },
      { id: 4, title: 'Too Short 8 Bit Love Song', duration: '' },
      { id: 5, title: 'Short Dance Song With Glitch Surprise', duration: '' },
      { id: 6, title: 'Rozliczenie', duration: '' },
      { id: 7, title: 'Short Vocal Song (parts 1 + 2)', duration: '' }
    ],
    reviews: [
      { title: 'Pedro Leitao [English]', url: 'http://testtube.monocromatica.com/releases/tube130.htm', language: 'English' },
      { title: 'Axun [Polish]', url: 'http://axunarts.wordpress.com/2008/07/09/adr-short-dance-songs/', language: 'Polish' },
      { title: 'Marc Weidenbaum [disquiet.com] [English]', url: 'http://disquiet.com/2008/07/17/21st-century-mp3-variations-by-adrian-kowalczewski/', language: 'English' }
    ],
    description: `A collection of experimental dance tracks exploring different electronic textures and rhythms.`
  }
];

export const photoGalleries: PhotoGallery[] = [
  {
    id: 1,
    title: 'Tumblr Photography',
    externalUrl: 'http://adyry.tumblr.com',
    images: [
      { id: 1, src: '/images/tumblr1.jpg', alt: 'Photography from tumblr gallery 1' },
      { id: 2, src: '/images/tumblr2.jpg', alt: 'Photography from tumblr gallery 2' },
      { id: 3, src: '/images/tumblr3.jpg', alt: 'Photography from tumblr gallery 3' },
      { id: 4, src: '/images/tumblr4.jpg', alt: 'Photography from tumblr gallery 4' }
    ]
  }
];

export const otherAlbums = [
  {
    id: 'pl1',
    name: 'Daa szoł - Orginal',
    year: '2002',
    image: '/images/pl1.jpg',
    description: 'Recorded in ejay 2 - contains few skits recorded with schoolmates in 4th class of grade school'
  },
  {
    id: 'pl2', 
    name: 'Kik - Ełkaliptus',
    year: '2004',
    image: '/images/pl2.jpg',
    description: '1st CD with melodies composed by myself'
  },
  {
    id: 'pl3',
    name: 'Kik - Muzka i Muzyczki Początek Wstępu',
    year: '2005',
    image: '/images/pl3.jpg',
    description: 'Contains tracks from Ełkaliptus + few new tracks in electronica climate'
  },
  {
    id: 'pl4',
    name: 'Kik - Codzienność',
    year: '2006',
    image: '/images/pl4.jpg',
    description: '1st official. Holded in chillout/ambient style',
    listenUrl: 'http://www.last.fm/music/KIK/Codzienno%C5%9B%C4%87'
  },
  {
    id: 'pl5',
    name: 'Kik - Wcielenia Dwa',
    year: '2006',
    image: '/images/pl5.jpg',
    description: 'Experimental ambient psychedelic electronica',
    listenUrl: 'http://www.last.fm/music/KIK/Wcielenia+Dwa'
  },
  {
    id: 'plc',
    name: 'Conceptualism',
    year: '2008',
    image: '/images/plc.jpg',
    description: 'Released as physical promo CD only'
  },
  {
    id: 'rdnes',
    name: 'Rainy does not equal Sunny',
    year: '2008',
    image: '/images/rdnes.jpg',
    description: 'Released on otium netlabel [OTR40]',
    listenUrl: 'http://otium.ru/?id=93'
  }
];
