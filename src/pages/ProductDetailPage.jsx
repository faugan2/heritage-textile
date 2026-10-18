import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DigitalPassport from '../components/DigitalPassport'
import { allProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import '../styles/template/base.css'
import '../styles/pages/ProductDetail.css'

const NOT_FOUND = {
  name: 'Produit non trouvé',
  price: 0,
  rating: 4.5,
  reviews: 0,
  description: "Ce produit n'existe pas ou n'est plus disponible.",
  fullDescription: '',
  artisan: '',
  artisanCountry: '',
  artisanId: null,
  inStock: false,
  details: {},
  images: [],
  relatedProducts: []
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, isInCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [justAdded, setJustAdded] = useState(false)

  const product = allProducts.find(p => p.id === parseInt(id)) || { ...NOT_FOUND, id: parseInt(id) }

  const relatedIds = product.relatedProducts.length > 0
    ? product.relatedProducts
    : allProducts.filter(p => p.id !== product.id).slice(0, 3).map(p => p.id)
  const related = relatedIds.map(rid => allProducts.find(p => p.id === rid)).filter(Boolean)

  useEffect(() => {
    setSelectedImage(0)
    setQuantity(1)
  }, [id])

  const unitPrice = product.priceNum ?? product.price
  const isFav = isFavorite(product.id)

  const inCart = isInCart(product.id)

  const handleAddToCart = () => {
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: `${unitPrice.toFixed(2)}€`,
        image: product.image
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container">
        <button className="pdp-back" onClick={() => navigate('/products')}>
          <i className="fa-solid fa-arrow-left"></i> Retour aux produits
        </button>

        <div className="pdp">
          <div className="pdp-gallery">
            <div className="pdp-gallery__main">
              <img src={product.images[selectedImage] ?? product.images[0]} alt={product.name} />
              <button
                className="pdp-fav"
                aria-label={isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                onClick={() => toggleFavorite({
                  id: product.id,
                  name: product.name,
                  price: `${unitPrice.toFixed(2)}€`,
                  image: product.image
                })}
              >
                <i className={isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
              </button>
            </div>

            {product.images.length > 1 && (
              <div className="pdp-thumbs">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`pdp-thumb ${selectedImage === idx ? 'is-active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pdp-info">
            <p className="pdp-category">{product.category}</p>
            <h1 className="pdp-title">{product.name}</h1>

            <div className="pdp-rating">
              <div className="pdp-stars">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`${i < Math.floor(product.rating) ? 'fa-solid' : 'fa-regular'} fa-star ${i < Math.floor(product.rating) ? 'is-on' : ''}`}
                  ></i>
                ))}
              </div>
              <b>{product.rating}</b>
              <span>({product.reviews} avis)</span>
            </div>

            <p className="pdp-price">{unitPrice.toFixed(2)}€</p>

            <p className="pdp-desc">{product.description}</p>
            <p className="pdp-desc-long">{product.fullDescription}</p>

            <div className="pdp-artisan">
              <p className="pdp-artisan__label">Artisan certifié</p>
              <h3 className="pdp-artisan__name">{product.artisan}</h3>
              <p className="pdp-artisan__country">
                <i className="fa-solid fa-location-dot"></i> {product.artisanCountry}
              </p>
              {product.artisanId && (
                <button className="pdp-artisan__link" onClick={() => navigate(`/artisan/${product.artisanId}`)}>
                  Voir la boutique <i className="fa-solid fa-arrow-right"></i>
                </button>
              )}
            </div>

            <dl className="pdp-details">
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="pdp-buy">
              <div className="pdp-qty">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button
                className={`btn ${inCart ? 'pdp-btn--in-cart' : justAdded ? 'btn--green' : 'btn--yellow'}`}
                onClick={handleAddToCart}
                disabled={!product.inStock || inCart}
              >
                <i className={`fa-solid ${inCart || justAdded ? 'fa-circle-check' : 'fa-cart-shopping'}`}></i>
                {inCart ? 'Déjà au panier' : justAdded ? 'Ajouté au panier' : 'Ajouter au panier'}
              </button>
            </div>

            {product.inStock
              ? <p className="pdp-stock pdp-stock--in">En stock</p>
              : <p className="pdp-stock pdp-stock--out">En rupture de stock</p>}
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <DigitalPassport
            productId={product.id}
            productName={product.name}
            artisanName={product.artisan}
          />
        </div>

        {related.length > 0 && (
          <section className="pdp-related">
            <h2>Produits similaires</h2>
            <div className="pdp-related__grid">
              {related.map(item => (
                <div key={item.id} className="pdp-related__item" onClick={() => navigate(`/product/${item.id}`)}>
                  <div className="pdp-related__img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="pdp-related__body">
                    <p>{item.name}</p>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
