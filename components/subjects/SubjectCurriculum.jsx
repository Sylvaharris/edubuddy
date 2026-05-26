"use client";

import { useState } from "react";

import {
  HiOutlineBookOpen,
  HiOutlinePencilSquare,
  HiOutlineXMark,
  HiOutlineSparkles,
} from "react-icons/hi2";

const SubjectCurriculum = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [curriculumText, setCurriculumText] = useState("");

  /* =====================
      OPEN EDITOR
  ===================== */

  const openEditor = (subject) => {
    setSelectedSubject(subject);

    setCurriculumText(subject.curriculum?.join("\n") || "");
  };

  return (
    <>
      <div className="space-y-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="
            bg-white
            rounded-[30px]

            border
            border-gray-100

            p-7

            shadow-sm

            hover:shadow-md
            transition-all
            "
          >
            {/* TOP */}

            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* ICON */}

                <div
                  className={`
                  w-14
                  h-14

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  text-xl

                  ${subject.color.bg}
                  ${subject.color.text}
                  `}
                >
                  {subject.icon}
                </div>

                {/* INFO */}

                <div>
                  <h2
                    className="
                    font-bold
                    text-lg
                    text-gray-900
                    "
                  >
                    {subject.name}
                  </h2>

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    mt-1
                    "
                  >
                    <span
                      className="
                      text-sm
                      text-gray-500
                      "
                    >
                      {subject.class}
                    </span>

                    <span
                      className={`
                      px-3
                      py-1

                      rounded-full
                      text-xs

                      ${
                        subject.status === "Published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }
                      `}
                    >
                      {subject.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* EDIT BUTTON */}

              <button
                onClick={() => openEditor(subject)}
                className="
                px-4
                py-2

                rounded-xl

                border
                border-gray-200

                hover:bg-gray-50

                flex
                items-center
                gap-2

                transition-all
                "
              >
                <HiOutlinePencilSquare />
                Edit
              </button>
            </div>

            {/* CURRICULUM */}

            <div
              className="
              mt-6

              rounded-2xl

              bg-gray-50

              p-5
              "
            >
              {subject.curriculum && subject.curriculum.length > 0 ? (
                <div className="space-y-3">
                  {subject.curriculum.map((term) => (
                    <div
                      key={term}
                      className="
                        text-sm
                        text-gray-700
                        leading-relaxed
                        "
                    >
                      {term}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="
                  flex
                  items-center
                  gap-3

                  text-gray-400
                  "
                >
                  <HiOutlineSparkles />
                  No curriculum added yet.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* =====================
          MODAL
      ===================== */}

      {selectedSubject && (
        <div
          className="
          fixed
          inset-0

          bg-black/20
          backdrop-blur-sm

          z-50

          flex
          justify-center
          items-center
          "
        >
          <div
            className="
            bg-white

            rounded-[32px]

            w-full
            max-w-[750px]

            p-8

            shadow-2xl
            "
          >
            {/* HEADER */}

            <div className="flex justify-between items-center">
              <div>
                <h2
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Edit Curriculum
                </h2>

                <p className="text-gray-500 mt-1">{selectedSubject.name}</p>
              </div>

              <button
                onClick={() => setSelectedSubject(null)}
                className="
                p-2
                rounded-xl
                hover:bg-gray-100
                "
              >
                <HiOutlineXMark className="text-xl" />
              </button>
            </div>

            {/* BODY */}

            <div className="mt-8">
              <label
                className="
                text-sm
                font-medium
                text-gray-700
                "
              >
                Curriculum Content
              </label>

              <textarea
                rows={10}
                value={curriculumText}
                onChange={(e) => setCurriculumText(e.target.value)}
                placeholder="Term 1: Number system, fractions...

Term 2: Algebra basics...

Term 3: Geometry..."
                className="
                mt-3
                w-full

                rounded-2xl

                border
                border-gray-200

                p-5

                outline-none

                focus:border-gray-400
                "
              />
            </div>

            {/* FOOTER */}

            <div
              className="
              flex
              justify-end
              gap-3

              mt-8
              "
            >
              <button
                onClick={() => setSelectedSubject(null)}
                className="
                px-5
                py-3

                rounded-xl

                border
                border-gray-200
                "
              >
                Cancel
              </button>

              <button
                className="
                px-6
                py-3

                rounded-xl
                text-white
                "
                style={{
                  background: "var(--primary-solid)",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectCurriculum;
