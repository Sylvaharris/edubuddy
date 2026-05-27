/**
 * Home page: shows the EduBuddy product entry screen with high-level school
 * management stats and a primary get-started action.
 */

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import {
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      bg-gray-50
      p-6
      md:p-10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        "
      >
        {/* Heading */}

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            EduBuddy
          </h1>

          <p className="text-gray-500 text-base md:text-lg">
            Smart School Management System
          </p>
        </div>

        {/* Action Button */}

        <div className="mt-8">
          <Button
            title="Get Started"
            icon={<HiOutlineArrowRight className="text-xl" />}
          />
        </div>

        {/* Dashboard Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-12
          "
        >
          <Card
            title="Students"
            value="1200"
            icon={<HiOutlineUserGroup className="text-2xl" />}
          />

          <Card
            title="Teachers"
            value="75"
            icon={<HiOutlineAcademicCap className="text-2xl" />}
          />

          <Card
            title="Classes"
            value="48"
            icon={<HiOutlineBuildingOffice2 className="text-2xl" />}
          />

          <Card
            title="Attendance"
            value="92%"
            icon={<HiOutlineClipboardDocumentCheck className="text-2xl" />}
          />
        </div>
      </div>
    </main>
  );
}
