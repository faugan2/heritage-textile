import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Info.css'
import '../styles/pages/Referral.css'

const REFERRAL_CODE = 'VPTT-FTD-2024'
const REFERRAL_LINK = `https://www.heritagetextiles.com/join?ref=${REFERRAL_CODE}`

const TIERS = {
  artisan: {
    title: 'Artisan partenaire', commission: '15 %', description: 'Pour les artisans certifiés',
    benefits: ['15 % de commission sur chaque vente', 'Bonus de 50 € par artisan parrainé', 'Accès au tableau de bord du parrainage', 'Accompagnement marketing dédié', 'Formations gratuites'],
    requirement: '5 artisans parrainés', topEarnings: '8 500 € par mois'
  },
  ambassador: {
    title: 'Ambassadeur', commission: '20 %', description: 'Pour les ambassadeurs pays',
    benefits: ['20 % de commission sur les ventes parrainées', 'Bonus de 100 € par artisan parrainé', 'Commission bonus sur le chiffre d\'affaires du pays (+5 %)', 'Kit marketing professionnel', 'Formation business avancée', 'Événements VIP exclusifs'],
    requirement: '20 artisans parrainés', topEarnings: '12 500 € par mois'
  },
  influencer: {
    title: 'Influenceur', commission: '10 %', description: 'Pour les créateurs et influenceurs',
    benefits: ['10 % de commission sur les achats des clients parrainés', 'Bonus produits gratuits (1 000 € de crédit)', 'Contenus exclusifs à partager', 'Statistiques détaillées en temps réel', 'Accompagnement par un community manager', 'Programme VIP avec NFT numérique'],
    requirement: '100 clients parrainés', topEarnings: '4 200 € par mois'
  }
}

const STATS = [
  { icon: 'fa-user-group', label: 'Parrains actifs', value: '347' },
  { icon: 'fa-coins', label: 'Commissions', value: '245 K€' },
  { icon: 'fa-medal', label: 'Top parrain', value: 'Fatou Diallo' },
  { icon: 'fa-arrow-trend-up', label: 'Top gain', value: '8 500 € / mois' },
  { icon: 'fa-gift', label: 'Total distribué', value: '1,2 M€' }
]

const STEPS = [
  { title: 'Partagez', desc: 'Partagez votre lien de parrainage' },
  { title: 'Recrutez', desc: 'Artisans et clients rejoignent via votre lien' },
  { title: 'Gagnez', desc: 'Recevez des commissions sur les ventes' },
  { title: 'Retirez', desc: 'Retirez vos gains chaque mois' }
]

const FAQS = [
  { q: 'Combien de temps avant de recevoir ma première commission ?', a: 'Les commissions sont versées le 1er de chaque mois, pour les ventes du mois précédent.' },
  { q: 'Quel est le montant minimum de retrait ?', a: 'Le montant minimum de retrait est de 50 €. Les retraits se font par virement bancaire.' },
  { q: 'Puis-je augmenter ma commission ?', a: 'Oui : en atteignant les objectifs de chaque palier, vous passez au niveau supérieur.' },
  { q: 'Y a-t-il une limite de parrainages ?', a: 'Aucune limite. Plus vous parrainez, plus vous gagnez.' }
]

export default function ReferralSystemPage() {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const [tierKey, setTierKey] = useState('artisan')
  const tier = TIERS[tierKey]

  const copy = text => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">PARRAINAGE</span>
          <h1>Programme de parrainage</h1>
          <div className="page-hero__rule"></div>
          <p>Gagnez des commissions en parrainant des artisans et des clients VPTT</p>
        </div>
      </section>

      <div className="container">
        <div className="referral-stats" style={{ marginTop: 40 }}>
          {STATS.map((s, idx) => (
            <div key={idx} className="referral-stat">
              <i className={`fa-solid ${s.icon}`}></i>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <section className="section-band">
          <div className="referral-link">
            <h2>Votre lien de parrainage</h2>
            <label>Code unique</label>
            <div className="referral-row">
              <input type="text" value={REFERRAL_CODE} readOnly />
              <button className="referral-copy" onClick={() => copy(REFERRAL_CODE)} aria-label="Copier le code">
                <i className={`fa-solid ${copied ? 'fa-circle-check' : 'fa-copy'}`}></i>
              </button>
            </div>
            <label>Lien complet</label>
            <div className="referral-row">
              <input type="text" value={REFERRAL_LINK} readOnly />
              <button className="referral-copy" onClick={() => copy(REFERRAL_LINK)} aria-label="Copier le lien">
                <i className={`fa-solid ${copied ? 'fa-circle-check' : 'fa-copy'}`}></i>
              </button>
            </div>
            <p className="referral-hint">Partagez ce lien sur les réseaux sociaux, par e-mail ou par message.</p>
          </div>
        </section>

        <section className="section-band section-band--soft" style={{ borderRadius: 0 }}>
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-heading">Programmes de parrainage</h2>
            <div className="region-tabs" style={{ marginTop: 24 }}>
              {Object.entries(TIERS).map(([key, t]) => (
                <button key={key} className={`region-tab ${tierKey === key ? 'is-active' : ''}`} onClick={() => setTierKey(key)}>
                  {t.title}
                </button>
              ))}
            </div>

            <div className="tier-detail" style={{ maxWidth: 920, margin: '24px auto 0' }}>
              <div>
                <h2>{tier.title}</h2>
                <p style={{ color: 'var(--muted)', marginBottom: 22 }}>{tier.description}</p>
                <div className="tier-kpis">
                  <div className="tier-kpi"><span>Commission</span><b>{tier.commission}</b></div>
                  <div className="tier-kpi"><span>Condition</span><b>{tier.requirement}</b></div>
                  <div className="tier-kpi"><span>Gains maximum</span><b>{tier.topEarnings}</b></div>
                </div>
              </div>
              <div className="tier-benefits">
                <h3>Avantages</h3>
                <ul>
                  {tier.benefits.map((b, idx) => (
                    <li key={idx}><i className="fa-solid fa-circle-check"></i><span>{b}</span></li>
                  ))}
                </ul>
                <button className="btn btn--yellow" onClick={() => navigate('/register')}>
                  Commencer à parrainer <i className="fa-solid fa-arrow-right ico"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Comment ça marche</h2>
          <div className="steps" style={{ marginTop: 32 }}>
            {STEPS.map((s, idx) => (
              <div key={idx} className="step">
                <div className="step__num">{idx + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band" style={{ paddingTop: 0 }}>
          <h2 className="section-heading">Questions fréquentes</h2>
          <div className="faq-details">
            {FAQS.map((f, idx) => (
              <details key={idx}>
                <summary>{f.q}<i className="fa-solid fa-chevron-down"></i></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Prêt à gagner ?</h2>
          <p>Rejoignez les 347 parrains actifs et gagnez des commissions récurrentes.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/account')}>
            Accéder à votre tableau de bord <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
