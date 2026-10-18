import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/AI.css'

const MOCK_RESULTS = [
  {
    type: 'Pagne wax',
    confidence: 98,
    origin: 'Sénégal',
    artisan: 'Fatou Diallo',
    description: 'Tissu wax traditionnel 100 % coton',
    culturalSignificance: "Représente l'identité et le statut social dans la culture sénégalaise."
  },
  {
    type: 'Kente traditionnel',
    confidence: 95,
    origin: 'Ghana',
    artisan: 'Kofi Mensah',
    description: 'Tissu kente authentique tissé à la main',
    culturalSignificance: "Symbole de prestige et d'honorabilité au Ghana."
  },
  {
    type: 'Bogolan',
    confidence: 92,
    origin: 'Mali',
    artisan: 'Aminata Traoré',
    description: 'Toile bogolan aux motifs géométriques traditionnels',
    culturalSignificance: 'Représente les histoires et la sagesse ancestrale malienne.'
  }
]

export default function TissueRecognitionPage() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)

  const handleImageUpload = e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = event => {
      setImage(event.target.result)
      setResult(null)
    }
    reader.readAsDataURL(file)
  }

  const handleAnalyze = () => {
    if (!image) return
    setAnalyzing(true)
    setTimeout(() => {
      setResult(MOCK_RESULTS[Math.floor(Math.random() * MOCK_RESULTS.length)])
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/ai-studio" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour au studio IA
          </Link>
          <span className="tag">IA</span>
          <h1>Reconnaissance de tissus</h1>
          <div className="page-hero__rule"></div>
          <p>Identifiez le type de tissu, son origine et sa signification culturelle</p>
        </div>
      </section>

      <div className="container ai-wrap" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <label className="ai-card" style={{ display: 'block', cursor: 'pointer', textAlign: 'center', borderStyle: 'dashed', borderWidth: 2, borderColor: 'var(--yellow)' }}>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            {image ? (
              <div>
                <img src={image} alt="Aperçu du tissu" style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 12, marginBottom: 14 }} />
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault()
                    setImage(null)
                    setResult(null)
                  }}
                  style={{ background: 'none', border: 'none', color: '#b42318', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  <i className="fa-solid fa-xmark"></i> Changer l'image
                </button>
              </div>
            ) : (
              <div style={{ padding: '36px 0' }}>
                <i className="fa-solid fa-cloud-arrow-up" style={{ fontSize: '2.2rem', color: 'var(--orange)', marginBottom: 12 }}></i>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Cliquez pour importer une image</p>
                <p className="muted">Ou glissez-déposez votre image ici</p>
              </div>
            )}
          </label>

          {image && (
            <button
              className="btn btn--yellow"
              onClick={handleAnalyze}
              disabled={analyzing}
              style={{ width: '100%', justifyContent: 'center', marginTop: 20, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <i className={`fa-solid ${analyzing ? 'fa-spinner fa-spin' : 'fa-wand-magic-sparkles'}`}></i>
              {analyzing ? 'Analyse en cours…' : "Analyser l'image"}
            </button>
          )}

          <div className="ai-card" style={{ marginTop: 24, background: 'var(--cream)', borderColor: '#f3e3b0' }}>
            <h3><i className="fa-solid fa-lightbulb"></i> Conseils pour de meilleurs résultats</h3>
            <ul style={{ padding: 0 }}>
              {['Utilisez une bonne lumière naturelle', 'Photographiez le tissu de près', 'Montrez les motifs et les détails', 'Évitez les reflets et les ombres'].map(tip => (
                <li key={tip} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, listStyle: 'none', fontSize: '.92rem' }}>
                  <i className="fa-solid fa-check" style={{ color: 'var(--green-dark)' }}></i> {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {result ? (
            <div>
              <div className="ai-card">
                <p className="muted" style={{ marginBottom: 8 }}>Confiance de l'identification</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ flex: 1, height: 10, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${result.confidence}%`, background: 'var(--yellow-dark)', transition: '.4s' }}></div>
                  </div>
                  <b style={{ fontSize: '1.4rem', color: 'var(--orange)' }}>{result.confidence}%</b>
                </div>
              </div>

              <div className="ai-card">
                <p className="muted" style={{ marginBottom: 6 }}>Type de tissu</p>
                <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>{result.type}</h2>
                <p style={{ marginBottom: 18 }}>{result.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <p className="muted" style={{ fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>Origine</p>
                    <b style={{ color: 'var(--navy)' }}>{result.origin}</b>
                  </div>
                  <div>
                    <p className="muted" style={{ fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>Artisan</p>
                    <button
                      onClick={() => navigate('/artisan/1')}
                      style={{ background: 'none', border: 'none', padding: 0, fontWeight: 700, color: 'var(--green-dark)', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      {result.artisan} <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ai-card">
                <h3><i className="fa-solid fa-landmark"></i> Signification culturelle</h3>
                <p>{result.culturalSignificance}</p>
              </div>

              <button className="btn btn--yellow" onClick={() => navigate('/products')} style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                Voir les produits similaires
              </button>
            </div>
          ) : (
            <div className="ai-empty" style={{ minHeight: 320, display: 'grid', placeItems: 'center' }}>
              <div>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '3rem', opacity: 0.4 }}></i>
                <p style={{ fontWeight: 600 }}>Importez une image pour lancer l'analyse</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
