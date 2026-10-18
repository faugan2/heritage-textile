import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'
import '../styles/pages/Checkout.css'

const PAYMENTS = [
  { value: 'card', label: 'Carte bancaire', detail: 'Visa, Mastercard, American Express', icon: 'fa-credit-card' },
  { value: 'wallet', label: 'Portefeuille VPTT', detail: 'Payez avec votre solde VPTT', icon: 'fa-wallet' },
  { value: 'bank', label: 'Virement bancaire', detail: 'Virement international sécurisé', icon: 'fa-building-columns' }
]

export default function CheckoutPageV2() {
  const navigate = useNavigate()
  const { cartItems } = useCart()
  const cart = cartItems
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', zipCode: '', country: '', paymentMethod: 'card'
  })
  const [orderNumber, setOrderNumber] = useState(null)

  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('€', '')) * (item.quantity || 1), 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.15
  const total = subtotal + shipping + tax

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitOrder = () => {
    if (!formData.firstName || !formData.email || !formData.address) {
      alert('Veuillez remplir tous les champs obligatoires')
      return
    }
    setOrderNumber(Math.floor(Math.random() * 100000))
  }

  if (orderNumber !== null) {
    return (
      <div className="container confirm">
        <div className="confirm__icon"><i className="fa-solid fa-circle-check"></i></div>
        <h1>Commande confirmée</h1>
        <p>Merci pour votre achat ! Votre commande a bien été enregistrée.</p>
        <p>Numéro de commande : <b>#VPTT{orderNumber}</b></p>
        <button className="btn btn--yellow" onClick={() => navigate('/')}>
          Retour à l'accueil <i className="fa-solid fa-arrow-right ico"></i>
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <button className="page-back" style={{ marginTop: 28 }} onClick={() => navigate('/cart')}>
        <i className="fa-solid fa-arrow-left"></i> Retour au panier
      </button>
      <h1 className="cart-title" style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: 24 }}>
        Finaliser la commande
      </h1>

      <div className="checkout">
        <div>
          <div className="steps-bar">
            <div className={step === 1 ? 'is-active' : 'is-done'}><span>1</span> Adresse</div>
            <div className={step === 2 ? 'is-active' : ''}><span>2</span> Paiement</div>
          </div>

          {step === 1 && (
            <section className="panel">
              <h3><i className="fa-solid fa-location-dot"></i> Adresse de livraison</h3>
              <div className="form-grid">
                <div className="field"><label htmlFor="ck-first">Prénom *</label><input id="ck-first" name="firstName" value={formData.firstName} onChange={handleInputChange} /></div>
                <div className="field"><label htmlFor="ck-last">Nom</label><input id="ck-last" name="lastName" value={formData.lastName} onChange={handleInputChange} /></div>
                <div className="field full"><label htmlFor="ck-email">E-mail *</label><input id="ck-email" type="email" name="email" value={formData.email} onChange={handleInputChange} /></div>
                <div className="field full"><label htmlFor="ck-phone">Téléphone</label><input id="ck-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} /></div>
                <div className="field full"><label htmlFor="ck-address">Adresse *</label><input id="ck-address" name="address" value={formData.address} onChange={handleInputChange} /></div>
                <div className="field"><label htmlFor="ck-city">Ville</label><input id="ck-city" name="city" value={formData.city} onChange={handleInputChange} /></div>
                <div className="field"><label htmlFor="ck-zip">Code postal</label><input id="ck-zip" name="zipCode" value={formData.zipCode} onChange={handleInputChange} /></div>
                <div className="field full"><label htmlFor="ck-country">Pays</label><input id="ck-country" name="country" value={formData.country} onChange={handleInputChange} /></div>
              </div>
              <button className="btn btn--yellow" onClick={() => setStep(2)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', marginTop: 8 }}>
                Continuer vers le paiement <i className="fa-solid fa-arrow-right ico"></i>
              </button>
            </section>
          )}

          {step === 2 && (
            <section className="panel">
              <h3><i className="fa-solid fa-credit-card"></i> Méthode de paiement</h3>
              {PAYMENTS.map(p => (
                <label key={p.value} className={`pay-option ${formData.paymentMethod === p.value ? 'is-active' : ''}`}>
                  <input type="radio" name="paymentMethod" value={p.value} checked={formData.paymentMethod === p.value} onChange={handleInputChange} />
                  <i className={`fa-solid ${p.icon}`}></i>
                  <div>
                    <b>{p.label}</b>
                    <span>{p.detail}</span>
                  </div>
                </label>
              ))}
              <div className="btn-line" style={{ marginTop: 22 }}>
                <button className="btn-ghost-line" onClick={() => setStep(1)}>Retour</button>
                <button className="btn btn--yellow" onClick={handleSubmitOrder} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  Placer la commande <i className="fa-solid fa-arrow-right ico"></i>
                </button>
              </div>
            </section>
          )}
        </div>

        <aside className="summary">
          <h2>Résumé de commande</h2>
          {cart.map((item, idx) => (
            <div key={idx} className="summary__item">
              <span>{item.name} × {item.quantity || 1}</span>
              <b>{(parseFloat(item.price.replace('€', '')) * (item.quantity || 1)).toFixed(2)} €</b>
            </div>
          ))}
          <div className="summary__row" style={{ marginTop: 12 }}><span>Sous-total</span><b>{subtotal.toFixed(2)} €</b></div>
          <div className="summary__row"><span>Livraison</span><b className={shipping === 0 ? 'is-free' : ''}>{shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} €`}</b></div>
          <div className="summary__row"><span>Taxes</span><b>{tax.toFixed(2)} €</b></div>
          <div className="summary__total"><span>Total</span><strong>{total.toFixed(2)} €</strong></div>
          <div className="summary__secure"><i className="fa-solid fa-lock"></i> Paiement sécurisé par SSL</div>
        </aside>
      </div>
    </div>
  )
}
