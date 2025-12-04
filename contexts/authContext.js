import React, { createContext, useState, useContext, useEffect } from 'react';
import { isAuthenticated, logout as logoutService } from '../src/data/getUser';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await isAuthenticated();
    setIsLoggedIn(authenticated);
    setLoading(false);
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    const success = await logoutService();
    if (success) {
      setIsLoggedIn(false);
    }
    return success;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}