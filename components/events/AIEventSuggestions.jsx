"use client";

import { HiOutlineSparkles, HiOutlineClock } from "react-icons/hi2";

const AIEventSuggestions = () => {
  const suggestions = [
    {
      title: "Basic Science class begins soon",
      time: "25 mins",
    },

    {
      title: "Mathematics Quiz tomorrow",
      time: "Tomorrow",
    },

    {
      title: "PTA Meeting Friday",
      time: "2:00 PM",
    },
  ];

  return (
    <div
      className="
bg-white
rounded-[30px]
border
border-gray-100
p-6
"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="
w-12
h-12
rounded-2xl
bg-purple-100
text-purple-600

flex
items-center
justify-center
"
        >
          <HiOutlineSparkles />
        </div>

        <div>
          <h3 className="font-semibold">EduBuddy AI</h3>

          <p className="text-sm text-gray-500">Upcoming schedule suggestions</p>
        </div>
      </div>

      <div className="space-y-4">
        {suggestions.map((item) => (
          <div
            key={item.title}
            className="
p-4
rounded-2xl
bg-gray-50
"
          >
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{item.title}</h4>

                <div
                  className="
mt-2
flex
items-center
gap-2
text-sm
text-gray-500
"
                >
                  <HiOutlineClock />

                  {item.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIEventSuggestions;
