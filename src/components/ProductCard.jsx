import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import '../styles/components/ProductCard.css'

export default function ProductCard({ id, name, price, image, badge }) {
  const { addToCart, isInCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (!isInCart(id)) {
      addToCart({ id, name, price, image })
    }
  }

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    toggleFavorite({ id, name, price, image })
  }

  const favorite = isFavorite(id)
  const inCart = isInCart(id)

  return (
    <Link to={`/product/${id}`} className="pcard__link">
      <article className="pcard">
        <div className="pcard__media">
          {badge && <span className="pcard__badge">{badge}</span>}
          <img src={image} alt={name} />
        </div>

        <div className="pcard__body">
          <h3 className="pcard__name">{name}</h3>

          <div className="pcard__foot">
            <p className="pcard__price">{price}</p>

            <div className="pcard__actions">
              <button
                onClick={handleAddToCart}
                disabled={inCart}
                className="pcard__btn"
                title={inCart ? 'Produit déjà dans le panier' : 'Ajouter au panier'}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                {inCart ? 'Au panier' : 'Ajouter'}
              </button>
              <button
                onClick={handleToggleFavorite}
                className={`pcard__fav ${favorite ? 'is-active' : ''}`}
                aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
              >
                <i className={favorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
