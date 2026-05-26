"use client";

import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi2";

const EventCards = ({ events }) => {
  return (
    <div className="space-y-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="
bg-white
rounded-[30px]
border
border-gray-100

p-6

hover:shadow-md
transition-all
"
        >
          <div className="flex justify-between">
            <div>
              <span
                className="
px-3
py-1

rounded-full

bg-blue-100
text-blue-600

text-xs
"
              >
                {event.type}
              </span>

              <h3
                className="
mt-4
font-bold
text-lg
"
              >
                {event.title}
              </h3>

              <p
                className="
mt-2
text-gray-500
"
              >
                {event.class}
              </p>
            </div>
          </div>

          <div
            className="
mt-5
flex
gap-5
text-sm
text-gray-500
flex-wrap
"
          >
            <div className="flex items-center gap-2">
              <HiOutlineCalendar />

              {event.date}
            </div>

            <div className="flex items-center gap-2">
              <HiOutlineClock />

              {event.startTime}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
