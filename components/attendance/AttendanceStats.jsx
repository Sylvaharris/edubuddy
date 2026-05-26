"use client";

import {
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";

const AttendanceStats = ({ students = [] }) => {
  const totalStudents = students.length;

  const presentStudents = students.filter(
    (student) => student.status === "Present",
  ).length;

  const absentStudents = students.filter(
    (student) => student.status === "Absent",
  ).length;

  const attendanceRate =
    totalStudents > 0 ? Math.round((presentStudents / totalStudents) * 100) : 0;

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      subtitle: "Registered students",
      icon: <HiOutlineUsers />,
      progress: 100,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },

    {
      title: "Present",
      value: presentStudents,
      subtitle: `${attendanceRate}% attendance rate`,
      icon: <HiOutlineCheckCircle />,
      progress: attendanceRate,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },

    {
      title: "Absent",
      value: absentStudents,
      subtitle: `${100 - attendanceRate}% missing`,
      icon: <HiOutlineXCircle />,
      progress: totalStudents
        ? Math.round((absentStudents / totalStudents) * 100)
        : 0,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];

  return (
    <section
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-6
      mb-8
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
          bg-white
          rounded-[28px]

          border
          border-gray-100

          p-6

          shadow-sm

          hover:shadow-md
          hover:-translate-y-1

          transition-all
          duration-300
          "
        >
          {/* TOP */}

          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>

              <h2
                className="
                text-4xl
                font-bold
                mt-3
                text-gray-900
                "
              >
                {stat.value}
              </h2>

              <p
                className="
                mt-2
                text-sm
                text-gray-400
                "
              >
                {stat.subtitle}
              </p>
            </div>

            {/* ICON */}

            <div
              className={`
              w-14
              h-14

              rounded-2xl

              flex
              items-center
              justify-center

              text-2xl

              ${stat.iconBg}
              ${stat.iconColor}
              `}
            >
              {stat.icon}
            </div>
          </div>

          {/* PROGRESS */}

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-400">Progress</span>

              <span className="text-xs font-medium text-gray-500">
                {stat.progress}%
              </span>
            </div>

            <div
              className="
              h-2
              rounded-full
              bg-gray-100
              overflow-hidden
              "
            >
              <div
                className="
                h-full
                rounded-full
                transition-all
                duration-700
                "
                style={{
                  width: `${stat.progress}%`,
                  background: "var(--primary-solid)",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AttendanceStats;
