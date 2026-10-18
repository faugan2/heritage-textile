import { useAuth } from '../context/AuthContext'
import '../styles/dashboards.css'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="dashboard admin-dashboard">
      <h1>Tableau de Bord Admin</h1>
      <p>Bienvenue, {user?.displayName || user?.email}!</p>
      
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <h3>👥 Gestion des Utilisateurs</h3>
          <p>Gérez les clients et artisans</p>
          <button onClick={() => navigate('/admin/users')}>Voir les utilisateurs</button>
        </section>

        <section className="dashboard-card">
          <h3>📦 Gestion des Produits</h3>
          <p>Modérez tous les produits</p>
          <button onClick={() => navigate('/admin/products')}>Voir les produits</button>
        </section>

        <section className="dashboard-card">
          <h3>📊 Statistiques Globales</h3>
          <p>Données de la plateforme</p>
          <button onClick={() => navigate('/admin/analytics')}>Voir les stats</button>
        </section>

        <section className="dashboard-card">
          <h3>⚙️ Paramètres</h3>
          <p>Configuration de la plateforme</p>
          <button onClick={() => navigate('/admin/settings')}>Accéder aux paramètres</button>
        </section>

        <section className="dashboard-card">
          <h3>🔍 Modération</h3>
          <p>Contenu signalé</p>
          <button onClick={() => navigate('/admin/moderation')}>Voir les signalements</button>
        </section>

        <section className="dashboard-card">
          <h3>💰 Transactions</h3>
          <p>Historique des paiements</p>
          <button onClick={() => navigate('/admin/transactions')}>Voir les transactions</button>
        </section>
      </div>
    </div>
  )
}
