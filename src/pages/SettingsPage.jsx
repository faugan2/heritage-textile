import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'

const PRIVACY = [
  { value: 'private', label: 'Privé' },
  { value: 'friends', label: 'Amis uniquement' },
  { value: 'public', label: 'Public' }
]

export default function SettingsPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotions: false,
    privacyLevel: 'private'
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'her_users', user.uid))
          if (userDoc.exists() && userDoc.data().settings) {
            setSettings(userDoc.data().settings)
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
      setLoading(false)
    }

    fetchUserData()
  }, [user])

  const handleSaveSettings = async () => {
    setSaving(true)
    setSaved(false)
    try {
      await updateDoc(doc(db, 'her_users', user.uid), {
        settings,
        updatedAt: new Date().toISOString(),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch (error) {
      console.error('Error updating settings:', error)
    }
    setSaving(false)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const toggle = key => setSettings({ ...settings, [key]: !settings[key] })

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <button className="page-back" onClick={() => navigate('/account')}>
            <i className="fa-solid fa-arrow-left"></i> Retour au compte
          </button>
          <span className="tag">PARAMÈTRES</span>
          <h1>Paramètres</h1>
          <div className="page-hero__rule"></div>
          <p>Gérez vos préférences et votre sécurité</p>
        </div>
      </section>

      <div className="container" style={{ padding: '48px 0 64px', maxWidth: 820 }}>
        {loading ? (
          <p className="muted" style={{ textAlign: 'center' }}>Chargement…</p>
        ) : (
          <>
            <section className="panel">
              <h3><i className="fa-solid fa-bell"></i> Notifications</h3>
              <label className="check-line">
                <input type="checkbox" checked={settings.emailNotifications} onChange={() => toggle('emailNotifications')} />
                <div><b>Notifications par e-mail</b><span>Recevez les mises à jour importantes</span></div>
              </label>
              <label className="check-line">
                <input type="checkbox" checked={settings.orderUpdates} onChange={() => toggle('orderUpdates')} />
                <div><b>Mises à jour de commandes</b><span>Suivi en temps réel de vos commandes</span></div>
              </label>
              <label className="check-line">
                <input type="checkbox" checked={settings.promotions} onChange={() => toggle('promotions')} />
                <div><b>Offres promotionnelles</b><span>Recevez nos meilleures offres</span></div>
              </label>
            </section>

            <section className="panel">
              <h3><i className="fa-solid fa-earth-africa"></i> Confidentialité</h3>
              <p className="muted" style={{ marginBottom: 14 }}>Qui peut voir votre profil ?</p>
              {PRIVACY.map(p => (
                <label key={p.value} className="radio-line">
                  <input
                    type="radio"
                    name="privacy"
                    value={p.value}
                    checked={settings.privacyLevel === p.value}
                    onChange={e => setSettings({ ...settings, privacyLevel: e.target.value })}
                  />
                  {p.label}
                </label>
              ))}
            </section>

            <section className="panel">
              <h3><i className="fa-solid fa-lock"></i> Sécurité</h3>
              <div className="btn-line">
                <button className="btn-ghost-line">Changer le mot de passe</button>
                <button className="btn-ghost-line">Vérification en deux étapes</button>
              </div>
            </section>

            <div className="btn-line" style={{ marginBottom: 32 }}>
              <button className="btn btn--yellow" onClick={handleSaveSettings} disabled={saving} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                {saving ? 'Enregistrement…' : saved ? 'Paramètres enregistrés' : 'Enregistrer les paramètres'}
              </button>
            </div>

            <section className="acc-logout" style={{ marginTop: 0, borderTop: '1px solid var(--border)', paddingTop: 28 }}>
              <button onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i> Déconnexion
              </button>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
