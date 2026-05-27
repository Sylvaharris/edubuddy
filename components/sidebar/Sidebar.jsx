"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import sidebarLinks from "../../constants/sidebarLinks";
import { useAuth } from "../../context/AuthContext";

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineXMark,
  HiOutlineArrowRightOnRectangle,
  HiOutlineSparkles,
} from "react-icons/hi2";

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const role = user?.role || "teacher";
  const links = sidebarLinks[role] || sidebarLinks.teacher;

  const handleLogout = () => {
    localStorage.removeItem("edubuddy-user");
    router.push("/login");
  };

  const linkBase =
    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200";

  const activeStyle = {
    background: "var(--primary-solid)",
    color: "white",
  };

  return (
    <>
      {/* OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:relative z-50 h-screen
          bg-white text-gray-900
          border-r border-gray-200
          flex flex-col
          transition-all duration-300
          shadow-sm

          ${collapsed ? "w-[90px]" : "w-[270px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1
                className="text-xl font-bold"
                style={{ color: "var(--primary-1)" }}
              >
                EduBuddy
              </h1>
              <p className="text-xs text-gray-400 mt-1">For Schools</p>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <HiOutlineXMark className="text-xl" />
            </button>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100"
            >
              {collapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
            </button>
          </div>
        </div>

        {/* LINKS */}
        <nav className="flex-1 px-3 pt-6 space-y-2 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${linkBase} ${
                  !isActive ? "hover:bg-gray-100 hover:translate-x-[2px]" : ""
                }`}
                style={isActive ? activeStyle : {}}
              >
                <Icon className="text-2xl flex-shrink-0" />

                {!collapsed && (
                  <span className="text-sm font-medium">{link.title}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* AI CARD */}
        {!collapsed && (
          <div className="p-4">
            <div
              className="rounded-2xl p-5 text-white shadow-md"
              style={{ background: "var(--primary-solid)" }}
            >
              <div className="flex items-center gap-2">
                <HiOutlineSparkles />
                <h3 className="font-semibold">EduBuddy AI</h3>
              </div>

              <p className="text-sm mt-2 opacity-90">
                Smart learning tools coming soon.
              </p>
            </div>
          </div>
        )}

        {/* LOGOUT */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-4 w-full px-4 py-3 rounded-xl
              text-red-500 hover:bg-red-50
              transition-all duration-200
            "
          >
            <HiOutlineArrowRightOnRectangle className="text-2xl" />
            {!collapsed && (
              <span className="text-sm font-semibold">Logout</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
