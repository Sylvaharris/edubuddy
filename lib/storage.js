/**
 * ===================================
 * STORAGE HELPERS
 * ===================================
 *
 * Keeps localStorage logic
 * out of components.
 *
 */

export const saveUser = (user) => {
  localStorage.setItem("edubuddy-user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("edubuddy-user");

  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem("edubuddy-user");
};

export const getRegisteredUsers = () => {
  const users = localStorage.getItem("edubuddy-registered-users");

  return users ? JSON.parse(users) : [];
};

export const saveRegisteredUser = (user) => {
  const users = getRegisteredUsers();

  // Registered users are stored separately from mock seed users so the demo
  // login accounts in data/users.js remain untouched.
  localStorage.setItem(
    "edubuddy-registered-users",
    JSON.stringify([...users, user]),
  );
};

export const updateRegisteredUser = (updatedUser) => {
  const users = getRegisteredUsers();

  localStorage.setItem(
    "edubuddy-registered-users",
    JSON.stringify(
      users.map((user) => (user.email === updatedUser.email ? updatedUser : user)),
    ),
  );
};

export const getOnboardingState = (email) => {
  const states = localStorage.getItem("edubuddy-onboarding-state");
  const parsedStates = states ? JSON.parse(states) : {};

  return parsedStates[email] || null;
};

export const saveOnboardingState = (email, onboardingState) => {
  const states = localStorage.getItem("edubuddy-onboarding-state");
  const parsedStates = states ? JSON.parse(states) : {};

  // Keep onboarding keyed by email so seed users can also be marked onboarded
  // without mutating the static data/users.js file.
  localStorage.setItem(
    "edubuddy-onboarding-state",
    JSON.stringify({
      ...parsedStates,
      [email]: onboardingState,
    }),
  );
};
