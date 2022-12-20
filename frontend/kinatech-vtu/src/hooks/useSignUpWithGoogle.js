
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState } from 'react';
import { useGoogleAuthContext } from '../hooks/useGoogleAuthContext'
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyAAuXn197IRidCsXp1gCnskDsOHPE1M644",
  authDomain: "kinatech-pay.firebaseapp.com",
  projectId: "kinatech-pay",
  storageBucket: "kinatech-pay.appspot.com",
  messagingSenderId: "200134492717",
  appId: "1:200134492717:web:2ca21b80e546f52840eea4",
  measurementId: "G-10LFF79L63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = getAuth();

export const useSignUpWithGoogle = () => {
       const [loading, setloading] = useState(null)
       const [error, seterror] = useState(null)
       const [hasSignedupwithGoogle, sethasSignedupwithGoogle] = useState(false)
       const { dispatch } = useGoogleAuthContext()
      const user = JSON.parse(localStorage.getItem('user'))
       
      //  const user = auth.currentUser
      // const [loading, setloading] = useState(null)

  const signupwithgoogle = async (GoogleAuth) => {
      setloading(true)
      await firebase.auth().signInWithRedirect(GoogleAuth);
      setloading(false)
     
    }
     firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        dispatch({ type: 'LOGGEDINWITHGOOGLE', payload: JSON.parse(localStorage.getItem('user')) })
      
        // const email = user.email
        // const password = user.uid
        // const phone = '0908765434'
        // const response = await fetch('/api/v1/account/register', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/josn' },
        //   body: JSON.stringify({ email, password, phone })

        // })

        // const json = await response.json()

        // if (response.ok) {
        //   return json
        // }

        return localStorage.setItem('user', JSON.stringify(user))
      }
    });

   
    return { loading, signupwithgoogle}
}
