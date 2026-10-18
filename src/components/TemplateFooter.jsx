import { Link } from 'react-router-dom'
import '../styles/pages/TemplateHome.css'

const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Avantages', path: '/#avantages' },
  { label: 'Catégories', path: '/#categories' },
  { label: 'Contact', path: '/contact' }
]

const FOOTER_SECTIONS = [
  {
    title: 'Boutique',
    links: [
      { label: 'Tous les produits', path: '/products' },
      { label: 'Pagnes & tissus', path: '/products' },
      { label: 'Vêtements', path: '/femme' },
      { label: 'Accessoires', path: '/products' }
    ]
  },
  {
    title: 'Découvrir',
    links: [
      { label: 'Artisans', path: '/our-creators' },
      { label: 'Patrimoine', path: '/heritage' },
      { label: 'Boutiques & Publicité', path: '/boutiques-publicite' },
      { label: 'Galerie', path: '/gallery' }
    ]
  },
  {
    title: 'Légal',
    links: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Conditions d\'utilisation', path: '/terms' },
      { label: 'Politique de confidentialité', path: '/privacy' }
    ]
  }
]

const SOCIALS = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Twitter', icon: '𝕏' },
  { label: 'Instagram', icon: '◎' },
  { label: 'YouTube', icon: '▶' },
  { label: 'LinkedIn', icon: 'in' }
]

export default function TemplateFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link to="/" className="footer-brand">
          <img src="/new_logo.png" alt="VPPT - Valorisation et Promotion des Textiles Traditionnels" className="footer-logo" />
        </Link>

        <nav className="footer-nav-main">
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.path}>{link.label}</Link>
          ))}
        </nav>

        <div className="footer-right">
          <div className="socials">
            {SOCIALS.map(s => (
              <a key={s.label} href="#" className={`social-${s.label.toLowerCase()}`} aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
          <p className="footer-slogan">Le textile africain<br />au service du monde</p>
        </div>
      </div>

      <div className="footer-sections">
        {FOOTER_SECTIONS.map((section, idx) => (
          <div key={idx} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map(link => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="copyright-bar">
        © {new Date().getFullYear()} VPPT. Tous droits réservés.
      </div>
    </footer>
  )
}
