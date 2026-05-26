"use client";

import StudentCard from "./StudentCard";

const StudentGrid = ({ students, setSelectedStudent }) => {
  return (
    <section
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-6
      "
    >
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          setSelectedStudent={setSelectedStudent}
        />
      ))}
    </section>
  );
};

export default StudentGrid;
