// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClD8zERD_hEYZLqgO9e-F3E-o1MrWXDr0",
  authDomain: "rnr-dna.firebaseapp.com",
  projectId: "rnr-dna",
  storageBucket: "rnr-dna.firebasestorage.app",
  messagingSenderId: "217339008202",
  appId: "1:217339008202:web:01318ab8a7b301ebfb5033",
  measurementId: "G-W4BFRWSDK1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
