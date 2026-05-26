"use client";

import { HiOutlinePlus, HiOutlineBookOpen } from "react-icons/hi2";

const SubjectHeader = ({ onOpenSubjectModal }) => {
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
      {/* LEFT SIDE */}

      <div className="flex items-start gap-4">
        <div>
          <h1
            className="
            text-3xl
            font-bold
            text-gray-900
            "
          >
            Subjects
          </h1>

          <p
            className="
            mt-2
            text-gray-500
            max-w-2xl
            leading-relaxed
            "
          >
            Manage your subjects across all classes from one workspace.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <button
        onClick={onOpenSubjectModal}
        className="
        px-6
        py-3

        rounded-2xl

        flex
        items-center
        gap-3

        text-white
        font-medium

        shadow-md

        hover:scale-[1.02]
        hover:shadow-lg

        active:scale-[0.98]

        transition-all
        duration-300
        "
        style={{
          background: "var(--primary-solid)",
        }}
      >
        <div
          className="
          w-8
          h-8

          rounded-xl

          bg-white/20

          flex
          items-center
          justify-center
          "
        >
          <HiOutlinePlus className="text-lg" />
        </div>

        <span>Add / Select Subject</span>
      </button>
    </section>
  );
};

export default SubjectHeader;
