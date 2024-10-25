// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setIsAuthenticated(true);
      setUser(loggedInUser);
    }
  }, []);

  const login = (username, password) => {
    const storedUser = { username: 'admin', password: 'password' };

    if (username === storedUser.username && password === storedUser.password) {
      setIsAuthenticated(true);
      setUser(storedUser);
      localStorage.setItem('user', JSON.stringify(storedUser));
      return true;
    } else {
      alert('Invalid credentials!');
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;