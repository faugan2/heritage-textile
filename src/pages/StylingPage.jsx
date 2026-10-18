import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allProducts } from '../data/products'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/AI.css'
import '../styles/components/ProductCard.css'

const OCCASIONS = [
  { id: 'casual', label: 'Décontracté', icon: 'fa-shirt' },
  { id: 'work', label: 'Travail', icon: 'fa-briefcase' },
  { id: 'party', label: 'Soirée', icon: 'fa-wine-glass' },
  { id: 'wedding', label: 'Mariage', icon: 'fa-ring' }
]

const BODY_TYPES = [
  { id: 'petite', label: 'Petite' },
  { id: 'average', label: 'Moyenne' },
  { id: 'curvy', label: 'Généreuse' },
  { id: 'tall', label: 'Grande' }
]

const SKIN_TONES = [
  { id: 'fair', label: 'Clair', color: '#fdbcb4' },
  { id: 'medium', label: 'Medium', color: '#d0956c' },
  { id: 'deep', label: 'Foncé', color: '#714a2f' }
]

const BUDGETS = [
  { id: 'low', label: 'Moins de 50 €' },
  { id: 'mid', label: '50 à 100 €' },
  { id: 'high', label: 'Plus de 100 €' }
]

const RECOMMENDATIONS = {
  casual: 'Les pagnes wax colorés aux motifs géométriques sont parfaits pour un look décontracté et authentique.',
  work: 'Optez pour un dashiki artisanal ou un pagne wax aux couleurs neutres pour un look professionnel.',
  party: 'Le kente traditionnel ou le bazin riche sont idéaux pour briller en soirée avec style.',
  wedding: 'Un ensemble en bazin riche ou un kente accompagné de bijoux traditionnels pour ce jour spécial.'
}

const EMPTY_PREFERENCES = { occasion: null, bodyType: null, skinTone: null, budget: null }

export default function StylingPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState(EMPTY_PREFERENCES)
  const [recommendation, setRecommendation] = useState(null)

  const selectAndNext = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
    if (step < 4) {
      setStep(step + 1)
    } else {
      setRecommendation(RECOMMENDATIONS[preferences.occasion] || 'Nous recommandons un mélange de styles.')
    }
  }

  const reset = () => {
    setStep(1)
    setRecommendation(null)
    setPreferences(EMPTY_PREFERENCES)
  }

  const choiceClass = active => `ai-template ${active ? 'is-active' : ''}`

  const suggested = allProducts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/ai-studio" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour au studio IA
          </Link>
          <span className="tag">IA</span>
          <h1>Conseils de style</h1>
          <div className="page-hero__rule"></div>
          <p>Un conseil personnalisé selon vos préférences</p>
        </div>
      </section>

      <div className="container" style={{ padding: '40px 0 64px', maxWidth: 880 }}>
        {!recommendation ? (
          <div className="ai-card" style={{ padding: 32 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ flex: 1, height: 8, borderRadius: 999, background: i <= step ? 'var(--yellow-dark)' : 'var(--border)' }}></div>
              ))}
            </div>

            {step === 1 && (
              <>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 20 }}>Quelle est l'occasion ?</h2>
                <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))' }}>
                  {OCCASIONS.map(o => (
                    <button key={o.id} className={choiceClass(preferences.occasion === o.id)} style={{ padding: 22, textAlign: 'center' }} onClick={() => selectAndNext('occasion', o.id)}>
                      <i className={`fa-solid ${o.icon}`} style={{ fontSize: '1.6rem', color: 'var(--orange)', display: 'block', marginBottom: 10 }}></i>
                      <b style={{ padding: 0 }}>{o.label}</b>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 20 }}>Votre morphologie</h2>
                <div style={{ display: 'grid', gap: 12 }}>
                  {BODY_TYPES.map(t => (
                    <button key={t.id} className={choiceClass(preferences.bodyType === t.id)} style={{ padding: 18, textAlign: 'left' }} onClick={() => selectAndNext('bodyType', t.id)}>
                      <b style={{ padding: 0 }}>{t.label}</b>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 20 }}>Votre teint</h2>
                <div className="products-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
                  {SKIN_TONES.map(t => (
                    <button key={t.id} className={choiceClass(preferences.skinTone === t.id)} style={{ padding: 18, textAlign: 'center' }} onClick={() => selectAndNext('skinTone', t.id)}>
                      <div style={{ height: 84, borderRadius: 10, marginBottom: 10, background: t.color }}></div>
                      <b style={{ padding: 0 }}>{t.label}</b>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 20 }}>Votre budget</h2>
                <div style={{ display: 'grid', gap: 12 }}>
                  {BUDGETS.map(b => (
                    <button key={b.id} className={choiceClass(preferences.budget === b.id)} style={{ padding: 18, textAlign: 'left' }} onClick={() => selectAndNext('budget', b.id)}>
                      <b style={{ padding: 0 }}>{b.label}</b>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step > 1 && (
              <button className="btn-ghost-line" onClick={() => setStep(step - 1)} style={{ marginTop: 24, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                <i className="fa-solid fa-arrow-left"></i> Retour
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="ai-card" style={{ textAlign: 'center', padding: 40 }}>
              <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '2.6rem', color: 'var(--orange)', marginBottom: 16 }}></i>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 14 }}>Notre recommandation pour vous</h2>
              <p style={{ fontSize: '1.05rem', maxWidth: 620, margin: '0 auto' }}>{recommendation}</p>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', margin: '32px 0 16px' }}>Produits recommandés</h3>
            <div className="products-grid">
              {suggested.map(p => (
                <article key={p.id} className="pcard" style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${p.id}`)}>
                  <div className="pcard__media">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="pcard__body">
                    <h3 className="pcard__name">{p.name}</h3>
                    <div className="pcard__foot">
                      <span className="pcard__price">{p.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="btn-line" style={{ marginTop: 32 }}>
              <button className="btn-ghost-line" onClick={reset} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                <i className="fa-solid fa-rotate-left"></i> Nouvelle recommandation
              </button>
              <button className="btn btn--yellow" onClick={() => navigate('/products')} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                Voir les produits <i className="fa-solid fa-arrow-right ico"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
