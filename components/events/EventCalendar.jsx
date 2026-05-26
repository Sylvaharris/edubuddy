"use client";

import { HiOutlineCalendarDays } from "react-icons/hi2";

const EventCalendar = ({ events, onSelectEvent }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const dates = Array.from({ length: 35 }, (_, i) => i + 1);

  /**
   * ==================================
   * WARM EVENT COLORS
   * ==================================
   */

  const eventColors = [
    {
      bg: "bg-orange-100",
      text: "text-orange-700",
      border: "border-orange-200",
    },

    {
      bg: "bg-amber-100",
      text: "text-amber-700",
      border: "border-amber-200",
    },

    {
      bg: "bg-rose-100",
      text: "text-rose-700",
      border: "border-rose-200",
    },

    {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-200",
    },

    {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-200",
    },
  ];

  return (
    <div
      className="
      bg-white

      rounded-[35px]

      border
      border-orange-100

      shadow-sm

      overflow-hidden
      "
    >
      {/* HEADER */}

      <div
        className="
        px-7
        py-6

        border-b
        border-orange-100

        bg-gradient-to-r
        from-orange-50
        via-amber-50
        to-yellow-50

        flex
        items-center
        justify-between
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
            w-12
            h-12

            rounded-2xl

            bg-orange-100

            flex
            items-center
            justify-center

            text-orange-600
            "
          >
            <HiOutlineCalendarDays className="text-xl" />
          </div>

          <div>
            <h2
              className="
              font-bold
              text-xl
              text-gray-800
              "
            >
              Event Calendar
            </h2>

            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Monthly school schedule
            </p>
          </div>
        </div>

        <span
          className="
          px-4
          py-2

          rounded-full

          bg-white

          text-sm
          font-medium
          text-gray-600

          shadow-sm
          "
        >
          May 2026
        </span>
      </div>

      <div className="p-6">
        {/* WEEK DAYS */}

        <div
          className="
          grid
          grid-cols-7
          gap-3
          mb-5
          "
        >
          {days.map((day) => (
            <div
              key={day}
              className="
              py-3

              rounded-2xl

              bg-orange-50

              text-center

              text-sm
              font-semibold

              text-orange-700
              "
            >
              {day}
            </div>
          ))}
        </div>

        {/* DATES */}

        <div
          className="
          grid
          grid-cols-7
          gap-3
          "
        >
          {dates.map((date) => {
            const dayEvents = events.filter((_, index) => index + 1 === date);

            const color = eventColors[date % eventColors.length];

            return (
              <div
                key={date}
                className="
                min-h-[120px]

                rounded-3xl

                border
                border-orange-100

                p-3

                bg-gradient-to-b
                from-white
                to-orange-50/40

                hover:shadow-md
                hover:scale-[1.02]

                transition-all
                duration-300
                "
              >
                {/* DATE */}

                <div
                  className="
                  flex
                  justify-between
                  items-center
                  "
                >
                  <span
                    className="
                    font-bold
                    text-gray-700
                    "
                  >
                    {date}
                  </span>

                  {dayEvents.length > 0 && (
                    <div
                      className="
                      w-2
                      h-2

                      rounded-full

                      bg-orange-500
                      "
                    />
                  )}
                </div>

                {/* EVENTS */}

                <div
                  className="
                  mt-3
                  space-y-2
                  "
                >
                  {dayEvents.slice(0, 2).map((event) => (
                    <button
                      key={event.id}
                      onClick={() => onSelectEvent(event)}
                      className={`
                          w-full

                          p-2

                          rounded-xl

                          text-left

                          border

                          transition-all

                          hover:scale-[1.02]

                          ${color.bg}
                          ${color.text}
                          ${color.border}
                          `}
                    >
                      <p
                        className="
                            text-xs
                            font-semibold
                            truncate
                            "
                      >
                        {event.title}
                      </p>

                      <p
                        className="
                            text-[10px]
                            mt-1
                            opacity-80
                            "
                      >
                        {event.startTime}
                      </p>
                    </button>
                  ))}

                  {dayEvents.length > 2 && (
                    <p
                      className="
                      text-[11px]
                      text-gray-500
                      "
                    >
                      +{dayEvents.length - 2} more
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
