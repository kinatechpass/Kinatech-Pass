import { useContext } from "react";
import { GoogleAuthContext } from '../Context/GoogleAuthContext'


export const useGoogleAuthContext = () => {
  const context = useContext(GoogleAuthContext) 

  if (!context) {
    throw Error('useGoogleAuthContext must be used inside an GoogleAuthContextProvider')
  }

  return context
}