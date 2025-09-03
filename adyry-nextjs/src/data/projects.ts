import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'your-site-2017',
    title: '2017 Your site',
    description: 'contact me to get details.',
    technology: ['Custom Development'],
    url: 'mailto:adrian@adyry.com',
    featured: false,
  },
  {
    id: 'drinking-his-wine-2017',
    title: '2017 Drinking His Wine',
    description: '(Work in progress) Fully customized WordPress site with blog.',
    technology: ['WordPress', 'Custom Theme'],
    featured: false,
  },
  {
    id: 'modern-house-2017',
    title: '2017 Modern House',
    description: '(Work in progress) Developer & Real estate seller homepage. Project at conceptions stage. Launch expected at 1st/2nd quarter of 2017.',
    technology: ['Web Development', 'Real Estate'],
    featured: false,
  },
  {
    id: 'agataweber-2016-2017',
    title: '2016/2017 AgataWeber.pl',
    description: 'Sass with Bootstrap & Gulp (Sass Compiler, Autoprefixer, Live preview). Integrated with custom WP theme (WP was client chosen CMS for galleries management).',
    technology: ['Sass', 'Bootstrap', 'Gulp', 'WordPress'],
    url: 'http://agataweber.pl/',
    featured: true,
  },
  {
    id: 'adyry-com-2016',
    title: '2016 adyry.com',
    description: 'This site. HTML, CSS, AngularJS 1.X, BEM → Next.js 15, TypeScript, Tailwind CSS',
    technology: ['HTML', 'CSS', 'AngularJS', 'BEM', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'magda-2016',
    title: '2016 MagdaGłośniak.pl',
    description: 'WP (PHP, JS, CSS), fully customized child theme derived from default Twenty Sixteen theme. Custom prev/next post PHP widget with thumbnail. Not available online (customer vision change, lost source)',
    technology: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    featured: false,
  },
  {
    id: 'spiekikwarcowe-2016',
    title: '2016 Spiekikwarcowe.com',
    description: 'WP, basic PHP theme edits, fully customized CSS',
    technology: ['WordPress', 'PHP', 'CSS'],
    url: 'http://spiekikwarcowe.com',
    featured: false,
  },
  {
    id: 'adr-music-2016-2004',
    title: '2016-2004 ad.r music',
    description: 'Webpage with my music. Now it is integrated with this page.',
    technology: ['Web Development', 'Music Platform'],
    url: '/music',
    featured: true,
  },
  {
    id: 'timber-connections-2014',
    title: '2014 Application supporting the design of timber structure joints',
    description: "(Master's degree thesis). Python, utilizing SOLDIS API & Environment. App for designing rectangular cross-section timber elements connections, with metal fasteners, in any two dimensional state of stress.",
    technology: ['Python', 'SOLDIS API', 'Engineering Software'],
    githubUrl: 'https://github.com/adyry/timber-connections',
    featured: true,
  },
  {
    id: 'steel-connections-2013',
    title: '2013 Application supporting the design of steel beam-to-beam end plate connections',
    description: "(Engineer's degree thesis) Python, utilizing SOLDIS API & Environment. App for designing end plate bolted connections, in any two dimensional state of stress.",
    technology: ['Python', 'SOLDIS API', 'Engineering Software'],
    featured: false,
  },
];

export const skills = [
  'JavaScript / ES6+',
  'React + MobX',
  'Next.js',
  'TypeScript',
  'HTML5',
  'Sass / CSS',
  'jQuery',
  'Magento 1+2',
  'Gulp',
  'WordPress',
  'Angular 1.x',
  'Python',
  'anything interesting'
];

export const githubUrl = 'https://github.com/adyry';
export const contactEmail = 'adrian@adyry.com';
