import { useAuth } from '../context/AuthContext'
import '../styles/dashboards.css'
import { useNavigate } from 'react-router-dom'

export default function ArtisanDashboard() {
  const { user, userRole } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="dashboard artisan-dashboard">
      <h1>Tableau de bord Artisan</h1>
      <p>Bienvenue, {user?.displayName || user?.email}!</p>
      
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <h3>📦 Mes Produits</h3>
          <p>Gérez vos créations</p>
          <button onClick={() => navigate('/artisan/products')}>Voir mes produits</button>
        </section>

        <section className="dashboard-card">
          <h3>📊 Mes Ventes</h3>
          <p>Suivi des commandes</p>
          <button onClick={() => navigate('/artisan/sales')}>Voir mes ventes</button>
        </section>

        <section className="dashboard-card">
          <h3>👤 Mon Profil</h3>
          <p>Gestion de mon magasin</p>
          <button onClick={() => navigate('/artisan/profile')}>Éditer mon profil</button>
        </section>

        <section className="dashboard-card">
          <h3>📈 Statistiques</h3>
          <p>Analyse de mes performances</p>
          <button onClick={() => navigate('/artisan/analytics')}>Voir les stats</button>
        </section>
      </div>
    </div>
  )
}
