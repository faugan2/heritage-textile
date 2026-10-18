import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterRole() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [selectedRole, setSelectedRole] = useState(null)
  const [formData, setFormData] = useState({ email: '', password: '', displayName: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!selectedRole) {
      setError('Veuillez choisir un rôle')
      return
    }

    setLoading(true)
    const result = await signup(formData.email, formData.password, formData.displayName, selectedRole)
    
    if (result.success) {
      // Redirect based on role
      if (selectedRole === 'artisan') {
        navigate('/artisan')
      } else if (selectedRole === 'client') {
        navigate('/client')
      } else {
        navigate('/')
      }
    } else {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h1>Créer un compte</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '15px' }}>Choisissez votre rôle :</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
          <div
            onClick={() => setSelectedRole('client')}
            style={{
              padding: '20px',
              border: selectedRole === 'client' ? '3px solid #8b0878' : '2px solid #ddd',
              borderRadius: '10px',
              cursor: 'pointer',
              background: selectedRole === 'client' ? '#fbf0fa' : 'white',
              transition: 'all 0.3s'
            }}
          >
            <h3>🛍️ Client</h3>
            <p>Acheter des produits</p>
            <small>Accédez au catalogue et passez commande</small>
          </div>

          <div
            onClick={() => setSelectedRole('artisan')}
            style={{
              padding: '20px',
              border: selectedRole === 'artisan' ? '3px solid #8b0878' : '2px solid #ddd',
              borderRadius: '10px',
              cursor: 'pointer',
              background: selectedRole === 'artisan' ? '#fbf0fa' : 'white',
              transition: 'all 0.3s'
            }}
          >
            <h3>👨‍🎨 Artisan</h3>
            <p>Vendre vos produits</p>
            <small>Créez votre boutique et vendez</small>
          </div>
        </div>
      </div>

      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: '15px' }}>
          <label>Nom d'affichage</label>
          <input
            type="text"
            value={formData.displayName}
            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
            placeholder="Votre nom"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="votre@email.com"
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Mot de passe</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••"
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginTop: '5px' }}
          />
        </div>

        {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

        <button
          type="submit"
          disabled={loading || !selectedRole}
          style={{
            width: '100%',
            padding: '12px',
            background: selectedRole ? '#8b0878' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: selectedRole ? 'pointer' : 'not-allowed',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Création en cours...' : 'Créer mon compte'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#999' }}>
        Vous avez déjà un compte ? <a href="/login" style={{ color: '#8b0878' }}>Se connecter</a>
      </p>
    </div>
  )
}
