export default function AdminAnalytics() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>📊 Statistiques Globales</h1>
      <p>Données de la plateforme</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0</h3>
          <p>Utilisateurs</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0</h3>
          <p>Produits</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0</h3>
          <p>Commandes</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3>0 FCFA</h3>
          <p>Volume</p>
        </div>
      </div>
    </div>
  )
}
