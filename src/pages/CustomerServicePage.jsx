import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Info.css'
import '../styles/pages/Service.css'

const CATEGORIES = {
  support: {
    label: 'Support client', icon: 'fa-headset',
    channels: [
      { name: 'Chat en direct', icon: 'fa-comments', response: 'Moins de 5 min', available: '24 h/24' },
      { name: 'WhatsApp', icon: 'fa-whatsapp', response: 'Moins de 10 min', available: '24 h/24' },
      { name: 'E-mail', icon: 'fa-envelope', response: 'Moins de 24 h', available: 'Lun.–ven. 9 h–18 h' },
      { name: 'Téléphone', icon: 'fa-phone', response: 'Immédiat', available: 'Lun.–ven. 9 h–18 h' }
    ]
  },
  disputes: {
    label: 'Litiges', icon: 'fa-scale-balanced', title: 'Gestion des litiges',
    services: ['Médiation acheteur-vendeur', 'Remboursement garanti sous 30 jours', 'Audit de transaction', 'Arbitrage blockchain', 'Réclamation assurance']
  },
  security: {
    label: 'Sécurité', icon: 'fa-shield-halved', title: 'Sécurité et conformité',
    services: ['Vérification KYC/AML', 'Certificat SSL/TLS', 'Traçabilité blockchain', 'Authentification à deux facteurs', 'Assurance anti-fraude']
  },
  logistics: {
    label: 'Livraison', icon: 'fa-truck', title: 'Logistique et livraison',
    services: ['Suivi GPS en temps réel', 'Livraison express en 24 à 48 h', 'Assurance colis complète', 'Retour gratuit sous 30 jours', 'Douanes et documentation']
  },
  artisans: {
    label: 'Artisans', icon: 'fa-hammer', title: 'Support artisans',
    services: ['Accompagnement et formation', 'Gestion de l\'inventaire', 'Tableau de bord analytique', 'Paiements instantanés', 'Certification d\'authenticité']
  },
  investors: {
    label: 'Investisseurs', icon: 'fa-coins', title: 'Support investisseurs',
    services: ['Rapports financiers détaillés', 'Tableau de bord du retour sur investissement', 'Audit indépendant annuel', 'Assemblée générale trimestrielle', 'Accompagnement fiscal et juridique']
  }
}

const RESPONSE_TIMES = [
  { level: 'Standard', time: '24 à 48 h' },
  { level: 'Premium', time: '4 à 8 h' },
  { level: 'VIP', time: '1 à 2 h' },
  { level: 'Urgent', time: 'Moins de 15 min' }
]

const FAQS = [
  { q: 'Comment obtenir un remboursement ?', a: 'Le remboursement est garanti sous 30 jours après l\'achat. Contactez notre support.' },
  { q: 'Le chat est-il vraiment disponible 24 h/24 ?', a: 'Oui : un assistant IA répond immédiatement, et un conseiller humain prend le relais dès que possible.' },
  { q: 'Comment mon achat est-il protégé ?', a: 'Chaque achat est protégé par le système escrow blockchain et par une assurance complète.' },
  { q: 'Dans quelles langues êtes-vous disponibles ?', a: 'Français, anglais, arabe, espagnol, portugais, italien, allemand, néerlandais, russe, chinois, japonais, coréen, thaï, vietnamien et turc.' }
]

export default function CustomerServicePage() {
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('support')
  const cat = CATEGORIES[selectedKey]

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">SERVICE CLIENT</span>
          <h1>Service client international</h1>
          <div className="page-hero__rule"></div>
          <p>Un support 24 h/24 dans 15 langues, avec une réponse garantie</p>
        </div>
      </section>

      <div className="container">
        <div className="region-tabs" style={{ marginTop: 40 }}>
          {Object.entries(CATEGORIES).map(([key, c]) => (
            <button key={key} className={`region-tab ${selectedKey === key ? 'is-active' : ''}`} onClick={() => setSelectedKey(key)}>
              <i className={`fa-solid ${c.icon}`} style={{ marginRight: 8 }}></i>
              {c.label}
            </button>
          ))}
        </div>

        <section className="section-band" style={{ paddingTop: 32 }}>
          <h2 className="section-heading">{cat.title || 'Canaux de contact'}</h2>

          {selectedKey === 'support' ? (
            <div className="channel-cards">
              {cat.channels.map((ch, idx) => (
                <div key={idx} className="channel-card">
                  <span className="channel-card__icon"><i className={ch.icon === 'fa-whatsapp' ? 'fa-brands fa-whatsapp' : `fa-solid ${ch.icon}`}></i></span>
                  <h3>{ch.name}</h3>
                  <p><b>Réponse :</b> {ch.response}</p>
                  <p><b>Disponible :</b> {ch.available}</p>
                  <button className="btn btn--yellow channel-card__btn">Contacter</button>
                </div>
              ))}
            </div>
          ) : (
            <ul className="check-list" style={{ marginTop: 32 }}>
              {cat.services.map((s, idx) => (
                <li key={idx}><i className="fa-solid fa-circle-check"></i>{s}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="section-band section-band--soft">
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-heading">Temps de réponse garantis</h2>
            <div className="response-grid" style={{ marginTop: 32 }}>
              {RESPONSE_TIMES.map((r, idx) => (
                <div key={idx} className="response-card">
                  <span>{r.level}</span>
                  <b>{r.time}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Questions fréquentes</h2>
          <div className="faq-details">
            {FAQS.map((f, idx) => (
              <details key={idx}>
                <summary>{f.q}<i className="fa-solid fa-chevron-down"></i></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Besoin d'aide immédiate ?</h2>
          <p>Notre équipe est prête à vous assister dans votre langue préférée.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/contact')}>
            Démarrer un chat <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
