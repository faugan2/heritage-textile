import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Info.css'

const FAQS = [
  { question: 'Comment puis-je suivre ma commande ?', answer: 'Une fois votre commande confirmée, vous recevez un e-mail avec un numéro de suivi. Utilisez ce numéro pour suivre votre colis sur la plateforme.' },
  { question: 'Quels sont les délais de livraison ?', answer: 'Les délais varient selon votre localisation. En général, nous livrons sous 3 à 7 jours ouvrables en France métropolitaine, et sous 7 à 14 jours pour les livraisons internationales.' },
  { question: 'Puis-je modifier ou annuler ma commande ?', answer: 'Vous pouvez modifier ou annuler votre commande dans les 24 heures suivant votre achat. Passé ce délai, contactez-nous directement.' },
  { question: 'Acceptez-vous les retours ?', answer: 'Oui, nous acceptons les retours sous 14 jours. Le produit doit être en bon état, avec tous ses éléments d\'origine. Consultez notre politique de retour pour plus de détails.' },
  { question: 'Comment contacter le service client ?', answer: 'Écrivez-nous à info@heritagetextiles.com ou appelez le +228 91 53 85 18. Nos équipes répondent du lundi au vendredi, de 9 h à 18 h.' },
  { question: 'Proposez-vous un paiement en plusieurs fois ?', answer: 'Oui, nous proposons plusieurs options, dont le paiement en 3 ou 4 fois sans frais, via nos partenaires financiers.' }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">AIDE</span>
          <h1>Questions fréquentes</h1>
          <div className="page-hero__rule"></div>
          <p>Retrouvez les réponses aux questions les plus courantes</p>
        </div>
      </section>

      <div className="container">
        <div className="faq-list">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'is-open' : ''}`}>
              <button className="faq-item__q" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                <span>{faq.question}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              {openIndex === idx && <div className="faq-item__a">{faq.answer}</div>}
            </div>
          ))}
        </div>

        <section className="info-contact-card">
          <h2>Vous ne trouvez pas votre réponse ?</h2>
          <p>N'hésitez pas à nous contacter directement.</p>
          <a href="/contact" className="btn btn--yellow">
            Nous contacter <i className="fa-solid fa-arrow-right ico"></i>
          </a>
        </section>
      </div>
    </div>
  )
}
