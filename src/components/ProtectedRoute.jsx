import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { isAuthenticated, loading, userRole } = useAuth()

  if (loading) {
    // Show loading screen while checking auth state
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#D4AF37' }}></div>
          <p style={{ color: '#4A4A4A' }}>Chargement...</p>
        </div>
      </div>
    )
  }

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // If a specific role is required, check it
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" replace />
  }

  // User is authenticated and has required role, show the component
  return children
}
