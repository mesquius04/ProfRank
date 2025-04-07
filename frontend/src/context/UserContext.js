import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Usa la exportación nombrada

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setToken = (token) => {
    localStorage.setItem('token', token);
    try {
      const userInfo = jwtDecode(token); // Usa jwtDecode aquí también
      setUser(userInfo);
    } catch (error) {
      console.error('Invalid token:', error);
      setUser(null); // Opcional: Manejar error de token inválido
    }
  };

  return (
    <UserContext.Provider value={{ user, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);
