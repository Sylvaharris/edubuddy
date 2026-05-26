/**
 * =====================================
 * STUDENTS DATA
 * =====================================
 *
 * Core student profile information
 *
 * Used by:
 * - Attendance module
 * - Students module
 * - Assessment module
 * - Reports module
 *
 * Keep module-specific data separate later.
 *
 */

const students = [
  {
    id: 1,
    studentId: "STD-10231",

    name: "John Doe",

    class: "JSS1A",

    status: "Present",

    attendance: 84,

    performance: 78,

    behavior: "Excellent",
  },

  {
    id: 2,
    studentId: "STD-10232",

    name: "Mary Johnson",

    class: "JSS1A",

    status: "Absent",

    attendance: 68,

    performance: 61,

    behavior: "Average",
  },

  {
    id: 3,
    studentId: "STD-10233",

    name: "Daniel Smith",

    class: "JSS1A",

    status: "Present",

    attendance: 90,

    performance: 82,

    behavior: "Excellent",
  },

  {
    id: 4,
    studentId: "STD-10234",

    name: "Sarah Williams",

    class: "JSS1A",

    status: "Present",

    attendance: 96,

    performance: 93,

    behavior: "Excellent",
  },

  {
    id: 5,
    studentId: "STD-10235",

    name: "Adebayo Ibrahim",

    class: "JSS2B",

    status: "Absent",

    attendance: 71,

    performance: 69,

    behavior: "Needs Attention",
  },

  {
    id: 6,
    studentId: "STD-10236",

    name: "Grace Michael",

    class: "JSS3A",

    status: "Present",

    attendance: 88,

    performance: 81,

    behavior: "Good",
  },
];

export default students;
