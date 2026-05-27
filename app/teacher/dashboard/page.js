"use client";

/**
 * Teacher dashboard page: protected teacher workspace showing overview stats,
 * attendance insight, subject performance, schedule, assignments, and events.
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import DashboardSkeleton from "../../../components/dashboard/DashboardSkeleton";
import Card from "../../../components/ui/Card";

import { getTeacherDashboardData } from "../../../services/teacherDashboardService";
import { getDashboardPath } from "../../../services/authService";
import { useAuth } from "../../../context/AuthContext";

import {
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlinePlus,
} from "react-icons/hi2";

const TeacherDashboard = () => {
  const router = useRouter();
  const { user, authReady } = useAuth();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authReady) return;

    // Dashboard guard: teachers must complete onboarding before seeing data.
    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "teacher") {
      router.replace(getDashboardPath(user.role));
      return;
    }

    if (user.role === "teacher" && !user.onboarded) {
      router.replace("/onboarding/teacher");
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      const res = await getTeacherDashboardData();

      setData(res);

      setLoading(false);
    };

    fetchData();
  }, [authReady, router, user]);

  if (!authReady || loading || !user || user.role !== "teacher" || !user.onboarded) {
    return <DashboardSkeleton />;
  }

  return (
    <DashboardLayout>
      {/* ================= WELCOME SECTION ================= */}
      <section
        className="
        rounded-3xl
        p-8
        mb-8
        border border-gray-100
        shadow-sm
        bg-white
        "
      >
        <p className="text-sm text-gray-500">Welcome back</p>

        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Good Morning, Sylva 👋
        </h1>

        <p className="mt-3 text-gray-700 max-w-xl leading-relaxed">
          Manage attendance, classes, subjects, assignments and student
          performance in one clean dashboard.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            className="px-5 py-3 rounded-xl text-white font-medium shadow-sm transition-all hover:scale-[1.02]"
            style={{ background: "var(--primary-solid)" }}
          >
            Create Assessment
          </button>

          <button className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all">
            Quick Actions
          </button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card
          title="Students"
          value={data.stats.students}
          icon={<HiOutlineUsers />}
        />

        <Card
          title="Subjects"
          value={data.stats.subjects}
          icon={<HiOutlineBookOpen />}
        />

        <Card
          title="Attendance"
          value={`${data.stats.attendance}%`}
          icon={<HiOutlineClipboardDocumentCheck />}
        />

        <Card
          title="Performance"
          value={`${data.stats.performance}%`}
          icon={<HiOutlineChartBar />}
        />
      </section>

      {/* ================= LIVE INSIGHTS ================= */}
      <section className="grid lg:grid-cols-3 gap-6 mt-8">
        {/* WEEKLY ATTENDANCE */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-lg mb-4">Weekly Attendance</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Present</span>
              <span className="text-green-600 font-semibold">
                {data.weeklyAttendance.present}%
              </span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${data.weeklyAttendance.present}%` }}
              />
            </div>

            <div className="flex justify-between text-sm mt-4">
              <span>Absent</span>
              <span className="text-red-500 font-semibold">
                {data.weeklyAttendance.absent}%
              </span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div
                className="bg-red-400 h-2 rounded-full"
                style={{ width: `${data.weeklyAttendance.absent}%` }}
              />
            </div>
          </div>
        </div>

        {/* SUBJECT PERFORMANCE */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-lg mb-4">Subject Performance</h2>

          <div className="space-y-4">
            {data.subjectPerformance.map((item) => (
              <div key={item.subject}>
                <div className="flex justify-between text-sm">
                  <span>{item.subject}</span>
                  <span className="font-semibold">{item.score}%</span>
                </div>

                <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TODAY SCHEDULE */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-lg mb-4">Today’s Schedule</h2>

          <div className="space-y-4">
            {data.schedule.map((item, i) => (
              <div key={i} className="flex gap-3">
                <HiOutlineClock className="text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">{item.subject}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM ================= */}
      <section className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* ASSIGNMENTS */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-lg mb-4">Recent Assignments</h2>

          <div className="space-y-4">
            {data.assignments.map((item, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.class} • Due {item.due}
                  </p>
                </div>

                <HiOutlineClipboardDocumentList className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* EVENTS */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-lg mb-4">Upcoming Events</h2>

          <div className="space-y-4">
            {data.events.map((item, i) => (
              <div key={i} className="flex gap-3">
                <HiOutlineCalendarDays className="text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
