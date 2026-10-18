import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Unauthorized() {
  const navigate = useNavigate()
  const { userRole } = useAuth()

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>❌ Accès Refusé</h1>
      <p>Vous n'avez pas accès à cette page.</p>
      <p style={{ color: '#999' }}>Votre rôle : <strong>{userRole || 'visiteur'}</strong></p>
      
      <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => navigate('/')}
          style={{ padding: '10px 20px', background: '#8b0878', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Retour à l'accueil
        </button>
        {userRole && (
          <button 
            onClick={() => navigate(`/${userRole}`)}
            style={{ padding: '10px 20px', background: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Mon tableau de bord
          </button>
        )}
      </div>
    </div>
  )
}
