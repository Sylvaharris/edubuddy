"use client";

const AttendanceRow = ({ student, onToggle }) => {
  return (
    <div
      className="
      flex
      items-center
      justify-between

      p-4

      rounded-2xl

      border
      border-gray-100

      hover:bg-gray-50

      transition-all
      duration-300
      "
    >
      {/* LEFT */}

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        {/* Avatar */}

        <div
          className="
          h-12
          w-12

          rounded-full

          flex
          items-center
          justify-center

          text-white
          font-semibold
          "
          style={{
            background: "var(--primary)",
          }}
        >
          {student.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="font-medium">{student.name}</h3>

          <p className="text-sm text-gray-500">{student.class}</p>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex gap-3">
        <button
          onClick={() => onToggle(student.id, "present")}
          className={`
          px-4
          py-2

          rounded-xl
          text-sm

          transition-all

          ${
            student.status === "present"
              ? "bg-green-500 text-white"
              : "bg-gray-100"
          }
          `}
        >
          Present
        </button>

        <button
          onClick={() => onToggle(student.id, "absent")}
          className={`
          px-4
          py-2

          rounded-xl
          text-sm

          transition-all

          ${
            student.status === "absent"
              ? "bg-red-500 text-white"
              : "bg-gray-100"
          }
          `}
        >
          Absent
        </button>
      </div>
    </div>
  );
};

export default AttendanceRow;
