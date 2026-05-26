"use client";

import { useState } from "react";

import { HiOutlineXMark, HiOutlineDocumentPlus } from "react-icons/hi2";

const StudentNotesModal = ({ student, saveNote, close }) => {
  const [note, setNote] = useState("");

  const [priority, setPriority] = useState("Medium");

  if (!student) return null;

  return (
    <div
      className="
      fixed
      inset-0

      bg-black/30
      backdrop-blur-sm

      z-[70]

      flex
      justify-center
      items-center

      p-4
      "
    >
      <div
        className="
        bg-white

        w-full
        max-w-xl

        rounded-[32px]

        p-7
        "
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-xl">Teacher Notes</h2>

            <p className="text-gray-500 text-sm">{student.name}</p>
          </div>

          <button
            onClick={close}
            className="
            p-2
            rounded-xl
            hover:bg-gray-100
            "
          >
            <HiOutlineXMark />
          </button>
        </div>

        <div className="mt-6">
          <label className="font-medium">Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="
            w-full
            mt-2

            p-3

            rounded-2xl

            border
            border-gray-200
            "
          >
            <option>Low</option>

            <option>Medium</option>

            <option>High</option>
          </select>
        </div>

        <div className="mt-5">
          <textarea
            rows={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write teacher note..."
            className="
            w-full

            p-4

            rounded-2xl

            border
            border-gray-200

            outline-none
            "
          />
        </div>

        <button
          onClick={() => {
            saveNote({
              text: note,
              priority,
            });

            close();
          }}
          className="
          w-full
          mt-6

          py-4

          rounded-2xl

          text-white

          flex
          justify-center
          items-center
          gap-3
          "
          style={{
            background: "var(--primary-solid)",
          }}
        >
          <HiOutlineDocumentPlus />
          Save Note
        </button>
      </div>
    </div>
  );
};

export default StudentNotesModal;
