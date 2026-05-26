"use client";

import {
  HiOutlineXMark,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

const StudentProfileModal = ({
  student,
  close,
  openMessage,
  openNotes,
  notes = [],
}) => {
  if (!student) return null;

  /**
   * ===========================
   * INITIALS
   * ===========================
   */

  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="
      fixed
      inset-0

      bg-black/20
      backdrop-blur-sm

      z-50

      flex
      justify-end
      "
    >
      <div
        className="
        h-screen
        w-full
        max-w-[520px]

        bg-white

        overflow-y-auto

        p-8

        shadow-2xl

        animate-[slide_.3s_ease]
        "
      >
        {/* CLOSE */}

        <button
          onClick={close}
          className="
          ml-auto
          block

          p-2

          rounded-xl

          hover:bg-gray-100

          transition
          "
        >
          <HiOutlineXMark className="text-xl" />
        </button>

        {/* PROFILE */}

        <div className="mt-4">
          <div
            className="
            w-24
            h-24

            rounded-full

            bg-blue-100

            flex
            items-center
            justify-center

            font-bold
            text-2xl
            text-blue-700
            "
          >
            {initials}
          </div>

          <h1
            className="
            mt-5
            text-2xl
            font-bold
            "
          >
            {student.name}
          </h1>

          <p className="text-gray-500 mt-1">
            {student.class}
            {" • "}
            {student.studentId || "ST102"}
          </p>
        </div>

        {/* STATS */}

        <div
          className="
          grid
          grid-cols-2
          gap-4
          mt-8
          "
        >
          <div
            className="
            bg-green-50
            rounded-3xl
            p-5
            "
          >
            <p className="text-sm text-gray-500">Attendance</p>

            <h2
              className="
              mt-2
              text-2xl
              font-bold
              text-green-600
              "
            >
              {student.attendance || 84}%
            </h2>
          </div>

          <div
            className="
            bg-blue-50
            rounded-3xl
            p-5
            "
          >
            <p className="text-sm text-gray-500">Performance</p>

            <h2
              className="
              mt-2
              text-2xl
              font-bold
              text-blue-600
              "
            >
              {student.performance || 76}%
            </h2>
          </div>
        </div>

        {/* OVERVIEW */}

        <div className="mt-8">
          <h3
            className="
            font-bold
            mb-5
            "
          >
            Student Overview
          </h3>

          <div className="space-y-4">
            <div
              className="
              flex
              items-center
              gap-3
              "
            >
              <HiOutlineAcademicCap className="text-orange-500 text-lg" />

              <span>Class: {student.class}</span>
            </div>

            <div
              className="
              flex
              items-center
              gap-3
              "
            >
              <HiOutlineChartBar className="text-purple-500 text-lg" />

              <span>Behaviour: {student.behavior || "Excellent"}</span>
            </div>

            <div
              className="
              flex
              items-center
              gap-3
              "
            >
              <HiOutlineCheckCircle className="text-green-500 text-lg" />

              <span>Current Status: {student.status}</span>
            </div>
          </div>
        </div>

        {/* ACTIVITY */}

        <div className="mt-10">
          <h3
            className="
            font-bold
            mb-5
            "
          >
            Recent Activity
          </h3>

          <div className="space-y-3">
            {[
              "Submitted Mathematics assignment",
              "Scored 18/20 in Basic Science",
              "Attended English class",
            ].map((activity, index) => (
              <div
                key={index}
                className="
                  p-4

                  rounded-2xl

                  bg-gray-50

                  text-sm
                  "
              >
                {activity}
              </div>
            ))}
          </div>
        </div>

        {/* TEACHER NOTES */}

        <div className="mt-10">
          <h3
            className="
            font-bold
            mb-4
            "
          >
            Teacher Notes
          </h3>

          <div className="space-y-3">
            {notes.length === 0 ? (
              <div
                className="
                p-4

                rounded-2xl

                bg-gray-50
                text-gray-400
                "
              >
                No notes added yet
              </div>
            ) : (
              notes.map((note, index) => (
                <div
                  key={index}
                  className="
                    p-4

                    rounded-2xl

                    bg-gray-50
                    "
                >
                  <div className="flex justify-between">
                    <p className="text-sm">{note.text}</p>

                    <span
                      className="
                        text-xs
                        px-3
                        py-1

                        rounded-full

                        bg-orange-100
                        text-orange-600
                        "
                    >
                      {note.priority}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ACTION BUTTONS */}

        <div
          className="
          mt-10

          grid
          grid-cols-2
          gap-4
          "
        >
          <button
            onClick={openMessage}
            className="
            p-4

            rounded-2xl

            bg-blue-50
            text-blue-600

            hover:bg-blue-100

            transition-all

            flex
            justify-center
            items-center
            gap-2
            "
          >
            <HiOutlineChatBubbleLeftRight />
            Message Parent
          </button>

          <button
            onClick={openNotes}
            className="
            p-4

            rounded-2xl

            bg-orange-50
            text-orange-600

            hover:bg-orange-100

            transition-all

            flex
            justify-center
            items-center
            gap-2
            "
          >
            <HiOutlineClipboardDocumentList />
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileModal;
