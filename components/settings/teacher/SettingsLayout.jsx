"use client";

import SettingsHeader from "./SettingsHeader";
import SettingsTabs from "./SettingsTabs";

const SettingsLayout = ({ active, setActive, children }) => {
  return (
    <div>
      <SettingsHeader />

      <div className="mt-8 grid xl:grid-cols-[280px_1fr] gap-6">
        <SettingsTabs active={active} setActive={setActive} />

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
