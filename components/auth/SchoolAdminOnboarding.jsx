"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";
import { getUser } from "../../lib/storage";
import {
  getSchoolAdminOnboarding,
  persistSchoolAdminOnboarding,
} from "../../services/onboardingService";
import { getDashboardPath } from "../../services/authService";

import AdminDashboardSkeleton from "../dashboard/AdminDashboardSkeleton";
import SchoolSetupStep from "./SchoolSetupStep";
import ClassCreationStep from "./ClassCreationStep";
import TeacherInviteStep from "./TeacherInviteStep";
import StudentUploadStep from "./StudentUploadStep";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineBuildingOffice2,
  HiOutlineCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

const stepLabels = ["School", "Classes", "Teachers", "Students"];

const getInitialDraft = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const savedUser = getUser();

  if (!savedUser || savedUser.role !== "school-admin" || savedUser.onboarded) {
    return null;
  }

  return getSchoolAdminOnboarding(savedUser);
};

const SchoolAdminOnboarding = () => {
  const router = useRouter();
  const { user, authReady, completeAdminOnboarding } = useAuth();
  const initialDraft = useMemo(() => getInitialDraft(), []);

  const [step, setStep] = useState(initialDraft?.step || 1);
  const [schoolData, setSchoolData] = useState(initialDraft?.schoolData || null);
  const [classes, setClasses] = useState(initialDraft?.classes || []);
  const [teachers, setTeachers] = useState(initialDraft?.teachers || []);
  const [students, setStudents] = useState(initialDraft?.students || []);
  const [showDashboardSkeleton, setShowDashboardSkeleton] = useState(false);

  const classOptions = useMemo(() => {
    return classes.flatMap((item) =>
      item.arms.length
        ? item.arms.map((arm) => `${item.name} ${arm}`)
        : [item.name],
    );
  }, [classes]);

  const onboardingPayload = useMemo(() => {
    return {
      completed: false,
      step,
      schoolData,
      classes,
      teachers,
      students,
    };
  }, [classes, schoolData, step, students, teachers]);

  const canContinue =
    (step === 1 && schoolData?.schoolName?.trim() && schoolData?.fullName?.trim()) ||
    (step === 2 && classes.length > 0) ||
    step === 3 ||
    step === 4;

  useEffect(() => {
    if (!authReady) return;

    // Route guard: only authenticated, not-yet-onboarded school admins belong here.
    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "school-admin") {
      router.replace(getDashboardPath(user.role));
      return;
    }

    if (user.onboarded) {
      router.replace("/school-admin/dashboard");
      return;
    }

  }, [authReady, router, user]);

  useEffect(() => {
    if (!user || !schoolData || user.role !== "school-admin" || user.onboarded) {
      return;
    }

    // Save each step as a draft so a refresh does not restart onboarding.
    persistSchoolAdminOnboarding(user.email, onboardingPayload);
  }, [onboardingPayload, schoolData, user]);

  const handleNext = () => {
    if (!canContinue) return;

    if (step < 4) {
      setStep((current) => current + 1);
      return;
    }

    setShowDashboardSkeleton(true);

    window.setTimeout(() => {
      completeAdminOnboarding(onboardingPayload);
      router.push("/school-admin/dashboard");
    }, 1500);
  };

  if (showDashboardSkeleton) {
    return <AdminDashboardSkeleton />;
  }

  if (!schoolData) {
    return <AdminDashboardSkeleton />;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 mb-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                style={{ background: "var(--primary-solid)" }}
              >
                <HiOutlineBuildingOffice2 className="text-2xl" />
              </div>

              <div>
                <p className="text-sm font-semibold text-orange-500 flex items-center gap-2">
                  <HiOutlineSparkles />
                  Step {step} of 4
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                  Set Up Your School Workspace
                </h1>
                <p className="text-gray-500 mt-2 max-w-2xl">
                  Build the school structure, invite teachers, and prepare
                  student records before opening the management center.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((item) => (
                <span
                  key={item}
                  className={`h-2.5 rounded-full transition-all ${
                    item <= step ? "w-10 bg-orange-500" : "w-3 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 transition-all duration-300">
          <div className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stepLabels.map((label, index) => {
              const itemStep = index + 1;
              const isActive = step === itemStep;
              const isDone = step > itemStep;

              return (
                <div
                  key={label}
                  className={`rounded-2xl border p-3 transition-all ${
                    isActive || isDone
                      ? "border-orange-200 bg-orange-50"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold ${
                      isActive || isDone ? "text-orange-600" : "text-gray-400"
                    }`}
                  >
                    {isDone ? "Complete" : `Step ${itemStep}`}
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>

          {step === 1 && (
            <SchoolSetupStep
              schoolData={schoolData}
              setSchoolData={setSchoolData}
            />
          )}

          {step === 2 && (
            <ClassCreationStep classes={classes} setClasses={setClasses} />
          )}

          {step === 3 && (
            <TeacherInviteStep
              teachers={teachers}
              setTeachers={setTeachers}
              classOptions={classOptions}
            />
          )}

          {step === 4 && (
            <StudentUploadStep
              students={students}
              setStudents={setStudents}
              classOptions={classOptions}
            />
          )}

          <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(1, current - 1))}
              disabled={step === 1}
              className="px-5 py-3 rounded-2xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <HiOutlineArrowLeft />
              Back
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canContinue}
              className="px-6 py-3 rounded-2xl text-white font-semibold shadow-sm hover:scale-[1.02] hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              style={{ background: "var(--primary-solid)" }}
            >
              {step === 4 ? "Complete Setup" : "Continue"}
              {step === 4 ? <HiOutlineCheck /> : <HiOutlineArrowRight />}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SchoolAdminOnboarding;
