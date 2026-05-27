"use client";

import { useState } from "react";

import teacherSettings from "../../../data/teacherSettings";

import {
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";

const fieldClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100";

const Profile = () => {
  const { profile } = teacherSettings;

  const [form, setForm] = useState({
    fullName: profile.fullName,
    email: profile.email,
    phone: profile.phone,
    department: profile.department,
    subject: profile.subject,
    bio: profile.bio,
  });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-sm"
              style={{ background: "var(--primary-solid)" }}
            >
              SH
            </div>

            <div>
              <p className="text-sm text-gray-500">Public teacher profile</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {form.fullName}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {profile.employeeId} - {form.department}
              </p>
            </div>
          </div>

          <button
            className="px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:scale-[1.02] hover:shadow-md transition-all"
            style={{ background: "var(--primary-solid)" }}
          >
            Save profile
          </button>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1.4fr_0.9fr] gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Personal Information
            </h3>
            <p className="text-gray-500 mt-1">
              Keep your school profile accurate for administrators, parents and
              students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-gray-700">
                Full name
              </span>
              <input
                className={fieldClass}
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-gray-700">
                Primary subject
              </span>
              <input
                className={fieldClass}
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-gray-700">
                Email address
              </span>
              <input
                className={fieldClass}
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-gray-700">
                Phone number
              </span>
              <input
                className={fieldClass}
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-gray-700">
                Department
              </span>
              <input
                className={fieldClass}
                value={form.department}
                onChange={(e) => updateField("department", e.target.value)}
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-gray-700">Bio</span>
              <textarea
                rows={4}
                className={fieldClass}
                value={form.bio}
                onChange={(e) => updateField("bio", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900">Teaching Load</h3>

            <div className="mt-5 space-y-4">
              {[
                { label: "Email", value: form.email, icon: HiOutlineEnvelope },
                { label: "Phone", value: form.phone, icon: HiOutlinePhone },
                { label: "Subject", value: form.subject, icon: HiOutlineAcademicCap },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-800 mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                <HiOutlineUser />
              </div>
              <h3 className="font-bold text-gray-900">Assigned Classes</h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {profile.classes.map((className) => (
                <span
                  key={className}
                  className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm font-semibold text-gray-700"
                >
                  {className}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
