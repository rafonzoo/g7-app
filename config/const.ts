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

export const Portfolio: {
  type: string
  owner: string
  slug: string
  name: string
  quote: string
}[] = []

// export const Portfolio = [
//   {
//     type: 'interior',
//     owner: 'Abeng',
//     name: 'FAS Rooms',
//     slug: '/portfolio/fas-rooms',
//     quote: 'Buset dah, keren bener\xA0ni hasilnya. Memuaskan!', // prettier-ignore
//   },
//   {
//     type: 'interior',
//     owner: 'Oyot',
//     name: 'Dior Stores',
//     slug: '/portfolio/dior-stores',
//     quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
//   },
//   {
//     type: 'arsitektur',
//     owner: 'Fathur GM',
//     name: 'Real Estates',
//     slug: '/portfolio/real-estate',
//     quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
//   },
//   {
//     type: 'furnitur',
//     owner: 'Ncak',
//     name: 'Sets Kitchen',
//     slug: '/portfolio/kitchen-set',
//     quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
//   },
//   {
//     type: 'jasa-desain',
//     owner: 'Hesti',
//     name: 'Desain Rumah',
//     slug: '/portfolio/desain-rumah',
//     quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
//   },
// ]

export const Services = {
  interior: {
    path: Routes.services_interior,
    title: 'Estetis, Proporsional, Fungsional, dan\xA0Nyaman.',
    tagline: 'Membantu mewujudkan hunian impian dengan perencanaan dan pengaturan ruang untuk memenuhi nilai estetika, proporsional, fungsional, kenyamaan, dan keamanan.', // prettier-ignore
    excerpt: 'Mewujudkan hunian impian melalui perencanaan\xA0dan pengaturan ruang.', // prettier-ignore
    cardImage: '/04.jpg',
    scope: ['Residensial'],
  },
  arsitektur: {
    path: Routes.services_architect,
    title: 'Simetri, Material, dan Pencahayaan.',
    tagline: 'Membantu mewujudkan tampilan luar hunian impian dengan pertimbangan aspek keseimbangan dan simetris, funsgi yang sesuai, pemilihan material, dan pencahayaan dan lanskap', // prettier-ignore
    excerpt: 'Mewujudkan tampilan luar hunian impian dengan keseimbangan.', // prettier-ignore
    cardImage: '/01.jpg',
    scope: ['Real Estate'],
  },
  furnitur: {
    path: Routes.services_furniture,
    title: 'Aspek fungsi, Material, Desain, dan Estetika.',
    tagline: 'Membantu mewujudkan benda-benda yang digunakan untuk keperluan rumah impian dengan memenuhi aspek fungsi, material, desain, dan estetika', // prettier-ignore
    excerpt: 'Membantu mewujudkan benda-benda yang digunakan untuk keperluan rumah impian.', // prettier-ignore
    cardImage: '/02.jpg',
    scope: ['Kitchen Set'],
  },
  '3d-desain': {
    path: Routes.services_design,
    title: 'Visualisasi Hunian\xA0Anda.',
    tagline: 'Membantu mewujudkan ide apapun menjadi rendering', // prettier-ignore
    excerpt: 'Wujudkan ide Anda ke dalam bentuk visual dengan penggambaran yang akurat.', // prettier-ignore
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
  // {
  //   name: 'Portfolio',
  //   path: Routes.portfolio,
  // },
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
