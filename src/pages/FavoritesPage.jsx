import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import ProductCard from '../components/ProductCard'
import '../styles/template/base.css'
import '../styles/components/ProductCard.css'
import '../styles/pages/Products.css'
import '../styles/pages/Catalog.css'
import '../styles/pages/Account.css'

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  const count = favorites.length

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/products" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour aux produits
          </Link>
          <span className="tag">FAVORIS</span>
          <h1>Mes favoris</h1>
          <div className="page-hero__rule"></div>
          <p>{count} produit{count !== 1 ? 's' : ''} sauvegardé{count !== 1 ? 's' : ''}</p>
        </div>
      </section>

      <div className="container">
        {count === 0 ? (
          <div className="empty-state" style={{ margin: '56px 0 64px' }}>
            <i className="fa-regular fa-heart"></i>
            <p>Vous n'avez pas encore de favoris</p>
            <p>Explorez nos produits et ajoutez vos articles préférés à votre liste.</p>
            <Link to="/products" className="btn btn--yellow">
              Découvrir nos produits <i className="fa-solid fa-arrow-right ico"></i>
            </Link>
          </div>
        ) : (
          <div className="collection-grid" style={{ padding: '48px 0 64px' }}>
            {favorites.map(product => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
