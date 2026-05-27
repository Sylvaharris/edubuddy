import users from "../data/users";
import {
  getOnboardingState,
  getRegisteredUsers,
  saveRegisteredUser,
} from "../lib/storage";
import { getSchoolAdminOnboardingState } from "./onboardingService";

/**
 * ===================================
 * AUTH SERVICE
 * ===================================
 *
 * Contains authentication logic.
 *
 * Components should NOT directly
 * access the users database.
 *
 */

export const loginUser = (email, password) => {
  const registeredUsers =
    typeof window === "undefined" ? [] : getRegisteredUsers();

  // Login checks both seed demo users and users created through Register.
  const foundUser = [...users, ...registeredUsers].find(
    (user) => user.email === email && user.password === password,
  );

  if (!foundUser) {
    return null;
  }

  const teacherOnboardingState = getOnboardingState(foundUser.email);
  const adminOnboardingState = getSchoolAdminOnboardingState(foundUser.email);

  const roleDefaults = {
    teacher: false,
    "school-admin": false,
  };

  const normalizedUser = {
    ...foundUser,
    onboarded: foundUser.onboarded ?? roleDefaults[foundUser.role] ?? true,
  };

  // Onboarding is merged at login time so a teacher cannot lose setup status
  // after refreshing, logging out, or using one of the seed demo accounts.
  if (foundUser.role === "school-admin" && adminOnboardingState?.completed) {
    return {
      ...normalizedUser,
      onboarded: true,
      adminOnboarding: adminOnboardingState,
    };
  }

  return teacherOnboardingState
    ? { ...normalizedUser, ...teacherOnboardingState }
    : normalizedUser;
};

export const registerUser = ({ fullName, email, password, role }) => {
  const registeredUsers =
    typeof window === "undefined" ? [] : getRegisteredUsers();

  const existingUser = [...users, ...registeredUsers].find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists",
    };
  }

  const user = {
    id: Date.now(),
    name: fullName,
    email,
    password,
    role,
    // Teachers and school admins have guided onboarding before dashboard access.
    onboarded: !["teacher", "school-admin"].includes(role),
  };

  saveRegisteredUser(user);

  return {
    success: true,
    user,
  };
};

export const getDashboardPath = (role) => {
  const paths = {
    teacher: "/teacher/dashboard",
    student: "/student/dashboard",
    parent: "/parent/dashboard",
    "school-admin": "/school-admin/dashboard",
    "super-admin": "/super-admin/dashboard",
  };

  return paths[role] || "/login";
};
