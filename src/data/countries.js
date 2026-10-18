export const COUNTRIES = [
  {
    id: 1, name: 'Sénégal', code: 'SN', region: 'Afrique de l\'Ouest', status: 'Actif',
    capital: 'Dakar', population: '17,9 M', languages: 'Français, Wolof', climate: 'Tropical',
    artisans: 324, products: 1250, users: 5800, impact: '450K€ distribués', revenue: '450K€',
    specialty: 'Pagnes Wax & Indigo', ambassador: 'Fatou Diallo',
    description: 'Le Sénégal est au cœur de notre expansion africaine. Avec ses traditions textiles anciennes et ses artisans passionnés, il produit certains de nos plus beaux pagnes wax.',
    topArtisans: [
      { name: 'Fatou Diallo', specialty: 'Pagnes Wax', products: 156, rating: 4.9 },
      { name: 'Ami Sow', specialty: 'Indigo Tie Dye', products: 89, rating: 4.7 },
      { name: 'Mariama Fall', specialty: 'Kente', products: 67, rating: 4.8 }
    ],
    statistics: { womenArtisans: 245, youthEngaged: 156, monthlyProduction: '450 produits', avgIncome: '320€/mois', femalesEducated: 340 },
    milestones: [
      { date: 'Jan 2024', event: 'Lancement VPTT Sénégal' },
      { date: 'Mar 2024', event: '100 artisans certifiés' },
      { date: 'Jun 2024', event: '500 produits listés' },
      { date: 'Sep 2024', event: '1 000 produits' },
      { date: 'Oct 2024', event: '324 artisans actifs' }
    ]
  },
  {
    id: 2, name: 'Ghana', code: 'GH', region: 'Afrique de l\'Ouest', status: 'Actif',
    capital: 'Accra', population: '34,6 M', languages: 'Anglais, Akan', climate: 'Tropical',
    artisans: 287, products: 980, users: 4200, impact: '380K€ distribués', revenue: '380K€',
    specialty: 'Kente & Tissage', ambassador: 'Kofi Mensah',
    description: 'Le Ghana est reconnu mondialement pour son kente traditionnel. Nos partenaires ghanéens perpétuent cette tradition séculaire tout en innovant.',
    topArtisans: [
      { name: 'Kofi Mensah', specialty: 'Kente Premium', products: 124, rating: 4.9 },
      { name: 'Ama Boateng', specialty: 'Kente Moderne', products: 98, rating: 4.8 },
      { name: 'Kwesi Appiah', specialty: 'Tissage Innovant', products: 76, rating: 4.7 }
    ],
    statistics: { womenArtisans: 198, youthEngaged: 134, monthlyProduction: '380 produits', avgIncome: '380€/mois', femalesEducated: 267 },
    milestones: [
      { date: 'Feb 2024', event: 'Partenariat Kente' },
      { date: 'Apr 2024', event: '80 artisans certifiés' },
      { date: 'Jul 2024', event: '400 produits' },
      { date: 'Sep 2024', event: '850 produits' },
      { date: 'Oct 2024', event: '287 artisans' }
    ]
  },
  {
    id: 3, name: 'Mali', code: 'ML', region: 'Afrique de l\'Ouest', status: 'Actif',
    capital: 'Bamako', population: '22,6 M', languages: 'Français, Bambara', climate: 'Sahélien',
    artisans: 195, products: 720, users: 2800, impact: '290K€ distribués', revenue: '290K€',
    specialty: 'Bogolan & Indigo', ambassador: 'Aminata Traoré',
    description: 'Le Mali est la terre du bogolan, un tissu traditionnel unique au monde. Nos artisans maliens préservent cette tradition ancestrale.',
    topArtisans: [
      { name: 'Aminata Traoré', specialty: 'Bogolan', products: 156, rating: 4.9 },
      { name: 'Fatoumata Keita', specialty: 'Indigo Naturel', products: 87, rating: 4.8 },
      { name: 'Oumou Diallo', specialty: 'Bogolan Moderne', products: 65, rating: 4.7 }
    ],
    statistics: { womenArtisans: 167, youthEngaged: 98, monthlyProduction: '290 produits', avgIncome: '280€/mois', femalesEducated: 198 },
    milestones: [
      { date: 'Mar 2024', event: 'Lancement bogolan' },
      { date: 'May 2024', event: '60 artisans' },
      { date: 'Jul 2024', event: '300 produits' },
      { date: 'Sep 2024', event: '650 produits' },
      { date: 'Oct 2024', event: '195 artisans actifs' }
    ]
  },
  {
    id: 4, name: 'Côte d\'Ivoire', code: 'CI', region: 'Afrique de l\'Ouest', status: 'Actif',
    capital: 'Yamoussoukro', population: '29,4 M', languages: 'Français, Dioula', climate: 'Tropical',
    artisans: 156, products: 580, users: 2100, impact: '220K€ distribués', revenue: '220K€',
    specialty: 'Dashiki & Ankara', ambassador: 'Kwame Osei',
    description: 'La Côte d\'Ivoire est un carrefour créatif où le wax, l\'ankara et le dashiki trouvent un public exigeant. Nos partenaires y allient couture et broderie.',
    topArtisans: [
      { name: 'Kwame Osei', specialty: 'Dashiki Brodé', products: 64, rating: 4.7 },
      { name: 'Amara Creations', specialty: 'Robes en Wax', products: 58, rating: 4.6 },
      { name: 'Awa Koné', specialty: 'Ankara Contemporain', products: 41, rating: 4.7 }
    ],
    statistics: { womenArtisans: 121, youthEngaged: 77, monthlyProduction: '210 produits', avgIncome: '300€/mois', femalesEducated: 150 },
    milestones: [
      { date: 'Mai 2024', event: 'Lancement Côte d\'Ivoire' },
      { date: 'Juil 2024', event: '50 artisans certifiés' },
      { date: 'Oct 2024', event: '156 artisans actifs' }
    ]
  },
  {
    id: 5, name: 'Cameroun', code: 'CM', region: 'Afrique Centrale', status: 'Croissance',
    capital: 'Yaoundé', population: '28,6 M', languages: 'Français, Anglais', climate: 'Équatorial',
    artisans: 142, products: 480, users: 1800, impact: '180K€ distribués', revenue: '180K€',
    specialty: 'Batik & Tissus', ambassador: 'Yves Kamto',
    description: 'Le Cameroun associe des techniques de batik et de teinture à des tissus locaux. Notre présence y grandit avec des artisans très engagés.',
    topArtisans: [
      { name: 'Yves Kamto', specialty: 'Batik', products: 52, rating: 4.6 },
      { name: 'Marie Nkoa', specialty: 'Tissus Teints', products: 39, rating: 4.7 }
    ],
    statistics: { womenArtisans: 98, youthEngaged: 61, monthlyProduction: '160 produits', avgIncome: '260€/mois', femalesEducated: 120 },
    milestones: [
      { date: 'Août 2024', event: 'Lancement Cameroun' },
      { date: 'Oct 2024', event: '142 artisans' }
    ]
  },
  {
    id: 6, name: 'Égypte', code: 'EG', region: 'Afrique du Nord', status: 'Croissance',
    capital: 'Le Caire', population: '112 M', languages: 'Arabe', climate: 'Désertique',
    artisans: 98, products: 340, users: 1200, impact: '95K€ distribués', revenue: '95K€',
    specialty: 'Tissus Brodés', ambassador: 'Fatima Hassan',
    description: 'L\'Égypte a une longue tradition de broderie et de tissage. Nos partenaires égyptiens proposent des pièces brodées à la main.',
    topArtisans: [
      { name: 'Fatima Hassan', specialty: 'Broderie Traditionnelle', products: 37, rating: 4.7 },
      { name: 'Nour Ibrahim', specialty: 'Tissus Brodés', products: 29, rating: 4.6 }
    ],
    statistics: { womenArtisans: 70, youthEngaged: 40, monthlyProduction: '110 produits', avgIncome: '250€/mois', femalesEducated: 80 },
    milestones: [
      { date: 'Sep 2024', event: 'Lancement Égypte' },
      { date: 'Oct 2024', event: '98 artisans' }
    ]
  },
  {
    id: 7, name: 'Afrique du Sud', code: 'ZA', region: 'Afrique Australe', status: 'Actif',
    capital: 'Pretoria', population: '60,4 M', languages: 'Anglais, Zoulou, Xhosa', climate: 'Tempéré',
    artisans: 176, products: 650, users: 3200, impact: '310K€ distribués', revenue: '310K€',
    specialty: 'Beadwork & Couleurs', ambassador: 'Thandi Mthembu',
    description: 'L\'Afrique du Sud est connue pour son shweshwe et son beadwork. Nos artisans associent ces traditions à des créations contemporaines.',
    topArtisans: [
      { name: 'Thandi Mthembu', specialty: 'Beadwork', products: 71, rating: 4.8 },
      { name: 'Lerato Dlamini', specialty: 'Shweshwe', products: 55, rating: 4.7 },
      { name: 'Sipho Ndlovu', specialty: 'Couleurs Naturelles', products: 43, rating: 4.6 }
    ],
    statistics: { womenArtisans: 132, youthEngaged: 89, monthlyProduction: '300 produits', avgIncome: '340€/mois', femalesEducated: 210 },
    milestones: [
      { date: 'Jan 2024', event: 'Lancement Afrique du Sud' },
      { date: 'Jun 2024', event: '100 artisans' },
      { date: 'Oct 2024', event: '176 artisans actifs' }
    ]
  },
  {
    id: 8, name: 'Éthiopie', code: 'ET', region: 'Afrique de l\'Est', status: 'Croissance',
    capital: 'Addis-Abeba', population: '126 M', languages: 'Amharique', climate: 'Montagneux',
    artisans: 87, products: 320, users: 950, impact: '75K€ distribués', revenue: '75K€',
    specialty: 'Shema & Tissage', ambassador: 'Abeba Tadesse',
    description: 'L\'Éthiopie possède une tradition de tissage au métier à pédale et des étoffes shema réputées. Nos partenaires perpétuent ce savoir-faire.',
    topArtisans: [
      { name: 'Abeba Tadesse', specialty: 'Shema', products: 33, rating: 4.7 },
      { name: 'Hiwot Bekele', specialty: 'Tissage au métier', products: 26, rating: 4.6 }
    ],
    statistics: { womenArtisans: 52, youthEngaged: 31, monthlyProduction: '90 produits', avgIncome: '230€/mois', femalesEducated: 60 },
    milestones: [
      { date: 'Nov 2024', event: 'Lancement Éthiopie' },
      { date: 'Déc 2024', event: '87 artisans' }
    ]
  }
]

export const getCountry = id => COUNTRIES.find(c => c.id === id)
