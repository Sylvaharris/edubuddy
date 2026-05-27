"use client";

import { useState } from "react";

import {
  HiOutlineArrowUpTray,
  HiOutlineDocumentArrowDown,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100";

const parseCsv = (text) => {
  return text
    .split(/\r?\n/)
    .slice(1)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, admissionNumber, className, parentEmail = ""] = line.split(",");

      return {
        id: Date.now() + Math.random(),
        name: name?.trim() || "",
        admissionNumber: admissionNumber?.trim() || "",
        className: className?.trim() || "",
        parentEmail: parentEmail?.trim() || "",
      };
    })
    .filter((student) => student.name && student.admissionNumber);
};

const StudentUploadStep = ({ students, setStudents, classOptions }) => {
  const [draft, setDraft] = useState({
    name: "",
    admissionNumber: "",
    className: classOptions[0] || "",
    parentEmail: "",
  });

  const addStudent = () => {
    if (!draft.name.trim() || !draft.admissionNumber.trim()) return;

    setStudents((current) => [
      ...current,
      {
        id: Date.now(),
        ...draft,
        name: draft.name.trim(),
        admissionNumber: draft.admissionNumber.trim(),
      },
    ]);

    setDraft({
      name: "",
      admissionNumber: "",
      className: classOptions[0] || "",
      parentEmail: "",
    });
  };

  const removeStudent = (id) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  const updateStudent = (id, field, value) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id ? { ...student, [field]: value } : student,
      ),
    );
  };

  const downloadTemplate = () => {
    const csv =
      "Name,Admission Number,Class,Parent Email\nJohn Doe,ADM-001,JSS1 A,parent@school.com\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "student-upload-template.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const uploadTemplate = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const parsedStudents = parseCsv(String(reader.result));
      setStudents((current) => [...current, ...parsedStudents]);
    };

    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Upload Students</h2>
          <p className="text-gray-500 mt-2">
            Add students one by one or upload a completed template, then edit
            the preview before saving setup.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={downloadTemplate}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <HiOutlineDocumentArrowDown />
            Download template
          </button>
          <label className="rounded-2xl px-4 py-3 text-sm font-semibold text-white cursor-pointer flex items-center gap-2" style={{ background: "var(--primary-solid)" }}>
            <HiOutlineArrowUpTray />
            Upload template
            <input type="file" accept=".csv" onChange={uploadTemplate} className="hidden" />
          </label>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5">
        <div className="grid lg:grid-cols-[1fr_0.8fr_0.8fr_1fr_auto] gap-3">
          <input
            className={inputClass}
            value={draft.name}
            onChange={(event) =>
              setDraft((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Student name"
          />
          <input
            className={inputClass}
            value={draft.admissionNumber}
            onChange={(event) =>
              setDraft((current) => ({
                ...current,
                admissionNumber: event.target.value,
              }))
            }
            placeholder="Admission no."
          />
          <select
            className={inputClass}
            value={draft.className}
            onChange={(event) =>
              setDraft((current) => ({
                ...current,
                className: event.target.value,
              }))
            }
          >
            {classOptions.map((className) => (
              <option key={className}>{className}</option>
            ))}
          </select>
          <input
            className={inputClass}
            value={draft.parentEmail}
            onChange={(event) =>
              setDraft((current) => ({
                ...current,
                parentEmail: event.target.value,
              }))
            }
            placeholder="Parent email"
          />
          <button
            type="button"
            onClick={addStudent}
            disabled={!draft.name.trim() || !draft.admissionNumber.trim()}
            className="rounded-2xl px-5 py-3 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ background: "var(--primary-solid)" }}
          >
            <HiOutlinePlus />
            Add
          </button>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center">
          <p className="font-bold text-gray-900">No students uploaded yet</p>
          <p className="text-sm text-gray-500 mt-2">
            You can complete setup now and add students later from settings.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {students.map((student) => (
            <div key={student.id} className="rounded-3xl border border-gray-100 bg-white p-4">
              <div className="grid lg:grid-cols-[1fr_0.8fr_0.8fr_1fr_auto] gap-3">
                <input
                  className={inputClass}
                  value={student.name}
                  onChange={(event) =>
                    updateStudent(student.id, "name", event.target.value)
                  }
                />
                <input
                  className={inputClass}
                  value={student.admissionNumber}
                  onChange={(event) =>
                    updateStudent(
                      student.id,
                      "admissionNumber",
                      event.target.value,
                    )
                  }
                />
                <input
                  className={inputClass}
                  value={student.className}
                  onChange={(event) =>
                    updateStudent(student.id, "className", event.target.value)
                  }
                />
                <input
                  className={inputClass}
                  value={student.parentEmail}
                  onChange={(event) =>
                    updateStudent(student.id, "parentEmail", event.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => removeStudent(student.id)}
                  className="rounded-2xl bg-red-50 px-4 py-3 text-red-500 hover:bg-red-100 flex items-center justify-center"
                >
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentUploadStep;
