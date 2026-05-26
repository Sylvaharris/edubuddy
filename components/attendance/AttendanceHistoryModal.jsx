"use client";

import { useMemo, useState } from "react";

import {
  HiOutlineXMark,
  HiOutlineCalendarDays,
  HiOutlineMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";

const AttendanceHistoryModal = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  /* MOCK HISTORY
     Later:
     API/Database
  */

  const attendanceHistory = [
    {
      id: 1,
      student: "John Doe",
      date: "2026-05-23",
      status: "Present",
    },

    {
      id: 2,
      student: "Mary Johnson",
      date: "2026-05-23",
      status: "Absent",
    },

    {
      id: 3,
      student: "Daniel Smith",
      date: "2026-05-22",
      status: "Present",
    },

    {
      id: 4,
      student: "Sarah Williams",
      date: "2026-05-21",
      status: "Absent",
    },

    {
      id: 5,
      student: "John Doe",
      date: "2026-05-20",
      status: "Present",
    },
  ];

  const filteredData = useMemo(() => {
    return attendanceHistory.filter((item) => {
      const searchMatch = item.student
        .toLowerCase()
        .includes(search.toLowerCase());

      const dateMatch = dateFilter === "" ? true : item.date === dateFilter;

      return searchMatch && dateMatch;
    });
  }, [search, dateFilter]);

  const presentCount = attendanceHistory.filter(
    (x) => x.status === "Present",
  ).length;

  const absentCount = attendanceHistory.filter(
    (x) => x.status === "Absent",
  ).length;

  if (!open) return null;

  return (
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
      p-4
      "
    >
      <div
        className="
        bg-white

        w-full
        max-w-5xl

        rounded-[35px]

        shadow-2xl

        overflow-hidden
        "
      >
        {/* HEADER */}

        <div
          className="
          px-8
          py-6
          border-b
          border-gray-100

          flex
          justify-between
          items-center
          "
        >
          <div>
            <h2 className="text-2xl font-bold">Attendance History</h2>

            <p className="text-sm text-gray-500 mt-1">
              View all attendance records
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
            p-3
            rounded-xl
            hover:bg-gray-100
            "
          >
            <HiOutlineXMark className="text-xl" />
          </button>
        </div>

        {/* STATS */}

        <div
          className="
          p-6
          grid
          md:grid-cols-2
          gap-5
          "
        >
          <div className="bg-gray-50 rounded-3xl p-5">
            <p className="text-gray-500 text-sm">Present Records</p>

            <h1 className="text-3xl font-bold mt-2">{presentCount}</h1>
          </div>

          <div className="bg-gray-50 rounded-3xl p-5">
            <p className="text-gray-500 text-sm">Absent Records</p>

            <h1 className="text-3xl font-bold mt-2">{absentCount}</h1>
          </div>
        </div>

        {/* FILTERS */}

        <div
          className="
          px-6
          pb-6

          flex
          flex-wrap
          gap-4
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

            border
            border-gray-200

            rounded-2xl
            "
          >
            <HiOutlineMagnifyingGlass />

            <input
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none"
            />
          </div>

          {/* DATE */}

          <div className="relative">
            <HiOutlineCalendarDays
              className="
              absolute
              left-3
              top-4
              text-gray-400
              "
            />

            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="
              border
              border-gray-200

              rounded-2xl

              py-3
              pl-10
              pr-4
              "
            />
          </div>
        </div>

        {/* HISTORY LIST */}

        <div
          className="
          max-h-[400px]
          overflow-y-auto
          px-6
          pb-8
          "
        >
          <div className="space-y-3">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="
                p-5

                rounded-3xl

                border
                border-gray-100

                hover:bg-gray-50

                transition-all

                flex
                justify-between
                items-center
                "
              >
                <div>
                  <h4 className="font-semibold">{item.student}</h4>

                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>

                <div
                  className={`
                  flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-full

                  ${
                    item.status === "Present"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-500"
                  }
                  `}
                >
                  {item.status === "Present" ? (
                    <HiOutlineCheckCircle />
                  ) : (
                    <HiOutlineXCircle />
                  )}

                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceHistoryModal;
