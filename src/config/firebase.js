import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyB-vQnuHyGK4dVFaFa2N-MZAfextw59HPk',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'my-streakers.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'my-streakers',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'my-streakers.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '990322731756',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:990322731756:web:aa67fc448ca93811fc53c9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)

export default app
