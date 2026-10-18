import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/components/TemplateFooter.css'

const FOOTER_LINKS = [
  { label: 'À propos', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Conditions d\'utilisation', path: '/terms' },
  { label: 'Politique de confidentialité', path: '/privacy' }
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
          <div className="footer__row">
            <ul className="footer__links">
              {FOOTER_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="social">
              <span>Suivez-nous</span>
              {SOCIALS.map(s => (
                <a key={s.label} href="#" className={s.cls} aria-label={s.label}>
                  <i className={s.faIcon}></i>
                </a>
              ))}
            </div>
          </div>
          <p className="copy">
            © {new Date().getFullYear()} VPTT. Tous droits réservés. <span className="sep">|</span>{' '}
            <span className="motto">Notre patrimoine, notre valeur, notre avenir.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
