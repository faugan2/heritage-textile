import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Catalog.css'
import product1 from '../images/produits/1.png'
import product2 from '../images/produits/2.png'
import product3 from '../images/produits/3.png'
import product4 from '../images/produits/4.png'
import product5 from '../images/produits/5.png'
import product6 from '../images/produits/6.png'

const IMAGES = [product1, product2, product3, product4, product5, product6]

const SUBCATEGORIES = {
  femme: [
    { id: 'robes', name: 'Robes', image: IMAGES[0] },
    { id: 'tops', name: 'Tops et blouses', image: IMAGES[1] },
    { id: 'pantalons', name: 'Pantalons', image: IMAGES[2] },
    { id: 'jupes', name: 'Jupes', image: IMAGES[3] },
    { id: 'accessoires', name: 'Accessoires', image: IMAGES[4] },
    { id: 'chaussures', name: 'Chaussures', image: IMAGES[5] },
    { id: 'ensembles', name: 'Ensembles', image: IMAGES[0] }
  ],
  homme: [
    { id: 'chemises', name: 'Chemises', image: IMAGES[1] },
    { id: 'pantalons', name: 'Pantalons', image: IMAGES[2] },
    { id: 'tshirts', name: 'T-shirts', image: IMAGES[3] },
    { id: 'vestes', name: 'Vestes et blazers', image: IMAGES[4] },
    { id: 'accessoires', name: 'Accessoires', image: IMAGES[5] },
    { id: 'chaussures', name: 'Chaussures', image: IMAGES[0] },
    { id: 'ensembles', name: 'Ensembles', image: IMAGES[1] }
  ]
}

export default function SubcategoriesPage() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const category = pathname.split('/')[1]
  const label = category === 'femme' ? 'Femme' : category === 'homme' ? 'Homme' : 'Catégories'
  const items = SUBCATEGORIES[category] || []

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <button className="page-back" onClick={() => navigate('/')}>
            <i className="fa-solid fa-arrow-left"></i> Retour à l'accueil
          </button>
          <span className="tag">COLLECTION</span>
          <h1>{label}</h1>
          <div className="page-hero__rule"></div>
          <p>Découvrez nos collections exclusives</p>
        </div>
      </section>

      <div className="container">
        <div className="subcat-grid" style={{ padding: '48px 0 64px' }}>
          {items.map(sub => (
            <button key={sub.id} className="subcat" onClick={() => navigate(`/${category}/${sub.id}`)}>
              <div className="subcat__img"><img src={sub.image} alt={sub.name} /></div>
              <div className="subcat__body">
                <h3>{sub.name}</h3>
                <span></span>
                <p>Découvrir</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
