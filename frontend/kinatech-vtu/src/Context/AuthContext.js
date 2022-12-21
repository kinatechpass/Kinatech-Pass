import { createContext, useReducer } from "react";

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
 const [state, dispatch] = useReducer(authReducer, {
    authUser:null
 })

  console.log("User AuthContext State:", state)
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  );
}