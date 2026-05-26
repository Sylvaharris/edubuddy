export const teacherDashboardData = {
  stats: {
    students: 1250,
    subjects: 12,
    attendance: 92,
    performance: 85,
  },

  weeklyAttendance: {
    present: 87,
    absent: 13,
  },

  subjectPerformance: [
    { subject: "Math", score: 78 },
    { subject: "English", score: 85 },
    { subject: "Science", score: 90 },
  ],

  schedule: [
    {
      subject: "Mathematics",
      time: "8:00 - 9:00 AM",
    },
    {
      subject: "English",
      time: "9:30 - 10:30 AM",
    },
    {
      subject: "Science",
      time: "11:00 - 12:00 PM",
    },
  ],

  assignments: [
    {
      title: "Algebra Test",
      class: "Math",
      due: "Yesterday",
    },
    {
      title: "Essay Writing",
      class: "English",
      due: "Today",
    },
  ],

  events: [
    {
      title: "Parents Meeting",
      date: "Friday 10:00 AM",
    },
    {
      title: "Sports Day",
      date: "Next Monday",
    },
  ],
};
