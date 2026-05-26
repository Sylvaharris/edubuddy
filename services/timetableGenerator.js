/**
 * =====================================
 * SIMPLE AI TIMETABLE GENERATOR
 * =====================================
 *
 * Temporary frontend AI simulation
 *
 * Later:
 * Replace with backend/OpenAI API
 */

const generateTimetable = ({ subjects, periods }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let result = {};

  days.forEach((day) => {
    result[day] = [];

    for (let i = 0; i < periods; i++) {
      const randomSubject =
        subjects[Math.floor(Math.random() * subjects.length)];

      result[day].push({
        time: `${8 + i}:00`,
        subject: randomSubject,
        teacher: "Mr Johnson",
      });
    }
  });

  return result;
};

export default generateTimetable;
