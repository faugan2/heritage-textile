import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Global.css'

const CONTINENTS = [
  { id: 1, name: 'Europe', icon: 'fa-earth-europe', status: 'Croissance', countries: 12, artisans: 450, revenue: '1,2 M€', market: 'Premium & éco-responsable' },
  { id: 2, name: 'Asie', icon: 'fa-earth-asia', status: 'Expansion', countries: 8, artisans: 380, revenue: '980 K€', market: 'Luxe & technologie' },
  { id: 3, name: 'Amériques', icon: 'fa-earth-americas', status: 'Actif', countries: 6, artisans: 320, revenue: '850 K€', market: 'Contemporain & artisanal' },
  { id: 4, name: 'Moyen-Orient', icon: 'fa-mosque', status: 'Croissance', countries: 5, artisans: 240, revenue: '620 K€', market: 'Halal & premium' },
  { id: 5, name: 'Océanie', icon: 'fa-earth-oceania', status: 'Lancement', countries: 3, artisans: 120, revenue: '280 K€', market: 'Durable & éthique' }
]

const STATUS_STYLE = {
  Actif: { background: '#eef7ef', color: '#14692b' },
  Expansion: { background: '#fff8e6', color: '#8a5a00' },
  Croissance: { background: '#fff8e6', color: '#8a5a00' },
  Lancement: { background: '#fff8e6', color: '#8a5a00' }
}

const STATS = [
  { icon: 'fa-earth-americas', value: '5', label: 'Continents' },
  { icon: 'fa-flag', value: '34', label: 'Pays' },
  { icon: 'fa-users', value: '1 510+', label: 'Artisans' },
  { icon: 'fa-chart-line', value: '3,93 M€', label: 'Revenus' },
  { icon: 'fa-handshake', value: '245', label: 'Partenaires' },
  { icon: 'fa-user', value: '45 K+', label: 'Utilisateurs' }
]

const PARTNERS = [
  { name: 'Semaines de la mode', icon: 'fa-shirt', count: 15, desc: 'Paris, Milan, New York, Tokyo' },
  { name: 'Pôles de création', icon: 'fa-palette', count: 28, desc: 'Centres créatifs mondiaux' },
  { name: 'Distributeurs', icon: 'fa-bag-shopping', count: 45, desc: 'Boutiques et grands magasins' },
  { name: 'Logistique', icon: 'fa-truck', count: 32, desc: 'Livraison internationale' },
  { name: 'Finance', icon: 'fa-credit-card', count: 24, desc: 'Paiements mondiaux' },
  { name: 'Médias', icon: 'fa-camera', count: 38, desc: 'Influenceurs et publications' }
]

const ROADMAP = [
  { q: 'Q4 2026', title: 'Europe de l\'Ouest', desc: 'Objectif : 500 artisans' },
  { q: 'Q1 2027', title: 'Asie du Sud-Est', desc: 'Objectif : 400 artisans' },
  { q: 'Q2 2027', title: 'Amériques', desc: 'Objectif : 350 artisans' },
  { q: 'Q3 2027', title: 'Moyen-Orient', desc: 'Objectif : 300 artisans' },
  { q: 'Q4 2027', title: 'Océanie', desc: 'Objectif : 150 artisans' },
  { q: 'Q1 2028', title: 'Hub mondial', desc: 'Objectif : 100 villes' },
  { q: 'Q2 2028', title: 'Logistique', desc: 'Livraison en 24 h' },
  { q: 'Q3 2028', title: 'Blockchain', desc: 'Traçabilité à 100 %' }
]

const CURRENCIES = ['EUR €', 'GBP £', 'USD $', 'JPY ¥', 'CNY ¥', 'INR ₹', 'AUD $', 'CAD $']
const LANGUAGES = ['Français', 'English', 'Español', 'Deutsch', '中文', '日本語', 'العربية', 'Português']

export default function GlobalExpansionPage() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(null)

  const visible = selectedId === null ? CONTINENTS : CONTINENTS.filter(c => c.id === selectedId)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">EXPANSION</span>
          <h1>Expansion mondiale</h1>
          <div className="page-hero__rule"></div>
          <p>VPTT est présent sur 5 continents, avec 34 pays partenaires et 1 510 artisans</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 40 }}>
        <div className="africa-stats">
          {STATS.map((stat, idx) => (
            <div key={idx} className="africa-stat">
              <i className={`fa-solid ${stat.icon}`}></i>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="continent-tabs">
          <button className={`continent-tab ${selectedId === null ? 'is-active' : ''}`} onClick={() => setSelectedId(null)}>
            Tous les continents
          </button>
          {CONTINENTS.map(c => (
            <button key={c.id} className={`continent-tab ${selectedId === c.id ? 'is-active' : ''}`} onClick={() => setSelectedId(c.id)}>
              {c.name}
            </button>
          ))}
        </div>

        <div className="continent-grid">
          {visible.map(c => (
            <article key={c.id} className="continent">
              <div className="continent__head">
                <i className={`fa-solid ${c.icon}`}></i>
              </div>
              <div className="continent__body">
                <h3 className="continent__name">{c.name}</h3>
                <p className="continent__count">{c.countries} pays</p>
                <span className="continent__status" style={STATUS_STYLE[c.status]}>{c.status}</span>
                <div className="continent__rows">
                  <div><span>Artisans</span><b>{c.artisans}</b></div>
                  <div><span>Revenus</span><b>{c.revenue}</b></div>
                </div>
                <p className="continent__market">{c.market}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="section-band section-band--soft" style={{ marginTop: 64 }}>
        <div className="container">
          <h2 className="section-heading">Partenaires stratégiques mondiaux</h2>
          <div className="partner-grid" style={{ marginTop: 32 }}>
            {PARTNERS.map((p, idx) => (
              <div key={idx} className="partner">
                <i className={`fa-solid ${p.icon}`}></i>
                <h3>{p.name}</h3>
                <b>{p.count}</b>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <h2 className="section-heading">Feuille de route mondiale 2026-2028</h2>
          <div className="roadmap" style={{ marginTop: 32 }}>
            {ROADMAP.map((item, idx) => (
              <div key={idx} className="roadmap__item">
                <p className="roadmap__q">{item.q}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band--soft">
        <div className="container two-col">
          <div>
            <h3>Multi-devise</h3>
            <p>Transactions en temps réel dans 28 devises majeures, avec conversion automatique.</p>
            <div className="chip-list">
              {CURRENCIES.map(c => <span key={c}>{c}</span>)}
            </div>
          </div>
          <div>
            <h3>Langues supportées</h3>
            <p>Interface disponible en 25 langues, avec traduction en temps réel.</p>
            <div className="chip-list">
              {LANGUAGES.map(l => <span key={l}>{l}</span>)}
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="impact-band" style={{ marginTop: 64 }}>
          <h2>Rejoignez le mouvement mondial</h2>
          <p>Devenez partenaire VPTT et accédez aux marchés mondiaux.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/partnerships')}>
            Voir les partenariats <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
