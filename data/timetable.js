/**
 * ==========================================
 * EDUBUDDY TIMETABLE DATA
 * ==========================================
 *
 * Temporary mock data
 *
 * Later this becomes:
 *
 * Backend API
 * Database
 * School admin-created schedules
 *
 */

const timetable = {
  JSS1A: [
    {
      id: 1,
      day: "Monday",
      time: "8:00 AM - 9:00 AM",
      subject: "Mathematics",
      teacher: "John Doe",
      room: "Classroom 4",
      type: "class",
    },

    {
      id: 2,
      day: "Monday",
      time: "9:00 AM - 10:00 AM",
      subject: "English",
      teacher: "Sarah Johnson",
      room: "Classroom 4",
      type: "class",
    },

    {
      id: 3,
      day: "Monday",
      time: "10:00 AM - 10:30 AM",
      subject: "Break",
      teacher: "",
      room: "",
      type: "break",
    },

    {
      id: 4,
      day: "Monday",
      time: "10:30 AM - 11:30 AM",
      subject: "Biology",
      teacher: "Michael Smith",
      room: "Lab 1",
      type: "class",
    },

    {
      id: 5,
      day: "Tuesday",
      time: "8:00 AM - 9:00 AM",
      subject: "Physics",
      teacher: "David Wilson",
      room: "Lab 2",
      type: "class",
    },

    {
      id: 6,
      day: "Tuesday",
      time: "9:00 AM - 10:00 AM",
      subject: "Mathematics",
      teacher: "John Doe",
      room: "Classroom 4",
      type: "class",
    },

    {
      id: 7,
      day: "Wednesday",
      time: "8:00 AM - 9:00 AM",
      subject: "Chemistry",
      teacher: "James Brown",
      room: "Lab 3",
      type: "class",
    },

    {
      id: 8,
      day: "Thursday",
      time: "8:00 AM - 9:00 AM",
      subject: "Geography",
      teacher: "Emily Taylor",
      room: "Classroom 5",
      type: "class",
    },

    {
      id: 9,
      day: "Friday",
      time: "8:00 AM - 9:00 AM",
      subject: "Civic Education",
      teacher: "Grace White",
      room: "Classroom 2",
      type: "class",
    },
  ],

  JSS2B: [
    {
      id: 10,
      day: "Monday",
      time: "8:00 AM - 9:00 AM",
      subject: "Agricultural Science",
      teacher: "Mark Evans",
      room: "Classroom 7",
      type: "class",
    },

    {
      id: 11,
      day: "Tuesday",
      time: "9:00 AM - 10:00 AM",
      subject: "Mathematics",
      teacher: "John Doe",
      room: "Classroom 7",
      type: "class",
    },
  ],

  SS1A: [
    {
      id: 12,
      day: "Monday",
      time: "8:00 AM - 9:00 AM",
      subject: "Economics",
      teacher: "Sarah Johnson",
      room: "Classroom 12",
      type: "class",
    },

    {
      id: 13,
      day: "Thursday",
      time: "11:00 AM - 12:00 PM",
      subject: "Literature",
      teacher: "Michael Smith",
      room: "Classroom 12",
      type: "class",
    },
  ],
};

export default timetable;
