import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/components/TemplateFooter.css'

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
  { cls: 's-fb', label: 'Facebook', faIcon: 'fa-brands fa-facebook-f' },
  { cls: 's-ig', label: 'Instagram', faIcon: 'fa-brands fa-instagram' },
  { cls: 's-tt', label: 'TikTok', faIcon: 'fa-brands fa-tiktok' },
  { cls: 's-yt', label: 'YouTube', faIcon: 'fa-brands fa-youtube' },
  { cls: 's-in', label: 'LinkedIn', faIcon: 'fa-brands fa-linkedin-in' },
  { cls: 's-x', label: 'X', faIcon: 'fa-brands fa-x-twitter' }
]

export default function TemplateFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="logo">
          <img src="/new_logo.png" alt="VPTT - Valorisation et Promotion des Textiles Traditionnels" className="logo__img" />
        </Link>

        <div className="footer__mid">
          <div className="footer__sections">
            {FOOTER_SECTIONS.map((section, idx) => (
              <div key={idx} className="footer__section">
                <h4>{section.title}</h4>
                <ul className="footer__links">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__socials">
            <h4>Suivez-nous</h4>
            <div className="social">
              {SOCIALS.map(s => (
                <a key={s.label} href="#" className={s.cls} aria-label={s.label}>
                  <i className={s.faIcon}></i>
                </a>
              ))}
            </div>
          </div>
          <p className="copy">
            © {new Date().getFullYear()} VPPT. Tous droits réservés. <span className="sep">|</span>{' '}
            <span className="motto">Le textile africain au service du monde.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
