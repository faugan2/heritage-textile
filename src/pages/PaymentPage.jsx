import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'
import '../styles/pages/Checkout.css'

const getPriceAsNumber = (price) => {
  if (typeof price === 'string') {
    return parseFloat(price.replace('€', '').trim())
  }
  return parseFloat(price)
}

const METHODS = [
  { id: 'card', name: 'Carte bancaire', description: 'Visa, Mastercard, American Express', icon: 'fa-credit-card', brand: false, fees: 0, color: '#3B82F6' },
  { id: 'paypal', name: 'PayPal', description: 'Paiement sécurisé avec PayPal', icon: 'fa-paypal', brand: true, fees: 0, color: '#003087' },
  { id: 'tmoney', name: 'TMoney', description: 'Paiement mobile sécurisé', icon: 'fa-mobile-screen', brand: false, fees: 0.5, color: '#1F2937' },
  { id: 'flooz', name: 'Flooz', description: 'Paiement mobile sécurisé', icon: 'fa-mobile-screen', brand: false, fees: 0.5, color: '#10B981' }
]

export default function PaymentPage() {
  const navigate = useNavigate()
  const { cartItems } = useCart()
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + getPriceAsNumber(item.price) * item.quantity, 0)
  const shipping = 10.00
  const tax = subtotal * 0.1
  const baseTotal = subtotal + shipping + tax

  const selectedData = METHODS.find(m => m.id === selectedMethod)
  const transactionFees = selectedData ? (baseTotal * selectedData.fees / 100) : 0
  const total = baseTotal + transactionFees

  const handlePayment = () => {
    if (!selectedMethod) {
      alert('Veuillez sélectionner un mode de paiement')
      return
    }
    setIsProcessing(true)
    setTimeout(() => {
      alert(`Redirection vers ${selectedData.name}…`)
      navigate('/cart')
    }, 1000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="container confirm">
        <div className="confirm__icon" style={{ background: 'var(--cream)', color: 'var(--orange)' }}><i className="fa-solid fa-cart-shopping"></i></div>
        <h1>Votre panier est vide</h1>
        <p>Vous ne pouvez pas accéder au paiement sans articles.</p>
        <Link to="/products" className="btn btn--yellow">
          Continuer vos achats <i className="fa-solid fa-arrow-right ico"></i>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/checkout" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour à la commande
          </Link>
          <span className="tag">PAIEMENT</span>
          <h1>Choisir un mode de paiement</h1>
          <div className="page-hero__rule"></div>
        </div>
      </section>

      <div className="container checkout">
        <div>
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {METHODS.map(m => {
              const active = selectedMethod === m.id
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMethod(m.id)}
                  className="panel"
                  style={{
                    margin: 0,
                    textAlign: 'left',
                    cursor: 'pointer',
                    border: `2px solid ${active ? m.color : 'var(--border)'}`,
                    background: active ? `${m.color}08` : '#fff',
                    fontFamily: 'inherit',
                    position: 'relative'
                  }}
                >
                  {active && (
                    <span style={{ position: 'absolute', top: 14, right: 14, width: 26, height: 26, borderRadius: '50%', background: m.color, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '.8rem' }}>
                      <i className="fa-solid fa-check"></i>
                    </span>
                  )}
                  <i className={`${m.brand ? 'fa-brands' : 'fa-solid'} ${m.icon}`} style={{ fontSize: '2rem', color: m.color, display: 'block', marginBottom: 14 }}></i>
                  <b style={{ display: 'block', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: 4 }}>{m.name}</b>
                  <span style={{ fontSize: '.86rem', color: 'var(--muted)' }}>{m.description}</span>
                  <span style={{ display: 'block', marginTop: 12, fontSize: '.8rem', fontWeight: 700, color: m.fees > 0 ? m.color : 'var(--green)' }}>
                    {m.fees > 0 ? `Frais : +${m.fees} %` : 'Aucun frais supplémentaire'}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="summary__secure" style={{ marginTop: 24 }}>
            <i className="fa-solid fa-lock"></i>
            <span>Paiement 100 % sécurisé. Vos données sont chiffrées et protégées selon les normes PCI-DSS.</span>
          </div>
        </div>

        <aside className="summary">
          <h2>Résumé de la commande</h2>
          {cartItems.map(item => (
            <div key={item.id} className="summary__item">
              <span>{item.name} × {item.quantity}</span>
              <b>{(getPriceAsNumber(item.price) * item.quantity).toFixed(2)} €</b>
            </div>
          ))}
          <div className="summary__row" style={{ marginTop: 12 }}><span>Sous-total</span><b>{subtotal.toFixed(2)} €</b></div>
          <div className="summary__row"><span>Livraison</span><b>{shipping.toFixed(2)} €</b></div>
          <div className="summary__row"><span>Taxe</span><b>{tax.toFixed(2)} €</b></div>
          {transactionFees > 0 && (
            <div className="summary__row"><span>Frais de transaction</span><b>+{transactionFees.toFixed(2)} €</b></div>
          )}
          <div className="summary__total"><span>Total</span><strong>{total.toFixed(2)} €</strong></div>
          <button className="btn btn--yellow" onClick={handlePayment} disabled={!selectedMethod || isProcessing}>
            {isProcessing ? 'Traitement…' : 'Procéder au paiement'} <i className="fa-solid fa-arrow-right ico"></i>
          </button>
          <p style={{ marginTop: 12, fontSize: '.8rem', color: 'var(--muted)', textAlign: 'center' }}>
            {selectedData ? `Vous serez redirigé vers ${selectedData.name} de manière sécurisée.` : 'Sélectionnez un mode de paiement pour continuer.'}
          </p>
        </aside>
      </div>
    </div>
  )
}
