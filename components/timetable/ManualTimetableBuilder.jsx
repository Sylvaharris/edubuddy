"use client";

import { useState } from "react";

const subjects = ["Math", "English", "Science", "Biology"];

const ManualTimetableBuilder = () => {
  const [dragged, setDragged] = useState("");

  const [slots, setSlots] = useState({});

  const dropSubject = (slot) => {
    setSlots({
      ...slots,
      [slot]: dragged,
    });
  };

  return (
    <div>
      <div className="flex gap-3 mb-6">
        {subjects.map((subject) => (
          <div
            key={subject}
            draggable
            onDragStart={() => setDragged(subject)}
            className="
                px-4
                py-3

                rounded-xl

                bg-blue-50
                cursor-grab
              "
          >
            {subject}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {Array.from({
          length: 15,
        }).map((_, i) => (
          <div
            key={i}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => dropSubject(i)}
            className="
                h-24

                rounded-2xl
                border

                flex
                items-center
                justify-center
              "
          >
            {slots[i] || "Drop"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManualTimetableBuilder;
