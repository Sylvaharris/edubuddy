"use client";

import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi2";

const EventStats = ({ events }) => {
  const stats = [
    {
      title: "Total Events",
      value: events.length,
      icon: <HiOutlineCalendar />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },

    {
      title: "Upcoming",
      value: 7,
      icon: <HiOutlineClock />,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },

    {
      title: "Today",
      value: 2,
      icon: <HiOutlineSparkles />,
      bg: "bg-amber-100",
      color: "text-amber-600",
    },

    {
      title: "Completed",
      value: 12,
      icon: <HiOutlineCheckCircle />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
  ];

  return (
    <section
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4

      gap-5
      mb-8
      "
    >
      {stats.map((item) => (
        <div
          key={item.title}
          className="
            bg-white
            rounded-3xl
            p-6
            border
            border-gray-100
            "
        >
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-bold
                  "
              >
                {item.value}
              </h2>
            </div>

            <div
              className={`
                w-12
                h-12

                rounded-2xl

                flex
                items-center
                justify-center

                ${item.bg}
                ${item.color}
                `}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventStats;
