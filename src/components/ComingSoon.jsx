import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Checkout.css'

export default function ComingSoon({ tag, title, subtitle, icon = 'fa-screwdriver-wrench', children, backTo = '/', backLabel = "Retour à l'accueil" }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">{tag}</span>
          <h1>{title}</h1>
          <div className="page-hero__rule"></div>
          <p>{subtitle}</p>
        </div>
      </section>
      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="empty-state">
          <div className="confirm__icon" style={{ background: 'var(--cream)', color: 'var(--orange)' }}>
            <i className={`fa-solid ${icon}`}></i>
          </div>
          {children}
          <Link to={backTo} className="btn btn--yellow" style={{ marginTop: 20 }}>
            {backLabel} <i className="fa-solid fa-arrow-right ico"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
