"use client";

import {
  HiOutlinePlus,
  HiOutlineAcademicCap,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

const TimetableHeader = ({
  selectedClass,
  setSelectedClass,
  search,
  setSearch,
  openCreateModal,
}) => {
  /**
   * Available classes
   *
   * Later:
   * Comes from backend/database
   */
  const classes = ["JSS1A", "JSS2B", "SS1A"];

  return (
    <section
      className="
      bg-white
      rounded-[32px]
      border
      border-gray-100
      shadow-sm

      p-6
      mb-8
      "
    >
      {/* TOP */}

      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
        "
      >
        {/* LEFT */}

        <div>
          <h1
            className="
            text-3xl
            font-bold
            text-gray-900
            "
          >
            Timetable Management
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Manage class schedules and school timetables.
          </p>
        </div>

        {/* CREATE BUTTON */}

        <button
          onClick={openCreateModal}
          className="
          flex
          items-center
          gap-2

          px-5
          py-3

          rounded-2xl

          text-white
          font-medium

          shadow-sm

          hover:shadow-md
          hover:scale-[1.02]

          transition-all
          duration-300
          "
          style={{
            background: "var(--primary-solid)",
          }}
        >
          <HiOutlinePlus className="text-xl" />

          <span>Create Timetable</span>
        </button>
      </div>

      {/* CONTROLS */}

      <div
        className="
        mt-6

        flex
        flex-col
        md:flex-row

        gap-4
        "
      >
        {/* SEARCH */}

        <div
          className="
          flex-1

          flex
          items-center
          gap-3

          px-4
          py-3

          rounded-2xl

          border
          border-gray-200
          "
        >
          <HiOutlineMagnifyingGlass
            className="
            text-gray-400
            text-xl
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subject or teacher..."
            className="
            w-full
            outline-none
            text-sm
            "
          />
        </div>

        {/* CLASS FILTER */}

        <div className="relative">
          <HiOutlineAcademicCap
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2

            text-gray-400
            "
          />

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="
            appearance-none

            pl-12
            pr-10
            py-3

            rounded-2xl

            border
            border-gray-200

            outline-none
            bg-white

            min-w-[160px]
            "
          >
            {classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default TimetableHeader;
