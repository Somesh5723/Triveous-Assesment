import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAzpOjLPsKzJEmZ9IgrfTJ3V9EzXLXozIs",
    authDomain: "triveous-web-app.firebaseapp.com",
    projectId: "triveous-web-app",
    storageBucket: "triveous-web-app.appspot.com",
    messagingSenderId: "485202498931",
    appId: "1:485202498931:web:0f2ad3bb991dbadc2b2106",
    databaseURL:'https://triveous-web-app-default-rtdb.firebaseio.com/'
    
   
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);