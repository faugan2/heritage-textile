import { Link, useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Dashboard.css'
import '../styles/pages/AI.css'

const FEATURES = [
  {
    id: 'recognition',
    title: 'Reconnaissance de tissus',
    icon: 'fa-magnifying-glass',
    description: 'Identifiez un tissu à partir d\'une photo',
    details: 'Reconnaissez le type de tissu, ses motifs et son origine culturelle.',
    action: 'Essayer',
    path: '/ai-tissue-recognition'
  },
  {
    id: 'assistant',
    title: 'Assistant VPTT',
    icon: 'fa-robot',
    description: 'Un guide disponible 24 h/24',
    details: 'Posez vos questions sur les textiles, les artisans et vos commandes.',
    action: 'Discuter',
    path: '/ai-assistant'
  },
  {
    id: 'counterfeit',
    title: 'Détection de contrefaçons',
    icon: 'fa-shield-halved',
    description: 'Vérifiez l\'authenticité d\'un produit',
    details: 'Analysez les photos pour repérer les contrefaçons et confirmer l\'authenticité.',
    action: 'Vérifier',
    path: '/ai-counterfeit-detection'
  },
  {
    id: 'recommendations',
    title: 'Recommandations',
    icon: 'fa-wand-magic-sparkles',
    description: 'Des produits adaptés à vos goûts',
    details: 'Une sélection de produits proposée selon vos préférences et vos achats.',
    action: 'Explorer',
    path: '/ai-recommendations'
  },
  {
    id: 'translation',
    title: 'Traduction',
    icon: 'fa-language',
    description: 'Échangez dans votre langue',
    details: 'Traduisez vos messages pour communiquer avec les artisans et les clients.',
    action: 'Traduire',
    path: '/ai-translation'
  },
  {
    id: 'styling',
    title: 'Conseils de style',
    icon: 'fa-shirt',
    description: 'Des tenues selon l\'occasion',
    details: 'Recevez une suggestion de tenue selon l\'occasion, votre morphologie et votre budget.',
    action: 'Styliser',
    path: '/ai-styling'
  },
  {
    id: 'poster',
    title: 'Créateur d\'affiches',
    icon: 'fa-image',
    description: 'Affiches pour vos événements',
    details: 'Composez une affiche à partir de modèles et de vos couleurs.',
    action: 'Créer',
    path: '/ai-poster-creator'
  }
]

const BENEFITS = [
  { icon: 'fa-bolt', title: 'Rapide', text: 'Des réponses et des analyses en quelques instants' },
  { icon: 'fa-globe', title: 'Multilingue', text: 'Français, anglais et arabe pour commencer' },
  { icon: 'fa-lock', title: 'Sécurisé', text: 'Vos données sont protégées par un chiffrement SSL' },
  { icon: 'fa-user-check', title: 'Personnalisé', text: 'Des suggestions adaptées à vos préférences' }
]

export default function AIStudioPageV2() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">IA</span>
          <h1>VPTT AI Studio</h1>
          <div className="page-hero__rule"></div>
          <p>Découvrez, identifiez et stylisez vos textiles grâce à l'intelligence artificielle</p>
        </div>
      </section>

      <div className="container" style={{ padding: '48px 0 24px' }}>
        <div className="dash-links" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))' }}>
          {FEATURES.map(f => (
            <article key={f.id} className="ai-card" style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, display: 'grid', placeItems: 'center', background: 'var(--cream)', color: 'var(--orange)', fontSize: '1.25rem' }}>
                <i className={`fa-solid ${f.icon}`}></i>
              </div>
              <h3 style={{ marginBottom: 0 }}>{f.title}</h3>
              <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '.92rem' }}>{f.description}</p>
              <p className="muted" style={{ fontSize: '.88rem', flex: 1 }}>{f.details}</p>
              <button
                onClick={() => navigate(f.path)}
                className="btn btn--yellow"
                style={{ alignSelf: 'flex-start', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                {f.action} <i className="fa-solid fa-arrow-right ico"></i>
              </button>
            </article>
          ))}
        </div>
      </div>

      <section className="section-band" style={{ marginTop: 48 }}>
        <div className="container">
          <div className="section-heading">
            <h2>Pourquoi utiliser VPTT AI</h2>
          </div>
          <div className="dash-links" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))' }}>
            {BENEFITS.map(b => (
              <div key={b.title} className="ai-card" style={{ margin: 0 }}>
                <i className={`fa-solid ${b.icon}`} style={{ fontSize: '1.3rem', color: 'var(--green-dark)', marginBottom: 12, display: 'block' }}></i>
                <h3 style={{ marginBottom: 6 }}>{b.title}</h3>
                <p className="muted" style={{ fontSize: '.9rem' }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '56px 0 64px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 20 }}>Prêt à essayer ?</h2>
        <Link to="/ai-tissue-recognition" className="btn btn--yellow">
          Essayer la reconnaissance <i className="fa-solid fa-arrow-right ico"></i>
        </Link>
      </div>
    </div>
  )
}
