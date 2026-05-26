"use client";

import {
  HiOutlineBookOpen,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineFolder,
} from "react-icons/hi2";

const SubjectStats = ({ subjects }) => {
  const stats = [
    {
      title: "Subjects",
      value: subjects.length,
      icon: <HiOutlineBookOpen />,
      bg: "bg-blue-50",
      color: "text-blue-600",
    },

    {
      title: "Published",
      value: subjects.filter((s) => s.status === "Published").length,

      icon: <HiOutlineCheckCircle />,
      bg: "bg-emerald-50",
      color: "text-emerald-600",
    },

    {
      title: "Drafts",
      value: subjects.filter((s) => s.status === "Draft").length,

      icon: <HiOutlineClock />,
      bg: "bg-orange-50",
      color: "text-orange-600",
    },

    {
      title: "Materials",
      value: subjects.reduce((sum, item) => sum + item.materials.length, 0),

      icon: <HiOutlineFolder />,
      bg: "bg-purple-50",
      color: "text-purple-600",
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
      {stats.map((item) => (
        <div
          key={item.title}
          className="
          bg-white
          rounded-3xl
          border
          border-gray-100
          p-6
          shadow-sm
          "
        >
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>

              <h2
                className="
                text-3xl
                font-bold
                mt-2
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

export default SubjectStats;
