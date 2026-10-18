import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import '../styles/pages/TemplateHome.css'

const HERO_IMAGE = '/images/hero.jpg'

const CATEGORIES = [
  { id: 1, label: 'Tissus', image: '/images/categories/tissus.png', path: '/products' },
  { id: 2, label: 'Vêtements', image: '/images/categories/vetements.png', path: '/femme' },
  { id: 3, label: 'Accessoires', image: '/images/categories/accessoires.png', path: '/products' },
  { id: 4, label: 'Artisanat', image: '/images/categories/homme.png', path: '/our-creators' },
  { id: 5, label: 'Boutiques & Publicité', image: '/images/categories/pagnes.png', path: '/boutiques-publicite' },
  { id: 6, label: 'Et bien plus...', image: '/images/categories/accessoires.png', path: '/products' }
]

const WHY_ITEMS = [
  { icon: 'fa-solid fa-person-hiking', text: 'Valorisation du patrimoine africain' },
  { icon: 'fa-solid fa-handshake', text: 'Soutien aux communautés locales' },
  { icon: 'fa-solid fa-leaf', text: 'Accès à un marché mondial' },
  { icon: 'fa-solid fa-lightbulb', text: 'Une opportunité d\'investissement éthique' }
]

export default function TemplateHomePage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

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
    <div className="min-h-screen bg-white">
      <TemplateHeader />

      <main>
        {/* HERO SECTION */}
        <section className="home-hero reveal">
          <div className="home-hero__bg" style={{ backgroundImage: `url(${HERO_IMAGE})` }}></div>
          <div className="container home-hero__content">
            <div className="home-hero__text">
              <p className="home-hero__tag">ARTISANS • CULTURE • AFRIQUE • MONDE</p>
              <h1>Découvrez et soutenez les textiles traditionnels africains sur VPTT !</h1>
              <p>Une plateforme moderne qui valorise les artisans, promeut le patrimoine culturel africain et facilite l'accès aux plus belles créations textiles du continent.</p>
              <div className="home-hero__ctas">
                <button
                  className="btn btn--primary"
                  onClick={() => navigate(isAuthenticated ? '/products' : '/register')}
                >
                  {isAuthenticated ? 'Découvrir' : 'Créer un compte'}
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="btn btn--secondary">
                  Voir la vidéo <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES STRIP */}
        <section className="home-features reveal">
          <div className="container">
            <div className="features-grid">
              <div className="feature-item">
                <i className="fa-solid fa-handshake"></i>
                <p>Soutien aux artisans</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-shield-halved"></i>
                <p>Produits authentiques</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-leaf"></i>
                <p>Commerce éthique</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-globe"></i>
                <p>International</p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="home-categories reveal">
          <div className="container">
            <div className="home-categories__header">
              <h2>Une richesse culturelle à portée de main</h2>
              <p>Explorez une large gamme de textiles, vêtements, accessoires et créations artisanales</p>
            </div>
            <div className="categories-grid">
              {CATEGORIES.map(cat => (
                <div
                  key={cat.id}
                  className="category-card reveal"
                  onClick={() => navigate(cat.path)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && navigate(cat.path)}
                >
                  <div
                    className="category-card__img"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  ></div>
                  <span className="category-card__label">{cat.label}</span>
                </div>
              ))}
            </div>
            <div className="home-categories__footer">
              <button
                className="btn btn--outline"
                onClick={() => navigate('/products')}
              >
                Découvrir toutes les catégories <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>

        {/* WHY JOIN SECTION */}
        <section className="home-why reveal">
          <div className="container">
            <div className="home-why__grid">
              <div className="home-why__content">
                <h2>Pourquoi rejoindre VPPT ?</h2>
                <p>Bien plus qu'une plateforme, c'est un mouvement !</p>
                <ul className="why-list">
                  {WHY_ITEMS.map((item, idx) => (
                    <li key={idx}>
                      <i className={item.icon}></i>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn--primary"
                  onClick={() => navigate(isAuthenticated ? '/account' : '/register')}
                >
                  {isAuthenticated ? 'Gérer mon profil' : 'S\'inscrire maintenant'}
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="home-why__image">
                <img src={HERO_IMAGE} alt="Femme artisane" />
                <div className="home-why__badge">
                  <p><em>Ensemble pour<br/>un avenir meilleur</em></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TemplateFooter />
    </div>
  )
}
