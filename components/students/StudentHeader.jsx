"use client";

import { HiOutlinePlus } from "react-icons/hi2";

const StudentHeader = () => {
  return (
    <section
      className="
      flex
      flex-col
      lg:flex-row
      lg:items-center
      lg:justify-between
      gap-5
      mb-8
      "
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>

        <p
          className="
          mt-2
          text-gray-500
          "
        >
          Manage and monitor your assigned students.
        </p>
      </div>

      <button
        className="
        px-6
        py-3

        rounded-2xl

        text-white
        font-medium

        flex
        items-center
        gap-2

        shadow-sm
        hover:scale-[1.02]

        transition-all
        "
        style={{
          background: "var(--primary-solid)",
        }}
      >
        <HiOutlinePlus />
        Add Student
      </button>
    </section>
  );
};

export default StudentHeader;
