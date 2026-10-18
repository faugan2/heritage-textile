import { useParams, useNavigate } from 'react-router-dom'
import { getCountry } from '../data/countries'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/AfricaCountry.css'

export default function AfricaCountryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const country = getCountry(parseInt(id))

  if (!country) {
    return (
      <div className="container country-missing">
        <h1>Pays introuvable</h1>
        <p>Ce pays n'est pas encore présent sur VPTT.</p>
        <button className="btn btn--yellow" onClick={() => navigate('/africa')}>
          Voir tous les pays <i className="fa-solid fa-arrow-right ico"></i>
        </button>
      </div>
    )
  }

  const statistics = [
    { icon: 'fa-person-dress', label: 'Femmes artisans', value: country.statistics.womenArtisans },
    { icon: 'fa-graduation-cap', label: 'Jeunes engagés', value: country.statistics.youthEngaged },
    { icon: 'fa-box', label: 'Production par mois', value: country.statistics.monthlyProduction },
    { icon: 'fa-coins', label: 'Revenu moyen', value: country.statistics.avgIncome },
    { icon: 'fa-user-graduate', label: 'Filles éduquées', value: country.statistics.femalesEducated }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="country-hero">
        <div className="container">
          <button className="page-back" onClick={() => navigate('/africa')}>
            <i className="fa-solid fa-arrow-left"></i> Retour à l'expansion africaine
          </button>

          <div className="country-hero__grid">
            <div>
              <span className="country-hero__code">{country.code}</span>
              <h1>{country.name}</h1>
              <p className="country-hero__region">{country.region}</p>
              <p className="country-hero__desc">{country.description}</p>
              <div className="country-facts">
                <p><b>Capitale :</b> {country.capital}</p>
                <p><b>Population :</b> {country.population}</p>
                <p><b>Langues :</b> {country.languages}</p>
                <p><b>Climat :</b> {country.climate}</p>
                <p><b>Ambassadeur :</b> <span style={{ color: 'var(--orange)' }}>{country.ambassador}</span></p>
              </div>
            </div>

            <div className="country-kpis">
              <div className="country-kpi"><b>{country.artisans}</b><span>Artisans</span></div>
              <div className="country-kpi"><b>{country.products}</b><span>Produits</span></div>
              <div className="country-kpi"><b>{country.users.toLocaleString('fr-FR')}</b><span>Utilisateurs</span></div>
              <div className="country-kpi"><b>{country.revenue}</b><span>Impact économique</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container country-section">
        <h2 className="section-heading">Artisans vedettes</h2>
        <div className="artisan-cards">
          {country.topArtisans.map((artisan, idx) => (
            <article key={idx} className="artisan-card">
              <div className="artisan-card__avatar"><i className="fa-solid fa-user"></i></div>
              <h3>{artisan.name}</h3>
              <p>{artisan.specialty}</p>
              <div className="artisan-card__foot">
                <span><b>{artisan.products}</b> produits</span>
                <span><i className="fa-solid fa-star"></i> {artisan.rating}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container country-section" style={{ paddingBottom: 48 }}>
        <h2 className="section-heading">Impact social mesuré</h2>
        <div className="impact-cards">
          {statistics.map((stat, idx) => (
            <div key={idx} className="impact-card">
              <i className={`fa-solid ${stat.icon}`}></i>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container country-section" style={{ paddingBottom: 48 }}>
        <h2 className="section-heading">Jalons de croissance</h2>
        <div className="timeline">
          {country.milestones.map((milestone, idx) => (
            <div key={idx} className="timeline__item">
              <span className="timeline__dot"></span>
              <div>
                <p className="timeline__date">{milestone.date}</p>
                <p className="timeline__event">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="country-cta">
          <h2>Découvrez les artisans de {country.name}</h2>
          <p>Explorez les produits uniques créés par nos artisans locaux.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/products')}>
            Voir les produits <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </div>
      </section>
    </div>
  )
}
