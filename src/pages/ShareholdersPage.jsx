import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Shareholders.css'

const TIERS = [
  {
    key: 'bronze', name: 'Actionnaire Bronze', label: 'Bronze', icon: 'fa-medal',
    equity: '0,1 à 0,5 %', investment: '50 000 €', rights: ['Accès aux rapports financiers', 'Droit de vote aux assemblées', '1 voix par action', 'Dividendes annuels', 'Reconnaissance officielle'],
    responsibilities: ['Assemblées générales', 'Consultations']
  },
  {
    key: 'silver', name: 'Actionnaire Silver', label: 'Silver', icon: 'fa-medal',
    equity: '0,5 à 2 %', investment: '250 000 €', rights: ['Tous les droits Bronze', 'Rapports financiers trimestriels', 'Consultations prioritaires', 'Invitation aux événements VPTT', 'Réunions mensuelles'],
    responsibilities: ['Consultations', 'Assemblées générales']
  },
  {
    key: 'gold', name: 'Actionnaire Gold', label: 'Gold', icon: 'fa-trophy',
    equity: '2 à 5 %', investment: '1 000 000 €', rights: ['Tous les droits Silver', 'Siège au comité stratégique', 'Accès aux données confidentielles', 'Consultations exclusives', 'Réunions hebdomadaires'],
    responsibilities: ['Comité stratégique', 'Consultations', 'Assemblées générales']
  },
  {
    key: 'vip_platinum', name: 'Actionnaire VIP Platinum', label: 'VIP Platinum', icon: 'fa-crown',
    equity: '5 à 15 %', investment: '5 000 000 €', rights: ['Tous les droits Gold', 'Siège au conseil d\'administration', 'Droit de veto stratégique', 'Accès direct à la direction générale', 'Réunions illimitées'],
    responsibilities: ['Conseil d\'administration', 'Vision stratégique', 'Relations internationales']
  }
]

const GOVERNANCE = [
  { body: 'Assemblée générale annuelle', freq: 'Annuelle', desc: 'Tous les actionnaires votent sur les décisions stratégiques majeures', votes: '1 action = 1 vote' },
  { body: 'Conseil d\'administration', freq: 'Mensuelle', desc: 'Présidence, directeurs et auditeurs indépendants', votes: 'Vote collégial' },
  { body: 'Direction générale', freq: 'Hebdomadaire', desc: 'Décisions opérationnelles quotidiennes', votes: 'Consensus recherché' },
  { body: 'Comités spécialisés', freq: 'Variable', desc: 'Stratégie, éthique, conformité Charia, innovation, investisseurs, artisans', votes: 'Avis recommandatif' }
]

const BOARD = [
  { role: 'Président du conseil d\'administration', name: 'Nom du président', company: 'Conseil d\'administration' },
  { role: 'Directeur général', name: 'Nom du directeur général', company: 'Direction générale' },
  { role: 'Responsable conformité Charia', name: 'Nom de l\'expert', company: 'Comité conformité Charia' },
  { role: 'Membre indépendant du CA', name: 'Nom de l\'expert', company: 'Conseil d\'administration' }
]

export default function ShareholdersPage() {
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('bronze')
  const tier = TIERS.find(t => t.key === selectedKey)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ACTIONNAIRES</span>
          <h1>Pôle actionnaires VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Une structure de gouvernance avec quatre niveaux d'engagement actionnarial</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingBottom: 0 }}>
          <h2 className="section-heading">Choisissez votre niveau</h2>
          <div className="tier-tabs" style={{ marginTop: 28, gridTemplateColumns: 'repeat(4,1fr)' }}>
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
                <div className="tier-kpi"><span>Équité</span><b>{tier.equity}</b></div>
                <div className="tier-kpi"><span>Investissement minimum</span><b>{tier.investment}</b></div>
                <div className="tier-kpi"><span>Gouvernance</span><b>Active</b></div>
              </div>
            </div>
            <div className="tier-benefits">
              <h3>Droits et privilèges</h3>
              <ul>
                {tier.rights.map((r, idx) => (
                  <li key={idx}><i className="fa-solid fa-circle-check"></i><span>{r}</span></li>
                ))}
              </ul>
              <h3>Responsabilités</h3>
              <ul>
                {tier.responsibilities.map((r, idx) => (
                  <li key={idx}><i className="fa-solid fa-arrow-right"></i><span>{r}</span></li>
                ))}
              </ul>
              <button className="btn btn--yellow" onClick={() => navigate('/register')}>
                Devenir actionnaire <i className="fa-solid fa-arrow-right ico"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Structure de gouvernance</h2>
          <div className="gov-list">
            {GOVERNANCE.map((g, idx) => (
              <div key={idx} className="gov-item">
                <div>
                  <h3>{g.body}</h3>
                  <p>{g.desc}</p>
                </div>
                <div className="gov-item__meta">
                  <span>{g.freq}</span>
                  <b>{g.votes}</b>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band" style={{ paddingTop: 0 }}>
          <h2 className="section-heading">Conseil d'administration actuel</h2>
          <div className="board-grid">
            {BOARD.map((m, idx) => (
              <div key={idx} className="board-card">
                <div className="board-card__avatar"><i className="fa-solid fa-user"></i></div>
                <h3>{m.role}</h3>
                <p>{m.name}</p>
                <small>{m.company}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Rejoignez le conseil d'administration</h2>
          <p>Contribuez à la direction stratégique de VPTT et façonnez l'avenir du patrimoine africain.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/register')}>
            Postuler maintenant <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
