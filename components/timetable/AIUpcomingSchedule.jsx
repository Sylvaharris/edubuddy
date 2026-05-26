"use client";

import {
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineAcademicCap,
  HiOutlineMapPin,
} from "react-icons/hi2";

const AIUpcomingSchedule = ({ selectedClass, timetableData }) => {
  /**
   * ==========================================
   * MOCK AI LOGIC
   * ==========================================
   *
   * Later:
   * - Get teacher's real timetable
   * - Compare current time
   * - Predict next class
   * - Trigger reminders/notifications
   *
   */

  const nextClass =
    timetableData?.find((item) => item.type !== "break") || null;

  if (!nextClass) return null;

  return (
    <section
      className="
      mb-8

      bg-white

      border
      border-gray-100

      rounded-[32px]

      p-6

      shadow-sm
      overflow-hidden
      relative
      "
    >
      {/* Soft background decoration */}

      <div
        className="
        absolute
        top-0
        right-0

        w-[180px]
        h-[180px]

        rounded-full

        opacity-[0.03]
        blur-3xl
        "
        style={{
          background: "var(--primary-1)",
        }}
      />

      {/* Header */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        <div
          className="
          w-12
          h-12

          rounded-2xl

          flex
          items-center
          justify-center
          text-white
          "
          style={{
            background: "var(--primary-solid)",
          }}
        >
          <HiOutlineSparkles className="text-xl" />
        </div>

        <div>
          <h2
            className="
            font-bold
            text-lg
            text-gray-900
            "
          >
            EduBuddy AI
          </h2>

          <p className="text-sm text-gray-500">Upcoming teaching schedule</p>
        </div>
      </div>

      {/* Body */}

      <div className="mt-6">
        <p
          className="
          text-sm
          text-gray-500
          "
        >
          Next class starts in
        </p>

        <h1
          className="
          text-4xl
          font-bold
          mt-1
          "
        >
          15 mins
        </h1>

        <div
          className="
          mt-6

          grid
          sm:grid-cols-3
          gap-4
          "
        >
          {/* Subject */}

          <div
            className="
            p-4

            rounded-2xl
            bg-gray-50
            "
          >
            <p className="text-xs text-gray-500">Subject</p>

            <h3 className="font-semibold mt-2">{nextClass.subject}</h3>
          </div>

          {/* Class */}

          <div
            className="
            p-4

            rounded-2xl
            bg-gray-50
            "
          >
            <div className="flex gap-2 items-center">
              <HiOutlineAcademicCap className="text-gray-400" />

              <p className="text-xs text-gray-500">Class</p>
            </div>

            <h3 className="font-semibold mt-2">{selectedClass}</h3>
          </div>

          {/* Room */}

          <div
            className="
            p-4

            rounded-2xl
            bg-gray-50
            "
          >
            <div className="flex gap-2 items-center">
              <HiOutlineMapPin className="text-gray-400" />

              <p className="text-xs text-gray-500">Room</p>
            </div>

            <h3 className="font-semibold mt-2">{nextClass.room}</h3>
          </div>
        </div>

        {/* Time */}

        <div
          className="
          mt-6

          flex
          items-center
          gap-3

          text-sm
          text-gray-500
          "
        >
          <HiOutlineClock />

          <span>
            {nextClass.day} • {nextClass.time}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AIUpcomingSchedule;
