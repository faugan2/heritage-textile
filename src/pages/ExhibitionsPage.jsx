import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Catalog.css'
import img1 from '../images/produits/1.png'
import img2 from '../images/produits/2.png'

const EXHIBITIONS = [
  { id: 1, title: 'Les couleurs de l\'Afrique', location: 'Musée de Dakar, Sénégal', dates: '1er au 31 février 2024', status: 'upcoming', statusLabel: 'À venir', artisans: 25, pieces: 120, description: 'Une exposition qui célèbre la diversité des motifs et des couleurs africains.', image: img1 },
  { id: 2, title: 'Tissages contemporains', location: 'Galerie d\'Art d\'Abidjan, Côte d\'Ivoire', dates: '10 janvier au 28 février 2024', status: 'ongoing', statusLabel: 'En cours', artisans: 18, pieces: 85, description: 'La fusion entre traditions ancestrales et design moderne.', image: img2 }
]

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">EXPOSITIONS</span>
          <h1>Expositions virtuelles</h1>
          <div className="page-hero__rule"></div>
          <p>Découvrez nos collections en exposition, sur place et en ligne</p>
        </div>
      </section>

      <div className="container">
        <div className="event-grid">
          {EXHIBITIONS.map(e => (
            <article key={e.id} className="event">
              <div className="event__img">
                <img src={e.image} alt={e.title} />
                <span className={`event__status is-${e.status}`}>{e.statusLabel}</span>
              </div>
              <div className="event__body">
                <h3>{e.title}</h3>
                <p className="lead">{e.description}</p>
                <div className="event__facts">
                  <span><i className="fa-solid fa-location-dot"></i> {e.location}</span>
                  <span><i className="fa-solid fa-calendar-days"></i> {e.dates}</span>
                  <span><i className="fa-solid fa-users"></i> {e.artisans} artisans · {e.pieces} pièces</span>
                </div>
                <button className="btn btn--yellow event__cta">En savoir plus <i className="fa-solid fa-arrow-right ico"></i></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
