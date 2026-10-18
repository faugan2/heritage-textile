export default function ClientAddresses() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>🏠 Mes Adresses</h1>
      <p>Gérez vos adresses de livraison</p>

      <div style={{ marginTop: '30px' }}>
        <button style={{ padding: '10px 20px', background: '#8b0878', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
          ➕ Ajouter une adresse
        </button>

        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '40px', textAlign: 'center', background: '#f9f9f9' }}>
          <p style={{ color: '#999' }}>Vous n'avez pas encore d'adresses.</p>
          <p style={{ color: '#999', fontSize: '14px' }}>Ajoutez une adresse de livraison.</p>
        </div>
      </div>
    </div>
  )
}
