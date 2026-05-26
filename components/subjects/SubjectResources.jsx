"use client";

import { useState } from "react";

import {
  HiOutlineLink,
  HiOutlineBookOpen,
  HiOutlinePencilSquare,
  HiOutlineSparkles,
  HiOutlineXMark,
} from "react-icons/hi2";

const SubjectResources = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [resourceText, setResourceText] = useState("");

  const openEditor = (subject) => {
    setSelectedSubject(subject);

    setResourceText(subject.resources?.join("\n") || "");
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

            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-lg">{subject.name}</h2>

                <div className="flex gap-3 mt-1">
                  <span className="text-sm text-gray-500">{subject.class}</span>

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

              <button
                onClick={() => openEditor(subject)}
                className="
                px-4
                py-2
                rounded-xl
                border
                border-gray-200
                flex
                items-center
                gap-2
                "
              >
                <HiOutlinePencilSquare />
                Edit
              </button>
            </div>

            {/* CONTENT */}

            <div
              className="
              mt-6
              bg-gray-50
              rounded-2xl
              p-5
              "
            >
              {subject.resources?.length > 0 ? (
                <div className="space-y-3">
                  {subject.resources.map((resource) => (
                    <div
                      key={resource}
                      className="
                        flex
                        gap-3
                        items-center
                        "
                    >
                      <HiOutlineLink className="text-blue-500" />

                      <span className="text-sm text-gray-700">{resource}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-2 items-center text-gray-400">
                  <HiOutlineSparkles />
                  No resources added yet.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}

      {selectedSubject && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            w-full
            max-w-[700px]
            "
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-2xl">Edit Resources</h2>

                <p className="text-gray-500">{selectedSubject.name}</p>
              </div>

              <button onClick={() => setSelectedSubject(null)}>
                <HiOutlineXMark className="text-xl" />
              </button>
            </div>

            <textarea
              rows={10}
              value={resourceText}
              onChange={(e) => setResourceText(e.target.value)}
              placeholder="Textbook: New General Mathematics — Pearson

https://education.com

Reference materials..."
              className="
              mt-6
              w-full
              p-5
              rounded-2xl
              border
              border-gray-200
              outline-none
              "
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedSubject(null)}
                className="
                px-5
                py-3
                border
                rounded-xl
                "
              >
                Cancel
              </button>

              <button
                className="
                px-5
                py-3
                rounded-xl
                text-white
                "
                style={{
                  background: "var(--primary-solid)",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectResources;
