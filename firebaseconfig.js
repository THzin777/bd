 //chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

 
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getFirestore } from  "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
  export {db,app};