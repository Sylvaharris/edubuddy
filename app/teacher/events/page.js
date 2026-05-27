"use client";

/**
 * Teacher events page: manages school events with calendar, cards, stats,
 * toolbars, AI suggestions, and event detail modals.
 */

import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import EventHeader from "../../../components/events/EventHeader";
import EventStats from "../../../components/events/EventStats";
import EventToolbar from "../../../components/events/EventToolbar";
import EventCards from "../../../components/events/EventCards";
import EventCalendar from "../../../components/events/EventCalendar";
import AIEventSuggestions from "../../../components/events/AIEventSuggestions";

import CreateEventModal from "../../../components/events/CreateEventModal";
import EventDetailsModal from "../../../components/events/EventDetailsModal";

import eventsData from "../../../data/events";

const EventsPage = () => {
  const [events] = useState(eventsData);

  const [createOpen, setCreateOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [view, setView] = useState("Month");

  return (
    <DashboardLayout>
      <EventHeader onCreate={() => setCreateOpen(true)} />

      <EventStats events={events} />

      <EventToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        view={view}
        setView={setView}
      />

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-[1fr_400px]
        gap-8
        "
      >
        <div className="space-y-8">
          <EventCalendar events={events} onSelectEvent={setSelectedEvent} />

          <EventCards events={events} />
        </div>

        <AIEventSuggestions />
      </div>

      <CreateEventModal open={createOpen} setOpen={setCreateOpen} />

      <EventDetailsModal
        event={selectedEvent}
        close={() => setSelectedEvent(null)}
      />
    </DashboardLayout>
  );
};

export default EventsPage;
