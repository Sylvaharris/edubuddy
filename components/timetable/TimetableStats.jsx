"use client";

import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlinePauseCircle,
  HiOutlineUsers,
} from "react-icons/hi2";

const TimetableStats = ({ timetableData = [] }) => {
  /**
   * ==========================================
   * CALCULATE LIVE STATS
   * ==========================================
   */

  const totalClasses = timetableData.filter(
    (item) => item.type === "class",
  ).length;

  const breakSessions = timetableData.filter(
    (item) => item.type === "break",
  ).length;

  /**
   * Mock upcoming count
   *
   * Later:
   * Compare current time with timetable
   */

  const upcomingClasses = timetableData
    .filter((item) => item.type === "class")
    .slice(0, 3).length;

  /**
   * Unique teachers
   */

  const teachersAvailable = [
    ...new Set(
      timetableData.filter((item) => item.teacher).map((item) => item.teacher),
    ),
  ].length;

  const stats = [
    {
      title: "Total Classes",
      value: totalClasses,
      subtitle: "Scheduled periods",
      icon: <HiOutlineBookOpen />,
    },

    {
      title: "Upcoming",
      value: upcomingClasses,
      subtitle: "Today's remaining",
      icon: <HiOutlineClock />,
    },

    {
      title: "Break Sessions",
      value: breakSessions,
      subtitle: "Rest periods",
      icon: <HiOutlinePauseCircle />,
    },

    {
      title: "Teachers",
      value: teachersAvailable,
      subtitle: "Assigned teachers",
      icon: <HiOutlineUsers />,
    },
  ];

  return (
    <section
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
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
          hover:-translate-y-[2px]

          transition-all
          duration-300
          "
        >
          <div
            className="
            flex
            justify-between
            items-start
            "
          >
            {/* LEFT */}

            <div>
              <p
                className="
                text-sm
                text-gray-500
                "
              >
                {stat.title}
              </p>

              <h2
                className="
                text-3xl
                font-bold
                mt-2
                text-gray-900
                "
              >
                {stat.value}
              </h2>

              <p
                className="
                mt-2
                text-xs
                text-gray-400
                "
              >
                {stat.subtitle}
              </p>
            </div>

            {/* ICON */}

            <div
              className="
              w-12
              h-12

              rounded-2xl

              flex
              items-center
              justify-center

              text-white
              shadow-sm
              "
              style={{
                background: "var(--primary-solid)",
              }}
            >
              <span className="text-xl">{stat.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TimetableStats;
