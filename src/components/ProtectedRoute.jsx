import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, requiredRole = null, requiredRoles = [] }) {
  const { isAuthenticated, loading, userRole } = useAuth()

  if (loading) {
    return <div className="loading">Chargement...</div>
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Check if user has required role
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />
  }

  // Check if user has one of the required roles
  if (requiredRoles.length > 0 && !requiredRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}
