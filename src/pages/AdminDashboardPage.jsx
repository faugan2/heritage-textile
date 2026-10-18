import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Dashboard.css'

const STATS = [
  { label: 'Utilisateurs', value: '1 234', icon: 'fa-users', bg: '#dbeafe', color: '#2563eb' },
  { label: 'Commandes', value: '456', icon: 'fa-bag-shopping', bg: '#dcfce7', color: '#059669' },
  { label: 'Revenus', value: '12 450 €', icon: 'fa-chart-line', bg: '#f3e8ff', color: '#7c3aed' },
  { label: 'En attente', value: '23', icon: 'fa-triangle-exclamation', bg: '#fff8e6', color: '#8a5a00' }
]

const LINKS = [
  { to: '/admin/users', title: 'Gestion des utilisateurs', text: 'Gérez les utilisateurs et artisans', icon: 'fa-users' },
  { to: '/admin/products', title: 'Validation des produits', text: 'Validez les produits listés', icon: 'fa-box-open' },
  { to: '/admin/orders', title: 'Gestion des commandes', text: 'Suivi global des commandes', icon: 'fa-receipt' },
  { to: '/admin/content', title: 'Gestion du contenu', text: 'Validez articles et vidéos', icon: 'fa-file-lines' },
  { to: '/admin/analytics', title: 'Statistiques', text: 'Statistiques et rapports', icon: 'fa-chart-column' },
  { to: '/admin/security', title: 'Sécurité', text: 'Paramètres de sécurité', icon: 'fa-shield-halved' }
]

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ADMINISTRATION</span>
          <h1>Tableau de bord</h1>
          <div className="page-hero__rule"></div>
          <p>Vue d'ensemble de la plateforme VPTT</p>
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
