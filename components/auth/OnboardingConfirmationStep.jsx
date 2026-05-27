"use client";

import {
  HiOutlineAcademicCap,
  HiOutlineCheckBadge,
  HiOutlineHomeModern,
  HiOutlineSparkles,
} from "react-icons/hi2";

const OnboardingConfirmationStep = ({ selectedSubjects, assignedClass }) => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-orange-50 border border-orange-100 p-5 flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 shadow-sm">
          <HiOutlineSparkles className="text-2xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Confirm Setup</h2>
          <p className="text-gray-600 mt-2">
            Review your teacher workspace details before opening the dashboard.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-orange-500">
              <HiOutlineAcademicCap />
            </div>
            <div>
              <p className="text-sm text-gray-500">Selected subjects</p>
              <h3 className="font-bold text-gray-900">
                {selectedSubjects.length} subject area
                {selectedSubjects.length === 1 ? "" : "s"}
              </h3>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {selectedSubjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-2 rounded-xl bg-white border border-gray-100 text-sm font-semibold text-gray-700"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-blue-500">
              <HiOutlineHomeModern />
            </div>
            <div>
              <p className="text-sm text-gray-500">Assigned class</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {assignedClass}
              </h3>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-white border border-gray-100 p-4 flex gap-3 text-sm text-gray-600">
            <HiOutlineCheckBadge className="text-green-500 text-xl flex-shrink-0" />
            Your selections will personalize the teacher dashboard, subjects
            workspace and class shortcuts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingConfirmationStep;
