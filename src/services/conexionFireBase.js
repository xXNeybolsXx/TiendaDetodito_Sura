////Para Poder Identificarme En La Web
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDd5ovw7wEqTniEwY4ZVmrfamHCh8dWWC0",
    authDomain: "tiendacomfama-554dc.firebaseapp.com",
    projectId: "tiendacomfama-554dc",
    storageBucket: "tiendacomfama-554dc.appspot.com",
    messagingSenderId: "120057339841",
    appId: "1:120057339841:web:ad6f9c24e6aae9b10a1940",
    measurementId: "G-SFD10QFE60"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

