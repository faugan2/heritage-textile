export default function ClientOrders() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>📋 Mes Commandes</h1>
      <p>Historique de vos achats</p>

      <div style={{ marginTop: '30px', border: '1px solid #ddd', borderRadius: '10px', padding: '40px', textAlign: 'center', background: '#f9f9f9' }}>
        <p style={{ color: '#999' }}>Vous n'avez pas encore de commandes.</p>
        <p style={{ color: '#999', fontSize: '14px' }}>Explorez notre catalogue et passez votre première commande !</p>
      </div>
    </div>
  )
}
