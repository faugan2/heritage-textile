import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'

const MENU = [
  { icon: 'fa-user', label: 'Profil', description: 'Gérez vos informations personnelles', href: '/account/profile' },
  { icon: 'fa-box', label: 'Mes commandes', description: 'Historique et suivi de vos commandes', href: '/account/orders' },
  { icon: 'fa-heart', label: 'Mes favoris', description: 'Articles que vous avez sauvegardés', href: '/favorites' },
  { icon: 'fa-gear', label: 'Paramètres', description: 'Préférences et sécurité', href: '/account/settings' }
]

export default function AccountPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'her_users', user.uid))
          if (userDoc.exists()) {
            setUserData(userDoc.data())
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
      setLoading(false)
    }

    fetchUserData()
  }, [user])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">MON COMPTE</span>
          <h1>Bienvenue sur votre espace</h1>
          <div className="page-hero__rule"></div>
          <p>Gérez vos informations, vos commandes et vos préférences</p>
        </div>
      </section>

      <div className="container">
        <div className="acc-menu">
          {MENU.map((item, idx) => (
            <Link key={idx} to={item.href} className="acc-tile">
              <span className="acc-tile__icon"><i className={`fa-solid ${item.icon}`}></i></span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
              <i className="fa-solid fa-arrow-right acc-tile__arrow"></i>
            </Link>
          ))}
        </div>

        <div className="acc-logout">
          <button onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i> Déconnexion
          </button>
        </div>

        <section className="acc-info">
          <h2>Informations du compte</h2>
          {loading ? (
            <p className="acc-info__state">Chargement des données…</p>
          ) : userData ? (
            <div className="acc-info__grid">
              <div><span>E-mail</span><b>{userData.email || user?.email}</b></div>
              <div><span>Nom</span><b>{userData.displayName || 'Non défini'}</b></div>
              <div><span>Membre depuis</span><b>{userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('fr-FR') : 'Non disponible'}</b></div>
              <div><span>Rôle</span><b>{userData.role === 'user' ? 'Client' : userData.role}</b></div>
            </div>
          ) : (
            <p className="acc-info__state">Impossible de charger les données.</p>
          )}
        </section>
      </div>
    </div>
  )
}
