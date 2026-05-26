"use client";

import { HiOutlineMagnifyingGlass, HiOutlineFunnel } from "react-icons/hi2";

const StudentToolbar = ({ search, setSearch }) => {
  return (
    <section
      className="
      bg-white
      rounded-[30px]
      border
      border-gray-100

      p-5
      mb-8
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row
        gap-4
        "
      >
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
          <HiOutlineMagnifyingGlass className="text-gray-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student..."
            className="
            flex-1
            outline-none
            "
          />
        </div>

        <button
          className="
          px-5
          py-3

          rounded-2xl
          border
          border-gray-200

          flex
          items-center
          gap-2
          "
        >
          <HiOutlineFunnel />
          Filter
        </button>
      </div>
    </section>
  );
};

export default StudentToolbar;
