export default function ArtisanSales() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>📊 Mes Ventes</h1>
      <p>Suivi de vos commandes et ventes</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0</h3>
          <p>Commandes</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0 FCFA</h3>
          <p>Revenu Total</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0</h3>
          <p>Clients Heureux</p>
        </div>
      </div>

      <div style={{ marginTop: '30px', border: '1px solid #ddd', borderRadius: '10px', padding: '40px', textAlign: 'center', background: '#f9f9f9' }}>
        <p style={{ color: '#999' }}>Pas encore de ventes.</p>
      </div>
    </div>
  )
}
