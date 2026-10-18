import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Impact.css'

const METRICS = {
  overall: {
    title: 'Impact global VPTT', label: 'Global',
    stats: [
      { label: 'Artisans soutenus', value: '1 265', icon: 'fa-user-group', tag: '+45 %' },
      { label: 'Pays partenaires', value: '8', icon: 'fa-earth-africa', tag: '+2' },
      { label: 'Produits listés', value: '5 320', icon: 'fa-box', tag: '+120 %' },
      { label: 'Impact économique', value: '2,4 M€', icon: 'fa-coins', tag: '+85 %' },
      { label: 'Utilisateurs actifs', value: '20 K+', icon: 'fa-users', tag: '+150 %' },
      { label: 'Ventes totales', value: '8,5 M€', icon: 'fa-credit-card', tag: '+200 %' }
    ]
  },
  social: {
    title: 'Impact social', label: 'Social',
    stats: [
      { label: 'Emplois créés', value: '2 400', icon: 'fa-briefcase', tag: '+30 %' },
      { label: 'Femmes soutenues', value: '940', icon: 'fa-person-dress', tag: '74 %' },
      { label: 'Jeunes formés', value: '450', icon: 'fa-graduation-cap', tag: '36 %' },
      { label: 'Artisans financés', value: '1 265', icon: 'fa-coins', tag: '100 %' },
      { label: 'Communautés bénéficiaires', value: '85', icon: 'fa-users', tag: '+12' }
    ]
  },
  environmental: {
    title: 'Impact environnemental', label: 'Environnement',
    stats: [
      { label: 'Teintures naturelles', value: '89 %', icon: 'fa-leaf', tag: 'Objectif 100 %' },
      { label: 'Zéro déchet', value: '72 %', icon: 'fa-recycle', tag: 'Objectif 100 %' },
      { label: 'Emballage écologique', value: '95 %', icon: 'fa-box-open', tag: 'Objectif 100 %' },
      { label: 'Eau préservée', value: '2,5 M L', icon: 'fa-droplet', tag: 'par an' },
      { label: 'Carbone réduit', value: '-45 %', icon: 'fa-wind', tag: 'vs 2023' },
      { label: 'Certifications éco', value: '156', icon: 'fa-trophy', tag: 'produits' }
    ]
  }
}

const COUNTRIES = [
  { country: 'Sénégal', artisans: 324, revenue: 450, users: 5800 },
  { country: 'Ghana', artisans: 287, revenue: 380, users: 4200 },
  { country: 'Mali', artisans: 195, revenue: 290, users: 2800 },
  { country: 'Côte d\'Ivoire', artisans: 156, revenue: 220, users: 2100 },
  { country: 'Afrique du Sud', artisans: 176, revenue: 310, users: 3200 },
  { country: 'Cameroun', artisans: 142, revenue: 180, users: 1800 },
  { country: 'Égypte', artisans: 98, revenue: 95, users: 1200 },
  { country: 'Éthiopie', artisans: 87, revenue: 75, users: 950 }
]

const CERTS = [
  { name: 'Fairtrade certifié', count: 234, icon: 'fa-circle-check' },
  { name: 'Biologique certifié', count: 189, icon: 'fa-leaf' },
  { name: 'Blockchain vérifiée', count: 567, icon: 'fa-link' },
  { name: 'Guilde des artisans', count: 445, icon: 'fa-user-group' },
  { name: 'Qualité ISO', count: 123, icon: 'fa-file-lines' },
  { name: 'Patrimoine UNESCO', count: 34, icon: 'fa-landmark' }
]

export default function ImpactDashboardPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('overall')
  const data = METRICS[selected]

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">IMPACT</span>
          <h1>Tableau de bord d'impact</h1>
          <div className="page-hero__rule"></div>
          <p>Mesurez notre impact social, économique et environnemental</p>
        </div>
      </section>

      <div className="container">
        <div className="impact-tabs">
          {Object.entries(METRICS).map(([key, m]) => (
            <button key={key} className={`region-tab ${selected === key ? 'is-active' : ''}`} onClick={() => setSelected(key)}>
              {m.label}
            </button>
          ))}
        </div>

        <section className="section-band" style={{ paddingTop: 24 }}>
          <h2 className="section-heading">{data.title}</h2>
          <div className="impact-cards">
            {data.stats.map((s, idx) => (
              <div key={idx} className="impact-stat">
                <div className="impact-stat__top">
                  <span className="impact-stat__icon"><i className={`fa-solid ${s.icon}`}></i></span>
                  <span className="impact-stat__tag">{s.tag}</span>
                </div>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band section-band--soft" style={{ borderRadius: 0 }}>
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-heading">Répartition par pays</h2>
            <table className="impact-table" style={{ marginTop: 32 }}>
              <thead>
                <tr>
                  <th>Pays</th>
                  <th>Artisans</th>
                  <th>Revenu</th>
                  <th>Utilisateurs</th>
                </tr>
              </thead>
              <tbody>
                {COUNTRIES.map((r, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{r.country}</td>
                    <td className="num">{r.artisans}</td>
                    <td className="rev">{r.revenue} K€</td>
                    <td>{r.users.toLocaleString('fr-FR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Certifications et labels</h2>
          <div className="cert-cards" style={{ marginTop: 32 }}>
            {CERTS.map((c, idx) => (
              <div key={idx} className="cert-card">
                <i className={`fa-solid ${c.icon}`}></i>
                <h3>{c.name}</h3>
                <b>{c.count}</b>
                <p>produits certifiés</p>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Faites partie de notre mouvement</h2>
          <p>Rejoignez nos 1 265 artisans et créez un impact positif en Afrique.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/register')}>
            Commencer maintenant <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
