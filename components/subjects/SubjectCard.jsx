"use client";

import {
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineSparkles,
} from "react-icons/hi2";

const SubjectCard = ({ subject }) => {
  return (
    <div
      className="
      group

      bg-white
      rounded-[30px]

      border
      border-gray-100

      p-6

      shadow-sm

      hover:shadow-xl
      hover:-translate-y-1

      transition-all
      duration-300

      overflow-hidden
      relative
      "
    >
      {/* soft top glow */}

      <div
        className={`
        absolute
        top-0
        left-0
        right-0
        h-1

        ${subject.color.bg}
        `}
      />

      {/* TOP */}

      <div className="flex justify-between items-start">
        {/* icon + title */}

        <div className="flex items-start gap-4">
          <div
            className={`
            w-14
            h-14

            rounded-2xl

            flex
            items-center
            justify-center

            text-2xl

            ${subject.color.bg}
            ${subject.color.text}
            `}
          >
            {subject.icon}
          </div>

          <div>
            <h2
              className="
              font-bold
              text-lg
              text-gray-900
              "
            >
              {subject.name}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <span
                className="
                px-3
                py-1

                rounded-full

                text-xs
                font-medium

                bg-gray-100
                text-gray-600
                "
              >
                {subject.class}
              </span>
            </div>
          </div>
        </div>

        {/* status */}

        <span
          className={`
          px-3
          py-1

          rounded-full
          text-xs
          font-medium

          ${
            subject.status === "Published"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-orange-100 text-orange-700"
          }
          `}
        >
          {subject.status}
        </span>
      </div>

      {/* curriculum */}

      <div
        className="
        mt-6

        p-4

        rounded-2xl

        bg-gray-50
        "
      >
        <div className="flex items-center gap-2">
          <HiOutlineSparkles className="text-amber-500" />

          <span
            className="
            text-sm
            font-semibold
            text-gray-700
            "
          >
            Curriculum
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {subject.curriculum.slice(0, 3).map((item) => (
            <span
              key={item}
              className="
              px-3
              py-1

              rounded-full

              text-xs

              bg-white
              border
              border-gray-200
              text-gray-600
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* footer stats */}

      <div
        className="
        mt-6

        flex
        items-center
        justify-between
        "
      >
        {/* materials */}

        <div className="flex items-center gap-2">
          <div
            className="
            w-9
            h-9

            rounded-xl

            bg-blue-50
            text-blue-600

            flex
            items-center
            justify-center
            "
          >
            <HiOutlineFolder />
          </div>

          <div>
            <p className="text-xs text-gray-400">Materials</p>

            <h4 className="font-semibold text-sm">
              {subject.materials.length}
            </h4>
          </div>
        </div>

        {/* resources */}

        <div className="flex items-center gap-2">
          <div
            className="
            w-9
            h-9

            rounded-xl

            bg-purple-50
            text-purple-600

            flex
            items-center
            justify-center
            "
          >
            <HiOutlineDocumentText />
          </div>

          <div>
            <p className="text-xs text-gray-400">Resources</p>

            <h4 className="font-semibold text-sm">
              {subject.resources.length}
            </h4>
          </div>
        </div>

        {/* curriculum count */}

        <div className="flex items-center gap-2">
          <div
            className="
            w-9
            h-9

            rounded-xl

            bg-emerald-50
            text-emerald-600

            flex
            items-center
            justify-center
            "
          >
            <HiOutlineBookOpen />
          </div>

          <div>
            <p className="text-xs text-gray-400">Topics</p>

            <h4 className="font-semibold text-sm">
              {subject.curriculum.length}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
