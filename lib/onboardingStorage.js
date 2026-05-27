const ADMIN_ONBOARDING_KEY = "edubuddy-admin-onboarding-state";

const readStore = () => {
  if (typeof window === "undefined") {
    return {};
  }

  const saved = localStorage.getItem(ADMIN_ONBOARDING_KEY);

  return saved ? JSON.parse(saved) : {};
};

const writeStore = (store) => {
  localStorage.setItem(ADMIN_ONBOARDING_KEY, JSON.stringify(store));
};

export const getAdminOnboarding = (email) => {
  const store = readStore();

  return store[email] || null;
};

export const saveAdminOnboarding = (email, onboarding) => {
  const store = readStore();

  writeStore({
    ...store,
    [email]: onboarding,
  });
};

export const createAdminOnboardingDraft = (user) => {
  const existing = getAdminOnboarding(user.email);

  if (existing) {
    return existing;
  }

  return {
    completed: false,
    step: 1,
    schoolData: {
      logo: "",
      schoolName: "Greenfield College",
      nickname: "Greenfield",
      email: user.email,
      fullName: user.name,
      phone: "+234 812 000 0000",
      theme: "default",
    },
    classes: [
      { id: 1, name: "JSS1", arms: ["A", "B"] },
      { id: 2, name: "JSS2", arms: ["A"] },
      { id: 3, name: "SSS1", arms: ["A"] },
    ],
    teachers: [],
    students: [],
  };
};
