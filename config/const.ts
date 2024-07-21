export const Routes = {
  home: '/',
  portfolio: '/portfolio',
  about: '/tentang',
  contact: '/kontak',
  thankyou: '/thanks',
  services_interior: '/layanan/interior',
  services_architect: '/layanan/arsitektur',
  services_furniture: '/layanan/furnitur',
  services_design: '/layanan/3d-desain',
} as const

export const Brand = {
  Name: 'Gelora Tujuh\xA0Utama',
  Tagline: 'Design and build',
}

export const Portfolio = [
  {
    type: 'interior',
    owner: 'Abeng',
    name: 'FAS Rooms',
    slug: '/portfolio/fas-rooms',
    quote: 'Buset dah, keren bener\xA0ni hasilnya. Memuaskan!', // prettier-ignore
  },
  {
    type: 'interior',
    owner: 'Oyot',
    name: 'Dior Stores',
    slug: '/portfolio/dior-stores',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
  },
  {
    type: 'arsitektur',
    owner: 'Fathur GM',
    name: 'Real Estates',
    slug: '/portfolio/real-estate',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
  },
  {
    type: 'furnitur',
    owner: 'Ncak',
    name: 'Sets Kitchen',
    slug: '/portfolio/kitchen-set',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
  },
  {
    type: 'jasa-desain',
    owner: 'Hesti',
    name: 'Desain Rumah',
    slug: '/portfolio/desain-rumah',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
  },
]

export const Services = {
  interior: {
    path: Routes.services_interior,
    title: 'Profesional. Lorem Ipsum. Bergaransi.',
    tagline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    excerpt: 'G7 Interior merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    cardImage: '/04.jpg',
    scope: ['Residensial'],
  },
  arsitektur: {
    path: Routes.services_architect,
    title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
    tagline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    excerpt: 'G7 Arsitektur merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    cardImage: '/01.jpg',
    scope: ['Real Estate'],
  },
  furnitur: {
    path: Routes.services_furniture,
    title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
    tagline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    excerpt: 'G7 Furnitur merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    cardImage: '/02.jpg',
    scope: ['Kitchen Set'],
  },
  '3d-desain': {
    path: Routes.services_design,
    title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
    tagline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    excerpt: 'Jasa Desain G7 merupakan lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    cardImage: '/05.jpg',
    scope: ['Lorem ipsum'],
  },
}

export const Submenus = {
  services: [
    {
      name: 'Arsitektur',
      path: Routes.services_architect,
    },
    {
      name: 'Interior',
      path: Routes.services_interior,
    },
    {
      name: 'Furnitur',
      path: Routes.services_furniture,
    },
    {
      name: '3D Desain',
      path: Routes.services_design,
    },
  ],
}

export const Menus: Menu[] = [
  {
    name: 'Layanan',
    path: Submenus.services,
  },
  {
    name: 'Portfolio',
    path: Routes.portfolio,
  },
  {
    name: 'Mitra',
    path: Routes.contact + '/?ctx=mitra',
  },
  {
    name: 'Tentang',
    path: Routes.about,
  },
  {
    name: 'Kontak',
    path: Routes.contact,
  },
]
