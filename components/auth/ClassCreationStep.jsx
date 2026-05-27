"use client";

import { useMemo, useState } from "react";

import {
  HiOutlinePencilSquare,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100";

const ClassCreationStep = ({ classes, setClasses }) => {
  const [draftName, setDraftName] = useState("");
  const [draftArms, setDraftArms] = useState("A");
  const [editingId, setEditingId] = useState(null);

  const classPreview = useMemo(() => {
    return classes.flatMap((item) =>
      item.arms.length
        ? item.arms.map((arm) => `${item.name} ${arm}`)
        : [item.name],
    );
  }, [classes]);

  const resetDraft = () => {
    setDraftName("");
    setDraftArms("A");
    setEditingId(null);
  };

  const addOrUpdateClass = () => {
    if (!draftName.trim()) return;

    const payload = {
      id: editingId || Date.now(),
      name: draftName.trim().toUpperCase(),
      arms: draftArms
        .split(",")
        .map((arm) => arm.trim().toUpperCase())
        .filter(Boolean),
    };

    setClasses((current) =>
      editingId
        ? current.map((item) => (item.id === editingId ? payload : item))
        : [...current, payload],
    );

    resetDraft();
  };

  const editClass = (item) => {
    setEditingId(item.id);
    setDraftName(item.name);
    setDraftArms(item.arms.join(", "));
  };

  const removeClass = (id) => {
    setClasses((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Create Classes</h2>
        <p className="text-gray-500 mt-2">
          Add class levels and optional arms. Preview updates in real time.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_0.9fr] gap-6">
        <div className="rounded-3xl border border-gray-100 bg-gray-50/70 p-5 space-y-4">
          <div className="grid md:grid-cols-[1fr_1fr_auto] gap-3">
            <input
              className={inputClass}
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              placeholder="Class name, e.g. JSS1"
            />
            <input
              className={inputClass}
              value={draftArms}
              onChange={(event) => setDraftArms(event.target.value)}
              placeholder="Arms, e.g. A, B, C"
            />
            <button
              type="button"
              onClick={addOrUpdateClass}
              disabled={!draftName.trim()}
              className="rounded-2xl px-5 py-3 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ background: "var(--primary-solid)" }}
            >
              <HiOutlinePlus />
              {editingId ? "Update" : "Add"}
            </button>
          </div>

          {classes.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center">
              <p className="font-bold text-gray-900">No classes yet</p>
              <p className="text-sm text-gray-500 mt-2">
                Add your first class to build the school structure.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {classes.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Arms: {item.arms.length ? item.arms.join(", ") : "None"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => editClass(item)}
                      className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      <HiOutlinePencilSquare />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeClass(item.id)}
                      className="p-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100"
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-5 h-fit">
          <h3 className="font-bold text-gray-900">Live Preview</h3>
          <p className="text-sm text-gray-500 mt-1">
            These class arms will be available for teacher and student
            assignment.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {classPreview.length ? (
              classPreview.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 rounded-xl bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold"
                >
                  {item}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-400">Preview appears here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCreationStep;
