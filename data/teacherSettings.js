const teacherSettings = {
  profile: {
    fullName: "Sylva Harris",
    email: "teacher@edubuddy.com",
    phone: "+234 812 000 0000",
    employeeId: "EDU-TCH-0248",
    department: "Science Department",
    subject: "Mathematics",
    classes: ["JSS1A", "JSS2B", "SS1A"],
    bio: "Mathematics teacher focused on practical learning, class confidence and steady progress tracking.",
  },

  notifications: {
    email: true,
    sms: false,
    events: true,
    assignments: true,
    attendance: true,
    parentMessages: true,
    weeklyDigest: true,
  },

  preferences: {
    darkMode: false,
    compactMode: false,
    language: "English",
    timezone: "Africa/Lagos",
    defaultClass: "JSS1A",
    dashboardDensity: "Comfortable",
  },

  security: {
    twoFactor: true,
    lastPasswordChange: "12 days ago",
    sessions: [
      {
        device: "Chrome on Windows",
        location: "Lagos, Nigeria",
        status: "Current session",
      },
      {
        device: "Safari on iPhone",
        location: "Abuja, Nigeria",
        status: "Last active yesterday",
      },
    ],
  },

  account: {
    role: "Teacher",
    status: "Active",
    plan: "EduBuddy School Workspace",
    workspace: "Greenfield College",
    storageUsed: 68,
    joined: "September 2025",
  },
};

export default teacherSettings;
