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
    id: 0,
    type: 'arsitektur',
    subtype: 'rumah',
    owner: 'Mr. R',
    name: 'Rumah Tinggal Padang',
    slug: '/portfolio/rt-padang',
    quote: 'Buset dah, keren bener\xA0ni hasilnya. Memuaskan!', // prettier-ignore
    excerpt: 'Rumah dengan konsep Scandinavian mengutamakan desain yang simpel, bersih, dan fungsional, terinspirasi dari arsitektur Nordik seperti Swedia, Denmark, dan Norwegia.', // prettier-ignore
    location: 'Padang',
    wide: '130',
    concept: 'Scandinavian',
    description: 'Eksterior mengusung warna netral seperti putih, abu-abu, dan beige untuk menciptakan kesan bersih dan terang, dilengkapi material alami seperti kayu, batu, dan elemen logam yang memberikan sentuhan modern. Jendela besar dirancang untuk memaksimalkan pencahayaan alami, menciptakan lingkungan yang tenang, nyaman, dan fungsional, ideal untuk mendukung kehidupan sehari-hari.', // prettier-ignore
    galleries: ['https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/0/R1.png'],
  },
  {
    id: 1,
    type: 'arsitektur',
    subtype: 'rumah',
    owner: 'Mr. D',
    name: 'Rumah Tinggal Pasar Minggu',
    slug: '/portfolio/rt-psm',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Rumah dengan konsep modern minimalis menekankan kesederhanaan, fungsionalitas, dan estetika yang bersih.', // prettier-ignore
    location: 'Jaksel',
    wide: '144',
    concept: 'Minimalis\nModern',
    description: 'Eksterior bangunan didesain sederhana dengan bentuk geometris dan garis-garis bersih, menggunakan material modern seperti beton, kaca, dan baja yang terkadang diberi sentuhan kayu alami. Warna netral seperti putih, abu-abu, atau hitam menciptakan tampilan yang rapi, didukung oleh jendela besar untuk memaksimalkan cahaya alami. Lanskap minimalis dengan taman kecil dan tanaman hijau yang tertata rapi melengkapi desainnya. Detail tambahan berupa tekstur dan material alami seperti kayu, batu, dan kain, serta sirkulasi udara yang baik melalui ventilasi optimal, memastikan lingkungan yang nyaman dan harmonis.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/1/Midday.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/1/Scene%202.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/1/Scene%203.png',
    ],
  },
  {
    id: 2,
    type: 'arsitektur',
    subtype: 'rumah',
    owner: 'Mr. H',
    name: 'Rumah Tinggal Taman Asri',
    slug: '/portfolio/rt-tamanasri',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Rumah dengan konsep Mediteranian memiliki ciri khas yang elegan dan mewah, terinspirasi dari arsitektur daerah sekitar Laut Tengah.', // prettier-ignore
    location: 'Tangerang',
    wide: '160',
    concept: 'Mediteranian',
    description: 'Eksterior rumah ini menampilkan atap miring dengan genteng tanah liat merah, dinding dari bahan alami berwarna hangat seperti krem, cokelat, atau terakota, serta detail besi tempa yang menghiasi balkon, pagar, dan jendela. Pintu utama yang besar dan kokoh dilengkapi ukiran atau ornamen besi tempa, sementara jendela lengkung diberi penutup atau pintu kayu untuk menambah karakter. Taman dan lanskap dirancang dengan kolam renang atau air mancur di halaman, serta teras luas yang dilengkapi furnitur anyaman atau besi tempa. Konsep ini menciptakan suasana yang tenang, nyaman, dan eksotis, memberikan nuansa liburan yang sempurna di rumah Anda.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Scene%201.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Scene%202.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_1.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_2.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_4.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_5.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_6.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_7.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_8.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/2/Image_9.png',
    ],
  },
  {
    id: 3,
    type: 'interior',
    subtype: 'apartemen',
    owner: 'Mr. A',
    name: 'Cakung Apartment',
    slug: '/portfolio/apartemen-cakung',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Interior mezanin dengan lantai tambahan antara lantai utama dan langit-langit yang memaksimalkan ruang secara fungsional dan estetis.', // prettier-ignore
    location: 'Jakarta\nUtara',
    wide: '(-)',
    concept: 'Minimalis\nKontemporer',
    description: 'Interior mezanin dirancang dengan konstruksi terbuka untuk visibilitas antara lantai, menggunakan material seperti kayu, baja, atau beton, dilengkapi pagar aman dan tangga spiral atau lurus. Mezanin dapat difungsikan sebagai ruang kerja, ruang santai, kamar tidur, atau area penyimpanan, dengan pencahayaan alami dan buatan serta dekorasi minimalis dalam warna terang dan netral untuk kesan luas. Solusi ini menawarkan efisiensi ruang, fleksibilitas fungsi, dan estetika menarik yang menambah nilai desain bangunan.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/3/Image_1%20(1).png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/3/Image_2.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/3/Image_4%20(1).png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/3/Image_5%20(2).png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/3/Image_6.png',
    ],
  },
  {
    id: 4,
    type: 'interior',
    subtype: 'apartemen',
    owner: 'Mrs. N',
    name: 'Emerald Apartment',
    slug: '/portfolio/apartemen-emerald',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Dengan konsep Scandinavian yang mengutamakan desain yang simpel, bersih, dan fungsional, terinspirasi dari arsitektur Nordik seperti Swedia, Denmark, dan Norwegia.', // prettier-ignore
    location: 'Bintaro',
    wide: '(-)',
    concept: 'Scandinavian',
    description: 'Interior ini mengusung warna terang dan netral seperti putih, abu-abu, dan kayu alami dengan aksen pastel, menghadirkan gaya minimalis dan fungsional melalui furnitur sederhana. Pencahayaan hangat dari lampu gantung, lampu lantai, dan lilin berpadu dengan material alami seperti kayu, wol, dan kulit untuk menciptakan kesan nyaman. Dekorasi meliputi aksen tekstil seperti karpet dan bantal, tanaman hias di sudut ruangan, serta karya seni atau kerajinan tangan untuk sentuhan personal, menciptakan lingkungan yang tenang, nyaman, dan ideal untuk kehidupan sehari-hari.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/4/SC1.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/4/Image_1.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/4/Image_2.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/4/Image_3.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/4/Image_4.png',
    ],
  },
  {
    id: 5,
    type: 'interior',
    subtype: 'resort',
    owner: 'Mrs. C',
    name: 'Resort Sukabumi',
    slug: '/portfolio/resort-sukabumi',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Rumah dengan konsep modern minimalis menekankan kesederhanaan dan fungsionalitas.', // prettier-ignore
    location: 'Sukabumi',
    wide: '(-)',
    concept: 'Modern\nMinimalis',
    description: 'Interior ini mengusung warna terang dan netral seperti putih, abu-abu, dan beige untuk menciptakan kesan luas dan terang, dilengkapi furnitur sederhana dan multifungsi tanpa berlebihan. Ruang terbuka menghubungkan ruang tamu, makan, dan dapur tanpa sekat, dengan dekorasi minimalis berupa lukisan sederhana, tanaman hias, dan perabotan unik. Pencahayaan alami dari jendela besar dipadukan dengan lampu modern untuk suasana hangat, menciptakan rumah yang nyaman, praktis, dan estetis dengan suasana sederhana namun elegan.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_4.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_5.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_6.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_7.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_8.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_9.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/5/Resort%20Sukabumi_11.png',
    ],
  },
  {
    id: 6,
    type: 'interior',
    subtype: 'rumah',
    owner: 'Mrs. T',
    name: 'Rumah Tinggal Madura',
    slug: '/portfolio/rt-madura',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Rumah dengan konsep modern minimalis menekankan kesederhanaan dan fungsionalitas.', // prettier-ignore
    location: 'Madura',
    wide: '(-)',
    concept: 'Modern\nMinimalis',
    description: 'Interior ini mengusung warna terang dan netral seperti putih, abu-abu, dan beige untuk menciptakan kesan luas dan terang, dengan furnitur sederhana dan multifungsi yang tidak berlebihan. Ruang terbuka menghubungkan ruang tamu, makan, dan dapur tanpa sekat, sementara dekorasi minimalis seperti lukisan sederhana, tanaman hias, dan perabotan unik menambah karakter. Pencahayaan alami dari jendela besar dan lampu modern menciptakan suasana hangat, menghasilkan rumah yang nyaman, praktis, dan estetis dengan nuansa sederhana namun elegan.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/6/Enscape_2022-02-01-18-35-33.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/6/Enscape_2022-02-01-18-37-13%20(1).png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/6/Enscape_2022-02-01-18-37-52.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/6/Salinan%20IMG_7252.jpg',
    ],
  },
  {
    id: 7,
    type: 'interior',
    subtype: 'rumah',
    owner: 'Mrs. R',
    name: 'Rumah Tinggal Padang',
    slug: '/portfolio/rt-padang-2',
    quote: 'For equity to happen, we need to educate leaders.', // prettier-ignore
    excerpt: 'Rumah dengan konsep Scandinavian mengutamakan desain yang simpel, bersih, dan fungsional, terinspirasi dari arsitektur Nordik seperti Swedia, Denmark, dan Norwegia.', // prettier-ignore
    location: 'Padang',
    wide: '(-)',
    concept: 'Scandinavian',
    description: 'Eksterior mengusung warna netral seperti putih, abu-abu, dan beige untuk menciptakan kesan bersih dan terang, dilengkapi material alami seperti kayu, batu, dan elemen logam yang memberikan sentuhan modern. Jendela besar dirancang untuk memaksimalkan pencahayaan alami, menciptakan lingkungan yang tenang, nyaman, dan fungsional, ideal untuk mendukung kehidupan sehari-hari.', // prettier-ignore
    galleries: [
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/7/1.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/7/2.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/7/3.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/7/5.png',
      'https://ik.imagekit.io/jowwgz1mq/projects/g7/assets/7/6.png',
    ],
  },
]

export const Services = {
  interior: {
    path: Routes.services_interior,
    title: 'Estetis, Proporsional, Fungsional, dan\xA0Nyaman.',
    tagline: 'Membantu mewujudkan hunian impian dengan perencanaan dan pengaturan ruang untuk memenuhi nilai estetika, proporsional, fungsional, kenyamaan, dan keamanan.', // prettier-ignore
    excerpt: 'Mewujudkan hunian impian melalui perencanaan\xA0dan pengaturan ruang.', // prettier-ignore
    cardImage: 'https://ik.imagekit.io/jowwgz1mq/projects/g7/04.jpg', // prettier-ignore
    scope: ['Residensial'],
  },
  arsitektur: {
    path: Routes.services_architect,
    title: 'Simetri, Material, dan Pencahayaan.',
    tagline: 'Membantu mewujudkan tampilan luar hunian impian dengan pertimbangan aspek keseimbangan dan simetris, funsgi yang sesuai, pemilihan material, dan pencahayaan dan lanskap', // prettier-ignore
    excerpt: 'Mewujudkan tampilan luar hunian impian dengan keseimbangan.', // prettier-ignore
    cardImage: 'https://ik.imagekit.io/jowwgz1mq/projects/g7/arc.jpg', // prettier-ignore
    scope: ['Real Estate'],
  },
  furnitur: {
    path: Routes.services_furniture,
    title: 'Aspek fungsi, Material, Desain, dan Estetika.',
    tagline: 'Membantu mewujudkan benda-benda yang digunakan untuk keperluan rumah impian dengan memenuhi aspek fungsi, material, desain, dan estetika', // prettier-ignore
    excerpt: 'Membantu mewujudkan benda-benda yang digunakan untuk keperluan rumah impian.', // prettier-ignore
    cardImage: 'https://ik.imagekit.io/jowwgz1mq/projects/g7/02.jpg', // prettier-ignore
    scope: ['Kitchen Set'],
  },
  '3d-desain': {
    path: Routes.services_design,
    title: 'Visualisasi Hunian\xA0Anda.',
    tagline: 'Membantu mewujudkan ide apapun menjadi rendering', // prettier-ignore
    excerpt: 'Wujudkan ide Anda ke dalam bentuk visual dengan penggambaran yang akurat.', // prettier-ignore
    cardImage: 'https://ik.imagekit.io/jowwgz1mq/projects/g7/video/3d.mp4', // prettier-ignore
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
