import { createContext, useEffect, useReducer } from "react";

export const GoogleAuthContext = createContext()

export const googleAuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGGEDINWITHGOOGLE':
      return { googleUser: action.payload }
      break;
    case 'LOGGEDOUTWITHGOOGLE':
      return { googleUser: null }
      break;
    default:
      return state
      break;
  }
}

export const GoogleAuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(googleAuthReducer, {
    googleUser:null
   })

   useEffect(()=>{
     const user = JSON.parse(localStorage.getItem('user'))

    if(user){
      dispatch({ type:'LOGGEDINWITHGOOGLE', payload:user})
    }
   }, [])
  console.log('AuthContext state:', state)
  return (
   <GoogleAuthContext.Provider value={{...state, dispatch}}>
      { children }
   </GoogleAuthContext.Provider>
  );
}