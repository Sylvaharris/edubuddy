"use client";

import { useState } from "react";

import { HiOutlineSparkles, HiOutlineArrowPath } from "react-icons/hi2";

import generateTimetable from "../../services/timetableGenerator";

const AiTimetableBuilder = ({ onGenerate }) => {
  const [loading, setLoading] = useState(false);

  const [subjects, setSubjects] = useState("");

  const [periods, setPeriods] = useState(8);

  const createDraft = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const generated = generateTimetable({
      subjects: subjects.split(","),
      periods,
    });

    onGenerate(generated);

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <input
        placeholder="Math, English, Science"
        value={subjects}
        onChange={(e) => setSubjects(e.target.value)}
        className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
      "
      />

      <input
        type="number"
        value={periods}
        onChange={(e) => setPeriods(e.target.value)}
        className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
      "
      />

      <button
        onClick={createDraft}
        disabled={loading}
        className="
        px-6
        py-4

        rounded-2xl
        text-white

        flex
        items-center
        gap-2
      "
        style={{
          background: "var(--primary-solid)",
        }}
      >
        {loading ? (
          <>
            <HiOutlineArrowPath
              className="
              animate-spin
            "
            />
            Generating...
          </>
        ) : (
          <>
            <HiOutlineSparkles />
            Generate Draft
          </>
        )}
      </button>
    </div>
  );
};

export default AiTimetableBuilder;
