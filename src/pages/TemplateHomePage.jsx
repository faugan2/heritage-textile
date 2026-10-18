import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import '../styles/pages/TemplateHome.css'

const CATEGORIES = [
  { id: 1, label: 'Tissus', image: '/images/cat-tissus.jpg', path: '/products' },
  { id: 2, label: 'Vêtements', image: '/images/cat-vetements.jpg', path: '/femme' },
  { id: 3, label: 'Accessoires', image: '/images/cat-accessoires.jpg', path: '/products' },
  { id: 4, label: 'Artisanat', image: '/images/cat-artisanat.jpg', path: '/our-creators' },
  { id: 5, label: 'Boutiques & Publicité', image: '/images/cat-boutiques.jpg', path: '/boutiques-publicite' }
]

const BENEFITS = [
  { icon: '♙', title: 'Soutien aux artisans', desc: 'Offrez de la visibilité aux\nartisans africains.' },
  { icon: '♧', title: 'Produits authentiques', desc: 'Des créations originales\net certifiées.' },
  { icon: '♧', title: 'Commerce éthique', desc: 'Une consommation responsable\net durable.' },
  { icon: '◎', title: 'International', desc: 'Du Togo à l\'Afrique, et partout\ndans le monde.' }
]

const WHY_ITEMS = [
  'Valorisation du patrimoine africain',
  'Soutien aux communautés locales',
  'Accès à un marché mondial',
  'Une opportunité d\'investissement éthique'
]

export default function TemplateHomePage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [showVideoDialog, setShowVideoDialog] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="homepage">
      <TemplateHeader />

      <main>
        {/* HERO SECTION */}
        <section className="hero reveal" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">ARTISANS · CULTURE · AFRIQUE · MONDE</p>
            <h1>Découvrez et soutenez<br />les <span>textiles traditionnels</span><br />africains sur <span>VPPT&nbsp;!</span></h1>
            <p className="intro">Une plateforme moderne qui valorise les artisans,<br className="desktop-only" /> promeut le patrimoine culturel africain et facilite l'accès<br className="desktop-only" /> aux plus belles créations textiles du continent.</p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => navigate(isAuthenticated ? '/products' : '/register')}
              >
                ♟ &nbsp; {isAuthenticated ? 'Découvrir' : 'Créer un compte'} <span>→</span>
              </button>
              <button className="btn btn-outline" onClick={() => setShowVideoDialog(true)}>
                ▷ &nbsp; Voir la vidéo
              </button>
            </div>
            <p className="trust"><span>♢</span> Une plateforme sûre · Transparente · Éthique</p>
          </div>
          <div className="hero-art">
            <img src="/images/hero-template.png" alt="Femme africaine portant les textiles traditionnels colorés" />
            <div className="hero-note">Nos tissus,<br />notre fierté&nbsp;!</div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="benefits">
          {BENEFITS.map((benefit, idx) => (
            <article key={idx}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </article>
          ))}
        </section>

        {/* CATEGORIES SECTION */}
        <section className="categories section-wrap" id="categories">
          <div className="section-copy">
            <p className="eyebrow">NOS UNIVERS</p>
            <h2>Une richesse culturelle<br />à portée de main</h2>
            <p>Explorez une large gamme de textiles, vêtements,<br className="desktop-only" /> accessoires et créations artisanales.</p>
            <button 
              className="btn btn-outline"
              onClick={() => navigate('/products')}
            >
              Découvrir toutes les catégories <span>→</span>
            </button>
          </div>
          <div className="category-grid" id="catalogue">
            {CATEGORIES.map(cat => (
              <a 
                key={cat.id}
                className="category-card" 
                href="#"
                onClick={(e) => { e.preventDefault(); navigate(cat.path); }}
                style={{ '--image': `url('${cat.image}')` }}
              >
                <span>{cat.label}</span>
              </a>
            ))}
            <a className="category-card more-card" href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>
              <span className="bag-icon">▱</span>
              <span>Et bien plus... <b>›</b></span>
            </a>
          </div>
        </section>

        {/* MOVEMENT SECTION */}
        <section className="movement reveal" id="apropos">
          <div className="movement-copy">
            <p className="eyebrow">POURQUOI REJOINDRE VPPT ?</p>
            <h2>Bien plus qu'une plateforme,<br />c'est un mouvement&nbsp;!</h2>
            <ul>
              {WHY_ITEMS.map((item, idx) => (
                <li key={idx}>✓ {item}</li>
              ))}
            </ul>
            <div className="movement-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate(isAuthenticated ? '/account' : '/register')}
              >
                ♟ &nbsp; {isAuthenticated ? 'Gérer mon profil' : 'S\'inscrire maintenant'} <span>→</span>
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/project')}>
                ⓘ &nbsp; En savoir plus
              </button>
            </div>
          </div>
          <div className="movement-art">
            <img src="/images/hero2.jpg" alt="Tissus colorés fabriqués artisanalement" />
            <div className="movement-note">Ensemble pour<br />un avenir meilleur</div>
          </div>
        </section>
      </main>

      <TemplateFooter />

      {/* VIDEO DIALOG */}
      {showVideoDialog && (
        <div className="video-dialog-overlay" onClick={() => setShowVideoDialog(false)}>
          <div className="video-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close" onClick={() => setShowVideoDialog(false)}>×</button>
            <div className="video-placeholder">
              <span>▷</span>
              <h2>Découvrez l'univers VPPT</h2>
              <p>La vidéo de présentation pourra être intégrée ici.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
