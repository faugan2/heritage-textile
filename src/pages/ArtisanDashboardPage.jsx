import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Dashboard.css'

const STATS = [
  { label: 'Produits', value: '24', icon: 'fa-box-open', bg: '#dbeafe', color: '#2563eb' },
  { label: 'Ventes', value: '156', icon: 'fa-chart-line', bg: '#dcfce7', color: '#059669' },
  { label: 'Abonnés', value: '1 250', icon: 'fa-users', bg: '#f3e8ff', color: '#7c3aed' },
  { label: 'Note moyenne', value: '4,8 / 5', icon: 'fa-star', bg: '#fff8e6', color: '#8a5a00' }
]

const LINKS = [
  { to: '/artisan/products', title: 'Mes produits', text: 'Gérez vos produits et stocks', icon: 'fa-box-open' },
  { to: '/artisan/orders', title: 'Commandes', text: 'Suivi des commandes reçues', icon: 'fa-bag-shopping' },
  { to: '/artisan/stats', title: 'Statistiques', text: 'Analyse de vos ventes', icon: 'fa-chart-column' },
  { to: '/artisan/payout', title: 'Paiements', text: 'Gestion de vos revenus', icon: 'fa-credit-card' }
]

export default function ArtisanDashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ESPACE ARTISAN</span>
          <h1>Tableau de bord</h1>
          <div className="page-hero__rule"></div>
          <p>Suivez vos ventes, vos produits et vos revenus</p>
        </div>
      </section>

      <div className="container" style={{ padding: '48px 0 64px' }}>
        <div className="dash-stats">
          {STATS.map(s => (
            <div key={s.label} className="dash-stat">
              <div className="dash-stat__icon" style={{ background: s.bg, color: s.color }}>
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <span>{s.label}</span>
              <b>{s.value}</b>
            </div>
          ))}
        </div>

        <div className="dash-links">
          {LINKS.map(l => (
            <Link key={l.to} to={l.to} className="dash-link">
              <div>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </div>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
