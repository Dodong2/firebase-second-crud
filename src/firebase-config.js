import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBn6fbcVjis0QFeZuAftjYUlkc3esr_oT0",
  authDomain: "todo-cfea6.firebaseapp.com",
  projectId: "todo-cfea6",
  storageBucket: "todo-cfea6.firebasestorage.app",
  messagingSenderId: "554372099750",
  appId: "1:554372099750:web:bcae3911e6861e7b14ce67",
  measurementId: "G-YLQ0DVQK5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)