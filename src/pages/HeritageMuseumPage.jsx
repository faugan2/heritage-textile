import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Heritage.css'

const COLLECTIONS = {
  kente: {
    name: 'Tissus Kente (Ghana)',
    label: 'Kente',
    icon: 'fa-star',
    origin: 'Asante, Ghana',
    items: 850,
    description: 'Tissus royaux tissés à la main avec des motifs géométriques complexes, qui symbolisent la sagesse et le pouvoir. Chaque bande de motifs porte un nom et un proverbe.',
    highlights: [
      'Motifs géométriques sacrés',
      'Couleurs vives naturelles',
      'Technique ancestrale de plus de 500 ans',
      'Réservés autrefois à la royauté'
    ]
  },
  boubou: {
    name: 'Grands Boubous (Sénégal)',
    label: 'Boubou',
    icon: 'fa-shirt',
    origin: 'Sénégal & Mali',
    items: 1200,
    description: 'Vêtements traditionnels amples, ornés de broderies complexes. Le boubou est un symbole d\'élégance et de dignité dans toute l\'Afrique de l\'Ouest.',
    highlights: [
      'Broderies fines à la main',
      'Tissus damassés luxueux',
      'Tradition millénaire',
      'Tenue honorifique'
    ]
  },
  shweshwe: {
    name: 'Shweshwe (Afrique du Sud)',
    label: 'Shweshwe',
    icon: 'fa-leaf',
    origin: 'Afrique du Sud',
    items: 650,
    description: 'Cotons imprimés aux motifs géométriques, inspirés de la nature sud-africaine. Le shweshwe est devenu un tissu emblématique des communautés Xhosa et Ndebele.',
    highlights: [
      'Motifs floraux stylisés',
      'Colorants naturels traditionnels',
      'Patrimoine Ndebele',
      'Très populaire lors des mariages'
    ]
  },
  mudcloth: {
    name: 'Mudcloth Mali (Mali)',
    label: 'Mudcloth',
    icon: 'fa-paintbrush',
    origin: 'Mali',
    items: 750,
    description: 'Tissus teints à la boue fermentée, avec des motifs géométriques qui mêlent art et fonction. Le bogolan est une pratique propre au Mali.',
    highlights: [
      'Teinture à la boue naturelle',
      'Motifs géométriques précis',
      'Technique propre au Mali',
      'Utilisé notamment par les Bambaras'
    ]
  }
}

const STATS = [
  { number: '3 500+', label: 'Pièces cataloguées' },
  { number: '12', label: 'Régions d\'Afrique' },
  { number: '200+', label: 'Artisans documentés' },
  { number: '50+', label: 'Techniques ancestrales' }
]

const RESOURCES = [
  { icon: 'fa-book', title: 'Bibliothèque', desc: '500+ articles scientifiques' },
  { icon: 'fa-video', title: 'Vidéos', desc: 'Documentaires sur les artisans' },
  { icon: 'fa-map', title: 'Cartes', desc: 'Origines géographiques' },
  { icon: 'fa-graduation-cap', title: 'Cours', desc: 'Formation textile gratuite' }
]

const ARCHIVES = [
  { icon: 'fa-file-lines', title: 'Fiches techniques', desc: 'Spécifications complètes de chaque pièce' },
  { icon: 'fa-user-pen', title: 'Biographies d\'artisans', desc: 'Histoires et héritage des créateurs' },
  { icon: 'fa-magnifying-glass-chart', title: 'Analyses historiques', desc: 'Contexte culturel et évolution dans le temps' },
  { icon: 'fa-cube', title: 'Photos 3D et vidéo', desc: 'Visualisations interactives en haute résolution' }
]

export default function HeritageMuseumPage() {
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('kente')
  const collection = COLLECTIONS[selectedKey]

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">PATRIMOINE</span>
          <h1>Patrimoine africain</h1>
          <div className="page-hero__rule"></div>
          <p>Musée numérique : plus de 3 500 pièces de patrimoine textile africain documentées et préservées</p>
        </div>
      </section>

      <div className="container">
        <section className="heritage-section">
          <h2 className="section-heading">Collections</h2>
          <div className="heritage-tabs">
            {Object.entries(COLLECTIONS).map(([key, coll]) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`heritage-tab ${selectedKey === key ? 'is-active' : ''}`}
              >
                <i className={`fa-solid ${coll.icon}`}></i>
                {coll.label}
              </button>
            ))}
          </div>

          <div className="heritage-detail">
            <div>
              <h2>{collection.name}</h2>
              <p className="heritage-origin">Origine : {collection.origin}</p>
              <p className="heritage-desc">{collection.description}</p>
              <div className="heritage-count">
                <b>{collection.items}+</b> pièces documentées
              </div>
              <button className="btn btn--yellow" onClick={() => navigate('/products')}>
                Explorer cette collection <i className="fa-solid fa-arrow-right ico"></i>
              </button>
            </div>

            <div className="heritage-points">
              <h3>Caractéristiques et signification</h3>
              <ul>
                {collection.highlights.map((highlight, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="heritage-section" style={{ marginTop: 64 }}>
          <h2 className="section-heading">Le musée en chiffres</h2>
          <div className="heritage-stats">
            {STATS.map((stat, idx) => (
              <div key={idx} className="heritage-stat">
                <b>{stat.number}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="heritage-section" style={{ marginTop: 64 }}>
          <h2 className="section-heading">Ressources éducatives</h2>
          <div className="resource-grid">
            {RESOURCES.map((resource, idx) => (
              <div key={idx} className="resource">
                <i className={`fa-solid ${resource.icon}`}></i>
                <h3>{resource.title}</h3>
                <p>{resource.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="heritage-section" style={{ marginTop: 64 }}>
          <h2 className="section-heading">Archives et documentation</h2>
          <div className="archive-list">
            {ARCHIVES.map((item, idx) => (
              <div key={idx} className="archive">
                <i className={`fa-solid ${item.icon}`}></i>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="heritage-cta">
          <h2>Explorez le patrimoine africain</h2>
          <p>Plongez dans les richesses textiles de l'Afrique avec notre musée numérique interactif.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/products')}>
            Visiter le musée <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
