"use client";

import { useMemo, useState } from "react";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineFunnel,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineUsers,
  HiOutlineXMark,
} from "react-icons/hi2";

const AttendanceTable = ({ students = [], setStudents }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [selectedStudents, setSelectedStudents] = useState([]);

  const [activeStudent, setActiveStudent] = useState(null);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchMatch = student.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const statusMatch = filter === "All" ? true : student.status === filter;

      return searchMatch && statusMatch;
    });
  }, [students, search, filter]);

  const toggleSelect = (id) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredStudents.map((student) => student.id));
    }
  };

  const bulkUpdate = (status) => {
    const updated = students.map((student) =>
      selectedStudents.includes(student.id)
        ? {
            ...student,
            status,
          }
        : student,
    );

    setStudents(updated);
  };

  const updateAttendance = (id, status) => {
    const updated = students.map((student) =>
      student.id === id
        ? {
            ...student,
            status,
          }
        : student,
    );

    setStudents(updated);
  };

  return (
    <>
      <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
        {/* TOP */}

        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex gap-3">
              <div className="relative">
                <HiOutlineMagnifyingGlass className="absolute left-4 top-4 text-gray-400" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search students..."
                  className="
                  pl-11
                  pr-4
                  py-3
                  rounded-2xl
                  border
                  border-gray-200
                  outline-none
                  "
                />
              </div>

              <div className="relative">
                <HiOutlineFunnel className="absolute left-4 top-4 text-gray-400" />

                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="
                  pl-10
                  py-3
                  rounded-2xl
                  border
                  border-gray-200
                  "
                >
                  <option>All</option>
                  <option>Present</option>
                  <option>Absent</option>
                </select>
              </div>
            </div>

            {/* BULK ACTIONS */}

            <div className="flex gap-3">
              <button
                onClick={() => bulkUpdate("Present")}
                className="
                px-4 py-3
                rounded-xl
                bg-green-50
                text-green-700
                font-medium
                "
              >
                Mark Present
              </button>

              <button
                onClick={() => bulkUpdate("Absent")}
                className="
                px-4 py-3
                rounded-xl
                bg-red-50
                text-red-600
                font-medium
                "
              >
                Mark Absent
              </button>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-5">
                <input
                  type="checkbox"
                  checked={
                    selectedStudents.length === filteredStudents.length &&
                    filteredStudents.length > 0
                  }
                  onChange={selectAll}
                />
              </th>

              <th className="text-left text-sm text-gray-500">Student</th>

              <th className="text-left text-sm text-gray-500">Class</th>

              <th className="text-left text-sm text-gray-500">Status</th>

              <th className="text-left text-sm text-gray-500">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="
                border-t
                border-gray-100
                hover:bg-gray-50
                "
              >
                <td className="px-6 py-5">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => toggleSelect(student.id)}
                  />
                </td>

                <td className="px-2 py-5">
                  <button
                    onClick={() => setActiveStudent(student)}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="
                      w-11
                      h-11
                      rounded-full
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      font-semibold
                      "
                    >
                      {getInitials(student.name)}
                    </div>

                    <div className="text-left">
                      <h4 className="font-medium">{student.name}</h4>

                      <p className="text-xs text-gray-400">Student</p>
                    </div>
                  </button>
                </td>

                <td>{student.class}</td>

                <td>
                  <span
                    className={`
                    px-3 py-1 rounded-full text-xs

                    ${
                      student.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }
                    `}
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateAttendance(student.id, "Present")}
                      className="
                    p-2
                    rounded-xl
                    bg-green-50
                    text-green-700
                    "
                    >
                      <HiOutlineCheckCircle />
                    </button>

                    <button
                      onClick={() => updateAttendance(student.id, "Absent")}
                      className="
                    p-2
                    rounded-xl
                    bg-red-50
                    text-red-600
                    "
                    >
                      <HiOutlineXCircle />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* STUDENT PANEL */}

      {activeStudent && (
        <div
          className="
        fixed inset-0
        bg-black/20
        backdrop-blur-sm
        flex justify-end
        z-50
        "
        >
          <div
            className="
          h-screen
          w-full
          max-w-[420px]
          bg-white
          p-8
          "
          >
            <button
              onClick={() => setActiveStudent(null)}
              className="ml-auto block"
            >
              <HiOutlineXMark size={24} />
            </button>

            <div className="mt-6">
              <div
                className="
              w-24
              h-24
              rounded-full
              bg-gray-100
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              "
              >
                {getInitials(activeStudent.name)}
              </div>

              <h2 className="text-2xl font-bold mt-5">{activeStudent.name}</h2>

              <p className="text-gray-500 mt-1">84% Attendance</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AttendanceTable;
