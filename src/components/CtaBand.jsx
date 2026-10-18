import { Link } from 'react-router-dom'
import '../styles/pages/TemplateHome.css'

const ctaMotif = '/images/cta-motif.jpg'
const ctaCarte = '/images/cta-carte.jpg'

// Bandeau d'appel à l'action du template (accueil et contact).
// reveal : animation d'apparition, gérée par l'accueil uniquement.
export default function CtaBand({ reveal = false }) {
  return (
    <section className="container">
      <div className={`cta ${reveal ? 'reveal' : ''}`}>
        <div className="cta__pattern" aria-hidden="true" style={{ background: `url(${ctaMotif}) center/cover no-repeat` }}></div>
        <div className="cta__text">
          <h2>Votre boutique, votre identité, votre succès.</h2>
          <p>Faites découvrir le patrimoine textile africain au monde entier !</p>
        </div>
        <Link to="/register" className="btn btn--yellow">
          Rejoindre VPTT <i className="fa-solid fa-arrow-right ico"></i>
        </Link>
        <img className="cta__map" src={ctaCarte} alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
