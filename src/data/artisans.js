const photo = n => `/profiles/${((n - 1) % 6) + 1}.webp`

export const artisans = [
  {
    id: 1,
    name: 'Fatou Diallo',
    country: 'Sénégal',
    city: 'Dakar',
    specialty: 'Pagnes Wax',
    image: photo(1),
    rating: 4.8,
    reviews: 234,
    followers: 1245,
    productsCount: 24,
    certified: true,
    founded: 2015,
    description: 'Tisserande passionnée, Fatou Diallo perpétue la tradition du wax au Sénégal depuis plus de dix ans.',
    about: 'Spécialisée dans les pagnes wax traditionnels, elle combine techniques ancestrales et motifs contemporains. Chaque pièce est finie à la main dans son atelier de Dakar.',
    certifications: ['Artisan certifié VPTT', 'Partenaire Fair Trade', 'Artisanat durable'],
    stats: [
      { label: 'Clients satisfaits', value: '2 500+' },
      { label: 'Produits vendus', value: '12 000+' },
      { label: 'Pays livrés', value: '45' }
    ]
  },
  {
    id: 2,
    name: 'Kofi Mensah',
    country: 'Ghana',
    city: 'Accra',
    specialty: 'Kente Traditionnel',
    image: photo(2),
    rating: 4.9,
    reviews: 312,
    followers: 1890,
    productsCount: 32,
    certified: true,
    founded: 2010,
    description: 'Maître tisserand du kente, Kofi Mensah transmet un savoir-faire familial vieux de plusieurs générations.',
    about: 'Héritier d\'une tradition de tisserands, il travaille sur métier traditionnel. Chaque motif du kente raconte une histoire, un proverbe ou une valeur de la communauté.',
    certifications: ['Artisan certifié VPTT', 'Gardien du patrimoine', 'Ambassadeur culturel'],
    stats: [
      { label: 'Clients satisfaits', value: '3 200+' },
      { label: 'Produits vendus', value: '15 000+' },
      { label: 'Pays livrés', value: '52' }
    ]
  },
  {
    id: 3,
    name: 'Aminata Traoré',
    country: 'Mali',
    city: 'Bamako',
    specialty: 'Bazin Riche',
    image: photo(3),
    rating: 4.7,
    reviews: 189,
    followers: 980,
    productsCount: 18,
    certified: true,
    founded: 2016,
    description: 'Aminata Traoré crée des ensembles en bazin riche brodé, pensés pour les grandes occasions.',
    about: 'Passionnée par la mode traditionnelle malienne, elle dirige un atelier de brodeuses à Bamako. Ses pièces allient élégance et authenticité.',
    certifications: ['Artisan certifié VPTT', 'Contrôle qualité'],
    stats: [
      { label: 'Clients satisfaits', value: '1 200+' },
      { label: 'Produits vendus', value: '5 000+' },
      { label: 'Pays livrés', value: '30' }
    ]
  },
  {
    id: 4,
    name: 'Kwame Osei',
    country: 'Ghana',
    city: 'Accra',
    specialty: 'Dashiki Brodé',
    image: photo(4),
    rating: 4.6,
    reviews: 94,
    followers: 640,
    productsCount: 14,
    certified: true,
    founded: 2018,
    description: 'Kwame Osei brode à la main des dashikis aux couleurs vives, pour un usage quotidien comme festif.',
    about: 'Ancien élève d\'une école d\'art d\'Accra, il a fondé son atelier pour donner une nouvelle vie à la broderie traditionnelle.',
    certifications: ['Artisan certifié VPTT'],
    stats: [
      { label: 'Clients satisfaits', value: '800+' },
      { label: 'Produits vendus', value: '2 500+' },
      { label: 'Pays livrés', value: '18' }
    ]
  },
  {
    id: 5,
    name: 'Zainab Artisan',
    country: 'Niger',
    city: 'Niamey',
    specialty: 'Perles & Accessoires',
    image: photo(5),
    rating: 4.4,
    reviews: 62,
    followers: 710,
    productsCount: 22,
    certified: true,
    founded: 2017,
    description: 'Zainab façonne et peint à la main des perles en terre cuite, transmises de mère en fille.',
    about: 'Son atelier de Niamey réunit une dizaine d\'artisanes. Chaque perle est modelée puis peinte selon des motifs ancestraux.',
    certifications: ['Artisan certifié VPTT', 'Emploi féminin'],
    stats: [
      { label: 'Clients satisfaits', value: '900+' },
      { label: 'Produits vendus', value: '4 000+' },
      { label: 'Pays livrés', value: '22' }
    ]
  },
  {
    id: 6,
    name: 'Mariam Textiles',
    country: 'Mali',
    city: 'Ségou',
    specialty: 'Indigo & Tie Dye',
    image: photo(6),
    rating: 4.5,
    reviews: 78,
    followers: 1650,
    productsCount: 22,
    certified: true,
    founded: 2014,
    description: 'Mariam Textiles travaille l\'indigo naturel et le tie dye, dans un atelier familial à Ségou.',
    about: 'La teinture à l\'indigo se fait selon des gestes transmis depuis des générations. Chaque écharpe et chaque tissu est unique.',
    certifications: ['Artisan certifié VPTT', 'Teinture naturelle'],
    stats: [
      { label: 'Clients satisfaits', value: '1 800+' },
      { label: 'Produits vendus', value: '7 000+' },
      { label: 'Pays livrés', value: '28' }
    ]
  },
  {
    id: 7,
    name: 'Fatou Designs',
    country: 'Sénégal',
    city: 'Thiès',
    specialty: 'Ankara & Robes',
    image: photo(7),
    rating: 4.7,
    reviews: 103,
    followers: 1380,
    productsCount: 19,
    certified: true,
    founded: 2019,
    description: 'Fatou Designs crée des robes et des jupes en ankara, pour une mode africaine résolument moderne.',
    about: 'Styliste de formation, elle travaille avec des imprimeurs locaux pour concevoir des collections capsules chaque trimestre.',
    certifications: ['Artisan certifié VPTT', 'Collection capsule'],
    stats: [
      { label: 'Clients satisfaits', value: '1 500+' },
      { label: 'Produits vendus', value: '6 000+' },
      { label: 'Pays livrés', value: '25' }
    ]
  },
  {
    id: 8,
    name: 'Kofi Heritage',
    country: 'Mali',
    city: 'Ségou',
    specialty: 'Bogolan',
    image: photo(8),
    rating: 4.8,
    reviews: 95,
    followers: 1120,
    productsCount: 16,
    certified: true,
    founded: 2012,
    description: 'Kofi Heritage est spécialiste du bogolan, la teinture malienne à la boue fermentée.',
    about: 'Il perpétue une technique millénaire : motifs dessinés à la main avec de la boue riche en fer, sur un tissu teint au jaune de cuivre.',
    certifications: ['Artisan certifié VPTT', 'Gardien du patrimoine'],
    stats: [
      { label: 'Clients satisfaits', value: '1 000+' },
      { label: 'Produits vendus', value: '4 500+' },
      { label: 'Pays livrés', value: '20' }
    ]
  },
  {
    id: 9,
    name: 'Amara Creations',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    specialty: 'Robes en Wax',
    image: photo(9),
    rating: 4.6,
    reviews: 87,
    followers: 930,
    productsCount: 21,
    certified: true,
    founded: 2016,
    description: 'Amara Creations confectionne des robes en wax cousues à Abidjan, coupées pour toutes les silhouettes.',
    about: 'Son atelier de Treichville combine coupes classiques et détails en wax. Les tailles sont pensées pour un ajustement précis.',
    certifications: ['Artisan certifié VPTT'],
    stats: [
      { label: 'Clients satisfaits', value: '1 100+' },
      { label: 'Produits vendus', value: '5 500+' },
      { label: 'Pays livrés', value: '19' }
    ]
  },
  {
    id: 10,
    name: 'Kwame Studios',
    country: 'Ghana',
    city: 'Kumasi',
    specialty: 'Accessoires Premium',
    image: photo(10),
    rating: 4.5,
    reviews: 142,
    followers: 1920,
    productsCount: 35,
    certified: true,
    founded: 2013,
    description: 'Kwame Studios propose des turbans et accessoires en tissu premium, pensés pour un usage contemporain.',
    about: 'Le studio conçoit des pièces prêtes à porter, avec une attention particulière portée aux finitions et aux matières.',
    certifications: ['Artisan certifié VPTT', 'Qualité premium'],
    stats: [
      { label: 'Clients satisfaits', value: '2 000+' },
      { label: 'Produits vendus', value: '9 000+' },
      { label: 'Pays livrés', value: '34' }
    ]
  }
]

export const getArtisan = id => artisans.find(a => a.id === id)
