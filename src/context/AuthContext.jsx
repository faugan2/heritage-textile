import { createContext, useContext, useState, useEffect } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userRole, setUserRole] = useState(null)

  // Enable persistence on app load
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
  }, [])

  // Listen to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setIsAuthenticated(true)

        // Get user role from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'her_users', currentUser.uid))
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role || 'user')
          } else {
            setUserRole('user')
          }
        } catch (error) {
          console.error('Error fetching user role:', error)
          setUserRole('user')
        }
      } else {
        setUser(null)
        setIsAuthenticated(false)
        setUserRole(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = async (email, password, displayName = '', role = 'client') => {
    try {
      // Validate role
      const validRoles = ['client', 'artisan', 'admin']
      if (!validRoles.includes(role)) {
        role = 'client'
      }

      // Create user account
      const result = await createUserWithEmailAndPassword(auth, email, password)
      const currentUser = result.user

      // Create user profile in Firestore (with her_ prefix)
      await setDoc(doc(db, 'her_users', currentUser.uid), {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: displayName || email.split('@')[0],
        role: role,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        // Artisan-specific fields
        ...(role === 'artisan' && {
          businessName: '',
          businessDescription: '',
          businessLogo: '',
          products: [],
          followers: 0,
          totalSales: 0,
        }),
        // Client-specific fields
        ...(role === 'client' && {
          shippingAddress: '',
          paymentMethods: [],
          orders: [],
          wishlist: [],
        }),
      })

      setUser(currentUser)
      setIsAuthenticated(true)
      setUserRole(role)
      return { success: true, user: currentUser, role: role }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setUser(result.user)
      setIsAuthenticated(true)

      // Get user role from Firestore
      const userDoc = await getDoc(doc(db, 'her_users', result.user.uid))
      if (userDoc.exists()) {
        setUserRole(userDoc.data().role || 'user')
      }

      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const currentUser = result.user

      const userRef = doc(db, 'her_users', currentUser.uid)
      const userDoc = await getDoc(userRef)
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || currentUser.email.split('@')[0],
          role: 'user',
          provider: 'google',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        })
        setUserRole('user')
      } else {
        setUserRole(userDoc.data().role || 'user')
      }

      setUser(currentUser)
      setIsAuthenticated(true)
      return { success: true, user: currentUser }
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        return { success: false, error: '' }
      }
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setIsAuthenticated(false)
      setUserRole(null)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    userRole,
    signup,
    login,
    loginWithGoogle,
    logout,
    // Keep backward compatibility with old API
    authenticate: login,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
