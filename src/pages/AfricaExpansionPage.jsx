import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { COUNTRIES } from '../data/countries'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'


const REGIONS = [
  { id: 'all', label: 'Tous les pays', region: null },
  { id: 'west', label: 'Afrique de l\'Ouest', region: 'Afrique de l\'Ouest' },
  { id: 'central', label: 'Afrique Centrale', region: 'Afrique Centrale' },
  { id: 'north', label: 'Afrique du Nord', region: 'Afrique du Nord' },
  { id: 'south', label: 'Afrique Australe', region: 'Afrique Australe' },
  { id: 'east', label: 'Afrique de l\'Est', region: 'Afrique de l\'Est' }
]

const STATS = [
  { icon: 'fa-earth-africa', value: '8', label: 'Pays partenaires' },
  { icon: 'fa-users', value: '1 265', label: 'Artisans' },
  { icon: 'fa-box', value: '5 320', label: 'Produits' },
  { icon: 'fa-chart-line', value: '2,4 M€', label: 'Impact économique' },
  { icon: 'fa-user', value: '20 K+', label: 'Utilisateurs' }
]

const ROADMAP = [
  { q: 'Q4 2026', title: 'Consolidation', desc: '5 pays actifs, 600+ artisans' },
  { q: 'Q1 2027', title: 'Expansion Est', desc: 'Kenya, Tanzanie, Ouganda' },
  { q: 'Q2 2027', title: 'Marché du Nord', desc: 'Maroc, Tunisie, Algérie' },
  { q: 'Q3 2027', title: 'Hub Austral', desc: 'Afrique du Sud, Zimbabwe' }
]

const IMPACT = [
  { icon: 'fa-people-roof', value: '1 265', label: 'Familles soutenues' },
  { icon: 'fa-graduation-cap', value: '450+', label: 'Filles éduquées' },
  { icon: 'fa-house', value: '340', label: 'Maisons améliorées' }
]

export default function AfricaExpansionPage() {
  const navigate = useNavigate()
  const [selectedRegion, setSelectedRegion] = useState('all')

  const filtered = selectedRegion === 'all'
    ? COUNTRIES
    : COUNTRIES.filter(c => c.region === REGIONS.find(r => r.id === selectedRegion).region)

  const countFor = r => r.region === null ? COUNTRIES.length : COUNTRIES.filter(c => c.region === r.region).length

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">EXPANSION</span>
          <h1>Expansion africaine</h1>
          <div className="page-hero__rule"></div>
          <p>VPTT est présent dans 8 pays africains, avec plus de 1 200 artisans et un impact social mesurable</p>
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

        <div className="region-tabs">
          {REGIONS.map(r => (
            <button
              key={r.id}
              className={`region-tab ${selectedRegion === r.id ? 'is-active' : ''}`}
              onClick={() => setSelectedRegion(r.id)}
            >
              {r.label}<span>({countFor(r)})</span>
            </button>
          ))}
        </div>

        <div className="country-grid">
          {filtered.map(country => (
            <article key={country.id} className="country" onClick={() => navigate(`/africa/${country.id}`)}>
              <div className="country__head">
                <span className="country__code">{country.code}</span>
                <span className={`country__status ${country.status === 'Croissance' ? 'is-growing' : ''}`}>
                  {country.status}
                </span>
              </div>

              <div className="country__body">
                <h3 className="country__name">{country.name}</h3>
                <p className="country__region">{country.region}</p>

                <div className="country__rows">
                  <div><span>Artisans</span><b>{country.artisans}</b></div>
                  <div><span>Produits</span><b>{country.products}</b></div>
                  <div><span>Impact</span><b>{country.impact}</b></div>
                </div>

                <p className="country__specialty">{country.specialty}</p>
                <p className="country__ambassador">Ambassadeur : <b>{country.ambassador}</b></p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="section-band section-band--soft" style={{ marginTop: 64 }}>
        <div className="container">
          <h2 className="section-heading">Ambassadeurs VPTT en Afrique</h2>
          <p className="section-lead">
            Nos ambassadeurs locaux dans chaque pays développent les partenariats et soutiennent nos artisans dans leur croissance.
          </p>
          <div className="btn-row">
            <button className="btn btn--green" onClick={() => navigate('/ambassadors')}>
              Voir tous les ambassadeurs <i className="fa-solid fa-arrow-right ico"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <h2 className="section-heading">Feuille de route de croissance 2026-2027</h2>
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

      <div className="container">
        <section className="impact-band">
          <h2>Impact social mesuré</h2>
          <p>Chaque partenariat crée des emplois, préserve la culture et améliore les conditions de vie.</p>
          <div className="impact-grid">
            {IMPACT.map((item, idx) => (
              <div key={idx}>
                <i className={`fa-solid ${item.icon}`}></i>
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <button className="btn btn--yellow">
            Lire le rapport d'impact complet <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
