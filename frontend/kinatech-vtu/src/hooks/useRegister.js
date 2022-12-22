import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from 'react-router';


export const useRegister = () => {
   const [errorMsg, seterror] = useState(null)
   const [Loading, setloading] = useState(null)
  const navigate = useNavigate() 
  const { set } = useAuthContext()

   const signup = async (email, phone, password) => {
     setloading(true)
     seterror(null)
     const response = await fetch('http://localhost:4000/api/v1/account/register', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email, phone, password })

     })

     const json = await response.json()

     if (response.ok) {
       localStorage.setItem('authUser', JSON.stringify(json))
       set({ type:'AUTHLOGIN', payload: json})
       setloading(false)
       navigate('/Account')
       const auth = JSON.parse(localStorage.getItem('authUser'))
       const name = auth.details.Email.split("@")[0]
       toast.success(`Welcome! ${name} `, {
         position: toast.POSITION.TOP_CENTER
       });
       return console.log(json)
     }


     if (!response.ok) {
       seterror(json)
       setloading(false)
       toast.error(`${errorMsg.error}`, {
         position: toast.POSITION.TOP_CENTER
       });
       return console.log(json)
     }
   
     seterror(json)
   }

   return { errorMsg, Loading, signup}
}