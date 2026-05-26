"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import StudentHeader from "../../../components/students/StudentHeader";
import StudentStats from "../../../components/students/StudentStats";
import StudentToolbar from "../../../components/students/StudentToolbar";
import StudentGrid from "../../../components/students/StudentGrid";
import StudentProfileModal from "../../../components/students/StudentProfileModal";

import MessageParentModal from "../../../components/students/MessageParentModal";

import StudentNotesModal from "../../../components/students/StudentNotesModal";

import studentsData from "../../../data/students";

const StudentsPage = () => {
  const [search, setSearch] = useState("");

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [showMessage, setShowMessage] = useState(false);

  const [showNotes, setShowNotes] = useState(false);

  const [notes, setNotes] = useState([]);

  const students = useMemo(() => {
    return studentsData.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <DashboardLayout>
      <StudentHeader />

      <StudentStats students={students} />

      <StudentToolbar search={search} setSearch={setSearch} />

      <StudentGrid
        students={students}
        setSelectedStudent={setSelectedStudent}
      />

      <StudentProfileModal
        student={selectedStudent}
        close={() => setSelectedStudent(null)}
        notes={notes}
        openMessage={() => setShowMessage(true)}
        openNotes={() => setShowNotes(true)}
      />

      {showMessage && (
        <MessageParentModal
          student={selectedStudent}
          close={() => setShowMessage(false)}
        />
      )}

      {showNotes && (
        <StudentNotesModal
          student={selectedStudent}
          saveNote={(newNote) => setNotes((prev) => [...prev, newNote])}
          close={() => setShowNotes(false)}
        />
      )}
    </DashboardLayout>
  );
};

export default StudentsPage;
