import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Catalog.css'
import img1 from '../images/produits/3.png'
import img2 from '../images/produits/4.png'

const FESTIVALS = [
  { id: 1, name: 'Festival des textiles sénégalais', location: 'Dakar, Sénégal', date: '15 mars 2024', duration: '3 jours', attendance: '5 000+', highlights: ['Défilés de mode', 'Ateliers artisanaux', 'Vente directe'], image: img1 },
  { id: 2, name: 'Semaine du kente ghanéen', location: 'Accra, Ghana', date: '1er avril 2024', duration: '7 jours', attendance: '8 000+', highlights: ['Concours de tissage', 'Exposition internationale', 'Spectacles'], image: img2 }
]

export default function FestivalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">FESTIVALS</span>
          <h1>Festivals culturels</h1>
          <div className="page-hero__rule"></div>
          <p>Célébrez la culture des textiles africains, sur place et au fil des saisons</p>
        </div>
      </section>

      <div className="container">
        <div className="event-grid">
          {FESTIVALS.map(f => (
            <article key={f.id} className="event">
              <div className="event__img">
                <img src={f.image} alt={f.name} />
              </div>
              <div className="event__body">
                <h3>{f.name}</h3>
                <div className="event__facts">
                  <span><i className="fa-solid fa-calendar-days"></i> {f.date} · {f.duration}</span>
                  <span><i className="fa-solid fa-location-dot"></i> {f.location}</span>
                  <span><i className="fa-solid fa-users"></i> Environ {f.attendance} visiteurs</span>
                </div>
                <div>
                  <p className="lead" style={{ marginBottom: 10, fontWeight: 700, color: 'var(--navy)' }}>Temps forts</p>
                  <div className="event__chips">
                    {f.highlights.map((h, idx) => <span key={idx}><i className="fa-solid fa-star" style={{ marginRight: 6 }}></i>{h}</span>)}
                  </div>
                </div>
                <button className="btn btn--green event__cta">En savoir plus <i className="fa-solid fa-arrow-right ico"></i></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
