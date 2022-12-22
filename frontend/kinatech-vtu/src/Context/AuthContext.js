import { createContext, useEffect, useReducer } from "react";

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTHLOGIN':
      return { authUser:action.payload }
      break;
    case 'AUTHLOGOUT':
      return { authUser: null }
      break;
    default:
      break;
  }
}
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
 const [state, set] = useReducer(authReducer, {
    authUser:null
 })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authUser'))
    if (!user) {
      return set({ type: 'AUTHLOGOUT' })
    }
    if (user) {
      return set({ type: 'AUTHLOGIN', payload: user })
    }

  }, [])

  console.log("User AuthContext State:", state)
  return (
    <AuthContext.Provider value={{...state, set}}>
      { children }
    </AuthContext.Provider>
  );
}