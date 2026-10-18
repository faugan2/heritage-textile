import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Escrow.css'

const STEPS = [
  { title: 'Le client paie', desc: 'L\'acheteur effectue son paiement', details: 'Le paiement est enregistré dans le système escrow et n\'est pas encore transmis au vendeur.', icon: 'fa-lock' },
  { title: 'Les fonds sont sécurisés', desc: 'Les fonds sont bloqués de manière sécurisée', details: 'Les fonds restent bloqués sur notre système escrow pendant toute la durée de la transaction.', icon: 'fa-shield-halved' },
  { title: 'Le vendeur expédie', desc: 'Le vendeur expédie le produit', details: 'Un numéro de suivi est généré et l\'acheteur peut suivre sa livraison en temps réel.', icon: 'fa-plane' },
  { title: 'Le client confirme la réception', desc: 'L\'acheteur reçoit et valide le produit', details: 'L\'acheteur confirme la réception. En cas de problème, un processus de réclamation automatisé est lancé.', icon: 'fa-check-double' },
  { title: 'Les fonds sont libérés', desc: 'Le paiement est transmis au vendeur', details: 'Une fois la réception confirmée, le vendeur reçoit le paiement moins nos frais.', icon: 'fa-wallet' }
]

const FEATURES = [
  { icon: 'fa-lock', title: 'Blocage automatique', desc: 'Les fonds restent bloqués jusqu\'à la validation de la livraison' },
  { icon: 'fa-link', title: 'Traçabilité blockchain', desc: 'Chaque transaction est enregistrée de manière immuable sur la blockchain' },
  { icon: 'fa-clock', title: 'Libération automatisée', desc: 'Libération automatique après 3 jours sans contestation' },
  { icon: 'fa-scale-balanced', title: 'Arbitrage', desc: 'Arbitrage automatisé, puis humain en cas de litige' },
  { icon: 'fa-shield-halved', title: 'Assurance complète', desc: 'Couverture totale en cas de perte ou de vol' },
  { icon: 'fa-circle-check', title: 'Conforme à la Charia', desc: 'Conforme aux principes islamiques de justice' }
]

const TIMELINE = [
  { day: 'J0', event: 'Transaction initiée', status: 'Fonds bloqués en escrow' },
  { day: 'J0 à J1', event: 'Préparation et expédition', status: 'Acheteur notifié' },
  { day: 'J2 à J4', event: 'Livraison et inspection', status: 'L\'acheteur dispose de 3 jours' },
  { day: 'J3 et plus', event: 'Confirmation ou litige', status: 'Libération automatique ou arbitrage' },
  { day: 'J4 à J5', event: 'Paiement au vendeur', status: 'Fonds transférés, frais déduits' }
]

const BUYER_PERKS = ['Aucun frais supplémentaire', 'Protection assurance incluse', 'Garantie de livraison', 'Retour gratuit sous 30 jours']
const SELLER_PERKS = ['Commission escrow de 2 à 3 %', 'Aucun risque de non-paiement', 'Paiement garanti sous 5 jours', 'Assurance responsabilité civile']

const DISPUTES = [
  { title: 'Étape 1 : analyse automatisée', desc: 'Le système analyse les photos et les messages. Décision en moins d\'une heure.' },
  { title: 'Étape 2 : médiation', desc: 'Un agent humain intervient pour trouver un accord.' },
  { title: 'Étape 3 : arbitrage', desc: 'Un arbitre indépendant rend la décision finale.' }
]

export default function EscrowSystemPage() {
  const navigate = useNavigate()
  const [openStep, setOpenStep] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">SÉCURITÉ</span>
          <h1>Système escrow VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Une sécurité maximale pour chaque transaction : blocage des fonds et libération progressive</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingTop: 48 }}>
          <h2 className="section-heading">Le processus escrow en 5 étapes</h2>
          <div className="accordion">
            {STEPS.map((s, idx) => (
              <div key={idx} className={`accordion__item ${openStep === idx ? 'is-open' : ''}`}>
                <button className="accordion__head" onClick={() => setOpenStep(openStep === idx ? -1 : idx)}>
                  <span className="accordion__num">{idx + 1}</span>
                  <span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </span>
                  <i className="fa-solid fa-chevron-down accordion__icon"></i>
                </button>
                {openStep === idx && <div className="accordion__body">{s.details}</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Caractéristiques de sécurité</h2>
          <div className="escrow-cards" style={{ marginTop: 32 }}>
            {FEATURES.map((f, idx) => (
              <div key={idx} className="escrow-card">
                <i className={`fa-solid ${f.icon}`}></i>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Calendrier de libération</h2>
          <div className="timeline-list" style={{ marginTop: 32 }}>
            {TIMELINE.map((t, idx) => (
              <div key={idx} className="timeline-row">
                <div className="timeline-row__day">{t.day}</div>
                <div>
                  <h3>{t.event}</h3>
                  <p>{t.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Structure des frais</h2>
          <div className="fee-cards" style={{ marginTop: 32 }}>
            <div className="fee-card">
              <h3>Pour l'acheteur</h3>
              <ul>
                {BUYER_PERKS.map((p, idx) => <li key={idx}><i className="fa-solid fa-circle-check"></i>{p}</li>)}
              </ul>
            </div>
            <div className="fee-card fee-card--seller">
              <h3>Pour le vendeur</h3>
              <ul>
                {SELLER_PERKS.map((p, idx) => <li key={idx}><i className="fa-solid fa-circle-check"></i>{p}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-band" style={{ paddingBottom: 0 }}>
          <h2 className="section-heading">Résolution des litiges</h2>
          <div className="escrow-cards" style={{ marginTop: 32 }}>
            {DISPUTES.map((d, idx) => (
              <div key={idx} className="escrow-card">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="dispute-badge">
            <i className="fa-solid fa-circle-check"></i>
            99,2 % de résolutions satisfaisantes · Délai moyen : 2 à 3 jours
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64, marginTop: 64 }}>
          <h2>Commencer une transaction en toute sécurité</h2>
          <p>Vos fonds sont protégés de bout en bout par notre système escrow blockchain.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/products')}>
            Faire un achat sécurisé <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
