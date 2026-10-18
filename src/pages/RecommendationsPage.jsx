import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allProducts } from '../data/products'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/AI.css'
import '../styles/components/ProductCard.css'

const STYLES = [
  { id: 'elegant', label: 'Élégant', icon: 'fa-gem' },
  { id: 'casual', label: 'Décontracté', icon: 'fa-face-smile' },
  { id: 'formal', label: 'Formel', icon: 'fa-user-tie' },
  { id: 'artistic', label: 'Artistique', icon: 'fa-palette' }
]

// Scores de correspondance indicatifs, en attendant le moteur de recommandation
const RECOMMENDATIONS = allProducts.slice(0, 6).map((p, idx) => ({
  ...p,
  match: 95 - idx * 3,
  reason: ['Parfait pour votre style élégant', 'Motifs traditionnels appréciés', 'Couleurs de votre gamme préférée', 'Style moderne et intemporel', 'Motifs géométriques variés', 'Qualité supérieure recommandée'][idx]
}))

export default function RecommendationsPage() {
  const navigate = useNavigate()
  const [selectedStyle, setSelectedStyle] = useState('elegant')

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/ai-studio" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour au studio IA
          </Link>
          <span className="tag">IA</span>
          <h1>Recommandations personnalisées</h1>
          <div className="page-hero__rule"></div>
          <p>Des sélections proposées selon vos achats et vos préférences</p>
        </div>
      </section>

      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="ai-card">
          <h3><i className="fa-solid fa-sparkles"></i> Votre style préféré</h3>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))' }}>
            {STYLES.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedStyle(s.id)}
                className="ai-template"
                style={{ padding: 18, textAlign: 'center', borderColor: selectedStyle === s.id ? 'var(--green)' : undefined }}
              >
                <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.5rem', color: 'var(--orange)', marginBottom: 8, display: 'block' }}></i>
                <b style={{ padding: 0 }}>{s.label}</b>
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid" style={{ marginTop: 28 }}>
          {RECOMMENDATIONS.map(p => (
            <article key={p.id} className="pcard" onClick={() => navigate(`/product/${p.id}`)} style={{ cursor: 'pointer' }}>
              <div className="pcard__media">
                <span className="pcard__badge">{p.match}% compatible</span>
                <img src={p.image} alt={p.name} />
              </div>
              <div className="pcard__body">
                <h3 className="pcard__name">{p.name}</h3>
                <p className="muted" style={{ fontSize: '.84rem' }}>{p.reason}</p>
                <div className="pcard__foot">
                  <span className="pcard__price">{p.price}</span>
                  <span style={{ fontSize: '.84rem', color: 'var(--muted)' }}>
                    <i className="fa-solid fa-star" style={{ color: 'var(--yellow-dark)' }}></i> {p.rating} ({p.reviews})
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="ai-card" style={{ marginTop: 40, textAlign: 'center', padding: 40 }}>
          <h3 style={{ fontSize: '1.3rem' }}>Vous cherchez plus ?</h3>
          <p className="muted" style={{ marginBottom: 20 }}>Découvrez l'ensemble de notre catalogue de textiles authentiques.</p>
          <Link to="/products" className="btn btn--yellow">
            Voir tous les produits <i className="fa-solid fa-arrow-right ico"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
