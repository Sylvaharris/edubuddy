"use client";

import teacherSettings from "../../../data/teacherSettings";

import {
  HiOutlineArchiveBox,
  HiOutlineBuildingOffice2,
  HiOutlineCheckBadge,
  HiOutlineIdentification,
  HiOutlineLink,
  HiOutlineShieldCheck,
  HiOutlineTrash,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const Account = () => {
  const { account, profile } = teacherSettings;

  const accountStats = [
    {
      label: "Account role",
      value: account.role,
      icon: HiOutlineIdentification,
    },
    {
      label: "Workspace",
      value: account.workspace,
      icon: HiOutlineBuildingOffice2,
    },
    {
      label: "Assigned classes",
      value: profile.classes.length,
      icon: HiOutlineUserGroup,
    },
    {
      label: "Status",
      value: account.status,
      icon: HiOutlineCheckBadge,
    },
  ];

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm font-semibold text-orange-500">
              {account.plan}
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              Teacher Account
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
              Review your school workspace access, connected services and
              account lifecycle settings.
            </p>
          </div>

          <button
            className="px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:scale-[1.02] hover:shadow-md transition-all"
            style={{ background: "var(--primary-solid)" }}
          >
            Request role change
          </button>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {accountStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                  <Icon className="text-xl" />
                </div>
                <p className="text-sm text-gray-500 mt-5">{item.label}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid lg:grid-cols-[1fr_0.85fr] gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Workspace Access
              </h3>
              <p className="text-gray-500 mt-1">
                Your permissions are managed by the school administrator.
              </p>
            </div>

            <span className="px-3 py-2 rounded-xl bg-green-50 text-green-700 border border-green-100 text-sm font-semibold">
              Active
            </span>
          </div>

          <div className="space-y-4">
            {[
              ["Joined", account.joined],
              ["Employee ID", profile.employeeId],
              ["Department", profile.department],
              ["Primary subject", profile.subject],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-3"
              >
                <span className="text-sm text-gray-500">{label}</span>
                <span className="text-sm font-bold text-gray-900 text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <HiOutlineArchiveBox className="text-xl" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">Storage</h3>
              <p className="text-sm text-gray-500">Teaching files and resources</p>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-4xl font-bold text-gray-900">
                {account.storageUsed}%
              </p>
              <p className="text-sm text-gray-500 mt-1">of workspace allowance</p>
            </div>
            <span className="text-sm font-semibold text-gray-500">6.8 GB / 10 GB</span>
          </div>

          <div className="h-3 rounded-full bg-gray-100 mt-5 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${account.storageUsed}%`,
                background: "var(--primary-solid)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900">
            Connected Services
          </h3>
          <p className="text-gray-500 mt-1">
            Services linked to your EduBuddy teacher workspace.
          </p>

          <div className="mt-6 space-y-4">
            {[
              ["Google Classroom", "Connected"],
              ["School email", "Connected"],
              ["Calendar sync", "Not connected"],
            ].map(([name, status]) => (
              <div
                key={name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                    <HiOutlineLink />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{status}</p>
                  </div>
                </div>

                <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-white transition">
                  {status === "Connected" ? "Manage" : "Connect"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-red-100 shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
              <HiOutlineTrash className="text-xl" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">Danger Zone</h3>
              <p className="text-gray-500 mt-1 leading-relaxed">
                Account deactivation requires school admin approval. Your class
                records, attendance logs and resources stay attached to the
                school workspace.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-2xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition">
              Export my data
            </button>

            <button className="px-5 py-3 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
              Request deactivation
            </button>
          </div>

          <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 p-4 flex gap-3 text-green-700">
            <HiOutlineShieldCheck className="text-xl flex-shrink-0" />
            <p className="text-sm leading-relaxed">
              Your account activity is backed up and visible only to authorized
              school administrators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
