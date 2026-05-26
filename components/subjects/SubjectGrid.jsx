"use client";

import SubjectCard from "./SubjectCard";

const SubjectGrid = ({ subjects }) => {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-6
      "
    >
      {subjects.map((subject) => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </div>
  );
};

export default SubjectGrid;
