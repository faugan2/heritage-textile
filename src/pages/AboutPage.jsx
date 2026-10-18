import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Info.css'

const VALUES = [
  { icon: 'fa-heart', title: 'Passion pour la mode africaine', desc: 'Nous célébrons la beauté, la diversité et l\'authenticité de la mode africaine.' },
  { icon: 'fa-earth-africa', title: 'Portée mondiale', desc: 'Nous relions les artisans locaux aux clients du monde entier.' },
  { icon: 'fa-people-group', title: 'Soutien aux artisans', desc: 'Nous donnons aux créateurs les outils pour atteindre un marché mondial.' },
  { icon: 'fa-bolt', title: 'Innovation', desc: 'Une plateforme moderne et accessible pour le commerce de la mode africaine.' }
]

const STATS = [
  { value: '500+', label: 'Produits uniques' },
  { value: '50+', label: 'Artisans partenaires' },
  { value: '10 K+', label: 'Clients satisfaits' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">À PROPOS</span>
          <h1>À propos de Heritage Textiles</h1>
          <div className="page-hero__rule"></div>
          <p>Heritage Textiles est plus qu'une plateforme de commerce en ligne. C'est un mouvement pour célébrer, promouvoir et vendre la mode africaine au monde entier.</p>
        </div>
      </section>

      <div className="container">
        <section className="info-mission">
          <h2>Notre mission</h2>
          <p>Permettre aux artisans et créateurs de mode africaine d'atteindre un marché mondial, en valorisant leur talent et en générant des revenus durables pour les communautés locales.</p>
          <p>Nous croyons que la mode africaine témoigne de la créativité, de la culture et de l'ingéniosité du continent. En facilitant l'accès à un marché international, nous soutenons l'entrepreneuriat local et la préservation des traditions.</p>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Nos valeurs</h2>
          <div className="benefit-cards" style={{ marginTop: 32 }}>
            {VALUES.map((v, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${v.icon}`}></i>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <div className="africa-stats">
            {STATS.map((s, idx) => (
              <div key={idx} className="africa-stat">
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Prêt à rejoindre le mouvement ?</h2>
          <p>Découvrez nos produits et soutenez les artisans africains.</p>
          <a href="/products" className="btn btn--yellow">
            Découvrir nos produits <i className="fa-solid fa-arrow-right ico"></i>
          </a>
        </section>
      </div>
    </div>
  )
}
