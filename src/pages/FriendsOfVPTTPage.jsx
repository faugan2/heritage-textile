import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Friends.css'

const CATEGORIES = {
  ambassadors: {
    label: 'Ambassadeurs', icon: 'fa-star', title: 'Les ambassadeurs',
    desc: 'Influenceurs et personnalités qui promeuvent VPTT',
    members: [
      { name: 'Fatou Sarr', detail: 'Influenceuse mode, Sénégal', value: '500 K+ abonnés' },
      { name: 'Amara Diallo', detail: 'Artiste et musicienne', value: '380 K+ abonnés' },
      { name: 'Sophie Martin', detail: 'Journaliste mode et culture', value: '290 K+ abonnés' }
    ]
  },
  volunteers: {
    label: 'Volontaires', icon: 'fa-people-group', title: 'Les volontaires',
    desc: 'Passionnés engagés dans les projets sociaux VPTT',
    members: [
      { name: 'Kwame Osei', detail: 'Coordinateur de projets sociaux', value: '120 h par an' },
      { name: 'Marie Leblanc', detail: 'Formatrice textile et artisanat', value: '95 h par an' },
      { name: 'Kofi Mensah', detail: 'Administrateur informatique et support', value: '75 h par an' }
    ]
  },
  donors: {
    label: 'Donateurs', icon: 'fa-gift', title: 'Les donateurs',
    desc: 'Contributeurs qui soutiennent notre impact social',
    members: [
      { name: 'Fondation Orange', detail: 'Multinationale', value: '75 000 € par an' },
      { name: 'Fondation Prince Albert II', detail: 'Fonds caritatif', value: '50 000 € par an' },
      { name: 'Impact Invest Africa', detail: 'Fonds d\'impact', value: '35 000 € par an' }
    ]
  },
  sympathizers: {
    label: 'Sympathisants', icon: 'fa-heart', title: 'Les sympathisants',
    desc: 'Personnes qui suivent et soutiennent la mission VPTT',
    members: [
      { name: 'Aïcha Ndiaye', detail: 'Passionnée de textiles africains', value: '12 K+ abonnés' },
      { name: 'Jean-Marc Bosso', detail: 'Blogueur culture et voyage', value: '45 K+ abonnés' },
      { name: 'Nadia Benali', detail: 'Créatrice de contenu mode', value: '28 K+ abonnés' }
    ]
  },
  partners: {
    label: 'Partenaires communautaires', icon: 'fa-link', title: 'Les partenaires communautaires',
    desc: 'Organisations alignées avec notre mission',
    members: [
      { name: 'Education Without Borders', detail: 'Éducation', value: '12 pays' },
      { name: 'African Green Initiative', detail: 'Environnement', value: '8 pays' },
      { name: 'Health for All Africa', detail: 'Santé', value: '15 pays' }
    ]
  }
}

const WHY = [
  { icon: 'fa-earth-africa', title: 'Impact global', desc: 'Contribuez dans plus de 50 pays' },
  { icon: 'fa-gift', title: 'Avantages exclusifs', desc: 'Accès VIP et réductions' },
  { icon: 'fa-users', title: 'Communauté', desc: 'Un réseau de plus de 10 000 personnes' },
  { icon: 'fa-chart-column', title: 'Transparence', desc: 'Suivi de l\'impact social' }
]

const MEMBER_BENEFITS = [
  'Badge officiel « Ami de VPTT » sur la plateforme',
  'Accès à la communauté privée (forum, événements)',
  'Réductions exclusives sur tous les produits (15 à 30 %)',
  'Premier accès aux nouvelles collections',
  'Invitations aux événements VIP',
  'Lettre mensuelle avec les indicateurs d\'impact'
]

const ROLE_LABELS = {
  ambassadors: 'ambassadeur',
  volunteers: 'bénévole',
  donors: 'donateur',
  sympathizers: 'sympathisant',
  partners: 'partenaire'
}

export default function FriendsOfVPTTPage() {
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('ambassadors')
  const selected = CATEGORIES[selectedKey]

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">COMMUNAUTÉ</span>
          <h1>Les amis de VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Une communauté de passionnés et d'acteurs du changement social</p>
        </div>
      </section>

      <div className="container">
        <div className="region-tabs" style={{ marginTop: 40 }}>
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button key={key} className={`region-tab ${selectedKey === key ? 'is-active' : ''}`} onClick={() => setSelectedKey(key)}>
              <i className={`fa-solid ${cat.icon}`} style={{ marginRight: 8 }}></i>
              {cat.label}
            </button>
          ))}
        </div>

        <section className="section-band" style={{ paddingTop: 16 }}>
          <h2 className="section-heading">{selected.title}</h2>
          <p className="section-lead">{selected.desc}</p>
          <div className="member-grid">
            {selected.members.map((m, idx) => (
              <div key={idx} className="member">
                <div className="member__icon"><i className={`fa-solid ${selected.icon}`}></i></div>
                <h3>{m.name}</h3>
                <p>{m.detail}</p>
                <span className="member__value">{m.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="section-band section-band--soft">
        <div className="container">
          <h2 className="section-heading">Pourquoi rejoindre les amis de VPTT ?</h2>
          <div className="benefit-cards" style={{ marginTop: 32 }}>
            {WHY.map((w, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${w.icon}`}></i>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <h2 className="section-heading">Avantages membres</h2>
          <ul className="check-list" style={{ marginTop: 32 }}>
            {MEMBER_BENEFITS.map((b, idx) => (
              <li key={idx}><i className="fa-solid fa-circle-check"></i>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container">
        <section className="partner-cta" style={{ marginTop: 32 }}>
          <h2>Prêt à faire partie de la mission ?</h2>
          <p>Choisissez le rôle qui vous correspond et rejoignez notre communauté.</p>
          <div className="join-roles">
            {Object.keys(CATEGORIES).map(key => (
              <button key={key} onClick={() => navigate('/register')}>
                Devenir {ROLE_LABELS[key]}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
