import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Badges.css'

const BADGES = [
  { id: 1, name: 'Artisan certifié', icon: 'fa-circle-check', color: '#22C55E', category: 'artisan', requirements: 'Identité vérifiée et formation validée', holders: '1 200+ artisans', description: 'Artisan dont l\'identité et les compétences ont été vérifiées par VPTT' },
  { id: 2, name: 'Artisan maître', icon: 'fa-paintbrush', color: '#D4AF37', category: 'artisan', requirements: '5 ans d\'expérience et certification validée', holders: '150+ artisans', description: 'Artisan reconnu pour la maîtrise des techniques ancestrales' },
  { id: 3, name: 'Boutique vérifiée', icon: 'fa-shield-halved', color: '#3B82F6', category: 'boutique', requirements: 'Vérification d\'identité et conformité', holders: '800+ boutiques', description: 'Boutique dont l\'identité et la conformité sont vérifiées' },
  { id: 4, name: 'Boutique VIP', icon: 'fa-star', color: '#F59E0B', category: 'boutique', requirements: 'Palier Premium ou supérieur, 4,8 étoiles et plus', holders: '60+ boutiques', description: 'Boutique d\'excellence à la clientèle fidèle' },
  { id: 5, name: 'Investisseur actif', icon: 'fa-arrow-trend-up', color: '#10B981', category: 'investor', requirements: 'Investissement minimum de 5 000 €', holders: '500+ investisseurs', description: 'Investisseur engagé dans les projets VPTT' },
  { id: 6, name: 'Actionnaire VIP', icon: 'fa-wand-magic-sparkles', color: '#8B5CF6', category: 'investor', requirements: 'Palier Gold ou VIP Platinum', holders: '40+ actionnaires', description: 'Actionnaire de niveau Gold ou VIP Platinum' },
  { id: 7, name: 'Ambassadeur VPTT', icon: 'fa-people-group', color: '#EC4899', category: 'community', requirements: 'Représentation validée dans un pays', holders: '25+ ambassadeurs', description: 'Représentant officiel de VPTT dans son pays' },
  { id: 8, name: 'Partenaire officiel', icon: 'fa-earth-africa', color: '#06B6D4', category: 'community', requirements: 'Contrat de partenariat signé', holders: '30+ partenaires', description: 'Partenaire stratégique officiel de VPTT' },
  { id: 9, name: 'Membre fondateur', icon: 'fa-flag', color: '#D4AF37', category: 'community', requirements: 'Inscrit pendant la phase de lancement', holders: '500+ membres', description: 'Membre de la première heure de la plateforme' }
]

const CATEGORIES = [
  { id: 'all', label: 'Tous les badges' },
  { id: 'artisan', label: 'Artisans' },
  { id: 'boutique', label: 'Boutiques' },
  { id: 'investor', label: 'Investisseurs' },
  { id: 'community', label: 'Communauté' }
]

const HOW = [
  { title: 'Demander', desc: 'Postulez pour la certification' },
  { title: 'Vérifier', desc: 'Notre équipe contrôle les critères' },
  { title: 'Valider', desc: 'Validation enregistrée sur la blockchain' },
  { title: 'Afficher', desc: 'Badge public sur votre profil' }
]

const BENEFITS = [
  { icon: 'fa-arrow-trend-up', title: 'Visibilité accrue', desc: 'Meilleur classement dans les recherches' },
  { icon: 'fa-star', title: 'Confiance client', desc: 'Des conversions en hausse de 35 %' },
  { icon: 'fa-bullseye', title: 'Accès premium', desc: 'Accès aux profils VIP' },
  { icon: 'fa-sack-dollar', title: 'Commissions réduites', desc: '50 % de frais VPTT en moins' }
]

export default function OfficialBadgesPage() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('all')

  const visible = category === 'all' ? BADGES : BADGES.filter(b => b.category === category)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">BADGES</span>
          <h1>Badges officiels VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Neuf badges d'excellence pour identifier les meilleurs produits, artisans et partenaires</p>
        </div>
      </section>

      <div className="container">
        <div className="region-tabs" style={{ marginTop: 40 }}>
          {CATEGORIES.map(c => (
            <button key={c.id} className={`region-tab ${category === c.id ? 'is-active' : ''}`} onClick={() => setCategory(c.id)}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="badge-grid">
          {visible.map(b => (
            <article key={b.id} className="badge-card" style={{ '--badge': b.color }}>
              <div className="badge-card__icon"><i className={`fa-solid ${b.icon}`}></i></div>
              <h3>{b.name}</h3>
              <p className="badge-card__desc">{b.description}</p>
              <div className="badge-card__criteria">
                <span>Critères</span>
                <b>{b.requirements}</b>
              </div>
              <p className="badge-card__holders"><i className="fa-solid fa-users"></i> {b.holders}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="section-band section-band--soft" style={{ marginTop: 64 }}>
        <div className="container">
          <h2 className="section-heading">Comment obtenir un badge</h2>
          <div className="steps" style={{ marginTop: 32 }}>
            {HOW.map((h, idx) => (
              <div key={idx} className="step">
                <div className="step__num">{idx + 1}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <h2 className="section-heading">Avantages pour les porteurs de badges</h2>
          <div className="benefit-cards" style={{ marginTop: 32 }}>
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${b.icon}`}></i>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Obtenez un badge VPTT</h2>
          <p>Prouvez votre excellence et gagnez la confiance de vos clients.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/register')}>
            Postuler maintenant <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
