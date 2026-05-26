import { teacherDashboardData } from "../data/teacherDashboard";

/**
 * Simulates API call
 */
export const getTeacherDashboardData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(teacherDashboardData);
    }, 300); // simulate loading delay
  });
};
