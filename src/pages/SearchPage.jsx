import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../data/products'
import '../styles/template/base.css'
import '../styles/components/ProductCard.css'
import '../styles/pages/Products.css'
import '../styles/pages/Search.css'

const PRICE_MIN = 0
const PRICE_MAX = 200

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '')
  }, [searchParams])

  const hasFilters = searchTerm !== '' || minPrice !== '' || maxPrice !== ''

  const results = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    const min = minPrice === '' ? PRICE_MIN : parseFloat(minPrice)
    const max = maxPrice === '' ? PRICE_MAX : parseFloat(maxPrice)

    return allProducts.filter(p => {
      const haystack = `${p.name} ${p.category} ${p.artisan} ${p.description}`.toLowerCase()
      const matchesTerm = term === '' || haystack.includes(term)
      const matchesPrice = p.priceNum >= min && p.priceNum <= max
      return matchesTerm && matchesPrice
    })
  }, [searchTerm, minPrice, maxPrice])

  const reset = () => {
    setSearchTerm('')
    setMinPrice('')
    setMaxPrice('')
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">RECHERCHE</span>
          <h1>Trouvez votre textile</h1>
          <div className="page-hero__rule"></div>
          <p>Recherchez par nom, catégorie, artisan ou description</p>
        </div>
      </section>

      <div className="container shop">
        <aside className="shop__sidebar">
          <div className="filter-card">
            <h3 className="filter-title">Recherche</h3>
            <div className="search-field">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Pagne, kente, Fatou Diallo…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-card">
            <h3 className="filter-title">Prix</h3>
            <div className="price-fields">
              <label>
                Min
                <input type="number" min="0" placeholder="0 €" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
              </label>
              <label>
                Max
                <input type="number" min="0" placeholder="200 €" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
              </label>
            </div>
          </div>

          {hasFilters && (
            <button className="reset-btn" onClick={reset}>
              <i className="fa-solid fa-rotate-left"></i> Réinitialiser
            </button>
          )}
        </aside>

        <div>
          <div className="toolbar">
            <p className="toolbar__count">
              {results.length} résultat{results.length > 1 ? 's' : ''}
              {hasFilters && <span> pour votre recherche</span>}
            </p>
          </div>

          {results.length > 0 ? (
            <div className="products-grid">
              {results.map(product => (
                <div key={product.id}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Aucun résultat</p>
              <p>Essayez d'autres mots-clés ou élargissez la fourchette de prix</p>
              <button className="btn btn--yellow" onClick={reset}>Réinitialiser la recherche</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
