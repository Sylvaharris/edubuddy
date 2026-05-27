"use client";

import { HiOutlineCheck } from "react-icons/hi2";

const SubjectSelectionStep = ({ subjects, selectedSubjects, setSelectedSubjects }) => {
  const toggleSubject = (subjectName) => {
    setSelectedSubjects((current) =>
      current.includes(subjectName)
        ? current.filter((item) => item !== subjectName)
        : [...current, subjectName],
    );
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Select Subjects</h2>
          <p className="text-gray-500 mt-2">
            Choose one or more subjects you currently teach.
          </p>
        </div>

        <div className="px-4 py-3 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold w-fit">
          {selectedSubjects.length} selected
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {subjects.map((subject) => {
          const isSelected = selectedSubjects.includes(subject.name);

          return (
            <button
              key={subject.id}
              type="button"
              onClick={() => toggleSubject(subject.name)}
              className={`rounded-3xl border p-5 text-left transition-all hover:-translate-y-0.5 ${
                isSelected
                  ? "border-orange-200 bg-orange-50 shadow-md"
                  : "border-gray-100 bg-white hover:bg-gray-50 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${subject.color.bg} ${subject.color.text}`}
                >
                  {subject.icon}
                </span>

                <span className="flex-1">
                  <span className="block font-bold text-gray-900">
                    {subject.name}
                  </span>
                  <span className="block text-sm text-gray-500 mt-1">
                    {subject.curriculum.length} curriculum areas
                  </span>
                  <span className="block text-xs text-gray-400 mt-2">
                    {subject.class} - {subject.status}
                  </span>
                </span>

                <span
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                    isSelected
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && <HiOutlineCheck />}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectSelectionStep;
