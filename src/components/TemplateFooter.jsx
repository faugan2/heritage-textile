import { Link } from 'react-router-dom'
import '../styles/pages/TemplateHome.css'

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
      { label: 'À propos', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Conditions d\'utilisation', path: '/terms' },
      { label: 'Politique de confidentialité', path: '/privacy' }
    ]
  }
]

const SOCIALS = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Instagram', icon: '◎' },
  { label: 'YouTube', icon: '▶' },
  { label: 'X', icon: '𝕏' },
  { label: 'LinkedIn', icon: 'in' }
]

export default function TemplateFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link to="/" className="brand">
          <span className="brand-mark">✦</span>
          <span className="brand-copy">
            <strong>VPPT</strong>
            <small>Valorisation et promotion<br />des textiles traditionnels</small>
          </span>
        </Link>
      </div>

      <nav className="footer-nav">
        {FOOTER_SECTIONS.flatMap(section => section.links).map(link => (
          <Link key={link.label} to={link.path}>{link.label}</Link>
        ))}
      </nav>

      <div className="socials">
        {SOCIALS.map(s => (
          <a key={s.label} href="#" aria-label={s.label}>{s.icon}</a>
        ))}
      </div>

      <p className="footer-slogan">
        Le textile africain<br />au service du monde <span>◆</span>
      </p>

      <small className="copyright">© {new Date().getFullYear()} VPPT. Tous droits réservés.</small>
    </footer>
  )
}
