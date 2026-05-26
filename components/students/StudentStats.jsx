"use client";

import {
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";

const StudentStats = ({ students }) => {
  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: <HiOutlineUsers />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },

    {
      title: "Present Today",
      value: students.filter((s) => s.status === "Present").length,

      icon: <HiOutlineCheckCircle />,

      bg: "bg-green-100",
      color: "text-green-600",
    },

    {
      title: "Average Performance",

      value: "76%",

      icon: <HiOutlineChartBar />,

      bg: "bg-orange-100",
      color: "text-orange-600",
    },

    {
      title: "Needs Attention",

      value: students.filter((s) => s.behavior === "Needs Attention").length,

      icon: <HiOutlineExclamationTriangle />,

      bg: "bg-red-100",
      color: "text-red-600",
    },
  ];

  return (
    <section
      className="
      grid
      grid-cols-1
      md:grid-cols-2
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
            rounded-[30px]

            p-6

            border
            border-gray-100
            "
        >
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-3
                  "
              >
                {stat.value}
              </h2>
            </div>

            <div
              className={`
                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                text-xl

                ${stat.bg}
                ${stat.color}
                `}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StudentStats;
