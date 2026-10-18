import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Pillars.css'

const STRUCTURE = {
  executive: {
    title: 'Direction générale', short: 'Direction', frequency: 'Hebdomadaire', icon: 'fa-briefcase',
    members: [
      { role: 'Directeur général (CEO)', person: 'Nom du CEO', dept: 'Direction' },
      { role: 'Directeur technologie (CTO)', person: 'Nom du CTO', dept: 'Technologie' },
      { role: 'Directeur financier (CFO)', person: 'Nom du CFO', dept: 'Finance' },
      { role: 'Directeur impact (CDO)', person: 'Nom du CDO', dept: 'Impact' }
    ],
    responsibilities: ['Décisions opérationnelles quotidiennes', 'Budget et allocation des ressources', 'Stratégie produit et lancements', 'Gestion de crise et urgences']
  },
  board: {
    title: 'Conseil d\'administration', short: 'Conseil', frequency: 'Mensuelle', icon: 'fa-building-columns',
    members: [
      { role: 'Président', person: 'Nom du président', dept: 'Gouvernance' },
      { role: 'Membres indépendants du CA', person: '3 experts', dept: 'Audit' },
      { role: 'Représentant des actionnaires', person: 'Grand investisseur', dept: 'Finance' },
      { role: 'Responsable conformité', person: 'Nom de l\'expert', dept: 'Juridique' }
    ],
    responsibilities: ['Supervision stratégique générale', 'Approbation des budgets et des plans à 5 ans', 'Audit interne et externe', 'Révision des rémunérations des dirigeants']
  },
  committees: {
    title: 'Comités spécialisés', short: 'Comités', frequency: 'Variable', icon: 'fa-users-gear',
    committees: [
      { name: 'Conseil stratégique', frequency: 'Mensuelle' },
      { name: 'Comité éthique', frequency: 'Trimestrielle' },
      { name: 'Comité conformité Charia', frequency: 'Trimestrielle' },
      { name: 'Comité innovation', frequency: 'Mensuelle' },
      { name: 'Comité investisseurs', frequency: 'Trimestrielle' },
      { name: 'Comité artisans', frequency: 'Mensuelle' }
    ]
  },
  assembly: {
    title: 'Assemblée générale', short: 'Assemblée', frequency: 'Annuelle', icon: 'fa-user-group',
    details: 'Tous les actionnaires (minimum 1 action)',
    topics: ['Approbation des rapports annuels', 'Rémunération du CA et des dirigeants', 'Nomination de l\'audit externe', 'Élection du conseil d\'administration', 'Stratégie long terme et vision', 'Distribution des dividendes']
  }
}

const PRINCIPLES = [
  { icon: 'fa-people-group', title: 'Démocratie', desc: '1 action = 1 voix' },
  { icon: 'fa-magnifying-glass', title: 'Transparence', desc: 'Données ouvertes' },
  { icon: 'fa-scale-balanced', title: 'Équité', desc: 'Processus justes' },
  { icon: 'fa-shield-halved', title: 'Responsabilité', desc: 'Chacun répond de ses décisions' },
  { icon: 'fa-earth-africa', title: 'Durabilité', desc: 'Vision long terme' }
]

const DECISIONS = [
  { level: 'Décisions quotidiennes (moins de 10 K€)', authority: 'CEO et responsables de département' },
  { level: 'Décisions tactiques (10 à 100 K€)', authority: 'Direction générale' },
  { level: 'Décisions stratégiques (plus de 100 K€)', authority: 'Conseil d\'administration' },
  { level: 'Décisions majeures (fusion, introduction en bourse…)', authority: 'Assemblée générale' }
]

export default function GovernancePage() {
  const [level, setLevel] = useState('executive')
  const data = STRUCTURE[level]

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">GOUVERNANCE</span>
          <h1>Gouvernance VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Une structure démocratique et transparente, pour une gouvernance équitable</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingBottom: 0 }}>
          <div className="gov-levels" style={{ marginTop: 40 }}>
            {Object.entries(STRUCTURE).map(([key, s]) => (
              <button key={key} className={`pillar-tab ${level === key ? 'is-active' : ''}`} onClick={() => setLevel(key)}>
                {s.short}
              </button>
            ))}
          </div>

          <div className="tier-detail" style={{ marginTop: 0 }}>
            <div>
              <h2>{data.title}</h2>
              <div className="tier-kpis">
                <div className="tier-kpi"><span>Réunions</span><b>{data.frequency}</b></div>
              </div>
            </div>

            {level === 'committees' && (
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>Comités</h3>
                <div className="committee-grid">
                  {data.committees.map((c, idx) => (
                    <div key={idx} className="committee">
                      <h4>{c.name}</h4>
                      <span>{c.frequency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {level === 'assembly' && (
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>Participants</h3>
                <p style={{ color: 'var(--text)', marginBottom: 18 }}>{data.details}</p>
                <ul className="resp-list">
                  {data.topics.map((t, idx) => (
                    <li key={idx}><i className="fa-solid fa-circle-check"></i>{t}</li>
                  ))}
                </ul>
              </div>
            )}

            {(level === 'executive' || level === 'board') && (
              <>
                <div className="members">
                  {data.members.map((m, idx) => (
                    <div key={idx} className="member-row">
                      <div>
                        <h4>{m.role}</h4>
                        <p>{m.person}</p>
                      </div>
                      <small>{m.dept}</small>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>Responsabilités</h3>
                  <ul className="resp-list">
                    {data.responsibilities.map((r, idx) => (
                      <li key={idx}><i className="fa-solid fa-arrow-right"></i>{r}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Nos 5 principes de gouvernance</h2>
          <div className="cert-grid" style={{ marginTop: 32 }}>
            {PRINCIPLES.map((p, idx) => (
              <div key={idx} className="cert">
                <i className={`fa-solid ${p.icon}`}></i>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Processus de prise de décision</h2>
          <div className="members" style={{ maxWidth: 820, margin: '32px auto 0' }}>
            {DECISIONS.map((d, idx) => (
              <div key={idx} className="decision">
                <h4>{d.level}</h4>
                <span>{d.authority}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Participez à la gouvernance</h2>
          <p>Actionnaires et parties prenantes, faites entendre votre voix dans la direction de VPTT.</p>
          <button className="btn btn--yellow">
            Devenir actionnaire <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
