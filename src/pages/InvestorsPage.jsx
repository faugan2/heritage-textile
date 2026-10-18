import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'

const TIERS = [
  {
    key: 'petit', name: 'Petit Investisseur', label: 'Petit', icon: 'fa-leaf',
    minInvestment: '500 €', expectedReturn: '8-12 %', quota: 'Illimité',
    benefits: ['Accès au tableau de bord dédié', 'Rapports financiers mensuels', 'Visibilité sur la plateforme', 'Participation aux décisions']
  },
  {
    key: 'standard', name: 'Investisseur Standard', label: 'Standard', icon: 'fa-rocket',
    minInvestment: '5 000 €', expectedReturn: '12-18 %', quota: '100 investisseurs maximum',
    benefits: ['Tableau de bord premium', 'Rapports hebdomadaires', 'Visibilité accrue', 'Opportunités exclusives', 'Réunions trimestrielles']
  },
  {
    key: 'grand', name: 'Grand Investisseur', label: 'Grand', icon: 'fa-star',
    minInvestment: '50 000 €', expectedReturn: '18-25 %', quota: '25 investisseurs maximum',
    benefits: ['Tableau de bord VIP', 'Rapports en temps réel', 'Visibilité maximale', 'Opportunités exclusives', 'Réunions mensuelles', 'Siège au conseil stratégique']
  },
  {
    key: 'prestige', name: 'Investisseur Prestige', label: 'Prestige', icon: 'fa-wand-magic-sparkles',
    minInvestment: '250 000 €', expectedReturn: '25-35 %', quota: '10 investisseurs maximum',
    benefits: ['Tableau de bord ultra-premium', 'Rapports quotidiens', 'Ambassadeur de marque', 'Co-création d\'opportunités', 'Réunions hebdomadaires', 'Siège au conseil d\'administration']
  },
  {
    key: 'fondateur', name: 'Investisseur Fondateur', label: 'Fondateur', icon: 'fa-certificate',
    minInvestment: '1 000 000 €', expectedReturn: '35 % et plus', quota: '5 investisseurs maximum',
    benefits: ['Tableau de bord exclusif', 'Rapports en temps réel', 'Ambassadeur de marque global', 'Co-création stratégique', 'Réunions quotidiennes', 'Siège permanent au conseil d\'administration', 'Equity supplémentaire (+2 %)']
  }
]

const STEPS = [
  { title: 'Vérification', desc: 'Vérification de votre identité (KYC)' },
  { title: 'Contrat', desc: 'Signature électronique sécurisée' },
  { title: 'Dépôt', desc: 'Virements bancaires sécurisés' },
  { title: 'Tableau de bord', desc: 'Accès immédiat à votre suivi' }
]

const SAFETY = [
  { icon: 'fa-lock', title: 'Escrow blockchain', desc: 'Fonds sécurisés par blockchain' },
  { icon: 'fa-circle-check', title: 'Audit annuel', desc: 'Vérification par des experts' },
  { icon: 'fa-chart-column', title: 'Transparence', desc: 'Rapports financiers détaillés' },
  { icon: 'fa-shield-halved', title: 'Conforme à la Charia', desc: 'Conforme aux principes islamiques' }
]

export default function InvestorsPage() {
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('standard')
  const tier = TIERS.find(t => t.key === selectedKey)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">INVESTISSEURS</span>
          <h1>Pôle investisseurs VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Investissez dans le patrimoine africain, avec des rendements attractifs et un impact social mesurable</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingBottom: 0 }}>
          <h2 className="section-heading">Choisissez votre catégorie</h2>
          <div className="tier-tabs" style={{ marginTop: 28 }}>
            {TIERS.map(t => (
              <button key={t.key} className={`tier-tab ${selectedKey === t.key ? 'is-active' : ''}`} onClick={() => setSelectedKey(t.key)}>
                <i className={`fa-solid ${t.icon}`}></i>
                {t.label}
              </button>
            ))}
          </div>

          <div className="tier-detail">
            <div>
              <h2>{tier.name}</h2>
              <div className="tier-kpis">
                <div className="tier-kpi"><span>Investissement minimum</span><b>{tier.minInvestment}</b></div>
                <div className="tier-kpi"><span>Rendement attendu par an</span><b>{tier.expectedReturn}</b></div>
                <div className="tier-kpi"><span>Places disponibles</span><b>{tier.quota}</b></div>
              </div>
            </div>
            <div className="tier-benefits">
              <h3>Avantages inclus</h3>
              <ul>
                {tier.benefits.map((b, idx) => (
                  <li key={idx}><i className="fa-solid fa-circle-check"></i><span>{b}</span></li>
                ))}
              </ul>
              <button className="btn btn--yellow">
                Investir maintenant <i className="fa-solid fa-arrow-right ico"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Comment investir</h2>
          <div className="steps">
            {STEPS.map((s, idx) => (
              <div key={idx} className="step">
                <div className="step__num">{idx + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band" style={{ paddingTop: 0 }}>
          <h2 className="section-heading">Sécurité et conformité</h2>
          <div className="safety">
            {SAFETY.map((s, idx) => (
              <div key={idx} className="safety__item">
                <i className={`fa-solid ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Prêt à investir dans le patrimoine africain ?</h2>
          <p>Rejoignez les investisseurs VPTT et générez des rendements tout en créant un impact social.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/register')}>
            Commencer maintenant <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
