import { useAuth } from '../../context/AuthContext'

export default function ArtisanProducts() {
  const { user } = useAuth()

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>📦 Mes Produits</h1>
      <p>Gérez et créez vos produits</p>

      <div style={{ marginTop: '30px' }}>
        <button style={{ padding: '10px 20px', background: '#8b0878', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
          ➕ Ajouter un produit
        </button>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '40px', textAlign: 'center', background: '#f9f9f9' }}>
          <p style={{ color: '#999' }}>Vous n'avez pas encore de produits.</p>
          <p style={{ color: '#999', fontSize: '14px' }}>Cliquez sur "Ajouter un produit" pour commencer à vendre.</p>
        </div>
      </div>
    </div>
  )
}
