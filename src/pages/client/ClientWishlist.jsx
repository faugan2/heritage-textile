export default function ClientWishlist() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h1>❤️ Ma Wishlist</h1>
      <p>Produits à surveiller</p>

      <div style={{ marginTop: '30px', border: '1px solid #ddd', borderRadius: '10px', padding: '40px', textAlign: 'center', background: '#f9f9f9' }}>
        <p style={{ color: '#999' }}>Votre wishlist est vide.</p>
        <p style={{ color: '#999', fontSize: '14px' }}>Ajoutez des produits à votre wishlist pour les suivre.</p>
      </div>
    </div>
  )
}
