"use client";

import { useState } from "react";

import teacherSettings from "../../../data/teacherSettings";

import {
  HiOutlineBell,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClock,
  HiOutlineEnvelope,
} from "react-icons/hi2";

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

const Notifications = () => {
  const [settings, setSettings] = useState(teacherSettings.notifications);

  const toggle = (key) => {
    setSettings((current) => ({ ...current, [key]: !current[key] }));
  };

  const rows = [
    {
      key: "email",
      title: "Email notifications",
      text: "Receive class updates, messages and summaries in your inbox.",
      icon: HiOutlineEnvelope,
    },
    {
      key: "sms",
      title: "SMS alerts",
      text: "Get urgent school updates on your mobile number.",
      icon: HiOutlineChatBubbleLeftRight,
    },
    {
      key: "attendance",
      title: "Attendance reminders",
      text: "Remind you when a class attendance sheet has not been submitted.",
      icon: HiOutlineClock,
    },
    {
      key: "parentMessages",
      title: "Parent messages",
      text: "Notify you when a parent sends a message or replies.",
      icon: HiOutlineBell,
    },
    {
      key: "events",
      title: "Event updates",
      text: "Keep track of school events, meetings and calendar changes.",
      icon: HiOutlineBell,
    },
    {
      key: "assignments",
      title: "Assignment activity",
      text: "Receive alerts for submissions, overdue tasks and grading queues.",
      icon: HiOutlineEnvelope,
    },
    {
      key: "weeklyDigest",
      title: "Weekly digest",
      text: "Send a concise weekly teaching summary every Friday afternoon.",
      icon: HiOutlineClock,
    },
  ];

  return (
    <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          <p className="text-gray-500 mt-1">
            Choose what should reach you and how quickly it should arrive.
          </p>
        </div>

        <button
          className="px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:scale-[1.02] hover:shadow-md transition-all"
          style={{ background: "var(--primary-solid)" }}
        >
          Save changes
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <div
              key={row.key}
              className="rounded-3xl border border-gray-100 bg-gray-50/60 p-5 flex items-start justify-between gap-5"
            >
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-500">
                  <Icon className="text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">{row.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {row.text}
                  </p>
                </div>
              </div>

              <Toggle enabled={settings[row.key]} onChange={() => toggle(row.key)} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Notifications;
