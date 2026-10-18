import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import '../styles/template/base.css'
import '../styles/pages/Auth.css'

const BRAND_IMAGE = '/images/cta-motif.jpg'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const { signup, loginWithGoogle } = useAuth()

  const handleGoogle = async () => {
    setError('')
    const result = await loginWithGoogle()
    if (result.success) {
      navigate('/account')
    } else if (result.error) {
      setError(result.error)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password || !confirmPassword || !displayName) {
      setError('Veuillez remplir tous les champs')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      setLoading(false)
      return
    }

    const result = await signup(email, password, displayName)

    if (result.success) {
      navigate('/account')
    } else {
      setError(result.error || 'Erreur lors de la création du compte')
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
              <span className="tag">REJOIGNEZ VPTT</span>
              <h1>Rejoignez notre communauté</h1>
              <p>Créez votre compte pour accéder à des offres exclusives et découvrir nos collections uniques.</p>
              <p>Profitez d'avantages exclusifs, de favoris personnalisés et des dernières actualités de nos artisans.</p>
            </div>

            <div className="auth-card__form">
              <h2>Créer un compte</h2>
              <p>Rejoignez Heritage Textiles</p>

              <button type="button" className="auth-google" onClick={handleGoogle} disabled={loading}>
                <i className="fa-brands fa-google"></i>
                S'inscrire avec Google
              </button>
              <div className="auth-divider"><span>ou</span></div>

              <form onSubmit={handleRegister}>
                <div className="field">
                  <label htmlFor="register-name">Nom complet</label>
                  <input
                    id="register-name"
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Jean Dupont"
                    disabled={loading}
                  />
                </div>

                <div className="field">
                  <label htmlFor="register-email">Adresse e-mail</label>
                  <input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    disabled={loading}
                  />
                </div>

                <div className="field">
                  <label htmlFor="register-password">Mot de passe</label>
                  <div className="field__control">
                    <input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••••"
                      disabled={loading}
                    />
                    <button
                      type="button"
                      className="field__toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    >
                      <i className={showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
                    </button>
                  </div>
                  <p className="auth-hint">Minimum 6 caractères</p>
                </div>

                <div className="field">
                  <label htmlFor="register-confirm">Confirmer le mot de passe</label>
                  <div className="field__control">
                    <input
                      id="register-confirm"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••••"
                      disabled={loading}
                    />
                    <button
                      type="button"
                      className="field__toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    >
                      <i className={showConfirmPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
                    </button>
                  </div>
                </div>

                {error && <div className="auth-error">{error}</div>}

                <button type="submit" disabled={loading} className="btn btn--yellow auth-submit">
                  {loading ? 'Création du compte...' : 'Créer un compte'} <i className="fa-solid fa-arrow-right ico"></i>
                </button>
              </form>

              <div className="auth-links">
                <p>
                  Vous avez déjà un compte ?{' '}
                  <Link to="/login">Se connecter</Link>
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
