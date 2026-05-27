"use client";

import { useMemo, useState } from "react";

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
      const [name, email, assignedClasses = ""] = line.split(",");

      return {
        id: Date.now() + Math.random(),
        name: name?.trim() || "",
        email: email?.trim() || "",
        assignedClasses: assignedClasses
          .split("|")
          .map((item) => item.trim())
          .filter(Boolean),
      };
    })
    .filter((teacher) => teacher.name && teacher.email);
};

const TeacherInviteStep = ({ teachers, setTeachers, classOptions }) => {
  const [draft, setDraft] = useState({
    name: "",
    email: "",
    assignedClasses: [],
  });

  const hasClasses = classOptions.length > 0;

  const selectedClassLabel = useMemo(() => {
    return draft.assignedClasses.length
      ? draft.assignedClasses.join(", ")
      : "No classes selected";
  }, [draft.assignedClasses]);

  const toggleClass = (className) => {
    setDraft((current) => ({
      ...current,
      assignedClasses: current.assignedClasses.includes(className)
        ? current.assignedClasses.filter((item) => item !== className)
        : [...current.assignedClasses, className],
    }));
  };

  const addTeacher = () => {
    if (!draft.name.trim() || !draft.email.trim()) return;

    setTeachers((current) => [
      ...current,
      {
        id: Date.now(),
        ...draft,
        name: draft.name.trim(),
        email: draft.email.trim(),
      },
    ]);

    setDraft({ name: "", email: "", assignedClasses: [] });
  };

  const removeTeacher = (id) => {
    setTeachers((current) => current.filter((teacher) => teacher.id !== id));
  };

  const updateTeacher = (id, field, value) => {
    setTeachers((current) =>
      current.map((teacher) =>
        teacher.id === id ? { ...teacher, [field]: value } : teacher,
      ),
    );
  };

  const downloadTemplate = () => {
    const csv = "Name,Email,Assigned Classes\nAda Peters,ada@school.com,JSS1 A|JSS2 A\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "teacher-invite-template.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const uploadTemplate = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const parsedTeachers = parseCsv(String(reader.result));
      setTeachers((current) => [...current, ...parsedTeachers]);
    };

    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Invite Teachers</h2>
          <p className="text-gray-500 mt-2">
            Add teachers individually or upload a completed template. One teacher
            can be assigned to multiple classes.
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

      <div className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5 space-y-4">
        <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-3">
          <input
            className={inputClass}
            value={draft.name}
            onChange={(event) =>
              setDraft((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Teacher name"
          />
          <input
            className={inputClass}
            value={draft.email}
            onChange={(event) =>
              setDraft((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="teacher@school.com"
          />
          <button
            type="button"
            onClick={addTeacher}
            disabled={!draft.name.trim() || !draft.email.trim()}
            className="rounded-2xl px-5 py-3 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ background: "var(--primary-solid)" }}
          >
            <HiOutlinePlus />
            Add teacher
          </button>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Assigned classes: {selectedClassLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {hasClasses ? (
              classOptions.map((className) => {
                const isSelected = draft.assignedClasses.includes(className);

                return (
                  <button
                    key={className}
                    type="button"
                    onClick={() => toggleClass(className)}
                    className={`px-3 py-2 rounded-xl border text-sm font-semibold transition ${
                      isSelected
                        ? "bg-orange-50 border-orange-200 text-orange-700"
                        : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {className}
                  </button>
                );
              })
            ) : (
              <p className="text-sm text-gray-400">
                Create classes first to assign teachers.
              </p>
            )}
          </div>
        </div>
      </div>

      {teachers.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center">
          <p className="font-bold text-gray-900">No teachers added yet</p>
          <p className="text-sm text-gray-500 mt-2">
            Add teachers manually or upload the template to preview invitations.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="rounded-3xl border border-gray-100 bg-white p-4">
              <div className="grid lg:grid-cols-[1fr_1fr_1.2fr_auto] gap-3">
                <input
                  className={inputClass}
                  value={teacher.name}
                  onChange={(event) =>
                    updateTeacher(teacher.id, "name", event.target.value)
                  }
                />
                <input
                  className={inputClass}
                  value={teacher.email}
                  onChange={(event) =>
                    updateTeacher(teacher.id, "email", event.target.value)
                  }
                />
                <input
                  className={inputClass}
                  value={teacher.assignedClasses.join(", ")}
                  onChange={(event) =>
                    updateTeacher(
                      teacher.id,
                      "assignedClasses",
                      event.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean),
                    )
                  }
                  placeholder="JSS1 A, JSS2 A"
                />
                <button
                  type="button"
                  onClick={() => removeTeacher(teacher.id)}
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

export default TeacherInviteStep;
