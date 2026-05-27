"use client";

import Image from "next/image";
import { useRef } from "react";

import { useTheme } from "../../context/ThemeContext";

import {
  HiOutlineBuildingOffice2,
  HiOutlineCamera,
  HiOutlineCheck,
} from "react-icons/hi2";

const fieldClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100";

const SchoolSetupStep = ({ schoolData, setSchoolData }) => {
  const fileInputRef = useRef(null);
  const { themes, changeTheme } = useTheme();

  const updateField = (field, value) => {
    setSchoolData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      updateField("logo", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleThemeSelect = (themeName) => {
    updateField("theme", themeName);
    changeTheme(themeName);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">School Setup</h2>
        <p className="text-gray-500 mt-2">
          Add the school identity and choose the theme that will apply across
          teachers, students, parents, and admins in this school workspace.
        </p>
      </div>

      <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-6">
        <div className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5">
          <div className="aspect-square rounded-3xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
            {schoolData.logo ? (
              <Image
                src={schoolData.logo}
                alt="School logo preview"
                width={400}
                height={400}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center px-6">
                <HiOutlineBuildingOffice2 className="text-5xl text-gray-300 mx-auto" />
                <p className="text-sm text-gray-500 mt-3">
                  Logo is optional. You can skip this and add it later.
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-4 w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2"
          >
            <HiOutlineCamera />
            Upload logo
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              School name
            </span>
            <input
              className={fieldClass}
              value={schoolData.schoolName}
              onChange={(event) => updateField("schoolName", event.target.value)}
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              School nickname
            </span>
            <input
              className={fieldClass}
              value={schoolData.nickname}
              onChange={(event) => updateField("nickname", event.target.value)}
              placeholder="Optional short name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              Email address
            </span>
            <input className={`${fieldClass} bg-gray-50`} value={schoolData.email} readOnly />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">
              Admin full name
            </span>
            <input
              className={fieldClass}
              value={schoolData.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-gray-700">
              Phone number
            </span>
            <input
              className={fieldClass}
              value={schoolData.phone}
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white p-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-gray-900">School Theme</h3>
            <p className="text-sm text-gray-500 mt-1">
              This changes the school-wide color system for every role.
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-400">
            Selected: {schoolData.theme}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {Object.values(themes).map((theme) => {
            const isSelected = schoolData.theme === theme.name;
            const gradient = `linear-gradient(135deg, ${theme.primary.join(", ")})`;

            return (
              <button
                key={theme.name}
                type="button"
                onClick={() => handleThemeSelect(theme.name)}
                className={`rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5 ${
                  isSelected
                    ? "border-orange-200 bg-orange-50 shadow-md"
                    : "border-gray-100 hover:bg-gray-50"
                }`}
              >
                <span
                  className="block h-14 rounded-xl"
                  style={{ background: gradient }}
                />
                <span className="mt-3 flex items-center justify-between gap-2">
                  <span className="capitalize text-sm font-bold text-gray-800">
                    {theme.name}
                  </span>
                  {isSelected && (
                    <span className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                      <HiOutlineCheck />
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SchoolSetupStep;
