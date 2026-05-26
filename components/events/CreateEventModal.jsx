"use client";

import { HiOutlineXMark } from "react-icons/hi2";

const CreateEventModal = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50

      bg-black/30
      backdrop-blur-sm

      flex
      items-center
      justify-center

      p-5
      "
    >
      <div
        className="
        bg-white

        w-full
        max-w-[700px]

        rounded-[35px]

        p-7
        "
      >
        <div
          className="
          flex
          justify-between
          items-center
          mb-6
          "
        >
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Create Event
          </h2>

          <button onClick={() => setOpen(false)}>
            <HiOutlineXMark />
          </button>
        </div>

        <div className="space-y-5">
          <input
            placeholder="Event title"
            className="
            w-full
            p-4
            rounded-2xl
            border
            border-gray-200
            "
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              className="
              p-4
              rounded-2xl
              border
              border-gray-200
              "
            />

            <input
              type="time"
              className="
              p-4
              rounded-2xl
              border
              border-gray-200
              "
            />
          </div>

          <textarea
            rows={4}
            placeholder="Description..."
            className="
            w-full
            p-4
            rounded-2xl
            border
            border-gray-200
            "
          />

          <button
            className="
            w-full

            py-4

            rounded-2xl

            text-white
            font-medium
            "
            style={{
              background: "var(--primary-solid)",
            }}
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
