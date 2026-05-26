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
