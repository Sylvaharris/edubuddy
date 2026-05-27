"use client";

/**
 * Teacher settings page: provides tabbed account, profile, notification,
 * security, and preference management for teacher users.
 */

import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import SettingsLayout from "../../../components/settings/teacher/SettingsLayout";

import Profile from "../../../components/settings/teacher/Profile";
import Security from "../../../components/settings/teacher/Security";
import Notifications from "../../../components/settings/teacher/Notifications";
import Preferences from "../../../components/settings/teacher/Preferences";
import Account from "../../../components/settings/teacher/Account";

const SettingsPage = () => {
  const [active, setActive] = useState("Profile");

  return (
    <DashboardLayout>
      <SettingsLayout active={active} setActive={setActive}>
        {active === "Profile" && <Profile />}

        {active === "Security" && <Security />}

        {active === "Notifications" && <Notifications />}

        {active === "Preferences" && <Preferences />}

        {active === "Account" && <Account />}
      </SettingsLayout>
    </DashboardLayout>
  );
};

export default SettingsPage;
