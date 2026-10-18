import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import '../styles/template/base.css'
import '../styles/pages/Auth.css'

const BRAND_IMAGE = '/images/cta-motif.jpg'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { login, loginWithGoogle } = useAuth()

  const handleGoogle = async () => {
    setError('')
    const result = await loginWithGoogle()
    if (result.success) {
      navigate('/account')
    } else if (result.error) {
      setError(result.error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('Veuillez remplir tous les champs')
      setLoading(false)
      return
    }

    const result = await login(email, password)

    if (result.success) {
      navigate('/account')
    } else {
      setError(result.error || 'Erreur lors de la connexion')
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
              <span className="tag">PORTAIL VPTT</span>
              <h1>Votre accès à l'univers des textiles africains</h1>
              <p>Connectez-vous pour découvrir des collections uniques provenant directement des artisans partenaires.</p>
            </div>

            <div className="auth-card__form">
              <h2>Bienvenue</h2>
              <p>Connectez-vous à votre compte</p>

              <button type="button" className="auth-google" onClick={handleGoogle} disabled={loading}>
                <i className="fa-brands fa-google"></i>
                Continuer avec Google
              </button>
              <div className="auth-divider"><span>ou</span></div>

              <form onSubmit={handleLogin}>
                <div className="field">
                  <label htmlFor="login-email">Adresse e-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    disabled={loading}
                  />
                </div>

                <div className="field">
                  <label htmlFor="login-password">Mot de passe</label>
                  <div className="field__control">
                    <input
                      id="login-password"
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
                </div>

                <label className="auth-remember">
                  <input type="checkbox" />
                  Se souvenir de mon e-mail
                </label>

                {error && <div className="auth-error">{error}</div>}

                <button type="submit" disabled={loading} className="btn btn--yellow auth-submit">
                  {loading ? 'Connexion...' : 'Se connecter'} <i className="fa-solid fa-arrow-right ico"></i>
                </button>
              </form>

              <div className="auth-links">
                <p>
                  Pas de compte ?{' '}
                  <Link to="/register">S'inscrire</Link>
                </p>
                <p>
                  Mot de passe oublié ?{' '}
                  <Link to="/password-reset">Réinitialiser</Link>
                </p>
                <p>
                  Besoin d'aide ? Contactez{' '}
                  <a href="mailto:info@heritagetextiles.com">info@heritagetextiles.com</a>
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
