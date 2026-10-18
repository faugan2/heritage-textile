import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import product1 from '../images/produits/1.png'
import product2 from '../images/produits/2.png'
import product3 from '../images/produits/3.png'
import product4 from '../images/produits/4.png'
import product5 from '../images/produits/5.png'
import product6 from '../images/produits/6.png'
import '../styles/template/base.css'
import '../styles/components/ProductCard.css'
import '../styles/pages/Products.css'
import '../styles/pages/Catalog.css'

const IMAGES = [product1, product2, product3, product4, product5, product6]

const COLLECTION = [
  { id: 1, name: 'Pagne Wax Premium', price: '45.99€', priceNum: 45.99, category: 'Collections', image: IMAGES[0], badge: 'Nouveau' },
  { id: 2, name: 'Tissu Kente Traditionnel', price: '65.99€', priceNum: 65.99, category: 'Collections', image: IMAGES[1], badge: 'Tendance' },
  { id: 3, name: 'Ensemble Bazin Riche', price: '89.99€', priceNum: 89.99, category: 'Collections', image: IMAGES[2], badge: 'Populaire' },
  { id: 4, name: 'Dashiki Artisanal', price: '55.99€', priceNum: 55.99, category: 'Collections', image: IMAGES[3], badge: null },
  { id: 5, name: 'Bracelet Perles Africaines', price: '29.99€', priceNum: 29.99, category: 'Collections', image: IMAGES[4], badge: 'Nouveau' },
  { id: 6, name: 'Écharpe Indigo Tie Dye', price: '39.99€', priceNum: 39.99, category: 'Collections', image: IMAGES[5], badge: 'Tendance' },
  { id: 7, name: 'Pagne Ankara Vibrant', price: '52.99€', priceNum: 52.99, category: 'Collections', image: IMAGES[0], badge: null },
  { id: 8, name: 'Chemise Bogolan', price: '72.99€', priceNum: 72.99, category: 'Collections', image: IMAGES[2], badge: null }
]

export default function CollectionsPage() {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('nouveautes')

  const sorted = [...COLLECTION].sort((a, b) => {
    if (sortBy === 'prix-asc') return a.priceNum - b.priceNum
    if (sortBy === 'prix-desc') return b.priceNum - a.priceNum
    if (sortBy === 'nouveautes') return b.badge === 'Nouveau' ? 1 : -1
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">COLLECTIONS</span>
          <h1>Collections exclusives</h1>
          <div className="page-hero__rule"></div>
          <p>Des éditions limitées, créées en collaboration directe avec nos artisans partenaires pour préserver leur caractère unique et authentique.</p>
          <div className="collection-stats">
            <div className="collection-stat"><b>{COLLECTION.length}</b><span>Produits</span></div>
            <div className="collection-stat"><b><i className="fa-solid fa-wand-magic-sparkles" style={{ color: 'var(--orange)' }}></i></b><span>Éditions limitées</span></div>
            <div className="collection-stat"><b><i className="fa-solid fa-circle-check" style={{ color: 'var(--green-dark)' }}></i></b><span>Pièces uniques</span></div>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 48 }}>
        <div className="collection-toolbar">
          <p>Affichage de {sorted.length} produits</p>
          <select className="select-field" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="nouveautes">Nouveautés d'abord</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
          </select>
        </div>

        <div className="collection-grid">
          {sorted.map(p => (
            <div key={p.id}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>

        <section style={{ padding: '64px 0' }}>
          <h2 className="section-heading" style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>À découvrir aussi</h2>
          <div className="discover-grid">
            <button className="discover discover--f" onClick={() => navigate('/femme')}>
              <i className="fa-solid fa-person-dress"></i>
              <h3>Collection femme</h3>
              <p>Découvrir <i className="fa-solid fa-arrow-right"></i></p>
            </button>
            <button className="discover discover--h" onClick={() => navigate('/homme')}>
              <i className="fa-solid fa-person"></i>
              <h3>Collection homme</h3>
              <p>Découvrir <i className="fa-solid fa-arrow-right"></i></p>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
