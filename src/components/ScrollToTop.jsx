import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    // Le navigateur ne doit pas restaurer l'ancienne position lors d'un changement de page
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  // useLayoutEffect : le retour en haut se fait avant l'affichage de la nouvelle page.
  // behavior 'instant' : évite l'animation de défilement définie par html { scroll-behavior: smooth }.
  // Second passage au frame suivant, au cas où la page finisse de se monter après le premier rendu.
  useLayoutEffect(() => {
    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    toTop()
    const frame = requestAnimationFrame(toTop)
    return () => cancelAnimationFrame(frame)
  }, [pathname, search])

  return null
}
