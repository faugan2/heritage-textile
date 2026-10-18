import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Media.css'
import slide1 from '../images/slides/1.png'
import slide2 from '../images/slides/2.png'
import slide3 from '../images/slides/3.png'
import produit1 from '../images/produits/1.png'
import produit2 from '../images/produits/2.png'
import produit3 from '../images/produits/3.png'
import produit4 from '../images/produits/4.png'
import produit5 from '../images/produits/5.png'
import produit6 from '../images/produits/6.png'

const CAMPAIGNS = [
  { id: 1, title: 'Campagne Heritage 2024', image: slide1, views: '15 000', description: 'Découvrez notre nouvelle campagne qui célèbre les créateurs africains.' },
  { id: 2, title: 'Festival des textiles', image: slide2, views: '8 900', description: 'Un événement dédié à la culture textile africaine.' },
  { id: 3, title: 'Artisans en lumière', image: slide3, views: '12 400', description: 'Mise en avant des talents et des créations de nos artisans partenaires.' },
  { id: 4, title: 'Wax africain : histoire et couleurs', image: produit1, views: '9 800', description: 'L\'histoire riche du tissu wax et ses motifs emblématiques.' },
  { id: 5, title: 'Boubou et mode traditionnelle', image: produit2, views: '11 200', description: 'Célébration des vêtements traditionnels et de leur modernité.' },
  { id: 6, title: 'Entrepreneuriat textile africain', image: produit3, views: '10 500', description: 'Comment les artisans transforment leur passion en activité prospère.' }
]

const VIDEOS = [
  { id: 1, title: 'Vidéo de présentation', image: slide1, duration: '2:30', views: '5 600' },
  { id: 2, title: 'Documentaire', image: slide2, duration: '15:00', views: '3 400' },
  { id: 3, title: 'Tutoriel tissage', image: produit1, duration: '8:15', views: '4 200' },
  { id: 4, title: 'Interview avec Mariam Textiles', image: produit2, duration: '12:45', views: '6 800' },
  { id: 5, title: 'Processus de teinture indigo', image: slide3, duration: '6:30', views: '3 900' },
  { id: 6, title: 'Coulisses du festival 2024', image: produit4, duration: '18:20', views: '7 200' }
]

const TV = [
  { icon: 'fa-video', title: 'Documentaires', desc: 'Films sur les artisans, les techniques et le patrimoine textile africain' },
  { icon: 'fa-microphone', title: 'Interviews', desc: 'Rencontres avec les artisans, les créateurs et les ambassadeurs' },
  { icon: 'fa-tv', title: 'Émissions', desc: 'Programmes réguliers consacrés à la culture et au commerce textile' },
  { icon: 'fa-newspaper', title: 'Reportages', desc: 'Immersions dans les ateliers et les communautés partenaires' },
  { icon: 'fa-calendar-days', title: 'Événements', desc: 'Retransmissions et rediffusions des festivals et expositions VPTT' }
]

const LIBRARY = [
  { icon: 'fa-book', title: 'Livres', desc: 'Ouvrages sur l\'histoire et les techniques textiles africaines' },
  { icon: 'fa-file-lines', title: 'Études', desc: 'Recherches et analyses sur le patrimoine et l\'économie textile' },
  { icon: 'fa-map', title: 'Guides', desc: 'Guides pratiques pour les artisans, les acheteurs et les investisseurs' },
  { icon: 'fa-graduation-cap', title: 'Ressources pédagogiques', desc: 'Supports de cours pour les formations VPTT Academy' }
]

const GALLERY = [
  { img: produit1, title: 'Tissus wax premium' },
  { img: produit2, title: 'Collection boubou' },
  { img: produit3, title: 'Textiles kente' },
  { img: produit4, title: 'Indigo et batik' },
  { img: produit5, title: 'Adire traditionnel' },
  { img: produit6, title: 'Toile contemporaine' },
  { img: slide1, title: 'Campagne 2024' },
  { img: slide2, title: 'Festival des textiles' },
  { img: slide3, title: 'Artisans en scène' }
]

const TABS = [
  { id: 'campaigns', label: 'Campagnes', icon: 'fa-bullhorn' },
  { id: 'videos', label: 'Vidéos', icon: 'fa-circle-play' },
  { id: 'tv', label: 'VPTT TV', icon: 'fa-tv' },
  { id: 'library', label: 'Bibliothèque', icon: 'fa-book' },
  { id: 'gallery', label: 'Galerie', icon: 'fa-image' }
]

export default function MediaHubPage() {
  const [activeTab, setActiveTab] = useState('campaigns')

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">MÉDIAS</span>
          <h1>Pôle médias et communication</h1>
          <div className="page-hero__rule"></div>
          <p>Découvrez nos campagnes, nos vidéos et nos contenus audiovisuels</p>
        </div>
      </section>

      <div className="container">
        <div className="region-tabs" style={{ marginTop: 40, marginBottom: 0 }}>
          {TABS.map(t => (
            <button key={t.id} className={`region-tab ${activeTab === t.id ? 'is-active' : ''}`} onClick={() => setActiveTab(t.id)}>
              <i className={`fa-solid ${t.icon}`} style={{ marginRight: 8 }}></i>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === 'campaigns' && (
          <div className="media-grid">
            {CAMPAIGNS.map(c => (
              <article key={c.id} className="media-card">
                <div className="media-card__img"><img src={c.image} alt={c.title} /></div>
                <div className="media-card__body">
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <span className="media-card__meta">{c.views} vues</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="media-grid">
            {VIDEOS.map(v => (
              <article key={v.id} className="media-card">
                <div className="media-card__img">
                  <img src={v.image} alt={v.title} />
                  <div className="media-card__play"><i className="fa-solid fa-circle-play"></i></div>
                  <span className="media-card__duration">{v.duration}</span>
                </div>
                <div className="media-card__body">
                  <h3>{v.title}</h3>
                  <span className="media-card__meta">{v.views} vues</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'tv' && (
          <div className="media-cards-plain">
            {TV.map((s, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'library' && (
          <div className="media-cards-plain media-cards-plain--four">
            {LIBRARY.map((l, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${l.icon}`}></i>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="media-grid">
            {GALLERY.map((g, idx) => (
              <div key={idx} className="media-tile">
                <img src={g.img} alt={g.title} />
                <div className="media-tile__overlay">
                  <i className="fa-solid fa-eye"></i>
                  <span>{g.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container">
        <section className="impact-band" style={{ marginTop: 64, marginBottom: 64 }}>
          <h2>Suivez nos contenus</h2>
          <p>Retrouvez les campagnes, les documentaires et les reportages du réseau VPTT.</p>
        </section>
      </div>
    </div>
  )
}
