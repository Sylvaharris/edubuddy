"use client";

import {
  HiOutlineAcademicCap,
  HiOutlineArrowPath,
  HiOutlineHomeModern,
} from "react-icons/hi2";

const ClassAssignmentStep = ({ classes, assignedClass, setAssignedClass }) => {
  const options = ["No class assigned", ...classes];

  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Assign Class</h2>
          <p className="text-gray-500 mt-2">
            Select your main class. You can switch later or continue without one.
          </p>
        </div>

        <div className="px-4 py-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold w-fit flex items-center gap-2">
          <HiOutlineArrowPath />
          Flexible assignment
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {options.map((className) => {
          const isSelected = assignedClass === className;

          return (
            <button
              key={className}
              type="button"
              onClick={() => setAssignedClass(className)}
              className={`rounded-3xl border p-5 text-left transition-all hover:-translate-y-0.5 ${
                isSelected
                  ? "border-orange-200 bg-orange-50 shadow-md"
                  : "border-gray-100 bg-white hover:bg-gray-50 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    className === "No class assigned"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {className === "No class assigned" ? (
                    <HiOutlineArrowPath className="text-xl" />
                  ) : (
                    <HiOutlineHomeModern className="text-xl" />
                  )}
                </span>

                <span>
                  <span className="text-sm text-gray-500">
                    {className === "No class assigned"
                      ? "Flexible setup"
                      : "Primary class"}
                  </span>
                  <span className="block text-xl font-bold text-gray-900 mt-2">
                    {className}
                  </span>
                  <span className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                    <HiOutlineAcademicCap />
                    Can be changed later
                  </span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ClassAssignmentStep;
