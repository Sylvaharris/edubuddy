"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";
import subjects from "../../data/subjects";
import { getDashboardPath } from "../../services/authService";

import DashboardSkeleton from "../dashboard/DashboardSkeleton";
import SubjectSelectionStep from "./SubjectSelectionStep";
import ClassAssignmentStep from "./ClassAssignmentStep";
import OnboardingConfirmationStep from "./OnboardingConfirmationStep";

import {
  HiOutlineAcademicCap,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

const TeacherOnboarding = () => {
  const router = useRouter();
  const { user, authReady, completeOnboarding } = useAuth();

  const [step, setStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [assignedClass, setAssignedClass] = useState("No class assigned");
  const [showDashboardSkeleton, setShowDashboardSkeleton] = useState(false);

  const availableClasses = useMemo(() => {
    // Classes are derived from the existing subjects data so onboarding stays
    // aligned with the teacher subject module.
    return [...new Set(subjects.map((subject) => subject.class))];
  }, []);

  const canContinue =
    (step === 1 && selectedSubjects.length > 0) ||
    (step === 2 && assignedClass) ||
    step === 3;

  useEffect(() => {
    if (!authReady) return;

    // Route guard: only authenticated, not-yet-onboarded teachers belong here.
    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "teacher") {
      router.replace(getDashboardPath(user.role));
      return;
    }

    if (user.onboarded) {
      router.replace("/teacher/dashboard");
    }
  }, [authReady, router, user]);

  const handleNext = () => {
    if (!canContinue) return;

    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    setShowDashboardSkeleton(true);

    window.setTimeout(() => {
      // The skeleton gives the dashboard a more realistic SaaS transition
      // before the teacher lands in the protected workspace.
      completeOnboarding({
        subjects: selectedSubjects,
        assignedClass,
      });

      router.push("/teacher/dashboard");
    }, 1400);
  };

  if (showDashboardSkeleton) {
    return <DashboardSkeleton />;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="relative overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 mb-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                style={{ background: "var(--primary-solid)" }}
              >
                <HiOutlineAcademicCap className="text-2xl" />
              </div>

              <div>
                <p className="text-sm font-semibold text-orange-500 flex items-center gap-2">
                  <HiOutlineSparkles />
                  Step {step} of 3
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                  Teacher Onboarding
                </h1>
                <p className="text-gray-500 mt-2">
                  Set up your subjects and class access before entering your
                  dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3].map((item) => (
                <span
                  key={item}
                  className={`h-2.5 rounded-full transition-all ${
                    item <= step ? "w-12 bg-orange-500" : "w-3 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 transition-all duration-300">
          <div className="mb-8 grid grid-cols-3 gap-3">
            {["Subjects", "Class", "Confirm"].map((label, index) => {
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
            <SubjectSelectionStep
              subjects={subjects}
              selectedSubjects={selectedSubjects}
              setSelectedSubjects={setSelectedSubjects}
            />
          )}

          {step === 2 && (
            <ClassAssignmentStep
              classes={availableClasses}
              assignedClass={assignedClass}
              setAssignedClass={setAssignedClass}
            />
          )}

          {step === 3 && (
            <OnboardingConfirmationStep
              selectedSubjects={selectedSubjects}
              assignedClass={assignedClass}
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
              {step === 3 ? "Complete Setup" : "Continue"}
              {step === 3 ? <HiOutlineCheck /> : <HiOutlineArrowRight />}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TeacherOnboarding;
