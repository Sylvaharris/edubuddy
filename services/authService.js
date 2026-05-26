import users from "../data/users";

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
  return users.find(
    (user) => user.email === email && user.password === password,
  );
};
