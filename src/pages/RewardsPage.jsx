import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'

const EARN = [
  { icon: 'fa-cart-shopping', title: 'Achats', desc: 'Des points sur chaque achat effectué' },
  { icon: 'fa-tag', title: 'Ventes', desc: 'Des points pour chaque vente réalisée' },
  { icon: 'fa-graduation-cap', title: 'Formations', desc: 'Des points pour chaque formation VPTT Academy terminée' },
  { icon: 'fa-user-plus', title: 'Recommandations', desc: 'Des points pour chaque personne recommandée' },
  { icon: 'fa-hands-holding-heart', title: 'Activités communautaires', desc: 'Des points pour votre participation à la vie communautaire' }
]

const REWARDS = [
  { icon: 'fa-percent', title: 'Réductions', desc: 'Remises sur vos achats futurs' },
  { icon: 'fa-bullhorn', title: 'Publicité gratuite', desc: 'Promotion de votre boutique ou de vos créations' },
  { icon: 'fa-arrow-trend-up', title: 'Mise en avant', desc: 'Visibilité accrue sur la plateforme' },
  { icon: 'fa-certificate', title: 'Avantages exclusifs', desc: 'Accès réservé aux membres GAIN+' }
]

const STEPS = [
  { title: 'Inscrivez-vous', desc: 'Créez votre compte VPTT' },
  { title: 'Achetez', desc: 'Gagnez 1 à 3 points par euro dépensé' },
  { title: 'Accumulez', desc: 'Cumulez vos points' },
  { title: 'Récompensez-vous', desc: 'Échangez vos points contre des cadeaux' }
]

const BONUSES = [
  { activity: 'Achat régulier', points: '1 point par euro' },
  { activity: 'Avis sur un produit', points: '+25 points' },
  { activity: 'Partage sur les réseaux', points: '+10 points' },
  { activity: 'Parrainage réussi', points: '+100 points' },
  { activity: 'Jour d\'anniversaire', points: 'Points doublés' }
]

const SPECIAL = [
  { icon: 'fa-wand-magic-sparkles', title: 'Saison spéciale', desc: 'Points multipliés par 3 sur les achats mode, jusqu\'au 31 décembre' },
  { icon: 'fa-user-group', title: 'Bonus de parrainage', desc: '+500 points pour chaque ami invité' },
  { icon: 'fa-trophy', title: 'Paliers', desc: 'Bonus à 500, 1 000 et 2 000 points' },
  { icon: 'fa-earth-africa', title: 'Points solidaires', desc: '+20 points par achat, et 1 euro reversé à une ONG' }
]

export default function RewardsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">FIDÉLITÉ</span>
          <h1>Programme GAIN+</h1>
          <div className="page-hero__rule"></div>
          <p>Gagnez des points à chaque achat et échangez-les contre des récompenses exclusives</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingTop: 48 }}>
          <h2 className="section-heading">Gagnez des points</h2>
          <div className="benefit-cards" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
            {EARN.map((e, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${e.icon}`}></i>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Vos récompenses</h2>
          <div className="benefit-cards">
            {REWARDS.map((r, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${r.icon}`}></i>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Comment ça marche</h2>
          <div className="steps">
            {STEPS.map((s, idx) => (
              <div key={idx} className="step">
                <div className="step__num">{idx + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Occasions de gagner plus de points</h2>
          <div className="accordion" style={{ maxWidth: 620 }}>
            {BONUSES.map((b, idx) => (
              <div key={idx} className="timeline-row" style={{ gridTemplateColumns: '1fr auto' }}>
                <h3>{b.activity}</h3>
                <span style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{b.points}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Récompenses spéciales du moment</h2>
          <div className="benefit-cards" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {SPECIAL.map((s, idx) => (
              <div key={idx} className="benefit" style={{ textAlign: 'left', display: 'flex', gap: 16 }}>
                <i className={`fa-solid ${s.icon}`} style={{ margin: 0, flexShrink: 0 }}></i>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Commencez à gagner des points</h2>
          <p>Chaque achat vous rapproche des récompenses exclusives.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/register')}>
            S'inscrire maintenant <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
