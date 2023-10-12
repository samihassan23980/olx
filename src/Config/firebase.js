// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCELBDif9IX_bWENJNph-3oZ9YxOOsn4nE",
    authDomain: "olxsdad.firebaseapp.com",
    projectId: "olxsdad",
    storageBucket: "olxsdad.appspot.com",
    messagingSenderId: "95597977650",
    appId: "1:95597977650:web:7375530ad4ff09619d1c2b",
    measurementId: "G-QBQSMFL9EZ"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  function signin(email , password){

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('after login' + user)
      useNavigate('/Home')
      alert('login')
    
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }

  

  function signup(email , password){
    

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
  alert('sign in confirm')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  }



  export {
    signin,
    signup
  }