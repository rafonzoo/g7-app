export const Brand = {
  Name: 'Gelora Tujuh\xA0Utama',
  Tagline: 'Design and build',
} as const

export const Routes = {
  home: '/',
  portfolio: '/portfolio',
  partner: '/mitra',
  about: '/tentang',
  contact: '/kontak',
  services_interior: '/layanan/interior',
  services_exterior: '/layanan/exterior',
  services_architect: '/layanan/arsitektur',
  services_furniture: '/layanan/furnitur',
  // services_design: '/layanan/jasa-desain',
} as const

export const Portfolio = [
  {
    type: 'interior',
    owner: 'Abeng',
    name: 'Interior Warung Minang',
    slug: '/portfolio/warung-minang',
    quote: 'Buset dah, keren bener ni G7 hasilnya. Memuaskan!', // prettier-ignore
  },
  {
    type: 'interior',
    owner: 'Oyot',
    name: 'Interior Warung Aceh',
    slug: '/portfolio/warung-aceh',
    quote: 'For equity to happen, we need to educate leaders that look like the\xA0world.', // prettier-ignore
  },
  {
    type: 'exterior',
    owner: 'Ben',
    name: 'Hotel Unsoed',
    slug: '/portfolio/hotel-unsoed',
    quote: 'For equity to happen, we need to educate leaders that look like the\xA0world.', // prettier-ignore
  },
  {
    type: 'arsitektur',
    owner: 'Fathur GM',
    name: 'Real Estate',
    slug: '/portfolio/real-estate',
    quote: 'For equity to happen, we need to educate leaders that look like the\xA0world.', // prettier-ignore
  },
  {
    type: 'furnitur',
    owner: 'Ncak',
    name: 'Kitchen Set',
    slug: '/portfolio/kitchen-set',
    quote: 'For equity to happen, we need to educate leaders that look like the\xA0world.', // prettier-ignore
  },
  // {
  //   type: 'jasa-desain',
  //   owner: 'Hesti',
  //   name: 'Desain Rumah',
  //   slug: '/portfolio/desain-rumah',
  //   quote: 'For equity to happen, we need to educate leaders that look like the\xA0world.', // prettier-ignore
  // },
] as const

export const Services = {
  interior: {
    path: Routes.services_interior,
    title: 'Profesional. Lorem Ipsum. Bergaransi.',
    excerpt: 'G7 Interior merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    scope: ['Residensial'],
  },
  exterior: {
    path: Routes.services_exterior,
    title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
    excerpt: 'G7 Exterior merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    scope: ['Hotel'],
  },
  arsitektur: {
    path: Routes.services_architect,
    title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
    excerpt: 'G7 Arsitektur merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    scope: ['Real Estate'],
  },
  furnitur: {
    path: Routes.services_furniture,
    title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
    excerpt: 'G7 Furnitur merupakan jasa desain lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
    scope: ['Kitchen Set'],
  },
  // 'jasa-desain': {
  //   path: Routes.services_design,
  //   title: 'Profesional. Lorem\xA0Ipsum. Bergaransi.',
  //   excerpt: 'Jasa Desain G7 merupakan lorem ipsum dolor sit amet constect tetur edispiscing elit.', // prettier-ignore
  //   scope: ['Lorem ipsum'],
  // },
} as const

export const Submenus = {
  services: [
    {
      name: 'Interior',
      path: Routes.services_interior,
    },
    {
      name: 'Exterior',
      path: Routes.services_exterior,
    },
    {
      name: 'Arsitektur',
      path: Routes.services_architect,
    },
    {
      name: 'Furnitur',
      path: Routes.services_furniture,
    },
    // {
    //   name: 'Jasa Desain',
    //   path: Routes.services_design,
    // },
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
    path: Routes.partner,
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
