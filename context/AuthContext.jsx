"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { getUser, saveUser, removeUser } from "../lib/storage";

import { loginUser } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  /**
   * Current logged in user
   */

  const [user, setUser] = useState(null);

  /**
   * Restore session
   */

  useEffect(() => {
    const savedUser = getUser();

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  /**
   * Login function
   */

  const login = (email, password) => {
    const foundUser = loginUser(email, password);

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    saveUser(foundUser);

    setUser(foundUser);

    return {
      success: true,
      user: foundUser,
    };
  };

  /**
   * Logout
   */

  const logout = () => {
    removeUser();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
