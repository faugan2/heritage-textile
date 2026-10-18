import { useParams, useNavigate, Link } from 'react-router-dom'
import { getArtisan } from '../data/artisans'
import { allProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Creators.css'
import '../styles/pages/ArtisanProfile.css'

export default function ArtisanProfilePageV2() {
  const { id } = useParams()
  const navigate = useNavigate()
  const artisan = getArtisan(parseInt(id))

  if (!artisan) {
    return (
      <div className="container artisan-missing">
        <h1>Artisan introuvable</h1>
        <p>Cet artisan n'existe pas ou n'est plus disponible.</p>
        <Link to="/our-creators" className="btn btn--yellow">
          Voir tous les artisans <i className="fa-solid fa-arrow-right ico"></i>
        </Link>
      </div>
    )
  }

  const products = allProducts.filter(p => p.artisanId === artisan.id)
  const yearsActive = new Date().getFullYear() - artisan.founded

  return (
    <div className="min-h-screen bg-white">
      <section className="artisan-hero">
        <div className="container artisan-hero__inner">
          <button className="page-back" onClick={() => navigate('/our-creators')}>
            <i className="fa-solid fa-arrow-left"></i> Retour aux artisans
          </button>

          <div className="artisan-hero__grid">
            <div className="artisan-hero__photo">
              <img src={artisan.image} alt={artisan.name} />
            </div>

            <div className="artisan-hero__info">
              <span className="tag">ARTISAN CERTIFIÉ</span>
              <h1>{artisan.name}</h1>
              <p className="artisan-hero__place">
                <i className="fa-solid fa-location-dot"></i> {artisan.city}, {artisan.country}
              </p>
              <p className="artisan-hero__spec">{artisan.specialty}</p>

              <div className="artisan-rating">
                <span className="artisan-rating__stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`${i < Math.round(artisan.rating) ? 'fa-solid' : 'fa-regular'} fa-star`}></i>
                  ))}
                </span>
                <b>{artisan.rating}</b>
                <span>({artisan.reviews} avis)</span>
              </div>

              <p className="artisan-hero__desc">{artisan.description}</p>

              <div className="artisan-kpis">
                <div>
                  <b>{artisan.productsCount}+</b>
                  <span>Produits</span>
                </div>
                <div>
                  <b>{artisan.followers.toLocaleString('fr-FR')}</b>
                  <span>Abonnés</span>
                </div>
                <div>
                  <b>{yearsActive}</b>
                  <span>Années d'activité</span>
                </div>
              </div>

              <div className="artisan-hero__actions">
                <button className="btn btn--yellow" onClick={() => navigate('/contact')}>
                  Nous contacter <i className="fa-solid fa-arrow-right ico"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container artisan-section">
        <div className="artisan-two">
          <div>
            <h2 className="section-heading">À propos</h2>
            <p className="artisan-text">{artisan.about}</p>
          </div>
          <div>
            <h2 className="section-heading">Certifications</h2>
            <ul className="artisan-certs">
              {artisan.certifications.map((cert, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-circle-check"></i> {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container artisan-section">
        <h2 className="section-heading">Impact &amp; statistiques</h2>
        <div className="artisan-stats">
          {artisan.stats.map((stat, idx) => (
            <div key={idx} className="artisan-stat">
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {products.length > 0 && (
        <section className="container artisan-section">
          <h2 className="section-heading">Produits de {artisan.name.split(' ')[0]}</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container artisan-cta">
        <h2>Découvrez toute la boutique de {artisan.name}</h2>
        <p>Visitez sa boutique pour découvrir sa collection complète de produits authentiques et traditionnels.</p>
        <button className="btn btn--yellow" onClick={() => navigate('/products')}>
          Voir tous les produits <i className="fa-solid fa-arrow-right ico"></i>
        </button>
      </section>
    </div>
  )
}
