"use client";

import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import AttendanceStats from "../../../components/attendance/AttendanceStats";
import AttendanceTable from "../../../components/attendance/AttendanceTable";
import AttendanceHistoryModal from "../../../components/attendance/AttendanceHistoryModal";

import studentsData from "../../../data/students";

import { HiOutlineClock } from "react-icons/hi2";

const AttendancePage = () => {
  const [students, setStudents] = useState(studentsData);

  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <DashboardLayout>
      {/* HEADER */}

      <section
        className="
        mb-8

        flex
        flex-wrap
        justify-between
        gap-5
        items-center
        "
      >
        <div>
          <h1 className="text-3xl font-bold">Attendance Management</h1>

          <p className="mt-2 text-gray-500">
            Track and manage daily student attendance
          </p>
        </div>

        {/* VIEW HISTORY BUTTON */}

        <button
          onClick={() => setHistoryOpen(true)}
          className="
          flex
          items-center
          gap-2

          px-5
          py-3

          rounded-2xl

          bg-white
          border
          border-gray-200

          hover:shadow-md
          hover:-translate-y-[1px]

          transition-all
          "
        >
          <HiOutlineClock />
          View History
        </button>
      </section>

      <AttendanceStats students={students} />

      <div className="mt-8">
        <AttendanceTable students={students} setStudents={setStudents} />
      </div>

      <AttendanceHistoryModal open={historyOpen} setOpen={setHistoryOpen} />
    </DashboardLayout>
  );
};

export default AttendancePage;
