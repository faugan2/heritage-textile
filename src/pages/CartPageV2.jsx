import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/template/base.css'
import '../styles/pages/Cart.css'

export default function CartPageV2() {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const cart = cartItems

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', ''))
    const quantity = item.quantity || 1
    return sum + price * quantity
  }, 0)

  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.15
  const total = subtotal + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="container cart-empty">
        <div className="cart-empty__icon">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <h1>Votre panier est vide</h1>
        <p>Découvrez notre sélection de textiles africains authentiques.</p>
        <button className="btn btn--yellow" onClick={() => navigate('/products')}>
          Continuer les achats <i className="fa-solid fa-arrow-right ico"></i>
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <button className="cart-back" onClick={() => navigate('/products')}>
        <i className="fa-solid fa-arrow-left"></i> Continuer les achats
      </button>
      <h1 className="cart-title">Mon panier</h1>

      <div className="cart-layout">
        <div>
          <div className="cart-list">
            {cart.map((item, idx) => (
              <div key={idx} className="cart-item">
                <div className="cart-item__img" onClick={() => navigate(`/product/${item.id}`)}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div>
                  <h3 className="cart-item__name" onClick={() => navigate(`/product/${item.id}`)}>
                    {item.name}
                  </h3>
                  <p className="cart-item__unit">{item.price}</p>
                  <div className="qty">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))} aria-label="Diminuer">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} aria-label="Augmenter">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-item__side">
                  <p className="cart-item__total">
                    {(parseFloat(item.price.replace('€', '')) * (item.quantity || 1)).toFixed(2)}€
                  </p>
                  <button className="cart-remove" onClick={() => removeFromCart(item.id)} aria-label="Retirer du panier">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="cart-continue" onClick={() => navigate('/products')}>
            <i className="fa-solid fa-arrow-left"></i> Continuer les achats
          </button>
        </div>

        <aside className="cart-summary">
          <h2>Résumé de commande</h2>

          <div className="cart-row">
            <span>Articles ({cart.length})</span>
            <b>{subtotal.toFixed(2)}€</b>
          </div>
          <div className="cart-row">
            <span>Livraison</span>
            <b className={shipping === 0 ? 'is-free' : ''}>
              {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}
            </b>
          </div>
          <div className="cart-row">
            <span>Taxes</span>
            <b>{tax.toFixed(2)}€</b>
          </div>

          <div className="cart-total">
            <span>Total</span>
            <strong>{total.toFixed(2)}€</strong>
          </div>

          <button className="btn btn--yellow" onClick={() => navigate('/checkout')}>
            Passer la commande <i className="fa-solid fa-arrow-right ico"></i>
          </button>

          <button
            className="cart-clear"
            onClick={() => {
              if (confirm('Êtes-vous sûr de vouloir vider votre panier ?')) {
                clearCart()
              }
            }}
          >
            Vider le panier
          </button>

          <div className="cart-note">
            <i className="fa-solid fa-circle-check"></i>
            <span>Livraison gratuite à partir de 50€</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
