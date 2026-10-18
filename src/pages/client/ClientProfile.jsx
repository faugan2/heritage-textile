import { useAuth } from '../../context/AuthContext'

export default function ClientProfile() {
  const { user } = useAuth()

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h1>👤 Mon Profil</h1>

      <form style={{ marginTop: '30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nom</label>
          <input type="text" placeholder="Votre nom" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input type="email" value={user?.email || ''} disabled style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box', background: '#f9f9f9' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Téléphone</label>
          <input type="tel" placeholder="Votre numéro" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box' }} />
        </div>

        <button type="submit" style={{ padding: '10px 20px', background: '#8b0878', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Sauvegarder
        </button>
      </form>
    </div>
  )
}
