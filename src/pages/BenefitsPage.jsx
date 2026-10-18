export default function BenefitsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '20px', color: '#10182d' }}>Pourquoi Rejoindre VPPT ?</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#626575', marginBottom: '40px' }}>
        Découvrez les avantages de faire partie de notre communauté
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
        {[
          {
            icon: '♙',
            title: 'Soutien aux Artisans',
            desc: 'Offrez de la visibilité aux artisans africains et soutenez directement leurs créations.'
          },
          {
            icon: '♧',
            title: 'Produits Authentiques',
            desc: 'Accédez à des créations originales et certifiées, garanties authentiques.'
          },
          {
            icon: '♧',
            title: 'Commerce Éthique',
            desc: 'Participez à une consommation responsable et durable qui respecte l\'environnement.'
          },
          {
            icon: '◎',
            title: 'Marché International',
            desc: 'Du Togo à l\'Afrique, et partout dans le monde - accédez à une portée mondiale.'
          },
          {
            icon: '♙',
            title: 'Investissement Éthique',
            desc: 'Une opportunité d\'investissement dans un projet porteur de sens.'
          },
          {
            icon: '♧',
            title: 'Communauté Engagée',
            desc: 'Rejoignez une communauté de passionnés de culture et de textiles africains.'
          }
        ].map(benefit => (
          <div key={benefit.title} style={{ padding: '30px', background: '#fbf9f7', borderRadius: '10px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>{benefit.icon}</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#10182d' }}>{benefit.title}</h3>
            <p style={{ lineHeight: '1.6', color: '#626575' }}>{benefit.desc}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, #8b0878, #4b064b)', color: 'white', borderRadius: '10px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Prêt à Rejoindre le Mouvement ?</h2>
        <p style={{ fontSize: '16px', marginBottom: '30px', opacity: 0.9 }}>
          Que vous soyez artisan, client ou investisseur, il y a une place pour vous chez VPPT.
        </p>
        <button style={{ padding: '15px 40px', background: 'white', color: '#8b0878', border: 'none', borderRadius: '28px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Commencer Maintenant
        </button>
      </section>
    </div>
  )
}
