"use client";

import {
  HiOutlineUser,
  HiOutlineMapPin,
  HiOutlinePauseCircle,
} from "react-icons/hi2";

const TimetableGrid = ({ timetableData = [] }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timeSlots = [...new Set(timetableData.map((item) => item.time))];

  const getSchedule = (day, time) => {
    return timetableData.find((item) => item.day === day && item.time === time);
  };

  /**
   * ==================================
   * SUBJECT COLORS
   * ==================================
   *
   * Real-world schedule apps often
   * color subjects for quick scanning
   */

  const subjectColors = {
    Mathematics: "bg-blue-50 border-blue-200 text-blue-700",

    English: "bg-purple-50 border-purple-200 text-purple-700",

    Physics: "bg-indigo-50 border-indigo-200 text-indigo-700",

    Chemistry: "bg-pink-50 border-pink-200 text-pink-700",

    Biology: "bg-green-50 border-green-200 text-green-700",

    Computer: "bg-cyan-50 border-cyan-200 text-cyan-700",

    Science: "bg-orange-50 border-orange-200 text-orange-700",

    "Basic Science": "bg-orange-50 border-orange-200 text-orange-700",

    "Agricultural Science": "bg-lime-50 border-lime-200 text-lime-700",

    "Civic Education": "bg-rose-50 border-rose-200 text-rose-700",
  };

  return (
    <section
      className="
      bg-white
      rounded-[32px]
      border
      border-gray-100
      shadow-sm
      overflow-hidden
      "
    >
      {/* HEADER */}

      <div
        className="
        px-6
        py-5
        border-b
        border-gray-100
        "
      >
        <h2 className="text-xl font-bold">Weekly Timetable</h2>

        <p className="text-sm text-gray-500 mt-1">School schedule overview</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          {/* HEADER */}

          <div
            className="
            grid
            grid-cols-6
            bg-gray-50
            border-b
            border-gray-100
            "
          >
            <div className="p-5 font-semibold text-gray-500">Time</div>

            {days.map((day) => (
              <div
                key={day}
                className="
                p-5
                text-center
                font-semibold
                text-gray-700
                "
              >
                {day}
              </div>
            ))}
          </div>

          {/* BODY */}

          {timeSlots.map((time) => (
            <div
              key={time}
              className="
              grid
              grid-cols-6
              border-b
              border-gray-100
              "
            >
              {/* TIME */}

              <div
                className="
                p-5
                bg-gray-50
                text-sm
                font-medium
                text-gray-500
                "
              >
                {time}
              </div>

              {days.map((day) => {
                const schedule = getSchedule(day, time);

                return (
                  <div
                    key={`${day}-${time}`}
                    className="
                    p-3
                    min-h-[140px]
                    border-l
                    border-gray-100
                    "
                  >
                    {schedule ? (
                      schedule.type === "break" ? (
                        <div
                          className="
                          h-full
                          rounded-3xl
                          bg-orange-50
                          border
                          border-orange-200
                          flex
                          flex-col
                          justify-center
                          items-center
                          p-4
                          "
                        >
                          <HiOutlinePauseCircle
                            className="
                            text-3xl
                            text-orange-500
                            "
                          />

                          <p
                            className="
                            mt-2
                            font-semibold
                            text-orange-600
                            "
                          >
                            Break Time
                          </p>
                        </div>
                      ) : (
                        <div
                          className={`
                          h-full
                          rounded-3xl
                          border
                          p-4
                          hover:scale-[1.02]
                          hover:shadow-md
                          transition-all
                          duration-300
                          
                          ${
                            subjectColors[schedule.subject] ||
                            "bg-gray-50 border-gray-200 text-gray-700"
                          }
                          `}
                        >
                          <h3
                            className="
                            font-bold
                            text-base
                            "
                          >
                            {schedule.subject}
                          </h3>

                          <div
                            className="
                            mt-4
                            flex
                            items-center
                            gap-2
                            text-sm
                            "
                          >
                            <HiOutlineUser />

                            <span>{schedule.teacher}</span>
                          </div>

                          <div
                            className="
                            mt-2
                            flex
                            items-center
                            gap-2
                            text-sm
                            "
                          >
                            <HiOutlineMapPin />

                            <span>{schedule.room}</span>
                          </div>

                          <div
                            className="
                            mt-4
                            inline-flex
                            px-3
                            py-1
                            rounded-full
                            bg-white/70
                            text-xs
                            font-medium
                            "
                          >
                            Class Session
                          </div>
                        </div>
                      )
                    ) : (
                      <div
                        className="
                        h-full
                        rounded-3xl
                        border
                        border-dashed
                        border-gray-200
                        flex
                        items-center
                        justify-center
                        text-sm
                        text-gray-300
                        "
                      >
                        Empty
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimetableGrid;
