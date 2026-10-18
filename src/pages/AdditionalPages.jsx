import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'
import '../styles/pages/Checkout.css'

function SimplePageHero({ tag, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="tag">{tag}</span>
        <h1>{title}</h1>
        <div className="page-hero__rule"></div>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

// Wishlist Page
export function WishlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimplePageHero tag="FAVORIS" title="Ma liste de souhaits" subtitle="Retrouvez les produits que vous souhaitez acheter plus tard" />
      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="empty-state">
          <div className="confirm__icon" style={{ background: 'var(--cream)', color: 'var(--orange)' }}>
            <i className="fa-regular fa-heart"></i>
          </div>
          <h3>Votre liste de souhaits est vide</h3>
          <p>Ajoutez des produits en cliquant sur le cœur pour les retrouver ici.</p>
          <Link to="/products" className="btn btn--yellow">
            Découvrir la boutique <i className="fa-solid fa-arrow-right ico"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Subscriptions Page
export function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimplePageHero tag="ABONNEMENTS" title="Mes abonnements" subtitle="Gérez les abonnements et alertes qui vous intéressent" />
      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="empty-state">
          <div className="confirm__icon" style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
            <i className="fa-regular fa-bell"></i>
          </div>
          <h3>Aucun abonnement actif</h3>
          <p>Suivez un artisan ou une collection pour recevoir ses nouveautés.</p>
          <Link to="/our-creators" className="btn btn--yellow">
            Voir les artisans <i className="fa-solid fa-arrow-right ico"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Reviews Page
export function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimplePageHero tag="AVIS" title="Mes avis produits" subtitle="Partagez votre expérience sur les créations achetées" />
      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="empty-state">
          <div className="confirm__icon" style={{ background: 'var(--yellow)', color: 'var(--navy)' }}>
            <i className="fa-solid fa-star"></i>
          </div>
          <h3>Aucun avis pour le moment</h3>
          <p>Vos avis apparaîtront ici après vos achats.</p>
          <Link to="/account/orders" className="btn btn--yellow">
            Voir mes commandes <i className="fa-solid fa-arrow-right ico"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Artisan Profile (Public)
export function ArtisanProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <SimplePageHero tag="ARTISAN" title="Profil artisan" subtitle="Cette page est en cours de préparation" />
      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="empty-state">
          <p>Profil artisan en développement.</p>
        </div>
      </div>
    </div>
  )
}
