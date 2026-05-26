"use client";

import { useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="
      flex
      h-screen

      bg-gray-50
      overflow-hidden
      "
    >
      {/* Sidebar */}

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Area */}

      <div
        className="
        flex-1
        flex
        flex-col

        overflow-hidden
        "
      >
        {/* Topbar */}

        <Topbar setMobileOpen={setMobileOpen} />

        {/* Page Content */}

        <main
          className="
          flex-1

          overflow-y-auto

          p-5
          md:p-8

          bg-gray-50
          "
        >
          <div
            className="
            max-w-[1600px]
            mx-auto
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
