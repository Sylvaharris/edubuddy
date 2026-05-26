"use client";

import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import AIUpcomingSchedule from "../../../components/timetable/AIUpcomingSchedule";
import TimetableStats from "../../../components/timetable/TimetableStats";
import TimetableGrid from "../../../components/timetable/TimetableGrid";
import CreateTimetableModal from "../../../components/timetable/CreateTimetableModal";

import timetable from "../../../data/timetable";

import { HiOutlinePlus, HiOutlineAcademicCap } from "react-icons/hi2";

const TimetablePage = () => {
  /**
   * ==================================
   * CLASS FILTER
   * ==================================
   *
   * Gets all available classes
   * from timetable data.
   */

  const classes = Object.keys(timetable);

  const [selectedClass, setSelectedClass] = useState(classes[0]);

  /**
   * ==================================
   * CREATE TIMETABLE MODAL STATE
   * ==================================
   */

  const [openModal, setOpenModal] = useState(false);

  /**
   * ==================================
   * ACTIVE TIMETABLE
   * ==================================
   */

  const timetableData = timetable[selectedClass];

  return (
    <DashboardLayout>
      {/* ==================================
          CREATE TIMETABLE MODAL
      ================================== */}

      <CreateTimetableModal open={openModal} setOpen={setOpenModal} />

      {/* ==================================
          PAGE HEADER
      ================================== */}

      <section
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between

        gap-5
        mb-8
      "
      >
        {/* LEFT */}

        <div>
          <div
            className="
            flex
            items-center
            gap-3
          "
          >
            <div>
              <h1
                className="
                text-3xl
                font-bold
                text-gray-900
              "
              >
                Timetable
              </h1>

              <p
                className="
                text-gray-500
                mt-1
              "
              >
                View and manage school schedules
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT ACTIONS */}

        <div
          className="
          flex
          flex-wrap
          items-center
          gap-3
        "
        >
          {/* FILTER */}

          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="
              appearance-none

              px-5
              py-3

              rounded-2xl

              border
              border-gray-200

              bg-white

              outline-none

              shadow-sm
            "
            >
              {classes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* CREATE BUTTON */}

          <button
            onClick={() => setOpenModal(true)}
            className="
            flex
            items-center
            gap-2

            px-6
            py-3

            rounded-2xl

            text-white
            font-medium

            shadow-sm

            hover:scale-[1.02]
            hover:shadow-lg

            transition-all
            duration-300
          "
            style={{
              background: "var(--primary-solid)",
            }}
          >
            <HiOutlinePlus />

            <span>Create Timetable</span>
          </button>
        </div>
      </section>

      {/* ==================================
          AI UPCOMING SCHEDULE
      ================================== */}

      <AIUpcomingSchedule
        selectedClass={selectedClass}
        timetableData={timetableData}
      />

      {/* ==================================
          TIMETABLE STATS
      ================================== */}

      {/* <div className="mt-8">
        <TimetableStats timetableData={timetableData} />
      </div> */}

      {/* ==================================
          TIMETABLE GRID
      ================================== */}

      <div className="mt-8">
        <TimetableGrid timetableData={timetableData} />
      </div>
    </DashboardLayout>
  );
};

export default TimetablePage;
