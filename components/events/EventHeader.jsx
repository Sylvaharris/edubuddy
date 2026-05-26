"use client";

import { HiOutlineCalendarDays, HiOutlinePlus } from "react-icons/hi2";

const EventHeader = ({ onCreate }) => {
  return (
    <section
      className="
      flex
      flex-col
      lg:flex-row
      lg:items-center
      lg:justify-between
      gap-6
      mb-8
      "
    >
      <div className="flex gap-4">
        <div
          className="
          w-14
          h-14

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
          <HiOutlineCalendarDays className="text-2xl" />
        </div>

        <div>
          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Events
          </h1>

          <p
            className="
            mt-2
            text-gray-500
            "
          >
            Manage classes, meetings and school activities.
          </p>
        </div>
      </div>

      <button
        onClick={onCreate}
        className="
        px-6
        py-3

        rounded-2xl

        flex
        items-center
        gap-3

        text-white
        font-medium

        shadow-sm
        "
        style={{
          background: "var(--primary-solid)",
        }}
      >
        <HiOutlinePlus />
        Create Event
      </button>
    </section>
  );
};

export default EventHeader;
