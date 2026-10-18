import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'
import '../styles/pages/AI.css'

const TEMPLATES = [
  { id: 1, name: 'Événement', icon: 'fa-calendar-days', bg: 'linear-gradient(135deg,#14215a,#2b3f8f)' },
  { id: 2, name: 'Promotion', icon: 'fa-tags', bg: 'linear-gradient(135deg,#f08c00,#fcc419)' },
  { id: 3, name: 'Artisan', icon: 'fa-hand-holding-heart', bg: 'linear-gradient(135deg,#0d4f20,#14692b)' },
  { id: 4, name: 'Festival', icon: 'fa-masks-theater', bg: 'linear-gradient(135deg,#8a5a00,#f2b300)' }
]

export default function AIPosterCreatorPage() {
  const [templateId, setTemplateId] = useState(null)
  const [colors, setColors] = useState({ primary: '#14215a', secondary: '#14692b' })
  const template = TEMPLATES.find(t => t.id === templateId)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/ai-studio" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour au studio IA
          </Link>
          <span className="tag">IA</span>
          <h1>Créateur d'affiches</h1>
          <div className="page-hero__rule"></div>
          <p>Créez des affiches pour vos événements et vos collections</p>
        </div>
      </section>

      <div className="container ai-wrap">
        <div>
          {template ? (
            <div className="ai-preview" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
              <div>
                <i className={`fa-solid ${template.icon}`} style={{ fontSize: '2.4rem', marginBottom: 14 }}></i>
                <h2>Votre affiche</h2>
                <p>Modèle : {template.name}</p>
              </div>
            </div>
          ) : (
            <div className="ai-empty">
              <i className="fa-solid fa-image"></i>
              <p>Sélectionnez un modèle pour commencer.</p>
            </div>
          )}

          {template && (
            <div className="ai-card" style={{ marginTop: 20 }}>
              <h3><i className="fa-solid fa-palette"></i> Couleurs</h3>
              <div className="ai-colors">
                <label>
                  Couleur principale
                  <input type="color" value={colors.primary} onChange={e => setColors({ ...colors, primary: e.target.value })} />
                </label>
                <label>
                  Couleur secondaire
                  <input type="color" value={colors.secondary} onChange={e => setColors({ ...colors, secondary: e.target.value })} />
                </label>
              </div>
              <div className="ai-actions" style={{ marginTop: 22 }}>
                <button className="btn btn--yellow"><i className="fa-solid fa-pen"></i> Modifier</button>
                <button className="btn-ghost-line"><i className="fa-solid fa-download"></i> Télécharger</button>
              </div>
            </div>
          )}
        </div>

        <aside className="ai-card">
          <h3><i className="fa-solid fa-layer-group"></i> Modèles</h3>
          <div className="ai-templates">
            {TEMPLATES.map(t => (
              <button
                key={t.id}
                className={`ai-template ${templateId === t.id ? 'is-active' : ''}`}
                onClick={() => setTemplateId(t.id)}
              >
                <div className="ai-template__art" style={{ background: t.bg }}>
                  <i className={`fa-solid ${t.icon}`}></i>
                </div>
                <b>{t.name}</b>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
