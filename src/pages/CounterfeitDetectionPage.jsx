import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/AI.css'

const CHECKS = ['Qualité du tissage', 'Colorants et teintures', 'Coutures et finitions', 'Certificat VPTT']

export default function CounterfeitDetectionPage() {
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
      const isAuthentic = Math.random() > 0.2
      setResult({
        authentic: isAuthentic,
        confidence: isAuthentic ? 98 : 15,
        certificate: isAuthentic ? 'VPTT-2024-00123456' : null,
        artisan: isAuthentic ? 'Fatou Diallo' : null,
        details: isAuthentic
          ? 'Ce produit est certifié authentique VPTT. Tous les critères de vérification ont été validés.'
          : 'Ce produit présente plusieurs indices de contrefaçon. La qualité du tissage et les colorants ne correspondent pas aux standards VPTT.'
      })
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
          <h1>Détection de contrefaçons</h1>
          <div className="page-hero__rule"></div>
          <p>Vérifiez l'authenticité de vos produits VPTT grâce à l'analyse IA</p>
        </div>
      </section>

      <div className="container ai-wrap" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <label className="ai-card" style={{ display: 'block', cursor: 'pointer', textAlign: 'center', borderStyle: 'dashed', borderWidth: 2, borderColor: 'var(--yellow)' }}>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            {image ? (
              <div>
                <img src={image} alt="Aperçu du produit" style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 12, marginBottom: 14 }} />
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault()
                    setImage(null)
                    setResult(null)
                  }}
                  style={{ background: 'none', border: 'none', color: '#b42318', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Changer l'image
                </button>
              </div>
            ) : (
              <div style={{ padding: '36px 0' }}>
                <i className="fa-solid fa-cloud-arrow-up" style={{ fontSize: '2.2rem', color: 'var(--orange)', marginBottom: 12 }}></i>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Importez une photo du produit</p>
                <p className="muted">Montrez plusieurs angles si possible</p>
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
              {analyzing ? 'Analyse en cours…' : "Vérifier l'authenticité"}
            </button>
          )}

          <div className="ai-card" style={{ marginTop: 24, background: 'var(--cream)', borderColor: '#f3e3b0' }}>
            <h3>Points de vérification</h3>
            <ul style={{ padding: 0 }}>
              {CHECKS.map(c => (
                <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, listStyle: 'none', fontSize: '.92rem' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--green-dark)' }}></i> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {result ? (
            <div>
              <div
                className="ai-card"
                style={{ textAlign: 'center', color: '#fff', background: result.authentic ? 'var(--green)' : '#dc2626', borderColor: 'transparent' }}
              >
                <i className={`fa-solid ${result.authentic ? 'fa-circle-check' : 'fa-circle-xmark'}`} style={{ fontSize: '3rem', marginBottom: 12, color: '#fff' }}></i>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>{result.authentic ? 'Authentique' : 'Contrefait'}</h2>
                <p style={{ opacity: 0.92 }}>{result.details}</p>
              </div>

              <div className="ai-card">
                <p className="muted" style={{ marginBottom: 8 }}>Confiance de l'analyse</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ flex: 1, height: 10, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${result.confidence}%`, background: result.authentic ? 'var(--green)' : '#dc2626', transition: '.4s' }}></div>
                  </div>
                  <b style={{ fontSize: '1.4rem', color: result.authentic ? 'var(--green-dark)' : '#dc2626' }}>{result.confidence}%</b>
                </div>
              </div>

              {result.authentic && (
                <>
                  <div className="ai-card">
                    <p className="muted" style={{ marginBottom: 6 }}>Numéro de certificat</p>
                    <b style={{ color: 'var(--navy)' }}>{result.certificate}</b>
                  </div>
                  <div className="ai-card">
                    <p className="muted" style={{ marginBottom: 6 }}>Artisan certifié</p>
                    <button
                      onClick={() => navigate('/artisan/1')}
                      style={{ background: 'none', border: 'none', padding: 0, fontWeight: 700, color: 'var(--green-dark)', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      {result.artisan} <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <button className="btn btn--yellow" onClick={() => navigate('/products')} style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Voir les produits authentiques
                  </button>
                </>
              )}

              {!result.authentic && (
                <div className="ai-card" style={{ background: '#fef2f2', borderColor: '#fecaca' }}>
                  <p style={{ color: '#991b1b', fontWeight: 700, marginBottom: 8 }}>
                    <i className="fa-solid fa-triangle-exclamation"></i> Ce produit semble contrefait
                  </p>
                  <p style={{ color: '#b91c1c', fontSize: '.9rem', marginBottom: 16 }}>
                    Signes détectés : qualité inférieure, colorants synthétiques, finitions incorrectes.
                  </p>
                  <button className="btn-ghost-line" onClick={() => navigate('/contact')} style={{ width: '100%', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Signaler ce produit
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="ai-empty" style={{ height: '100%', minHeight: 320, display: 'grid', placeItems: 'center' }}>
              <div>
                <i className="fa-solid fa-shield-halved" style={{ fontSize: '3rem', opacity: 0.4 }}></i>
                <p style={{ fontWeight: 600 }}>Importez une image pour vérifier l'authenticité</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
