export default function AboutPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '20px', color: '#10182d' }}>À Propos de VPPT</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#626575', marginBottom: '30px' }}>
        Valorisation et Promotion des Textiles Traditionnels
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#10182d' }}>Notre Mission</h2>
          <p style={{ lineHeight: '1.8', color: '#626575' }}>
            VPPT est une plateforme moderne dédiée à la valorisation des artisans africains et à la promotion du patrimoine culturel africain. Nous croyons que les textiles traditionnels méritent une place sur la scène mondiale.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#10182d' }}>Notre Vision</h2>
          <p style={{ lineHeight: '1.8', color: '#626575' }}>
            Créer un écosystème où les artisans peuvent prospérer, les clients peuvent découvrir des créations authentiques, et le patrimoine culturel africain est célébré à travers le monde.
          </p>
        </section>
      </div>

      <section style={{ marginTop: '60px', padding: '40px', background: '#fbf9f7', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#10182d' }}>Notre Histoire</h2>
        <p style={{ lineHeight: '1.8', color: '#626575', marginBottom: '15px' }}>
          VPPT a été fondée avec la conviction que les textiles traditionnels africains contiennent des histoires, des cultures et des traditions qui méritent d'être reconnues et célébrées mondialement.
        </p>
        <p style={{ lineHeight: '1.8', color: '#626575' }}>
          Depuis sa création, nous avons œuvré pour connecter les artisans avec un marché global, en offrant une plateforme sécurisée, transparente et éthique.
        </p>
      </section>

      <section style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '30px', color: '#10182d' }}>Nos Valeurs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { icon: '♙', title: 'Authenticité', desc: 'Des créations vraies et certifiées' },
            { icon: '♧', title: 'Éthique', desc: 'Commerce responsable et équitable' },
            { icon: '◎', title: 'Communauté', desc: 'Soutien aux artisans locaux' }
          ].map(val => (
            <div key={val.title} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{val.icon}</div>
              <h3 style={{ marginBottom: '10px' }}>{val.title}</h3>
              <p style={{ color: '#626575', fontSize: '14px' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
