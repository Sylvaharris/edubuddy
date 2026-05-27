"use client";

import { useState } from "react";

import teacherSettings from "../../../data/teacherSettings";

import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineLanguage,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

const selectClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100";

const Toggle = ({ enabled, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className={`w-12 h-7 rounded-full p-1 transition-all ${
      enabled ? "bg-orange-500" : "bg-gray-200"
    }`}
  >
    <span
      className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
        enabled ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const Preferences = () => {
  const [preferences, setPreferences] = useState(teacherSettings.preferences);

  const update = (field, value) => {
    setPreferences((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Preferences</h2>
            <p className="text-gray-500 mt-1">
              Tune EduBuddy around how you teach and review information.
            </p>
          </div>

          <button
            className="px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:scale-[1.02] hover:shadow-md transition-all"
            style={{ background: "var(--primary-solid)" }}
          >
            Apply preferences
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              Language
            </span>
            <select
              className={selectClass}
              value={preferences.language}
              onChange={(e) => update("language", e.target.value)}
            >
              <option>English</option>
              <option>French</option>
              <option>Yoruba</option>
              <option>Igbo</option>
              <option>Hausa</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              Timezone
            </span>
            <select
              className={selectClass}
              value={preferences.timezone}
              onChange={(e) => update("timezone", e.target.value)}
            >
              <option>Africa/Lagos</option>
              <option>Africa/Accra</option>
              <option>Europe/London</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              Default class
            </span>
            <select
              className={selectClass}
              value={preferences.defaultClass}
              onChange={(e) => update("defaultClass", e.target.value)}
            >
              <option>JSS1A</option>
              <option>JSS2B</option>
              <option>SS1A</option>
            </select>
          </label>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            key: "darkMode",
            title: "Dark mode",
            text: "Use a darker interface when working late.",
            icon: HiOutlineAdjustmentsHorizontal,
          },
          {
            key: "compactMode",
            title: "Compact mode",
            text: "Show denser tables and smaller page spacing.",
            icon: HiOutlineSquares2X2,
          },
          {
            key: "weeklyDigest",
            title: "Localized content",
            text: "Prioritize regional date, language and school formats.",
            icon: HiOutlineLanguage,
          },
        ].map((item) => {
          const Icon = item.icon;
          const enabled =
            item.key === "weeklyDigest" ? true : preferences[item.key];

          return (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                  <Icon className="text-xl" />
                </div>
                <Toggle
                  enabled={enabled}
                  onChange={() =>
                    item.key !== "weeklyDigest" &&
                    update(item.key, !preferences[item.key])
                  }
                />
              </div>

              <h3 className="font-bold text-gray-900 mt-5">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Preferences;
