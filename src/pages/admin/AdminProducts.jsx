export default function AdminProducts() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>📦 Gestion des Produits</h1>
      <p>Modérez tous les produits de la plateforme</p>

      <div style={{ marginTop: '30px', border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
        <input type="search" placeholder="Rechercher un produit..." style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '20px' }} />

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Produit</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Artisan</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Aucun produit trouvé</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
