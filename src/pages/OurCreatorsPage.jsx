import { Link } from 'react-router-dom'
import { artisans } from '../data/artisans'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Creators.css'

export default function OurCreatorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ARTISANS</span>
          <h1>Nos artisans &amp; créateurs</h1>
          <div className="page-hero__rule"></div>
          <p>Découvrez les talents qui perpétuent les traditions textiles africaines</p>
        </div>
      </section>

      <div className="container">
        <div className="creators-grid">
          {artisans.map(artisan => (
            <article key={artisan.id} className="creator">
              <div className="creator__media">
                <img src={artisan.image} alt={artisan.name} />
              </div>

              <div className="creator__body">
                <h3 className="creator__name">{artisan.name}</h3>
                <p className="creator__place">
                  <i className="fa-solid fa-location-dot"></i> {artisan.city}, {artisan.country}
                </p>
                <p className="creator__spec">{artisan.specialty}</p>

                <div className="creator__stats">
                  <div>
                    <b>{artisan.followers}</b>
                    <span>Abonnés</span>
                  </div>
                  <div>
                    <b>{artisan.productsCount}</b>
                    <span>Produits</span>
                  </div>
                  <div>
                    <b className="creator__rating">
                      <i className="fa-solid fa-star"></i> {artisan.rating}
                    </b>
                    <span>({artisan.reviews} avis)</span>
                  </div>
                </div>

                <Link to={`/artisan/${artisan.id}`} className="creator__btn">
                  Voir la boutique <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="join-band">
          <h2>Vous êtes artisan ?</h2>
          <p>Rejoignez notre plateforme et partagez vos créations avec le monde. Développez votre activité et soutenez les traditions.</p>
          <Link to="/register" className="btn btn--yellow">
            Devenir créateur <i className="fa-solid fa-arrow-right ico"></i>
          </Link>
        </section>
      </div>
    </div>
  )
}
