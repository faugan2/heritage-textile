import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Pillars.css'

const FAIR_TRADE = [
  { icon: 'fa-people-group', title: 'Commerce équitable', items: ['Rémunération juste des artisans (au moins 60 % du prix)', 'Aucune exploitation du travail des enfants', 'Conditions de travail saines et sécurisées', 'Respect des droits humains fondamentaux', 'Transparence totale de la chaîne d\'approvisionnement'] },
  { icon: 'fa-leaf', title: 'Responsabilité environnementale', items: ['Matériaux naturels et biodégradables', 'Procédés de production éco-responsables', 'Compensation carbone pour les livraisons', 'Réduction des déchets (objectif zéro déchet)', 'Soutien aux artisans qui utilisent des énergies renouvelables'] },
  { icon: 'fa-heart', title: 'Impact social', items: ['5 % des revenus reversés à des ONG locales', 'Formation et développement des compétences', 'Accès à l\'éducation pour les enfants des artisans', 'Santé et assurance pour les producteurs', 'Autonomisation des femmes et des jeunes'] }
]

const SHARIAH = [
  { principle: 'Transparence', desc: 'Transparence totale sur les prix, la qualité et les délais', certification: 'Traçabilité blockchain à 100 %' },
  { principle: 'Équité', desc: 'Contrats équitables pour toutes les parties', certification: 'Arbitrage indépendant Charia' },
  { principle: 'Contrats clairs', desc: 'Des contrats clairs, compris par toutes les parties', certification: 'Contrats vérifiés par le Charia Board' },
  { principle: 'Absence d\'intérêts (Riba)', desc: 'Pas d\'intérêts excessifs ni d\'exploitation financière', certification: 'Contrats conformes à la Charia' },
  { principle: 'Respect des principes islamiques', desc: 'Produits et processus conformes aux règles halal', certification: 'Audité par des imams et des experts Charia' }
]

const CERTS = [
  { name: 'Fair Trade International', year: '2024' },
  { name: 'UNESCO Heritage', year: '2024' },
  { name: 'Charia Board', year: '2024' },
  { name: 'Carbon Trust', year: '2024' }
]

const IMPACT = [
  { value: '2,5 M€', label: 'Versés aux artisans' },
  { value: '125 K', label: 'Familles soutenues' },
  { value: '2,8 t CO₂', label: 'Compensées' },
  { value: '100 %', label: 'Conformes à la Charia' }
]

const TRANSPARENCY = [
  { title: 'Prix détaillés', desc: 'Voyez exactement où va chaque euro de votre achat' },
  { title: 'Traçabilité blockchain', desc: 'Suivez le produit, du producteur au client' },
  { title: 'Rapports publics', desc: 'Audits indépendants publiés chaque mois' },
  { title: 'Documentation Charia', desc: 'Tous les contrats vérifiés par le Charia Board' }
]

export default function EthicalCommerceShariahPage() {
  const [tab, setTab] = useState('ethical')

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ÉTHIQUE</span>
          <h1>Commerce éthique et Charia</h1>
          <div className="page-hero__rule"></div>
          <p>Des transactions justes, transparentes et conformes aux principes islamiques</p>
        </div>
      </section>

      <div className="container">
        <div className="pillar-tabs" style={{ marginTop: 40 }}>
          <button className={`pillar-tab ${tab === 'ethical' ? 'is-active' : ''}`} onClick={() => setTab('ethical')}>Commerce équitable</button>
          <button className={`pillar-tab ${tab === 'shariah' ? 'is-active' : ''}`} onClick={() => setTab('shariah')}>Conformité Charia</button>
        </div>

        <section className="section-band">
          {tab === 'ethical' ? (
            <>
              <h2 className="section-heading">Nos principes de commerce équitable</h2>
              <div className="pillar-cards" style={{ marginTop: 32 }}>
                {FAIR_TRADE.map((p, idx) => (
                  <div key={idx} className="pillar">
                    <div className="pillar__icon"><i className={`fa-solid ${p.icon}`}></i></div>
                    <h3>{p.title}</h3>
                    <ul>
                      {p.items.map((item, i) => <li key={i}><i className="fa-solid fa-circle-check"></i>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="section-heading">Conformité Charia</h2>
              <p className="section-lead">Toutes les transactions VPTT respectent les 5 principes fondamentaux de la Charia.</p>
              <div className="pillar-cards">
                {SHARIAH.map((s, idx) => (
                  <div key={idx} className="pillar pillar--shariah">
                    <div className="pillar__icon"><i className="fa-solid fa-scale-balanced"></i></div>
                    <h3>{s.principle}</h3>
                    <p>{s.desc}</p>
                    <span className="pillar__badge">{s.certification}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="section-band">
          <h2 className="section-heading">Certifications et audits</h2>
          <div className="cert-grid" style={{ marginTop: 32 }}>
            {CERTS.map((c, idx) => (
              <div key={idx} className="cert">
                <i className="fa-solid fa-circle-check"></i>
                <h3>{c.name}</h3>
                <p>{c.year}</p>
                <span>Certifié</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Notre impact 2024</h2>
          <div className="africa-stats" style={{ marginTop: 32 }}>
            {IMPACT.map((i, idx) => (
              <div key={idx} className="africa-stat">
                <b>{i.value}</b>
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band" style={{ paddingBottom: 48 }}>
          <h2 className="section-heading">Transparence totale</h2>
          <div className="check-rows" style={{ marginTop: 32 }}>
            {TRANSPARENCY.map((t, idx) => (
              <div key={idx} className="check-row">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Achetez en toute confiance</h2>
          <p>Chaque achat soutient un commerce juste et une justice sociale.</p>
          <button className="btn btn--yellow">
            Explorer les produits équitables <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
