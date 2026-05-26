"use client";

import {
  HiOutlineXMark,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

const EventDetailsModal = ({ event, close }) => {
  if (!event) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50

      bg-black/30
      backdrop-blur-sm

      flex
      justify-end
      "
    >
      <div
        className="
        w-full
        max-w-[500px]

        bg-white
        h-screen

        p-8
        "
      >
        <button
          onClick={close}
          className="
          ml-auto
          block
          "
        >
          <HiOutlineXMark />
        </button>

        <span
          className="
          inline-block

          px-3
          py-1

          rounded-full

          bg-blue-100
          text-blue-700

          text-sm
          mt-5
          "
        >
          {event.type}
        </span>

        <h2
          className="
          mt-5
          text-3xl
          font-bold
          "
        >
          {event.title}
        </h2>

        <div
          className="
          mt-8
          space-y-5
          "
        >
          <div className="flex gap-3">
            <HiOutlineAcademicCap />
            {event.class}
          </div>

          <div className="flex gap-3">
            <HiOutlineCalendar />
            {event.date}
          </div>

          <div className="flex gap-3">
            <HiOutlineClock />
            {event.startTime}
          </div>
        </div>

        <div className="mt-10">
          <h4 className="font-semibold">Description</h4>

          <p
            className="
            mt-3
            text-gray-500
            "
          >
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
