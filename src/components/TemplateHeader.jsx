import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/template/base.css'
import '../styles/components/TemplateHeader.css'

const NAV_ITEMS = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/project' },
  { label: 'Avantages', path: '/project' },
  { label: 'Catégories', path: '/products' }
]

const PLUS_CARDS = [
  { faIcon: 'fa-solid fa-bag-shopping', color: 'c-blue', title: 'Catalogue avancé', desc: 'Découvrez toutes les catégories de produits', path: '/products' },
  { faIcon: 'fa-solid fa-bullhorn', color: 'c-green', title: 'Actualités', desc: 'Restez informé des événements et nouveautés', path: '/media-hub' },
  { faIcon: 'fa-solid fa-shield-halved', color: 'c-orange', title: 'Investisseurs', desc: 'Soutenez et investissez dans le projet VPTT', path: '/investors' },
  { faIcon: 'fa-solid fa-chart-line', color: 'c-purple', title: 'Expansion', desc: 'Notre présence dans le monde', path: '/global' },
  { faIcon: 'fa-solid fa-users', color: 'c-teal', title: 'Gouvernance', desc: 'Une gestion transparente et responsable', path: '/governance' },
  { faIcon: 'fa-solid fa-headset', color: 'c-red', title: 'Support 24/7', desc: 'Nous sommes là pour vous aider', path: '/customer-service' }
]

export default function TemplateHeader() {
  const navigate = useNavigate()
  const { getCartCount } = useCart()
  const { pathname } = useLocation()
  const [navOpen, setNavOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState("")

  const closeAll = () => {
    setNavOpen(false)
    setMegaOpen(false)
    setOpenSub(null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    const onKey = e => {
      if (e.key === 'Escape') {
        closeAll()
        setSearchOpen(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (!megaOpen) return
    const onDocClick = () => setMegaOpen(false)
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [megaOpen])

  const go = path => {
    closeAll()
    navigate(path)
  }

  const isActive = item => {
    if (item.path) return item.path === pathname
    return item.sub.some(s => s.path === pathname)
  }

  const overlayOn = navOpen || megaOpen

  return (
    <>
      <header className="header" style={scrolled ? { boxShadow: '0 6px 20px rgba(0,0,0,.08)' } : undefined}>
        <div className="container header__inner">
          <Link to="/" className="logo">
            <img src="/new_logo.png" alt="VPTT - Valorisation et Promotion des Textiles Traditionnels" className="logo__img" />
          </Link>

          <nav className={`nav ${navOpen ? 'open' : ''}`}>
            <ul className="nav__list">
              {NAV_ITEMS.map(item => (
                <li
                  key={item.label}
                  className={item.sub ? `has-sub ${openSub === item.label ? 'open' : ''}` : ''}
                >
                  {item.sub ? (
                    <>
                      <button
                        className={`nav__link ${isActive(item) ? 'active' : ''}`}
                        onClick={() => {
                          if (window.innerWidth <= 992) {
                            setOpenSub(openSub === item.label ? null : item.label)
                          }
                        }}
                      >
                        {item.label} <i className="fa-solid fa-chevron-down ico"></i>
                      </button>
                      <ul className="sub">
                        {item.sub.map(s => (
                          <li key={s.label}>
                            <button onClick={() => go(s.path)}>{s.label}</button>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <button
                      className={`nav__link ${isActive(item) ? 'active' : ''}`}
                      onClick={() => go(item.path)}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <div className="plus-wrap">
              <button
                className="btn-plus"
                aria-expanded={megaOpen}
                onClick={e => {
                  e.stopPropagation()
                  setMegaOpen(!megaOpen)
                  setNavOpen(false)
                }}
              >
                Plus <i className="fa-solid fa-arrow-right ico"></i>
              </button>

              <div className={`mega ${megaOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="mega__head">
                  <h3>Découvrez plus de services</h3>
                  <button onClick={() => go('/products')}>
                    Tout voir <i className="fa-solid fa-arrow-right ico"></i>
                  </button>
                </div>
                <div className="mega__grid">
                  {PLUS_CARDS.map(card => (
                    <button key={card.title} className="mega__card" onClick={() => go(card.path)}>
                      <span className={`mega__icon ${card.color}`}>
                        <i className={card.faIcon}></i>
                      </span>
                      <span>
                        <strong>{card.title}</strong>
                        <small>{card.desc}</small>
                      </span>
                      <span className="arrow"><i className="fa-solid fa-chevron-right"></i></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="icon-btn" aria-label="Rechercher" onClick={() => setSearchOpen(!searchOpen)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Link to="/account" className="icon-btn" aria-label="Mon compte">
              <i className="fa-regular fa-user"></i>
            </Link>
            <Link to="/cart" className="icon-btn cart" aria-label="Panier">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart__count">{getCartCount()}</span>
            </Link>
            <button
              className={`burger ${navOpen ? 'open' : ''}`}
              aria-label="Menu"
              onClick={() => {
                setNavOpen(!navOpen)
                setMegaOpen(false)
              }}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div className={`search-bar ${searchOpen ? 'open' : ''}`}>
          <div className="container">
            <form onSubmit={e => {
              e.preventDefault()
              const term = query.trim()
              setSearchOpen(false)
              navigate(term ? `/search?q=${encodeURIComponent(term)}` : "/search")
            }}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Rechercher un produit, un artisan, une boutique…"
              />
              <button type="submit">Rechercher</button>
            </form>
          </div>
        </div>
      </header>

      <div className={`overlay ${overlayOn ? 'show' : ''}`} onClick={closeAll}></div>
    </>
  )
}
