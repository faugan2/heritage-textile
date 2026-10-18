import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Catalog.css'
import '../styles/pages/Media.css'
import produit1 from '../images/produits/1.png'
import produit2 from '../images/produits/2.png'
import produit3 from '../images/produits/3.png'
import produit4 from '../images/produits/4.png'
import produit5 from '../images/produits/5.png'
import produit6 from '../images/produits/6.png'
import slide1 from '../images/slides/1.png'
import slide2 from '../images/slides/2.png'
import slide3 from '../images/slides/3.png'

const ARTICLES = [
  { id: 1, title: 'L\'histoire du wax africain', excerpt: 'Découvrez l\'origine et l\'évolution du tissu wax à travers les générations, et son impact culturel.', author: 'Marie Koné', readTime: 8, image: produit1 },
  { id: 2, title: 'Techniques traditionnelles de tissage', excerpt: 'Un guide complet des méthodes ancestrales de tissage africain, transmises de génération en génération.', author: 'Jean Diallo', readTime: 12, image: produit2 },
  { id: 3, title: 'Symboles et significations des motifs', excerpt: 'Explorez le sens profond de chaque motif traditionnel du textile africain.', author: 'Amara Sow', readTime: 10, image: produit3 },
  { id: 4, title: 'Artisanat et entrepreneuriat local', excerpt: 'Comment les artisans africains transforment leur savoir-faire en opportunités économiques mondiales.', author: 'Kwame Mensah', readTime: 15, image: produit4 },
  { id: 5, title: 'La renaissance du textile africain', excerpt: 'Comment les créateurs contemporains réinventent les traditions tout en honorant l\'héritage.', author: 'Zainab Omar', readTime: 11, image: produit5 },
  { id: 6, title: 'Durabilité et mode africaine', excerpt: 'L\'approche écologique des artisans textiles africains, pour une mode durable et responsable.', author: 'Nkosi Banda', readTime: 9, image: produit6 }
]

const VIDEOS = [
  { id: 1, title: 'Processus de tissage traditionnel', duration: '12:45', views: '2 340', thumbnail: slide1 },
  { id: 2, title: 'Interview : Mariam Textiles', duration: '18:30', views: '1 560', thumbnail: slide2 }
]

const IMAGES = [produit3, produit4, produit5, produit6, slide1, slide3]

const TABS = [
  { id: 'articles', label: 'Articles', icon: 'fa-file-lines' },
  { id: 'videos', label: 'Vidéos', icon: 'fa-circle-play' },
  { id: 'images', label: 'Galerie', icon: 'fa-image' }
]

export default function GalleryPage() {
  const [tab, setTab] = useState('articles')

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">GALERIE</span>
          <h1>Galerie culturelle</h1>
          <div className="page-hero__rule"></div>
          <p>Explorez l'histoire et la culture des textiles africains</p>
        </div>
      </section>

      <div className="container">
        <div className="region-tabs" style={{ marginTop: 40 }}>
          {TABS.map(t => (
            <button key={t.id} className={`region-tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)}>
              <i className={`fa-solid ${t.icon}`} style={{ marginRight: 8 }}></i>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'articles' && (
          <div className="media-grid">
            {ARTICLES.map(a => (
              <article key={a.id} className="media-card">
                <div className="media-card__img"><img src={a.image} alt={a.title} /></div>
                <div className="media-card__body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="media-card__meta">{a.author} · {a.readTime} min de lecture</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === 'videos' && (
          <div className="media-grid">
            {VIDEOS.map(v => (
              <article key={v.id} className="media-card">
                <div className="media-card__img">
                  <img src={v.thumbnail} alt={v.title} />
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

        {tab === 'images' && (
          <div className="media-grid">
            {IMAGES.map((src, idx) => (
              <div key={idx} className="media-tile">
                <img src={src} alt={`Galerie ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
