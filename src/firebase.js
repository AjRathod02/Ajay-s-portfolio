import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyA8uwxxpS_1pu1yNf78eiIWCH7E59od0R0',
  authDomain: 'ajay-s-portfolio-40932.firebaseapp.com',
  projectId: 'ajay-s-portfolio-40932',
  storageBucket: 'ajay-s-portfolio-40932.firebasestorage.app',
  messagingSenderId: '157204918701',
  appId: '1:157204918701:web:2e0e15f0e481821095f124',
  measurementId: 'G-49N2CVNTFY',
}

export const app = initializeApp(firebaseConfig)

/** Analytics only in production and when the browser supports it (avoids dev noise / errors). */
export async function initAnalytics() {
  if (!import.meta.env.PROD) return
  if (!(await isSupported())) return
  getAnalytics(app)
}
