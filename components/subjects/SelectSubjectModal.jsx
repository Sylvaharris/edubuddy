"use client";

import { useMemo, useState } from "react";

import {
  HiOutlineBookOpen,
  HiOutlineCheckCircle,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

const SUBJECTS_BY_CLASS = {
  JSS1A: [
    "Mathematics",
    "English Language",
    "Basic Science",
    "Social Studies",
    "Agricultural Science",
    "Civic Education",
    "Computer Science",
  ],

  JSS2B: [
    "Mathematics",
    "English Language",
    "Basic Technology",
    "Business Studies",
    "Home Economics",
    "Computer Science",
  ],

  SS1A: [
    "Mathematics",
    "English Language",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "Government",
  ],
};

const SelectSubjectModal = ({ open, setOpen }) => {
  const classes = Object.keys(SUBJECTS_BY_CLASS);

  const [selectedClass, setSelectedClass] = useState(classes[0]);

  const [search, setSearch] = useState("");

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  /* ==========================
      FILTER SUBJECTS
  ========================== */

  const filteredSubjects = useMemo(() => {
    return SUBJECTS_BY_CLASS[selectedClass].filter((subject) =>
      subject.toLowerCase().includes(search.toLowerCase()),
    );
  }, [selectedClass, search]);

  /* ==========================
      SELECT SUBJECT
  ========================== */

  const toggleSubject = (subject) => {
    const key = `${selectedClass}-${subject}`;

    setSelectedSubjects((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50

      bg-black/30
      backdrop-blur-sm

      flex
      items-end
      md:items-center
      justify-center

      p-0
      md:p-5
      "
    >
      <div
        className="
        bg-white

        w-full
        md:max-w-[950px]

        h-[95vh]
        md:h-auto
        md:max-h-[90vh]

        rounded-t-[35px]
        md:rounded-[35px]

        overflow-hidden

        flex
        flex-col

        shadow-2xl
        "
      >
        {/* HEADER */}

        <div
          className="
          sticky
          top-0

          bg-white
          z-10

          p-5
          md:p-7

          border-b
          border-gray-100

          flex
          justify-between
          items-center
          "
        >
          <div>
            <h2
              className="
              text-xl
              md:text-2xl
              font-bold
              "
            >
              Add / Select Subject
            </h2>

            <p
              className="
              text-sm
              text-gray-500
              mt-1
              "
            >
              Select subjects you teach
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
            p-3
            rounded-2xl
            hover:bg-gray-100
            transition-all
            "
          >
            <HiOutlineXMark className="text-xl" />
          </button>
        </div>

        {/* SCROLLABLE BODY */}

        <div
          className="
          flex-1
          overflow-y-auto

          p-5
          md:p-7
          "
        >
          {/* TOP ACTIONS */}

          <div
            className="
            flex
            flex-col
            md:flex-row

            gap-4
            "
          >
            {/* CLASS */}

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="
              w-full
              md:w-[200px]

              px-4
              py-3

              rounded-2xl
              border
              border-gray-200

              outline-none
              "
            >
              {classes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            {/* SEARCH */}

            <div
              className="
              flex-1

              flex
              items-center
              gap-3

              px-4
              py-3

              border
              border-gray-200

              rounded-2xl
              "
            >
              <HiOutlineMagnifyingGlass
                className="
                text-gray-400
                flex-shrink-0
                "
              />

              <input
                placeholder="Search subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full
                outline-none
                text-sm
                "
              />
            </div>
          </div>

          {/* SUBJECT GRID */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2

            gap-4

            mt-7
            "
          >
            {filteredSubjects.map((subject) => {
              const key = `${selectedClass}-${subject}`;

              const selected = selectedSubjects.includes(key);

              return (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  className={`
                    p-5

                    rounded-[28px]

                    border

                    text-left

                    transition-all

                    ${
                      selected
                        ? "border-green-500 bg-green-50"
                        : "border-gray-100 hover:bg-blue-50 hover:border-blue-300"
                    }
                    `}
                >
                  <div className="flex justify-between">
                    <div>
                      <div
                        className="
                          w-12
                          h-12

                          rounded-2xl

                          bg-blue-100

                          flex
                          items-center
                          justify-center

                          text-blue-600
                          "
                      >
                        <HiOutlineBookOpen />
                      </div>

                      <h3 className="font-semibold mt-4">{subject}</h3>

                      <p
                        className="
                          text-sm
                          text-gray-500
                          mt-1
                          "
                      >
                        {selectedClass}
                      </p>
                    </div>

                    {selected && (
                      <HiOutlineCheckCircle
                        className="
                          text-green-500
                          text-2xl
                          "
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
          sticky
          bottom-0

          bg-white

          border-t
          border-gray-100

          p-5

          flex
          flex-col
          sm:flex-row

          gap-4

          justify-between
          items-center
          "
        >
          <div className="flex items-center gap-2">
            <HiOutlineAcademicCap className="text-gray-500" />

            <span
              className="
              text-sm
              text-gray-500
              "
            >
              {selectedSubjects.length} subjects selected
            </span>
          </div>

          <button
            className="
            w-full
            sm:w-auto

            px-6
            py-3

            rounded-2xl

            text-white
            font-medium
            "
            style={{
              background: "var(--primary-solid)",
            }}
          >
            Save Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSubjectModal;
