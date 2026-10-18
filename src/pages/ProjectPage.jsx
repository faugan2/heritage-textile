import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Pillars.css'
import '../styles/pages/Info.css'

const MISSION = [
  'Valoriser les textiles traditionnels africains.',
  'Donner une visibilité mondiale aux artisans.',
  'Favoriser un commerce éthique et transparent.',
  'Préserver le patrimoine culturel africain.',
  'Créer des opportunités économiques pour les communautés locales.'
]

const VALUES = [
  { icon: 'fa-circle-check', title: 'Authenticité' },
  { icon: 'fa-eye', title: 'Transparence' },
  { icon: 'fa-lightbulb', title: 'Innovation' },
  { icon: 'fa-people-group', title: 'Inclusion économique' },
  { icon: 'fa-leaf', title: 'Développement durable' },
  { icon: 'fa-landmark', title: 'Préservation culturelle' },
  { icon: 'fa-shield-halved', title: 'Éthique' },
  { icon: 'fa-scale-balanced', title: 'Respect des principes de la Charia' }
]

const OBJECTIVES = [
  { icon: 'fa-book-open', title: 'Préservation', desc: 'Sauvegarder plus de 100 traditions textiles africaines d\'ici 2027' },
  { icon: 'fa-arrow-trend-up', title: 'Impact économique', desc: 'Générer 5 M€ de revenus équitables pour les artisans' },
  { icon: 'fa-users', title: 'Communauté', desc: 'Soutenir plus de 500 artisans et leurs familles' },
  { icon: 'fa-shield-halved', title: 'Transparence', desc: 'La blockchain pour une traçabilité à 100 % des produits' }
]

const BILAN = [
  { label: 'Nombre d\'artisans', value: '450+', trend: '+120 % sur un an' },
  { label: 'Nombre de boutiques', value: '120+', trend: '+30 % sur un an' },
  { label: 'Nombre d\'utilisateurs', value: '20 K+', trend: '+150 % sur un an' },
  { label: 'Nombre d\'investisseurs', value: '500+', trend: '+40 % sur un an' },
  { label: 'Nombre d\'actionnaires', value: '40+', trend: '+10 nouveaux' },
  { label: 'Montants générés', value: '2,3 M€', trend: '+85 % sur un an' },
  { label: 'Impact social', value: '1 265 familles', trend: '+45 % sur un an' }
]

export default function ProjectPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">PROJET</span>
          <h1>Projet VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Valoriser le patrimoine textile : notre mission pour préserver et promouvoir les textiles africains</p>
        </div>
      </section>

      <div className="container">
        <div className="two-col" style={{ marginTop: 48, alignItems: 'stretch' }}>
          <div className="info-mission" style={{ margin: 0, maxWidth: 'none' }}>
            <h2>Notre mission</h2>
            <ul className="resp-list">
              {MISSION.map((m, idx) => (
                <li key={idx}><i className="fa-solid fa-circle-check"></i>{m}</li>
              ))}
            </ul>
          </div>
          <div className="info-mission" style={{ margin: 0, maxWidth: 'none' }}>
            <h2>Notre vision</h2>
            <p>Faire de VPTT la première plateforme mondiale du patrimoine africain, de l'artisanat, de l'innovation, de la finance éthique et du commerce culturel.</p>
          </div>
        </div>

        <section className="section-band">
          <h2 className="section-heading">Nos valeurs</h2>
          <div className="check-rows" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginTop: 32 }}>
            {VALUES.map((v, idx) => (
              <div key={idx} className="check-row" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <i className={`fa-solid ${v.icon}`} style={{ fontSize: '1.8rem' }}></i>
                <h3>{v.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Nos objectifs</h2>
          <div className="benefit-cards" style={{ marginTop: 32, gridTemplateColumns: 'repeat(2,1fr)' }}>
            {OBJECTIVES.map((o, idx) => (
              <div key={idx} className="benefit" style={{ textAlign: 'left', display: 'flex', gap: 18 }}>
                <i className={`fa-solid ${o.icon}`} style={{ margin: 0, flexShrink: 0 }}></i>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Transparence et bilan</h2>
          <div className="check-rows" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginTop: 32 }}>
            {BILAN.map((b, idx) => (
              <div key={idx} className="check-row" style={{ flexDirection: 'column', textAlign: 'center' }}>
                <b style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--green-dark)' }}>{b.value}</b>
                <h3>{b.label}</h3>
                <p style={{ color: 'var(--green)', fontWeight: 600 }}>{b.trend}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="info-contact-card" style={{ marginBottom: 64 }}>
          <h2>Devenir partenaire</h2>
          <p>Rejoignez notre mouvement pour préserver le patrimoine textile africain et créer un impact positif. Que vous soyez artisan, investisseur ou passionné, il y a une place pour vous.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn--yellow" onClick={() => navigate('/contact')}>
              Nous contacter <i className="fa-solid fa-arrow-right ico"></i>
            </button>
            <button className="btn btn--green" onClick={() => navigate('/products')}>
              Découvrir nos produits <i className="fa-solid fa-arrow-right ico"></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
