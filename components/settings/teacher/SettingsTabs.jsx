"use client";

import {
  HiOutlineUser,
  HiOutlineBell,
  HiOutlineLockClosed,
  HiOutlineCog6Tooth,
  HiOutlineIdentification,
} from "react-icons/hi2";

const tabs = [
  { name: "Profile", detail: "Personal and class details", icon: HiOutlineUser },
  { name: "Notifications", detail: "Email, SMS and reminders", icon: HiOutlineBell },
  { name: "Security", detail: "Password and sessions", icon: HiOutlineLockClosed },
  { name: "Preferences", detail: "Workspace defaults", icon: HiOutlineCog6Tooth },
  { name: "Account", detail: "Role, plan and access", icon: HiOutlineIdentification },
];

const SettingsTabs = ({ active, setActive }) => {
  return (
    <aside
      className="
      bg-white
      border
      border-gray-100
      rounded-3xl
      p-3
      shadow-sm
      h-fit
      xl:sticky
      xl:top-24
      "
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.name;

        return (
          <button
            key={tab.name}
            onClick={() => setActive(tab.name)}
            className={`
              w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200
              ${isActive ? "text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"}
            `}
            style={{
              background: isActive ? "var(--primary-solid)" : "transparent",
            }}
          >
            <span
              className={`
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              flex-shrink-0
              ${isActive ? "bg-white/20" : "bg-gray-50 text-gray-500"}
              `}
            >
              <Icon size={20} />
            </span>

            <span className="min-w-0">
              <span className="block text-sm font-semibold">{tab.name}</span>
              <span
                className={`block text-xs mt-0.5 ${
                  isActive ? "text-white/80" : "text-gray-400"
                }`}
              >
                {tab.detail}
              </span>
            </span>
          </button>
        );
      })}
    </aside>
  );
};

export default SettingsTabs;
