import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'

export default function ProfilePage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'her_users', user.uid))
          if (userDoc.exists()) {
            setUserData(userDoc.data())
            setDisplayName(userDoc.data().displayName || '')
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
      setLoading(false)
    }

    fetchUserData()
  }, [user])

  const handleSaveProfile = async () => {
    setSaving(true)
    try {
      await updateDoc(doc(db, 'her_users', user.uid), {
        displayName,
        updatedAt: new Date().toISOString(),
      })
      setUserData({ ...userData, displayName })
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
    setSaving(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <button className="page-back" onClick={() => navigate('/account')}>
            <i className="fa-solid fa-arrow-left"></i> Retour au compte
          </button>
          <span className="tag">PROFIL</span>
          <h1>Mon profil</h1>
          <div className="page-hero__rule"></div>
          <p>Gérez vos informations personnelles</p>
        </div>
      </section>

      <div className="container" style={{ padding: '48px 0 64px' }}>
        {loading ? (
          <p className="muted" style={{ textAlign: 'center' }}>Chargement…</p>
        ) : userData ? (
          <div className="two-col">
            <div className="panel">
              <h3><i className="fa-solid fa-user"></i> Informations</h3>
              <div className="field" style={{ marginBottom: 20 }}>
                <span style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--muted)', marginBottom: 4 }}>Nom</span>
                <b style={{ fontSize: '1.1rem', color: 'var(--navy)' }}>{userData.displayName || 'Non défini'}</b>
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <span style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--muted)', marginBottom: 4 }}>
                  <i className="fa-solid fa-envelope"></i> E-mail
                </span>
                <b style={{ color: 'var(--navy)' }}>{userData.email}</b>
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <span style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--muted)', marginBottom: 4 }}>
                  <i className="fa-solid fa-calendar-days"></i> Membre depuis
                </span>
                <b style={{ color: 'var(--navy)' }}>{userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('fr-FR') : 'N/A'}</b>
              </div>
            </div>

            <div className="panel">
              <h3><i className="fa-solid fa-pen"></i> {isEditing ? 'Modifier le profil' : 'Paramètres du profil'}</h3>
              {isEditing ? (
                <>
                  <div className="field">
                    <label htmlFor="profile-name">Nom complet</label>
                    <input id="profile-name" type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                  </div>
                  <div className="btn-line">
                    <button className="btn btn--yellow" onClick={handleSaveProfile} disabled={saving} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                      {saving ? 'Enregistrement…' : 'Enregistrer'}
                    </button>
                    <button className="btn-ghost-line" onClick={() => setIsEditing(false)}>Annuler</button>
                  </div>
                </>
              ) : (
                <>
                  <p className="muted" style={{ marginBottom: 20 }}>Mettez à jour votre nom affiché sur la plateforme.</p>
                  <button className="btn btn--yellow" onClick={() => setIsEditing(true)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Modifier le profil <i className="fa-solid fa-arrow-right ico"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <p className="muted" style={{ textAlign: 'center' }}>Impossible de charger le profil.</p>
        )}
      </div>
    </div>
  )
}
