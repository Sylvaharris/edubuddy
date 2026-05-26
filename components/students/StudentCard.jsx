"use client";

const StudentCard = ({ student, setSelectedStudent }) => {
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      onClick={() => setSelectedStudent(student)}
      className="
      bg-white
      rounded-[30px]

      p-6

      border
      border-gray-100

      cursor-pointer

      hover:shadow-md
      hover:-translate-y-1

      transition-all
      "
    >
      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <div
          className="
          w-14
          h-14

          rounded-full

          bg-blue-100

          flex
          items-center
          justify-center

          font-bold
          text-blue-700
          "
        >
          {initials}
        </div>

        <div>
          <h3 className="font-bold">{student.name}</h3>

          <p className="text-sm text-gray-500">{student.studentId}</p>
        </div>
      </div>

      <div
        className="
        mt-5
        space-y-3
        "
      >
        <p>Attendance: {student.attendance}%</p>

        <p>Performance: {student.performance}%</p>

        <p>Class: {student.class}</p>
      </div>
    </div>
  );
};

export default StudentCard;
