import { useAuth } from '../../context/AuthContext'

export default function ArtisanProfile() {
  const { user } = useAuth()

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h1>👤 Mon Profil Artisan</h1>

      <form style={{ marginTop: '30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nom de l'entreprise</label>
          <input type="text" placeholder="Votre nom d'entreprise" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description</label>
          <textarea placeholder="Décrivez votre entreprise" rows="4" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box' }}></textarea>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Logo</label>
          <input type="file" accept="image/*" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
        </div>

        <button type="submit" style={{ padding: '10px 20px', background: '#8b0878', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Sauvegarder mon profil
        </button>
      </form>
    </div>
  )
}
