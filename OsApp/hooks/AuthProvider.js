import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [empresa, setEmpresa] = useState(''); // Adicionando estado para 'empresa'

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, empresa, setEmpresa }}>
      {children}
    </AuthContext.Provider>
  );
};