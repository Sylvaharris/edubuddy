import {
  createAdminOnboardingDraft,
  getAdminOnboarding,
  saveAdminOnboarding,
} from "../lib/onboardingStorage";

export const getSchoolAdminOnboarding = (user) => {
  if (!user) return null;

  return createAdminOnboardingDraft(user);
};

export const persistSchoolAdminOnboarding = (email, onboarding) => {
  saveAdminOnboarding(email, onboarding);

  return onboarding;
};

export const getSchoolAdminOnboardingState = (email) => {
  return getAdminOnboarding(email);
};
