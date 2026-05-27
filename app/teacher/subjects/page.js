"use client";

/**
 * Teacher subjects page: manages subject cards, curriculum, resources,
 * materials, search, filtering, and subject selection.
 */

import { useMemo, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import SubjectHeader from "../../../components/subjects/SubjectHeader";
import SubjectStats from "../../../components/subjects/SubjectStats";
import SubjectTabs from "../../../components/subjects/SubjectTabs";
import SubjectToolbar from "../../../components/subjects/SubjectToolbar";

import SubjectGrid from "../../../components/subjects/SubjectGrid";
import SubjectCurriculum from "../../../components/subjects/SubjectCurriculum";
import SubjectResources from "../../../components/subjects/SubjectResources";
import SubjectMaterials from "../../../components/subjects/SubjectMaterials";

import SelectSubjectModal from "../../../components/subjects/SelectSubjectModal";

import subjectsData from "../../../data/subjects";

const SubjectsPage = () => {
  /**
   * ============================
   * SUBJECT DATA
   * ============================
   */

  const [subjects] = useState(subjectsData);

  /**
   * ============================
   * TAB STATE
   * ============================
   */

  const [selectedTab, setSelectedTab] = useState("All");

  /**
   * ============================
   * SEARCH + FILTER
   * ============================
   */

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All Statuses");

  /**
   * ============================
   * SUBJECT MODAL
   * ============================
   */

  const [openSubjectModal, setOpenSubjectModal] = useState(false);

  /**
   * ============================
   * FILTER SUBJECTS
   * ============================
   */

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const searchMatch = subject.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const statusMatch =
        filter === "All Statuses" ? true : subject.status === filter;

      return searchMatch && statusMatch;
    });
  }, [subjects, search, filter]);

  /**
   * ============================
   * PAGE
   * ============================
   */

  return (
    <DashboardLayout>
      {/* HEADER */}

      <SubjectHeader onOpenSubjectModal={() => setOpenSubjectModal(true)} />

      {/* STATS */}

      <SubjectStats subjects={filteredSubjects} />

      {/* TAB BUTTONS */}

      <SubjectTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* SEARCH + FILTER */}

      <SubjectToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* =====================
          TAB CONTENT
      ===================== */}

      {selectedTab === "All" && <SubjectGrid subjects={filteredSubjects} />}

      {selectedTab === "Curriculum" && (
        <SubjectCurriculum subjects={filteredSubjects} />
      )}

      {selectedTab === "Resources" && (
        <SubjectResources subjects={filteredSubjects} />
      )}

      {selectedTab === "Materials" && (
        <SubjectMaterials subjects={filteredSubjects} />
      )}

      {/* =====================
          SUBJECT SELECTION
          MODAL
      ===================== */}

      <SelectSubjectModal
        open={openSubjectModal}
        setOpen={setOpenSubjectModal}
      />
    </DashboardLayout>
  );
};

export default SubjectsPage;
