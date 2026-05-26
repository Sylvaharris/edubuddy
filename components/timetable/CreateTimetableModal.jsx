"use client";

import { useState } from "react";

import {
  HiOutlineSparkles,
  HiOutlineTableCells,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiOutlineXMark,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlineUsers,
} from "react-icons/hi2";

const CreateTimetableModal = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);

  const [selectedType, setSelectedType] = useState("");

  const [formData, setFormData] = useState({
    class: "Grade 6 - B",
    subjects: "",
    periods: "",
    constraints: "",
  });

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/30
      backdrop-blur-sm
      z-50

      flex
      justify-center
      items-center

      p-5
    "
    >
      <div
        className="
        bg-white
        rounded-[36px]

        w-full
        max-w-[950px]

        shadow-2xl
        overflow-hidden
      "
      >
        {/* HEADER */}

        <div
          className="
          px-8
          py-6

          border-b
          border-gray-100

          flex
          justify-between
          items-center
        "
        >
          <div>
            <h2 className="text-2xl font-bold">Create New Timetable</h2>

            <p className="text-gray-500 mt-1">
              Choose how you would like to build the timetable for Grade 6 - B
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
            p-3
            rounded-2xl
            hover:bg-gray-100
          "
          >
            <HiOutlineXMark />
          </button>
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div
            className="
            p-8
            grid
            md:grid-cols-2
            gap-6
          "
          >
            {/* AI OPTION */}

            <div
              onClick={() => {
                setSelectedType("ai");

                setStep(2);
              }}
              className="
              group
              cursor-pointer

              rounded-[30px]
              border
              border-gray-100

              p-8

              hover:shadow-xl
              hover:-translate-y-2

              transition-all
              duration-300
            "
            >
              <div
                className="
                w-16
                h-16

                rounded-3xl

                flex
                items-center
                justify-center

                text-white
              "
                style={{
                  background: "var(--primary)",
                }}
              >
                <HiOutlineSparkles className="text-3xl" />
              </div>

              <h3
                className="
                mt-6
                text-xl
                font-bold
              "
              >
                Create with AI
              </h3>

              <p
                className="
                mt-3
                text-gray-500
                leading-relaxed
              "
              >
                Describe your subjects, periods and rules. AI creates a draft
                timetable instantly.
              </p>

              <button
                className="
                mt-6

                flex
                items-center
                gap-2

                font-semibold
              "
              >
                Get Started
                <HiOutlineArrowRight />
              </button>
            </div>

            {/* MANUAL */}

            <div
              onClick={() => {
                setSelectedType("manual");

                setStep(2);
              }}
              className="
              group
              cursor-pointer

              rounded-[30px]
              border
              border-gray-100

              p-8

              hover:shadow-xl
              hover:-translate-y-2

              transition-all
              duration-300
            "
            >
              <div
                className="
                w-16
                h-16

                rounded-3xl

                bg-blue-50
                text-blue-600

                flex
                items-center
                justify-center
              "
              >
                <HiOutlineTableCells className="text-3xl" />
              </div>

              <h3
                className="
                mt-6
                text-xl
                font-bold
              "
              >
                Create manually
              </h3>

              <p
                className="
                mt-3
                text-gray-500
                leading-relaxed
              "
              >
                Build everything yourself. Set periods and assign subjects to
                each slot.
              </p>

              <button
                className="
                mt-6

                flex
                items-center
                gap-2

                font-semibold
              "
              >
                Get Started
                <HiOutlineArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="p-8">
            <button
              onClick={() => setStep(1)}
              className="
              flex
              items-center
              gap-2

              mb-8
              text-gray-500
            "
            >
              <HiOutlineArrowLeft />
              Back
            </button>

            <h2 className="text-2xl font-bold">
              {selectedType === "ai"
                ? "AI Timetable Builder"
                : "Manual Timetable Builder"}
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <label className="font-medium">Subjects</label>

                <input
                  placeholder="Math, English, Science..."
                  className="
                  mt-2
                  w-full
                  px-4
                  py-4
                  rounded-2xl
                  border
                  border-gray-200
                  outline-none
                "
                />
              </div>

              <div>
                <label className="font-medium">Total Periods</label>

                <input
                  placeholder="8"
                  className="
                  mt-2
                  w-full
                  px-4
                  py-4
                  rounded-2xl
                  border
                  border-gray-200
                "
                />
              </div>

              {selectedType === "ai" && (
                <div>
                  <label className="font-medium">Constraints</label>

                  <textarea
                    rows={4}
                    placeholder="Math should not exceed two periods daily..."
                    className="
                    mt-2
                    w-full
                    px-4
                    py-4
                    rounded-2xl
                    border
                    border-gray-200
                  "
                  />
                </div>
              )}
            </div>

            <button
              className="
              mt-8

              px-6
              py-4

              rounded-2xl
              text-white
              font-semibold
            "
              style={{
                background: "var(--primary)",
              }}
            >
              {selectedType === "ai" ? "Generate Timetable" : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTimetableModal;
