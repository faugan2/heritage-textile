import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import CtaBand from '../components/CtaBand'
const hero = '/images/hero2.jpg'
const devices = '/images/boutique-appareils.png'
const megaphone = '/images/megaphone.png'
import '../styles/pages/TemplateHome.css'

const CHIPS = [
  { faIcon: 'fa-solid fa-store', label: <>Vendez</> },
  { faIcon: 'fa-solid fa-bullhorn', label: <>Faites-vous<br />connaître</> },
  { faIcon: 'fa-solid fa-chart-column', label: <>Augmentez<br />vos ventes</> }
]

const SHOP_CHECKS = [
  'Boutique personnalisée',
  'Statistiques de ventes',
  'Catalogue de produits illimité',
  'Paiement sécurisé (SDA…)',
  'Gestion des commandes',
  'Livraison internationale',
  'Profil artisan ou entreprise'
]

const AD_CHECKS = [
  'Produits sponsorisés',
  'Publicité ciblée par pays',
  'Boutiques mises en avant',
  'Promotion des artisans',
  'Bannières promotionnelles',
  'Visibilité internationale',
  'Campagnes événementielles'
]

const WHY_ITEMS = [
  { faIcon: 'fa-solid fa-earth-africa', cls: 'c-green-t', text: 'Valorisation du patrimoine africain' },
  { faIcon: 'fa-solid fa-handshake', cls: 'c-orange-t', text: 'Commerce équitable et transparent' },
  { faIcon: 'fa-solid fa-people-group', cls: 'c-green-t', text: 'Soutien direct aux artisans' },
  { faIcon: 'fa-solid fa-shield-halved', cls: 'c-yellow-t', text: 'Traçabilité blockchain' },
  { faIcon: 'fa-solid fa-globe', cls: 'c-green-t', text: 'Expansion internationale' },
  { faIcon: 'fa-solid fa-leaf', cls: 'c-yellow-t', text: 'Plateforme éthique et innovante' }
]

export default function TemplateHomePage() {
  const navigate = useNavigate()

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
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__content reveal">
              <span className="tag">BOUTIQUES &amp; PUBLICITÉ</span>
              <h1>Développez votre activité <br />sur <span className="green">VPTT</span></h1>
              <p>VPTT met à votre disposition des outils simples et efficaces pour vendre vos produits et promouvoir votre marque à l'échelle locale et internationale.</p>
              <div className="hero__chips">
                {CHIPS.map((chip, idx) => (
                  <div key={idx} className="chip">
                    <i className={chip.faIcon}></i>
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__img" style={{ backgroundImage: `url(${hero})` }}></div>
            </div>
          </div>
        </section>

        <section className="spaces container">
          <article className="space space--shop reveal">
            <div className="space__head">
              <span className="space__icon">
                <i className="fa-solid fa-store"></i>
              </span>
              <div>
                <h2>Espace Boutiques</h2>
                <h3>Créez votre boutique professionnelle</h3>
                <p>Ouvrez votre espace de vente personnalisé et présentez vos produits à des acheteurs du monde entier.</p>
              </div>
            </div>
            <ul className="checks">
              {SHOP_CHECKS.map(item => (
                <li key={item}>
                  <span className="check-dot"><i className="fa-solid fa-check"></i></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space__foot">
              <button className="btn btn--green" onClick={() => navigate('/account')}>
                Ouvrir ma boutique <i className="fa-solid fa-arrow-right ico"></i>
              </button>
              <img className="devices-img" src={devices} alt="" aria-hidden="true" />
            </div>
          </article>

          <article className="space space--ads reveal">
            <div className="space__head">
              <span className="space__icon">
                <i className="fa-solid fa-bullhorn"></i>
              </span>
              <div>
                <h2>Espace Publicité</h2>
                <h3>Donnez plus de visibilité à vos produits</h3>
                <p>Mettez en avant vos créations et votre boutique grâce à nos solutions publicitaires efficaces.</p>
              </div>
            </div>
            <ul className="checks">
              {AD_CHECKS.map(item => (
                <li key={item}>
                  <span className="check-dot"><i className="fa-solid fa-check"></i></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space__foot">
              <button className="btn btn--yellow" onClick={() => navigate('/media-hub')}>
                Lancer une campagne <i className="fa-solid fa-arrow-right ico"></i>
              </button>
              <img className="mega-phone-img" src={megaphone} alt="" aria-hidden="true" />
            </div>
          </article>
        </section>

        <section className="why container">
          <h2 className="section-title reveal">Pourquoi choisir VPTT ?</h2>
          <div className="why__grid">
            {WHY_ITEMS.map(item => (
              <div key={item.text} className="why__item reveal">
                <i className={`${item.faIcon} ${item.cls} ico`}></i>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBand reveal />
      </main>

      <TemplateFooter />
    </div>
  )
}
