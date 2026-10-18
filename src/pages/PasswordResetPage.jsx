import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../config/firebase'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import '../styles/template/base.css'
import '../styles/pages/Auth.css'

const BRAND_IMAGE = '/images/cta-motif.jpg'

export default function PasswordResetPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleReset = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setLoading(true)

    if (!email) {
      setError('Veuillez entrer votre adresse email')
      setLoading(false)
      return
    }

    try {
      await sendPasswordResetEmail(auth, email)
      setSuccess(true)
      setEmail('')

      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Aucun compte trouvé avec cette adresse email')
      } else if (error.code === 'auth/invalid-email') {
        setError('Adresse email invalide')
      } else {
        setError('Erreur lors de l\'envoi du lien de réinitialisation')
      }
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <TemplateHeader />

      <main className="auth-main">
        <div className="container">
          <div className="auth-card">
            <div className="auth-card__brand" style={{ '--brand-image': `url(${BRAND_IMAGE})` }}>
              <span className="tag">MOT DE PASSE</span>
              <h1>Réinitialiser votre mot de passe</h1>
              <p>Saisissez votre adresse e-mail. Nous vous enverrons un lien pour choisir un nouveau mot de passe.</p>
            </div>

            <div className="auth-card__form">
              <h2>Mot de passe oublié</h2>
              <p>Entrez votre e-mail pour recevoir un lien de réinitialisation</p>

              {success && (
                <div className="auth-success">
                  <p><strong>E-mail envoyé avec succès.</strong></p>
                  <p>Vérifiez votre boîte de réception. Vous serez redirigé vers la connexion dans quelques secondes.</p>
                </div>
              )}

              {!success && (
                <form onSubmit={handleReset}>
                  <div className="field">
                    <label htmlFor="reset-email">Adresse e-mail</label>
                    <input
                      id="reset-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      disabled={loading}
                    />
                    <p className="auth-hint">Nous vous enverrons un lien pour réinitialiser votre mot de passe</p>
                  </div>

                  {error && <div className="auth-error">{error}</div>}

                  <button type="submit" disabled={loading} className="btn btn--yellow auth-submit">
                    {loading ? 'Envoi en cours...' : 'Envoyer le lien'} <i className="fa-solid fa-arrow-right ico"></i>
                  </button>
                </form>
              )}

              <div className="auth-links">
                <p>
                  <Link to="/login">Retour à la connexion</Link>
                </p>
                <p>
                  Pas de compte ?{' '}
                  <Link to="/register">Créer un compte</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TemplateFooter />
    </div>
  )
}
