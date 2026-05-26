"use client";

import { HiOutlineMagnifyingGlass, HiOutlineFunnel } from "react-icons/hi2";

const SubjectToolbar = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div
      className="
      flex
      flex-wrap
      justify-between
      gap-4
      mb-8
      "
    >
      {/* SEARCH */}

      <div
        className="
        flex
        items-center
        gap-3

        px-4
        py-3

        bg-white

        border
        border-gray-100

        rounded-2xl
        "
      >
        <HiOutlineMagnifyingGlass className="text-gray-400" />

        <input
          placeholder="Search subjects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          outline-none
          bg-transparent
          text-sm
          "
        />
      </div>

      {/* FILTER */}

      <div className="relative">
        <HiOutlineFunnel
          className="
          absolute
          top-4
          left-3
          text-gray-400
          "
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="
          pl-10
          pr-6
          py-3

          rounded-2xl

          border
          border-gray-100

          bg-white
          outline-none
          "
        >
          <option>All Statuses</option>

          <option>Published</option>

          <option>Draft</option>
        </select>
      </div>
    </div>
  );
};

export default SubjectToolbar;
