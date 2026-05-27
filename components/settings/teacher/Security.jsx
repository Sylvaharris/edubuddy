"use client";

import { useState } from "react";

import teacherSettings from "../../../data/teacherSettings";

import {
  HiOutlineComputerDesktop,
  HiOutlineKey,
  HiOutlineLockClosed,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(teacherSettings.security.twoFactor);

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Security</h2>
            <p className="text-gray-500 mt-1">
              Protect your teacher account and review active sessions.
            </p>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm font-semibold flex items-center gap-2">
            <HiOutlineShieldCheck className="text-lg" />
            Account protected
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6">
          <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                <HiOutlineKey className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Change password</h3>
                <p className="text-sm text-gray-500">
                  Last changed {teacherSettings.security.lastPasswordChange}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="Current password"
                className={inputClass}
              />
              <input
                type="password"
                placeholder="New password"
                className={inputClass}
              />
            </div>

            <button
              className="mt-5 px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:scale-[1.02] hover:shadow-md transition-all"
              style={{ background: "var(--primary-solid)" }}
            >
              Update password
            </button>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                  <HiOutlineLockClosed className="text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Two-factor authentication
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Require a verification code after password login.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTwoFactor(!twoFactor)}
                className={`w-12 h-7 rounded-full p-1 transition-all ${
                  twoFactor ? "bg-orange-500" : "bg-gray-200"
                }`}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                    twoFactor ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">Active Sessions</h3>
          <p className="text-gray-500 mt-1">
            Devices that currently have access to your teacher account.
          </p>
        </div>

        <div className="space-y-4">
          {teacherSettings.security.sessions.map((session) => (
            <div
              key={session.device}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border border-gray-100 bg-gray-50/60 p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                  <HiOutlineComputerDesktop className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">{session.device}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {session.location} - {session.status}
                  </p>
                </div>
              </div>

              <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-white transition">
                Manage
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Security;
