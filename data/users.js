/**
 * ===================================
 * MOCK USERS
 * ===================================
 *
 * Temporary authentication users.
 *
 * Later replace with:
 * API calls
 * Firebase
 * Supabase
 * Node backend
 *
 */

const users = [
  {
    id: 1,
    email: "teacher@edubuddy.com",
    password: "123456",
    role: "teacher",
    name: "Sylva Harris",
  },

  {
    id: 2,
    email: "admin@edubuddy.com",
    password: "123456",
    role: "school-admin",
    name: "School Admin",
  },

  {
    id: 3,
    email: "student@edubuddy.com",
    password: "123456",
    role: "student",
    name: "John Doe",
  },
];

export default users;
