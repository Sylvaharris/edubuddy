"use client";

import {
  HiOutlineBell,
  HiOutlineBars3,
  HiOutlineUserCircle,
  HiOutlineChevronDown,
} from "react-icons/hi2";

const Topbar = ({ setMobileOpen }) => {
  return (
    <header
      className="
        h-[75px]
        bg-white
        border-b border-gray-200
        px-5 md:px-8
        flex items-center justify-between
        sticky top-0 z-30
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100"
        >
          <HiOutlineBars3 className="text-2xl" />
        </button>

        <div>
          <h2 className="font-bold text-xl text-gray-800">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Welcome back 👋</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* NOTIFICATION */}
        <button
          className="
            relative p-3 rounded-2xl border border-gray-200
            hover:shadow-md hover:scale-105
            transition-all duration-300
          "
        >
          <HiOutlineBell className="text-xl text-gray-700" />

          <span
            className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--primary-1)" }}
          />
        </button>

        {/* PROFILE */}
        <div
          className="
            flex items-center gap-3 p-2 pl-3
            rounded-2xl cursor-pointer
            hover:bg-gray-50
            transition-all duration-200
          "
        >
          <div
            className="
              w-11 h-11 rounded-full
              flex items-center justify-center text-white
            "
            style={{ background: "var(--primary-solid)" }}
          >
            <HiOutlineUserCircle className="text-2xl" />
          </div>

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-gray-800">
              Sylva Harris
            </h4>
            <p className="text-xs text-gray-500">Teacher</p>
          </div>

          <HiOutlineChevronDown className="hidden md:block text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
