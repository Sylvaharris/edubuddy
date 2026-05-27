"use client";

/**
 * School admin dashboard page: protected management center for school-wide
 * teachers, students, classes, attendance, invitations, activity, and growth.
 */

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import AdminDashboardSkeleton from "../../../components/dashboard/AdminDashboardSkeleton";
import Card from "../../../components/ui/Card";

import { useAuth } from "../../../context/AuthContext";
import { getSchoolAdminOnboardingState } from "../../../services/onboardingService";
import { getDashboardPath } from "../../../services/authService";

import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi2";

const SchoolAdminDashboard = () => {
  const router = useRouter();
  const { user, authReady } = useAuth();
  const [loading, setLoading] = useState(true);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    if (!authReady) return;

    // Dashboard guard: school admins must finish onboarding first.
    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "school-admin") {
      router.replace(getDashboardPath(user.role));
      return;
    }

    if (!user.onboarded) {
      router.replace("/onboarding/admin");
      return;
    }

    const timer = window.setTimeout(() => {
      setAdminData(getSchoolAdminOnboardingState(user.email));
      setLoading(false);
    }, 600);

    return () => window.clearTimeout(timer);
  }, [authReady, router, user]);

  const classCount = useMemo(() => {
    if (!adminData?.classes) return 0;

    return adminData.classes.reduce(
      (total, item) => total + Math.max(item.arms.length, 1),
      0,
    );
  }, [adminData]);

  if (!authReady || loading || !user || user.role !== "school-admin") {
    return <AdminDashboardSkeleton />;
  }

  const schoolName = adminData?.schoolData?.schoolName || "Your School";
  const teachers = adminData?.teachers || [];
  const students = adminData?.students || [];

  return (
    <DashboardLayout>
      <section className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-orange-500">
              School Overview
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {schoolName} Management Center
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
              Monitor school operations, staff readiness, student records,
              attendance signals, pending invitations, and growth from one
              administrative workspace.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 border border-gray-100 p-5 min-w-[220px]">
            <p className="text-sm text-gray-500">School health</p>
            <div className="flex items-center gap-3 mt-3">
              <HiOutlineCheckCircle className="text-green-500 text-3xl" />
              <div>
                <p className="text-2xl font-bold text-gray-900">92%</p>
                <p className="text-xs text-gray-500">Operational readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card title="Total Teachers" value={teachers.length} icon={<HiOutlineAcademicCap />} />
        <Card title="Total Students" value={students.length} icon={<HiOutlineUsers />} />
        <Card title="Total Classes" value={classCount} icon={<HiOutlineBuildingOffice2 />} />
        <Card title="Attendance" value="94%" icon={<HiOutlineUserGroup />} />
      </section>

      <section className="grid lg:grid-cols-[1.25fr_0.85fr] gap-6 mt-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                School Growth Analytics
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Enrollment and staffing momentum this term.
              </p>
            </div>
            <HiOutlineChartBar className="text-2xl text-gray-400" />
          </div>

          <div className="space-y-5">
            {[
              ["Student enrollment", 78, "bg-blue-500"],
              ["Teacher onboarding", Math.min(teachers.length * 20, 100), "bg-orange-500"],
              ["Class setup", classCount ? 88 : 15, "bg-green-500"],
            ].map(([label, value, color]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">{label}</span>
                  <span className="text-gray-500">{value}%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Pending Invitations
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Teachers waiting to join the workspace.
              </p>
            </div>
            <HiOutlineEnvelope className="text-2xl text-gray-400" />
          </div>

          <div className="space-y-4">
            {teachers.length ? (
              teachers.slice(0, 4).map((teacher) => (
                <div key={teacher.id} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">{teacher.name}</p>
                    <p className="text-sm text-gray-500">{teacher.email}</p>
                  </div>
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 rounded-xl px-3 py-2">
                    Pending
                  </span>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-gray-200 p-6 text-center">
                <p className="font-bold text-gray-900">No invitations yet</p>
                <p className="text-sm text-gray-500 mt-2">
                  Invite teachers from onboarding or school settings.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Attendance Summary
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ["Present", "94%", "text-green-600", "bg-green-50"],
              ["Absent", "4%", "text-red-500", "bg-red-50"],
              ["Late", "2%", "text-yellow-600", "bg-yellow-50"],
            ].map(([label, value, text, bg]) => (
              <div key={label} className={`rounded-3xl ${bg} p-5`}>
                <p className={`text-3xl font-bold ${text}`}>{value}</p>
                <p className="text-sm text-gray-600 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              "School theme and profile configured",
              `${classCount} class groups prepared`,
              `${teachers.length} teacher invitation records created`,
              `${students.length} student records staged`,
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <HiOutlineClock className="text-gray-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">{item}</p>
                  <p className="text-sm text-gray-500">Just now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default SchoolAdminDashboard;
