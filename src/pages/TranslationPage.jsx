import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/AI.css'

const LANGUAGES = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'yo', name: 'Yorùbá' },
  { code: 'am', name: 'አማርኛ' }
]

const COMMON_PHRASES = [
  { fr: 'Bonjour', en: 'Hello', ar: 'مرحبا' },
  { fr: 'Combien ça coûte ?', en: 'How much is it?', ar: 'كم يكلف؟' },
  { fr: 'Merci beaucoup', en: 'Thank you very much', ar: 'شكرا جزيلا' },
  { fr: 'Tissu magnifique', en: 'Beautiful fabric', ar: 'نسيج جميل' },
  { fr: 'Artisan local', en: 'Local artisan', ar: 'حرفي محلي' },
  { fr: 'Commerce équitable', en: 'Fair trade', ar: 'التجارة العادلة' }
]

// Dictionnaire de démonstration, en attendant le service de traduction
const DICTIONARY = {
  bonjour: { en: 'Hello', ar: 'مرحبا' },
  merci: { en: 'Thank you', ar: 'شكرا' },
  oui: { en: 'Yes', ar: 'نعم' },
  non: { en: 'No', ar: 'لا' },
  textile: { en: 'Textile', ar: 'نسيج' },
  artisan: { en: 'Artisan', ar: 'حرفي' }
}

export default function TranslationPage() {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLang, setSourceLang] = useState('fr')
  const [targetLang, setTargetLang] = useState('en')
  const [isTranslating, setIsTranslating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleTranslate = () => {
    if (!sourceText.trim()) return
    setIsTranslating(true)
    setTimeout(() => {
      let result = sourceText
      for (const [key, values] of Object.entries(DICTIONARY)) {
        result = result.replace(new RegExp(key, 'gi'), values[targetLang] || key)
      }
      setTranslatedText(result)
      setIsTranslating(false)
    }, 1500)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  const usePhrase = phrase => {
    setSourceText(phrase.fr)
    setSourceLang('fr')
    setTargetLang('en')
    setTranslatedText('')
  }

  const selectStyle = { width: '100%', padding: '11px 14px', border: '1px solid var(--border)', borderRadius: 10, font: 'inherit', background: '#fff' }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/ai-studio" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour au studio IA
          </Link>
          <span className="tag">IA</span>
          <h1>Traduction</h1>
          <div className="page-hero__rule"></div>
          <p>Échangez avec les artisans et les clients dans leur langue</p>
        </div>
      </section>

      <div className="container ai-wrap" style={{ gridTemplateColumns: '1fr 320px' }}>
        <div>
          <div className="ai-card">
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 18 }}>
              <label style={{ flex: 1, fontSize: '.84rem', fontWeight: 600, color: 'var(--muted)' }}>
                De
                <select value={sourceLang} onChange={e => setSourceLang(e.target.value)} style={{ ...selectStyle, marginTop: 6 }}>
                  {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
                </select>
              </label>
              <button className="btn-ghost-line" onClick={swapLanguages} aria-label="Inverser les langues" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: '11px 14px' }}>
                <i className="fa-solid fa-right-left"></i>
              </button>
              <label style={{ flex: 1, fontSize: '.84rem', fontWeight: 600, color: 'var(--muted)' }}>
                Vers
                <select value={targetLang} onChange={e => setTargetLang(e.target.value)} style={{ ...selectStyle, marginTop: 6 }}>
                  {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
                </select>
              </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="trad-grid">
              <div>
                <p style={{ fontSize: '.84rem', fontWeight: 600, color: 'var(--muted)', marginBottom: 6 }}>Texte original</p>
                <textarea
                  value={sourceText}
                  onChange={e => setSourceText(e.target.value)}
                  placeholder="Saisissez le texte à traduire…"
                  style={{ ...selectStyle, height: 190, resize: 'none' }}
                />
                <p style={{ fontSize: '.76rem', color: 'var(--muted)', marginTop: 6 }}>{sourceText.length} caractères</p>
              </div>
              <div>
                <p style={{ fontSize: '.84rem', fontWeight: 600, color: 'var(--muted)', marginBottom: 6 }}>Texte traduit</p>
                <textarea
                  value={translatedText}
                  readOnly
                  placeholder="La traduction apparaîtra ici…"
                  style={{ ...selectStyle, height: 190, resize: 'none', background: 'var(--cream)' }}
                />
                {translatedText && (
                  <button onClick={handleCopy} style={{ marginTop: 6, background: 'none', border: 'none', color: 'var(--green-dark)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.84rem' }}>
                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i> {copied ? 'Copié' : 'Copier le texte'}
                  </button>
                )}
              </div>
            </div>

            <button
              className="btn btn--yellow"
              onClick={handleTranslate}
              disabled={!sourceText.trim() || isTranslating}
              style={{ width: '100%', justifyContent: 'center', marginTop: 20, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {isTranslating ? 'Traduction en cours…' : 'Traduire'}
            </button>
          </div>
        </div>

        <aside>
          <div className="ai-card">
            <h3><i className="fa-solid fa-comments"></i> Phrases courantes</h3>
            <div style={{ display: 'grid', gap: 10 }}>
              {COMMON_PHRASES.map(p => (
                <button
                  key={p.fr}
                  onClick={() => usePhrase(p)}
                  style={{ textAlign: 'left', padding: 12, borderRadius: 12, border: '1px solid var(--border)', background: '#fff', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  <b style={{ display: 'block', fontSize: '.9rem', color: 'var(--navy)', marginBottom: 6 }}>{p.fr}</b>
                  <span style={{ fontSize: '.78rem', color: 'var(--muted)', marginRight: 10 }}>EN : {p.en}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--muted)' }}>AR : {p.ar}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ai-card" style={{ background: 'var(--cream)', borderColor: '#f3e3b0' }}>
            <h3><i className="fa-solid fa-language"></i> Langues disponibles</h3>
            <p style={{ fontSize: '.88rem' }}>Le français, l'anglais et l'arabe sont proposés en priorité. D'autres langues seront ajoutées progressivement.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
