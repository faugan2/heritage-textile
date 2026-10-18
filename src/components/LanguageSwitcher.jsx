import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-[#D4AF37] transition-all text-sm font-semibold"
        style={{ color: '#2C2C2C' }}
      >
        <i className="fa-solid fa-globe"></i>
        <span>{currentLanguage.toUpperCase()}</span>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => {
                changeLanguage(code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-3 text-left text-sm font-semibold transition-all flex items-center gap-3 ${
                currentLanguage === code
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-l-4 border-[#D4AF37]'
                  : 'text-[#2C2C2C] hover:bg-gray-50'
              }`}
            >
              <span>{lang.name}</span>
              {currentLanguage === code && (
                <i className="fa-solid fa-check" style={{ marginLeft: 'auto', color: '#D4AF37' }}></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
