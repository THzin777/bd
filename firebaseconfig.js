//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Configuração correta do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEl48Do1c_aLUzhyOiT-JApIuMn34Tons",
  authDomain: "teste-b28fe.firebaseapp.com",
  databaseURL: "https://teste-b28fe-default-rtdb.firebaseio.com",
  projectId: "teste-b28fe",
  storageBucket: "teste-b28fe.firebasestorage.app",
  messagingSenderId: "240592542465",
  appId: "1:240592542465:web:8a94c735325968c78e1900",
  measurementId: "G-S2BJ6B6JCX"
};


// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Firestore
const db = getFirestore(app);
export { db, app };
