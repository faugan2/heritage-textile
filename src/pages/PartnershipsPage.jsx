import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'

const PARTNERS = [
  { id: 1, name: 'Paris Design Week', category: 'Événements mode', icon: 'fa-shirt', country: 'France', description: 'Présentation annuelle des collections VPTT sur les plus grands podiums.', benefits: ['Visibilité internationale', 'Plus de 1 000 visiteurs par an', 'Réseau premium'], status: 'Actif', since: 'janvier 2025' },
  { id: 2, name: 'Tokyo Craft Fair', category: 'Événements mode', icon: 'fa-torii-gate', country: 'Japon', description: 'Exposition annuelle des textiles artisanaux africains au Japon.', benefits: ['Marché premium', 'Plus de 500 boutiques', 'Partenariat B2B'], status: 'Actif', since: 'mars 2025' },
  { id: 3, name: 'DHL Express', category: 'Logistique', icon: 'fa-truck', country: 'Mondial', description: 'Partenaire officiel pour la logistique internationale de VPTT.', benefits: ['Livraison en 24 à 48 h', 'Suivi GPS', 'Assurance complète'], status: 'Actif', since: 'février 2024' },
  { id: 4, name: 'Stripe Global', category: 'Finance', icon: 'fa-credit-card', country: 'États-Unis', description: 'Plateforme de paiement pour les transactions mondiales en plusieurs devises.', benefits: ['28 devises', 'Frais réduits', 'Conformité mondiale'], status: 'Actif', since: 'septembre 2024' },
  { id: 5, name: 'UNESCO', category: 'Institutions', icon: 'fa-landmark', country: 'Mondial', description: 'Reconnaissance du statut de patrimoine culturel immatériel.', benefits: ['Label UNESCO', 'Protection juridique', 'Financement culturel'], status: 'En cours', since: 'premier trimestre 2026' },
  { id: 6, name: 'Google for Startups', category: 'Technologie', icon: 'fa-google', country: 'États-Unis', description: 'Crédits Google Cloud et accompagnement entrepreneurial.', benefits: ['Cloud', 'Analyses avancées', 'Mentorat'], status: 'Actif', since: 'novembre 2024' },
  { id: 7, name: 'Vogue Arabia', category: 'Médias', icon: 'fa-camera', country: 'Émirats arabes unis', description: 'Couverture dans le magazine mode le plus prestigieux du Moyen-Orient.', benefits: ['Visibilité premium', 'Séances photo', 'Articles mensuels'], status: 'En cours', since: 'mai 2025' },
  { id: 8, name: 'Fair Trade International', category: 'Certifications', icon: 'fa-certificate', country: 'Mondial', description: 'Certification commerce équitable pour l\'ensemble des produits VPTT.', benefits: ['Label commerce équitable', 'Audit annuel', 'Prix premium de 15 %'], status: 'Actif', since: 'août 2024' }
]

const CATEGORIES = ['Tous', 'Événements mode', 'Logistique', 'Finance', 'Institutions', 'Technologie', 'Médias', 'Certifications']

const BENEFITS = [
  { icon: 'fa-star', title: 'Visibilité mondiale', desc: 'Accès aux marchés premium du monde entier' },
  { icon: 'fa-chart-line', title: 'Croissance rapide', desc: 'Hausse moyenne de 85 % des revenus' },
  { icon: 'fa-handshake', title: 'Accompagnement dédié', desc: 'Une équipe partenaires disponible 24 h/24' },
  { icon: 'fa-trophy', title: 'Reconnaissance', desc: 'Certifications et labels internationaux' }
]

const STEPS = [
  { title: 'Candidature', desc: 'Soumettez votre dossier' },
  { title: 'Vérification', desc: 'Audit de conformité' },
  { title: 'Activation', desc: 'Contrat et mise en œuvre' }
]

export default function PartnershipsPage() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('Tous')

  const visible = category === 'Tous' ? PARTNERS : PARTNERS.filter(p => p.category === category)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">PARTENAIRES</span>
          <h1>Partenaires VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>245 partenaires stratégiques à travers le monde : mode, logistique, finance, médias et institutions</p>
        </div>
      </section>

      <div className="container">
        <div className="region-tabs" style={{ marginTop: 40 }}>
          {CATEGORIES.map(c => (
            <button key={c} className={`region-tab ${category === c ? 'is-active' : ''}`} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="partner-cards">
          {visible.map(p => (
            <article key={p.id} className="partner-card">
              <div className="partner-card__head">
                <i className={`fa-solid ${p.icon}`}></i>
                <span className={`partner-card__status ${p.status === 'Actif' ? '' : 'is-pending'}`}>{p.status}</span>
              </div>
              <div className="partner-card__body">
                <h3>{p.name}</h3>
                <p className="partner-card__country">{p.country}</p>
                <p>{p.description}</p>
                <ul>
                  {p.benefits.map((b, idx) => (
                    <li key={idx}><i className="fa-solid fa-circle-check"></i><span>{b}</span></li>
                  ))}
                </ul>
                <p className="partner-card__since">Partenaire depuis {p.since}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="section-band section-band--soft" style={{ marginTop: 64 }}>
        <div className="container">
          <h2 className="section-heading">Avantages des partenariats VPTT</h2>
          <div className="benefit-cards" style={{ marginTop: 32 }}>
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${b.icon}`}></i>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <h2 className="section-heading">Devenir partenaire VPTT</h2>
          <div className="steps" style={{ marginTop: 32 }}>
            {STEPS.map((s, idx) => (
              <div key={idx} className="step">
                <div className="step__num">{idx + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <button className="btn btn--yellow">
              Envoyer ma candidature <i className="fa-solid fa-arrow-right ico"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="partner-cta" style={{ marginTop: 64 }}>
          <h2>Des questions sur les partenariats ?</h2>
          <p>Notre équipe est prête à discuter de collaborations stratégiques.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/contact')}>
            Contactez-nous <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
