"use client";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineFunnel,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

const EventToolbar = ({
  search,
  setSearch,
  filter,
  setFilter,
  view,
  setView,
}) => {
  const views = ["Month", "Week", "List"];

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
        xl:flex-row
        gap-4
        justify-between
        "
      >
        {/* LEFT */}

        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* SEARCH */}

          <div
            className="
            flex
            items-center
            gap-3

            px-4
            py-3

            rounded-2xl
            border
            border-gray-200

            flex-1
            "
          >
            <HiOutlineMagnifyingGlass className="text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search event..."
              className="
              flex-1
              outline-none
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
              left-4
              text-gray-400
              "
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="
              pl-10
              pr-8
              py-3

              rounded-2xl
              border
              border-gray-200

              outline-none
              "
            >
              <option>All</option>
              <option>Class</option>
              <option>Meeting</option>
              <option>Exam</option>
              <option>School Activity</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
          bg-gray-100
          rounded-2xl
          p-1
          flex
          gap-1
          "
        >
          {views.map((item) => (
            <button
              key={item}
              onClick={() => setView(item)}
              className={`
              px-5
              py-2.5
              rounded-xl
              text-sm
              font-medium
              transition-all

              ${view === item ? "bg-white shadow-sm" : "text-gray-500"}
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventToolbar;
