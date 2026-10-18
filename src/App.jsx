import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'
import MainLayout from './layouts/MainLayout'

// Pages - Auth
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PasswordResetPage from './pages/PasswordResetPage'

// Pages - E-commerce
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPageV2 from './pages/CartPageV2'
import CheckoutPageV2 from './pages/CheckoutPageV2'
import ArtisanProfilePageV2 from './pages/ArtisanProfilePageV2'
import WalletPageV2 from './pages/WalletPageV2'
import PaymentPage from './pages/PaymentPage'
import FavoritesPage from './pages/FavoritesPage'
import AccountPage from './pages/AccountPage'
import SearchPage from './pages/SearchPage'
import { WishlistPage, SubscriptionsPage, ReviewsPage, ArtisanProfilePage } from './pages/AdditionalPages'

// Pages - Culturelles
import GalleryPage from './pages/GalleryPage'
import ExhibitionsPage from './pages/ExhibitionsPage'
import FestivalsPage from './pages/FestivalsPage'
import OurCreatorsPage from './pages/OurCreatorsPage'

// Pages - Médias
import MediaHubPage from './pages/MediaHubPage'

// Pages - IA Studio
import AIStudioPageV2 from './pages/AIStudioPageV2'
import TissueRecognitionPage from './pages/TissueRecognitionPage'
import AIAssistantPage from './pages/AIAssistantPage'
import CounterfeitDetectionPage from './pages/CounterfeitDetectionPage'
import RecommendationsPage from './pages/RecommendationsPage'
import StylingPage from './pages/StylingPage'
import TranslationPage from './pages/TranslationPage'
import AIPosterCreatorPage from './pages/AIPosterCreatorPage'
import { AIPhotoEditorPage, AIContentGeneratorPage, AIMarketingPage } from './pages/AIDashboardPages'

// Pages - Artisan
import ArtisanDashboardPage from './pages/ArtisanDashboardPage'
import { ArtisanProductsPage, ArtisanOrdersPage, ArtisanStatsPage, ArtisanPayoutPage } from './pages/ArtisanSubPages'

// Pages - Admin
import AdminDashboardPage from './pages/AdminDashboardPage'
import { AdminUsersPage, AdminProductsPage, AdminOrdersPage, AdminContentPage, AdminAnalyticsPage, AdminSecurityPage } from './pages/AdminSubPages'

// Pages - Info
import AboutPage from './pages/AboutPage'
import BenefitsPage from './pages/BenefitsPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import ReturnPolicyPage from './pages/ReturnPolicyPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import SubcategoriesPage from './pages/SubcategoriesPage'
import CollectionsPage from './pages/CollectionsPage'
import ProjectPage from './pages/ProjectPage'
import AcademyPage from './pages/AcademyPage'
import BlockchainPage from './pages/BlockchainPage'
import AfricaExpansionPage from './pages/AfricaExpansionPage'
import AfricaCountryPage from './pages/AfricaCountryPage'
import AmbassadorsPage from './pages/AmbassadorsPage'
import ReferralSystemPage from './pages/ReferralSystemPage'
import ImpactDashboardPage from './pages/ImpactDashboardPage'
import GlobalExpansionPage from './pages/GlobalExpansionPage'
import PartnershipsPage from './pages/PartnershipsPage'

// Pages - Account
import ProfilePage from './pages/ProfilePage'
import OrdersPage from './pages/OrdersPage'
import SettingsPage from './pages/SettingsPage'

// Pages - New Poles
import InvestorsPage from './pages/InvestorsPage'
import ShareholdersPage from './pages/ShareholdersPage'
import FriendsOfVPTTPage from './pages/FriendsOfVPTTPage'
import CustomerServicePage from './pages/CustomerServicePage'
import EscrowSystemPage from './pages/EscrowSystemPage'
import RewardsPage from './pages/RewardsPage'
import OrderBookPage from './pages/OrderBookPage'
import OfficialBadgesPage from './pages/OfficialBadgesPage'
import EthicalCommerceShariahPage from './pages/EthicalCommerceShariahPage'
import GovernancePage from './pages/GovernancePage'
import HeritageMuseumPage from './pages/HeritageMuseumPage'
import FutureEvolutionPage from './pages/FutureEvolutionPage'

// Components
import ScrollToTop from './components/ScrollToTop'
import TemplateHomePage from './pages/TemplateHomePage'
import ShopsAdsPage from './pages/ShopsAdsPage'
import ProtectedRoute from './components/ProtectedRoute'

// Pages - Role-based dashboards
import RegisterRole from './pages/RegisterRole'
import ArtisanDashboard from './pages/ArtisanDashboard'
import ClientDashboard from './pages/ClientDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Unauthorized from './pages/Unauthorized'

// Artisan pages
import ArtisanProducts from './pages/artisan/ArtisanProducts'
import ArtisanSales from './pages/artisan/ArtisanSales'
import ArtisanProfile from './pages/artisan/ArtisanProfile'
import ArtisanAnalytics from './pages/artisan/ArtisanAnalytics'

// Client pages
import ClientOrders from './pages/client/ClientOrders'
import ClientWishlist from './pages/client/ClientWishlist'
import ClientProfile from './pages/client/ClientProfile'
import ClientAddresses from './pages/client/ClientAddresses'

// Admin pages
import AdminUsers from './pages/admin/AdminUsers'
import AdminProducts from './pages/admin/AdminProducts'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminSettings from './pages/admin/AdminSettings'

function AppContent() {
  // const { isAuthenticated } = useAuth()

  /*if (!isAuthenticated) {
    return <MaintenancePage />
  }*/

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Homepage avec son propre design */}
        <Route path="/" element={<TemplateHomePage />} />

        {/* Auth Pages (sans MainLayout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-role" element={<RegisterRole />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Toutes les autres pages avec MainLayout */}
        <Route element={<MainLayout />}>
          {/* Role-based Dashboards */}
          <Route path="/artisan" element={<ProtectedRoute requiredRole="artisan"><ArtisanDashboard /></ProtectedRoute>} />
          <Route path="/artisan/products" element={<ProtectedRoute requiredRole="artisan"><ArtisanProducts /></ProtectedRoute>} />
          <Route path="/artisan/sales" element={<ProtectedRoute requiredRole="artisan"><ArtisanSales /></ProtectedRoute>} />
          <Route path="/artisan/profile" element={<ProtectedRoute requiredRole="artisan"><ArtisanProfile /></ProtectedRoute>} />
          <Route path="/artisan/analytics" element={<ProtectedRoute requiredRole="artisan"><ArtisanAnalytics /></ProtectedRoute>} />

          <Route path="/client" element={<ProtectedRoute requiredRole="client"><ClientDashboard /></ProtectedRoute>} />
          <Route path="/client/orders" element={<ProtectedRoute requiredRole="client"><ClientOrders /></ProtectedRoute>} />
          <Route path="/client/wishlist" element={<ProtectedRoute requiredRole="client"><ClientWishlist /></ProtectedRoute>} />
          <Route path="/client/profile" element={<ProtectedRoute requiredRole="client"><ClientProfile /></ProtectedRoute>} />
          <Route path="/client/addresses" element={<ProtectedRoute requiredRole="client"><ClientAddresses /></ProtectedRoute>} />

          <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute requiredRole="admin"><AdminUsers /></ProtectedRoute>} />
          <Route path="/admin/products" element={<ProtectedRoute requiredRole="admin"><AdminProducts /></ProtectedRoute>} />
          <Route path="/admin/analytics" element={<ProtectedRoute requiredRole="admin"><AdminAnalytics /></ProtectedRoute>} />
          <Route path="/admin/settings" element={<ProtectedRoute requiredRole="admin"><AdminSettings /></ProtectedRoute>} />

          <Route path="/boutiques-publicite" element={<ShopsAdsPage />} />
          {/* E-commerce */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPageV2 />} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPageV2 /></ProtectedRoute>} />
          <Route path="/wallet" element={<ProtectedRoute><WalletPageV2 /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="/subscriptions" element={<ProtectedRoute><SubscriptionsPage /></ProtectedRoute>} />
          <Route path="/reviews" element={<ProtectedRoute><ReviewsPage /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="/account/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/account/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
          <Route path="/account/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

          {/* Pôle Culturel */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/our-creators" element={<OurCreatorsPage />} />
          <Route path="/artisan/:id" element={<ArtisanProfilePageV2 />} />

          {/* Pôle Médias */}
          <Route path="/media-hub" element={<MediaHubPage />} />

          {/* AI Studio */}
          <Route path="/ai-studio" element={<AIStudioPageV2 />} />
          <Route path="/ai-tissue-recognition" element={<TissueRecognitionPage />} />
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/ai-counterfeit-detection" element={<CounterfeitDetectionPage />} />
          <Route path="/ai-recommendations" element={<RecommendationsPage />} />
          <Route path="/ai-styling" element={<StylingPage />} />
          <Route path="/ai-translation" element={<TranslationPage />} />
          <Route path="/ai-poster-creator" element={<AIPosterCreatorPage />} />
          <Route path="/ai-photo-editor" element={<AIPhotoEditorPage />} />
          <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/ai-marketing" element={<AIMarketingPage />} />

          {/* Artisan Dashboard */}
          <Route path="/artisan/dashboard" element={<ArtisanDashboardPage />} />
          <Route path="/artisan/products" element={<ArtisanProductsPage />} />
          <Route path="/artisan/orders" element={<ArtisanOrdersPage />} />
          <Route path="/artisan/stats" element={<ArtisanStatsPage />} />
          <Route path="/artisan/payout" element={<ArtisanPayoutPage />} />

          {/* Admin Dashboard */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/content" element={<AdminContentPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/security" element={<AdminSecurityPage />} />

          {/* Info Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          <Route path="/africa" element={<AfricaExpansionPage />} />
          <Route path="/africa/:id" element={<AfricaCountryPage />} />
          <Route path="/ambassadors" element={<AmbassadorsPage />} />
          <Route path="/referral" element={<ReferralSystemPage />} />
          <Route path="/impact" element={<ImpactDashboardPage />} />
          <Route path="/global" element={<GlobalExpansionPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />

          {/* New Poles */}
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/shareholders" element={<ShareholdersPage />} />
          <Route path="/friends-of-vptt" element={<FriendsOfVPTTPage />} />
          <Route path="/friends-of-vppt" element={<Navigate to="/friends-of-vptt" replace />} />
          <Route path="/customer-service" element={<CustomerServicePage />} />
          <Route path="/escrow" element={<EscrowSystemPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/ordres" element={<OrderBookPage />} />
          <Route path="/badges" element={<OfficialBadgesPage />} />
          <Route path="/ethical-commerce" element={<EthicalCommerceShariahPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/heritage" element={<HeritageMuseumPage />} />
          <Route path="/evolution" element={<FutureEvolutionPage />} />

          <Route path="/femme" element={<SubcategoriesPage />} />
          <Route path="/femme/:subcategory" element={<ProductsPage />} />
          <Route path="/homme" element={<SubcategoriesPage />} />
          <Route path="/homme/:subcategory" element={<ProductsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App

