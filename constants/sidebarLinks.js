import roles from "./roles";

import {
  HiOutlineSquares2X2,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCalendarDays,
  HiOutlineBookOpen,
  HiOutlineDocumentChartBar,
  HiOutlineChartBar,
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
  HiOutlineCog6Tooth,
  HiOutlineCurrencyDollar,
  HiOutlineMegaphone,
  HiOutlineClock, // Timetable
  HiOutlineUserGroup, // Students
} from "react-icons/hi2";

const sidebarLinks = {
  [roles.TEACHER]: [
    {
      title: "Dashboard",
      path: "/teacher/dashboard",
      icon: HiOutlineSquares2X2,
    },

    {
      title: "Attendance",
      path: "/teacher/attendance",
      icon: HiOutlineClipboardDocumentCheck,
    },

    {
      title: "Timetable",
      path: "/teacher/timetable",
      icon: HiOutlineClock,
    },

    {
      title: "Subjects",
      path: "/teacher/subjects",
      icon: HiOutlineAcademicCap,
    },

    {
      title: "Assessments",
      path: "/teacher/assessments",
      icon: HiOutlineBookOpen,
    },

    {
      title: "Reports",
      path: "/teacher/reports",
      icon: HiOutlineDocumentChartBar,
    },

    {
      title: "Performance",
      path: "/teacher/performance",
      icon: HiOutlineChartBar,
    },

    {
      title: "Edu Study",
      path: "/teacher/edu-study",
      icon: HiOutlineAcademicCap,
    },

    {
      title: "Events",
      path: "/teacher/events",
      icon: HiOutlineCalendarDays,
    },

    {
      title: "Students",
      path: "/teacher/students",
      icon: HiOutlineUserGroup,
    },

    {
      title: "Settings",
      path: "/teacher/settings",
      icon: HiOutlineCog6Tooth,
    },
  ],

  [roles.SCHOOL_ADMIN]: [
    {
      title: "Dashboard",
      path: "/school-admin/dashboard",
      icon: HiOutlineSquares2X2,
    },

    {
      title: "Students",
      path: "/school-admin/students",
      icon: HiOutlineUsers,
    },

    {
      title: "Staffs",
      path: "/school-admin/staffs",
      icon: HiOutlineUsers,
    },

    {
      title: "Finance",
      path: "/school-admin/finance",
      icon: HiOutlineCurrencyDollar,
    },

    {
      title: "Events",
      path: "/school-admin/events",
      icon: HiOutlineMegaphone,
    },

    {
      title: "Settings",
      path: "/school-admin/settings",
      icon: HiOutlineCog6Tooth,
    },
  ],

  [roles.SUPER_ADMIN]: [
    {
      title: "Dashboard",
      path: "/super-admin/dashboard",
      icon: HiOutlineSquares2X2,
    },

    {
      title: "Schools",
      path: "/super-admin/schools",
      icon: HiOutlineBuildingOffice2,
    },

    {
      title: "School Admins",
      path: "/super-admin/school-admins",
      icon: HiOutlineUsers,
    },

    {
      title: "Analytics",
      path: "/super-admin/analytics",
      icon: HiOutlineChartBar,
    },

    {
      title: "Settings",
      path: "/super-admin/settings",
      icon: HiOutlineCog6Tooth,
    },
  ],

  [roles.STUDENT]: [
    {
      title: "Dashboard",
      path: "/student/dashboard",
      icon: HiOutlineSquares2X2,
    },

    {
      title: "Subjects",
      path: "/student/subjects",
      icon: HiOutlineBookOpen,
    },

    {
      title: "Reports",
      path: "/student/reports",
      icon: HiOutlineDocumentChartBar,
    },

    {
      title: "Settings",
      path: "/student/settings",
      icon: HiOutlineCog6Tooth,
    },
  ],

  [roles.PARENT]: [
    {
      title: "Dashboard",
      path: "/parent/dashboard",
      icon: HiOutlineSquares2X2,
    },

    {
      title: "Reports",
      path: "/parent/reports",
      icon: HiOutlineDocumentChartBar,
    },

    {
      title: "Settings",
      path: "/parent/settings",
      icon: HiOutlineCog6Tooth,
    },
  ],
};

export default sidebarLinks;
