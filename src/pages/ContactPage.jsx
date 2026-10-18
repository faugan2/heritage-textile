import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Info.css'
import CtaBand from '../components/CtaBand'

const CONTACT_INFO = [
  { icon: 'fa-envelope', title: 'E-mail', value: 'info@heritagetextiles.com', href: 'mailto:info@heritagetextiles.com' },
  { icon: 'fa-phone', title: 'Téléphone', value: '+228 91 53 85 18', href: 'tel:+22891538518' },
  { icon: 'fa-location-dot', title: 'Adresse', value: 'Lomé, Togo' }
]

const FAQS = [
  { q: 'Comment puis-je devenir artisan partenaire ?', a: 'Contactez-nous via ce formulaire, avec vos informations et des photos de vos produits. Nous examinerons votre candidature et vous répondrons sous 5 jours.' },
  { q: 'Quels sont les délais de livraison ?', a: 'Les délais varient selon la localisation du vendeur et du client. En général, comptez 7 à 15 jours pour la France et 15 à 30 jours pour l\'international.' },
  { q: 'Comment puis-je payer avec TMoney ou Flooz ?', a: 'Lors du paiement, sélectionnez TMoney ou Flooz comme mode de paiement. Vous serez dirigé vers leur plateforme pour finaliser la transaction.' },
  { q: 'Quelle est votre politique de retour ?', a: 'Vous avez 30 jours pour retourner un article en bon état. Les frais de retour sont gratuits en cas de défaut du produit ; sinon, ils restent à votre charge.' }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire envoyé:', formData)
    alert('Merci ! Nous vous répondrons bientôt.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">CONTACT</span>
          <h1>Nous contacter</h1>
          <div className="page-hero__rule"></div>
          <p>Vous avez des questions ? Nous aimerions entendre parler de vous.</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          <aside className="contact-cards">
            {CONTACT_INFO.map((item, idx) => (
              <div key={idx} className="contact-card">
                <span className="contact-card__icon"><i className={`fa-solid ${item.icon}`}></i></span>
                <div>
                  <h3>{item.title}</h3>
                  {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                </div>
              </div>
            ))}

            <div className="contact-card contact-card--hours">
              <span className="contact-card__icon"><i className="fa-solid fa-clock"></i></span>
              <div>
                <h3>Heures d'ouverture</h3>
                <div className="contact-card--hours"><p>Lun. à ven. : 9 h – 18 h</p><p>Sam. : 10 h – 16 h</p><p>Dim. : fermé</p></div>
              </div>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Envoyez-nous un message</h2>

            <div className="field">
              <label htmlFor="contact-name">Nom</label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" />
            </div>
            <div className="field">
              <label htmlFor="contact-email">E-mail</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" />
            </div>
            <div className="field">
              <label htmlFor="contact-subject">Sujet</label>
              <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Sujet de votre message" />
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Votre message…"></textarea>
            </div>

            <button type="submit" className="btn btn--yellow">
              Envoyer le message <i className="fa-solid fa-paper-plane ico"></i>
            </button>
          </form>
        </div>

        <CtaBand />

        <section style={{ marginTop: 72, marginBottom: 64 }}>
          <h2 className="section-heading">Questions fréquentes</h2>
          <div className="faq-details">
            {FAQS.map((f, idx) => (
              <details key={idx}>
                <summary>
                  {f.q}
                  <i className="fa-solid fa-chevron-down"></i>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
