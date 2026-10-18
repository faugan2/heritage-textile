export default function ArtisanAnalytics() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>📈 Statistiques</h1>
      <p>Analyse de vos performances</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '30px' }}>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
          <h3>Vues du profil</h3>
          <p style={{ fontSize: '24px', margin: '10px 0', fontWeight: 'bold' }}>0</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
          <h3>Clics sur produits</h3>
          <p style={{ fontSize: '24px', margin: '10px 0', fontWeight: 'bold' }}>0</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
          <h3>Taux de conversion</h3>
          <p style={{ fontSize: '24px', margin: '10px 0', fontWeight: 'bold' }}>0%</p>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
          <h3>Note moyenne</h3>
          <p style={{ fontSize: '24px', margin: '10px 0', fontWeight: 'bold' }}>---</p>
        </div>
      </div>
    </div>
  )
}
