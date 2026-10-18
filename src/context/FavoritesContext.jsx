import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (product) => {
    setFavorites(prevItems => {
      const exists = prevItems.find(item => item.id === product.id)
      if (exists) {
        return prevItems
      }
      return [...prevItems, product]
    })
  }

  const removeFromFavorites = (productId) => {
    setFavorites(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const toggleFavorite = (product) => {
    const exists = favorites.find(item => item.id === product.id)
    if (exists) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId)
  }

  const getFavoritesCount = () => {
    return favorites.length
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoritesCount,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider')
  }
  return context
}
