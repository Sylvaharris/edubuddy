"use client";

import { createContext, useContext, useState } from "react";

import {
  getUser,
  saveUser,
  removeUser,
  updateRegisteredUser,
  saveOnboardingState,
} from "../lib/storage";

import { loginUser, registerUser } from "../services/authService";
import { persistSchoolAdminOnboarding } from "../services/onboardingService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  /**
   * Current logged in user
   */

  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    // Restore the browser session once on the client without a loading effect.
    return getUser();
  });

  const authReady = true;

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
   * Register function
   *
   * Keeps registration details in the auth service so form components only
   * handle UI state and routing decisions.
   */

  const register = (formData) => {
    const result = registerUser(formData);

    if (!result.success) {
      return result;
    }

    if (["teacher", "school-admin"].includes(result.user.role)) {
      // Guided-onboarding roles start an authenticated setup session.
      saveUser(result.user);
      setUser(result.user);
    }

    return result;
  };

  /**
   * Complete onboarding
   *
   * Stores teacher setup choices on the current user and marks dashboard access
   * as ready.
   */

  const completeOnboarding = (onboarding) => {
    const updatedUser = {
      ...user,
      onboarded: true,
      onboarding,
    };

    saveUser(updatedUser);
    updateRegisteredUser(updatedUser);
    saveOnboardingState(updatedUser.email, {
      onboarded: true,
      onboarding,
    });
    setUser(updatedUser);

    return updatedUser;
  };

  /**
   * Complete school admin onboarding
   *
   * Persists the complete school setup payload separately so settings pages can
   * reuse it later for branding, classes, teachers, and students.
   */

  const completeAdminOnboarding = (onboarding) => {
    const completedOnboarding = {
      ...onboarding,
      completed: true,
      step: 4,
    };

    const updatedUser = {
      ...user,
      onboarded: true,
      adminOnboarding: completedOnboarding,
    };

    persistSchoolAdminOnboarding(updatedUser.email, completedOnboarding);
    saveUser(updatedUser);
    updateRegisteredUser(updatedUser);
    setUser(updatedUser);

    return updatedUser;
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
        authReady,
        login,
        register,
        completeOnboarding,
        completeAdminOnboarding,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
