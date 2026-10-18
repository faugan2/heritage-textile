import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const languages = {
  fr: {
    name: 'Français',
    direction: 'ltr'
  },
  en: {
    name: 'English',
    direction: 'ltr'
  },
  ar: {
    name: 'العربية',
    direction: 'rtl'
  }
}

export const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    products: 'Produits',
    artisans: 'Artisans',
    cart: 'Panier',
    wallet: 'Porte-monnaie',
    aiStudio: 'AI Studio',
    account: 'Mon compte',
    logout: 'Déconnexion',

    // Common
    add: 'Ajouter',
    remove: 'Supprimer',
    save: 'Enregistrer',
    cancel: 'Annuler',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    price: 'Prix',
    quantity: 'Quantité',
    total: 'Total',

    // E-commerce
    addToCart: 'Ajouter au panier',
    checkout: 'Passer la commande',
    continueShipping: 'Continuer mes achats',
    viewProfile: 'Voir le profil',

    // AI Features
    tissueRecognition: 'Reconnaissance de Tissus',
    aiAssistant: 'Assistant IA',
    counterFeitDetection: 'Détection de Contrefaçons',
    recommendations: 'Recommandations',
    translation: 'Traduction',
    styling: 'Assistant Mode'
  },
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    artisans: 'Artisans',
    cart: 'Cart',
    wallet: 'Wallet',
    aiStudio: 'AI Studio',
    account: 'My Account',
    logout: 'Log Out',

    // Common
    add: 'Add',
    remove: 'Remove',
    save: 'Save',
    cancel: 'Cancel',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',

    // E-commerce
    addToCart: 'Add to Cart',
    checkout: 'Checkout',
    continueShipping: 'Continue Shopping',
    viewProfile: 'View Profile',

    // AI Features
    tissueRecognition: 'Tissue Recognition',
    aiAssistant: 'AI Assistant',
    counterFeitDetection: 'Counterfeit Detection',
    recommendations: 'Recommendations',
    translation: 'Translation',
    styling: 'Styling Assistant'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    artisans: 'الحرفيون',
    cart: 'السلة',
    wallet: 'المحفظة',
    aiStudio: 'استوديو الذكاء الاصطناعي',
    account: 'حسابي',
    logout: 'تسجيل الخروج',

    // Common
    add: 'إضافة',
    remove: 'إزالة',
    save: 'حفظ',
    cancel: 'إلغاء',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    price: 'السعر',
    quantity: 'الكمية',
    total: 'المجموع',

    // E-commerce
    addToCart: 'أضف إلى السلة',
    checkout: 'إتمام الشراء',
    continueShipping: 'متابعة التسوق',
    viewProfile: 'عرض الملف الشخصي',

    // AI Features
    tissueRecognition: 'التعرف على النسيج',
    aiAssistant: 'مساعد الذكاء الاصطناعي',
    counterFeitDetection: 'كشف التزييف',
    recommendations: 'التوصيات',
    translation: 'الترجمة',
    styling: 'مساعد الأسلوب'
  }
}

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('fr')
  const [direction, setDirection] = useState('ltr')

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setCurrentLanguage(lang)
      setDirection(languages[lang].direction)
      localStorage.setItem('preferredLanguage', lang)
    }
  }

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.fr[key] || key
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      direction,
      changeLanguage,
      t,
      languages,
      translations
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
