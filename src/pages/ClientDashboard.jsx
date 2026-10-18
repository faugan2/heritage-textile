import { useAuth } from '../context/AuthContext'
import '../styles/dashboards.css'
import { useNavigate } from 'react-router-dom'

export default function ClientDashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="dashboard client-dashboard">
      <h1>Mon Compte</h1>
      <p>Bienvenue, {user?.displayName || user?.email}!</p>
      
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <h3>📋 Mes Commandes</h3>
          <p>Historique de mes achats</p>
          <button onClick={() => navigate('/client/orders')}>Voir mes commandes</button>
        </section>

        <section className="dashboard-card">
          <h3>❤️ Ma Wishlist</h3>
          <p>Produits à surveiller</p>
          <button onClick={() => navigate('/client/wishlist')}>Voir ma wishlist</button>
        </section>

        <section className="dashboard-card">
          <h3>👤 Mes Données</h3>
          <p>Gestion du profil</p>
          <button onClick={() => navigate('/client/profile')}>Éditer mon profil</button>
        </section>

        <section className="dashboard-card">
          <h3>🏠 Adresses</h3>
          <p>Mes adresses de livraison</p>
          <button onClick={() => navigate('/client/addresses')}>Gérer mes adresses</button>
        </section>
      </div>
    </div>
  )
}
