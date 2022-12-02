import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'bored-gamers.firebaseapp.com',
  projectId: 'bored-gamers',
  storageBucket: 'bored-gamers.appspot.com',
  messagingSenderId: '121290249056',
  appId: '1:121290249056:web:3b91568845e140a601c405',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
