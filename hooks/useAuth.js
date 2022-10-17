import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const AuthContext = createContext({
    //Initial state of the context is empty initally
});

export const AuthProvider = ({ children }) => {
  
  
  return (
    <AuthContext.Provider 
        value={{
            user: "Sonny"
        }}>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
    return useContext(AuthContext);
}

