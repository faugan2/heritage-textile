import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from './FaIcons'
import slide1 from '../images/slides/1.png'
import slide2 from '../images/slides/2.png'
import slide3 from '../images/slides/3.png'

export default function HeroImageCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const defaultImages = [
    { id: 1, src: slide1, alt: 'Mode Africaine 1' },
    { id: 2, src: slide2, alt: 'Mode Africaine 2' },
    { id: 3, src: slide3, alt: 'Mode Africaine 3' },
  ]

  const carouselImages = images.length > 0 ? images : defaultImages
  const totalImages = carouselImages.length

  const goToSlide = (index) => {
    setCurrentIndex((index + totalImages) % totalImages)
  }

  const nextSlide = () => {
    goToSlide(currentIndex + 1)
  }

  const prevSlide = () => {
    goToSlide(currentIndex - 1)
  }

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlay])

  return (
    <div
      className="relative group w-full max-w-lg"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Glow effect background */}
      <div className="absolute -inset-0 bg-gradient-to-br from-gold/30 via-magenta/25 to-emerald/30 rounded-3xl blur-3xl group-hover:blur-2xl transition duration-300"></div>

      {/* Gradient border frame */}
      <div className="relative p-1 rounded-3xl overflow-hidden shadow-2xl" style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #E61E8C 50%, #2D8659 100%)',
      }}>
        {/* Inner white frame with carousel */}
        <div className="relative bg-white rounded-3xl overflow-hidden" style={{ perspective: '1000px' }}>
          {/* Image container */}
          <div className="relative w-full bg-gray-100 h-64 md:h-96 lg:h-[500px]" style={{
            aspectRatio: 'auto',
          }}>
            {carouselImages.map((image, idx) => (
              <div
                key={image.id}
                className="absolute inset-0"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: idx === currentIndex ? 'rotateY(0deg)' : 'rotateY(90deg)',
                  transition: 'transform 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  pointerEvents: idx === currentIndex ? 'auto' : 'none',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{ color: '#D4AF37' }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{ color: '#D4AF37' }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dot Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: idx === currentIndex ? '24px' : '10px',
                  height: '10px',
                  backgroundColor: idx === currentIndex ? '#D4AF37' : 'rgba(255, 255, 255, 0.6)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/40 rounded-full text-white text-sm font-semibold">
            {currentIndex + 1} / {totalImages}
          </div>
        </div>
      </div>
    </div>
  )
}
