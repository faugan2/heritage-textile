import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Pillars.css'

const POLES = {
  fashion: {
    name: 'VPTT Fashion', short: 'Fashion', icon: 'fa-shirt', timeline: '2025-2026', investment: '500 K€',
    vision: 'Maison de couture digitale, avec des collections co-créées par artisans et designers.',
    features: ['Collections capsule trimestrielles', 'Défilés virtuels', 'Personnalisation assistée par IA', 'Collaboration avec des designers internationaux', 'Jetons de mode sur blockchain'],
    markets: ['Paris', 'Milan', 'New York', 'Lagos']
  },
  art: {
    name: 'VPTT Art Gallery', short: 'Art', icon: 'fa-palette', timeline: '2026', investment: '300 K€',
    vision: 'Galerie numérique et physique qui met en valeur les artistes africains contemporains.',
    features: ['Vérification d\'authenticité par NFT', 'Visites virtuelles de galerie', 'Résidences d\'artisans', 'Plateforme d\'enchères', 'Partenariats avec des galeries'],
    markets: ['8 continents']
  },
  home: {
    name: 'VPTT Home & Living', short: 'Maison', icon: 'fa-couch', timeline: '2026-2027', investment: '400 K€',
    vision: 'Mobilier et décoration inspirés du design africain contemporain.',
    features: ['Éditions limitées de mobilier', 'Service de décoration d\'intérieur', 'Conseil en habitat', 'Matériaux durables', 'Simulation de pièce en 3D'],
    markets: ['Résidences de luxe']
  },
  food: {
    name: 'VPTT Culinary', short: 'Culinaire', icon: 'fa-utensils', timeline: '2027', investment: '600 K€',
    vision: 'Plateforme gastronomique autour des recettes et des ingrédients du patrimoine africain.',
    features: ['Plateforme de recettes interactive', 'Place de marché d\'ingrédients', 'Collaborations avec des chefs', 'Cours de cuisine en ligne', 'Partenariats avec des restaurants'],
    markets: ['Plus de 35 pays']
  },
  travel: {
    name: 'VPTT Travel & Experience', short: 'Voyage', icon: 'fa-plane', timeline: '2027-2028', investment: '800 K€',
    vision: 'Voyages immersifs chez les artisans, avec des expériences culturelles.',
    features: ['Visites des villages d\'artisans', 'Ateliers de formation', 'Semaines d\'immersion culturelle', 'Séjours éco-touristiques', 'Intégration de la cagnotte voyage'],
    markets: ['12 pays africains']
  },
  capital: {
    name: 'VPTT Capital & FinTech', short: 'Finance', icon: 'fa-coins', timeline: '2028', investment: '1,5 M€',
    vision: 'Services financiers pour les artisans : microcrédit, assurance et retraite.',
    features: ['Plateforme de microfinance', 'Produits d\'assurance', 'Épargne retraite', 'Prêts professionnels', 'Intégration des cryptomonnaies'],
    markets: ['Plus de 50 pays']
  },
  media: {
    name: 'VPTT Media & Broadcasting', short: 'Médias', icon: 'fa-tv', timeline: '2028', investment: '2 M€',
    vision: 'Production et diffusion : documentaires, séries et événements en direct.',
    features: ['VPTT TV en streaming', 'Séries documentaires', 'Ventes en direct', 'Réseau de podcasts', 'Fonds pour créateurs de contenu'],
    markets: ['Monde entier']
  },
  ai: {
    name: 'VPTT AI & Innovation Lab', short: 'IA', icon: 'fa-robot', timeline: 'En continu', investment: '1 M€ par an',
    vision: 'Recherche et développement : intelligence artificielle, blockchain et technologies durables.',
    features: ['Assistants IA pour artisans', 'R&D blockchain', 'Analyses de durabilité', 'Modèles de prévision', 'Hub d\'innovation ouvert'],
    markets: ['Écosystème tech mondial']
  }
}

const GOALS = [
  { icon: 'fa-arrow-trend-up', title: 'Chiffre d\'affaires', desc: '50 M€ d\'ici 2028' },
  { icon: 'fa-earth-africa', title: 'Présence mondiale', desc: '80 pays opérationnels' },
  { icon: 'fa-users', title: 'Communauté', desc: '100 000 artisans actifs' },
  { icon: 'fa-heart', title: 'Impact', desc: '10 M€ reversés à des causes sociales' }
]

const ROADMAP = [
  { phase: 'Phase 1', poles: 'Marketplace textile, Artisans certifiés, Wallet VPTT', milestone: 'Lancement de la plateforme' },
  { phase: 'Phase 2', poles: 'Application mobile, IA, Traduction multilingue', milestone: 'Accessibilité mobile et multilingue' },
  { phase: 'Phase 3', poles: 'Blockchain, Passeport numérique', milestone: 'Traçabilité des produits' },
  { phase: 'Phase 4', poles: 'Expansion africaine', milestone: 'Présence dans plusieurs pays africains' },
  { phase: 'Phase 5', poles: 'Expansion mondiale', milestone: 'Présence internationale' }
]

const BUDGET = [
  { label: 'Pôles 2025-2027', amount: '2,6 M€' },
  { label: 'Laboratoire IA et innovation', amount: '3,5 M€' },
  { label: 'Infrastructure', amount: '1,5 M€' }
]

export default function FutureEvolutionPage() {
  const [poleKey, setPoleKey] = useState('fashion')
  const pole = POLES[poleKey]

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ÉVOLUTION</span>
          <h1>Évolution future VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Huit nouveaux pôles stratégiques pour 2025-2028, de la mode au capital. 6 M€ d'investissements, une expansion verticale et une innovation continue.</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingBottom: 0 }}>
          <h2 className="section-heading">Les pôles</h2>
          <div className="pole-grid" style={{ marginTop: 32 }}>
            {Object.entries(POLES).map(([key, p]) => (
              <button key={key} className={`pole-btn ${poleKey === key ? 'is-active' : ''}`} onClick={() => setPoleKey(key)}>
                <i className={`fa-solid ${p.icon}`}></i>
                {p.short}
              </button>
            ))}
          </div>

          <div className="pole-detail">
            <h2>{pole.name}</h2>
            <div className="pole-meta">
              <div><span>Calendrier</span><b>{pole.timeline}</b></div>
              <div><span>Investissement</span><b>{pole.investment}</b></div>
              <div><span>Marchés cibles</span><b>{pole.markets.join(' · ')}</b></div>
            </div>
            <p className="pole-vision">{pole.vision}</p>
            <h3>Fonctionnalités</h3>
            <ul className="pole-features">
              {pole.features.map((f, idx) => (
                <li key={idx}><i className="fa-solid fa-circle-check"></i>{f}</li>
              ))}
            </ul>
            <button className="btn btn--yellow">
              En savoir plus <i className="fa-solid fa-arrow-right ico"></i>
            </button>
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Feuille de route</h2>
          <div className="steps" style={{ marginTop: 32, gridTemplateColumns: 'repeat(5,1fr)' }}>
            {ROADMAP.map((r, idx) => (
              <div key={idx} className="step">
                <div className="step__num">{idx + 1}</div>
                <h3>{r.phase}</h3>
                <p>{r.poles}</p>
                <p style={{ marginTop: 8, color: 'var(--green-dark)', fontWeight: 600 }}>{r.milestone}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Budget d'investissement</h2>
          <div className="budget" style={{ marginTop: 32 }}>
            {BUDGET.map((b, idx) => (
              <div key={idx} className="budget__item">
                <span>{b.label}</span>
                <b>{b.amount}</b>
              </div>
            ))}
          </div>
          <div className="budget__total">Total : <b>6 M€</b></div>
        </section>

        <section className="section-band" style={{ paddingTop: 0 }}>
          <h2 className="section-heading">Objectifs stratégiques</h2>
          <div className="benefit-cards" style={{ marginTop: 32 }}>
            {GOALS.map((g, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${g.icon}`}></i>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Construisons l'avenir ensemble</h2>
          <p>Rejoignez notre mission pour transformer l'écosystème textile africain.</p>
          <button className="btn btn--yellow">
            Investir dès maintenant <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
