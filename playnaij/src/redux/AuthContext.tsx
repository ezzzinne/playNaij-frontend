import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => {
  setIsLoggedIn(true);
  localStorage.setItem('isLoggedIn', 'true');
};

const logout = () => {
  setIsLoggedIn(false);
  localStorage.removeItem('isLoggedIn');
};


  useEffect(() => {
  const storedLogin = localStorage.getItem('isLoggedIn');
  if (storedLogin === 'true') {
    setIsLoggedIn(true);
  }
}, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
