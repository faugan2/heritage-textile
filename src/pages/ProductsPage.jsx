import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useParams, useNavigate, useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../data/products'
import '../styles/template/base.css'
import '../styles/components/ProductCard.css'
import '../styles/pages/Products.css'

export default function ProductsPage() {
  const [searchParams] = useSearchParams()
  const { subcategory } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const categoryParam = location.pathname.split('/')[1]
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState('popular')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  useEffect(() => {
    if (subcategory) {
      const subcategoryNames = {
        robes: 'Robes',
        tops: 'Tops & Blouses',
        pantalons: 'Pantalons',
        jupes: 'Jupes',
        accessoires: 'Accessoires',
        chaussures: 'Chaussures',
        ensembles: 'Ensembles',
        chemises: 'Chemises',
        tshirts: 'T-shirts',
        vestes: 'Vestes & Blazers'
      }
      const displayName = subcategoryNames[subcategory] || subcategory
      setSelectedCategory(displayName)
    } else {
      const categoryParam = searchParams.get('category')
      if (categoryParam) {
        setSelectedCategory(categoryParam)
      }
    }
  }, [searchParams, subcategory])


  const categories = ['Tous', 'Pagnes', 'Tissus', 'Vêtements', 'Accessoires']
  const hasActiveFilters = selectedCategory !== 'Tous' || priceRange[0] > 0 || priceRange[1] < 200

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (selectedCategory !== 'Tous') {
      if (subcategory) {
        filtered = filtered.filter(p => p.subcategory === selectedCategory)
      } else {
        filtered = filtered.filter(p => p.category === selectedCategory)
      }
    }

    filtered = filtered.filter(p => p.priceNum >= priceRange[0] && p.priceNum <= priceRange[1])

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.priceNum - b.priceNum)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.priceNum - a.priceNum)
    } else if (sortBy === 'newest') {
      filtered.reverse()
    }

    return filtered
  }, [selectedCategory, priceRange, sortBy, subcategory])

  const handleResetFilters = () => {
    if (subcategory) {
      setPriceRange([0, 200])
    } else {
      setSelectedCategory('Tous')
      setPriceRange([0, 200])
      setSortBy('popular')
    }
  }

  const FilterContent = () => (
    <>
      {!subcategory && (
        <div className="filter-card">
          <h3 className="filter-title">Catégories</h3>
          <div className="filter-cats">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cat-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="filter-card">
        <h3 className="filter-title">Prix</h3>
        <div className="range-group">
          <label>Min <span>{priceRange[0]}€</span></label>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
          />
          <label>Max <span>{priceRange[1]}€</span></label>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>
      </div>

      <div className="filter-card">
        <h3 className="filter-title">Trier par</h3>
        <select className="select-field" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="popular">Populaire</option>
          <option value="newest">Récent</option>
          <option value="price-low">Prix : bas à haut</option>
          <option value="price-high">Prix : haut à bas</option>
        </select>
        {hasActiveFilters && (
          <button onClick={handleResetFilters} className="reset-btn">
            <i className="fa-solid fa-rotate-left"></i> Réinitialiser
          </button>
        )}
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          {subcategory && (
            <button className="page-back" onClick={() => navigate(`/${categoryParam}`)}>
              <i className="fa-solid fa-arrow-left"></i> Retour aux catégories
            </button>
          )}
          <span className="tag">BOUTIQUE</span>
          <h1>{subcategory ? selectedCategory : 'Tous les produits'}</h1>
          <div className="page-hero__rule"></div>
          <p>Découvrez notre sélection complète de mode africaine authentique</p>
        </div>
      </section>

      <div className="container shop">
        <aside className="shop__sidebar">
          <FilterContent />
        </aside>

        <div>
          <div className="toolbar">
            <p className="toolbar__count">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
              {hasActiveFilters && <span> (filtré{filteredProducts.length > 1 ? 's' : ''})</span>}
            </p>
            <div className="toolbar__actions">
              <button className="filter-toggle" onClick={() => setShowMobileFilters(!showMobileFilters)}>
                <i className="fa-solid fa-sliders"></i> Filtres
              </button>
            </div>
          </div>

          {showMobileFilters && (
            <aside className="shop__sidebar--mobile" style={{ display: showMobileFilters ? undefined : 'none', marginBottom: 24 }}>
              <FilterContent />
            </aside>
          )}

          {!subcategory && (
            <div className="chip-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cat-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Aucun produit trouvé</p>
              <p>Essayez d'ajuster vos filtres pour voir plus de résultats</p>
              <button onClick={handleResetFilters} className="btn btn--yellow">
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
