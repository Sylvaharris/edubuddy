# EduBuddy Developer Guide

## Product Idea

EduBuddy is a school management SaaS application for schools, teachers, students, parents, school admins, and super admins. The goal is to give each role a focused workspace for daily school operations such as attendance, timetables, subjects, events, students, reports, settings, and future AI-assisted school tools.

The current codebase is a frontend-first Next.js App Router project. It uses mock data and browser localStorage to simulate authentication, onboarding, and school data while the product UI and workflows are being designed.

## Current App Flow

```txt
Register -> Login -> Teacher Onboarding -> Teacher Dashboard
```

Current teacher flow:

1. A user registers as a teacher.
2. The teacher is saved locally and redirected to teacher onboarding.
3. The teacher selects subjects and an assigned class.
4. Onboarding state is persisted locally.
5. The teacher dashboard is unlocked.

Non-teacher registration currently creates an account and sends the user back to login. Their full dashboards can be added later using the same modular route structure.

## Role Structure

Roles are defined in `constants/roles.js`.

Current roles:

- `teacher`
- `student`
- `parent`
- `school-admin`
- `super-admin`

Sidebar links are grouped by role in `constants/sidebarLinks.js`. This is the main place where navigation access is defined on the frontend.

Recommended role ownership:

- Teacher: attendance, timetable, subjects, students, events, settings, assessments, reports, performance.
- Student: subjects, reports, learning tools, assignments, settings.
- Parent: child reports, attendance summaries, messages, fees, settings.
- School Admin: school users, staff, classes, finance, events, settings.
- Super Admin: schools, school admins, analytics, platform settings.

## Existing Modular Structure

### `app/`

Contains App Router routes. Page files should stay thin and mostly compose feature components.

Examples:

- `app/login/page.js` renders the login route.
- `app/register/page.js` renders the register route.
- `app/onboarding/teacher/page.js` renders teacher onboarding.
- `app/teacher/dashboard/page.js` renders the teacher dashboard route.

### `components/auth/`

Authentication and onboarding UI.

Examples:

- `LoginForm.jsx`
- `RegisterForm.jsx`
- `TeacherOnboarding.jsx`
- `SubjectSelectionStep.jsx`
- `ClassAssignmentStep.jsx`
- `OnboardingConfirmationStep.jsx`

Keep form UI, step UI, and small interaction logic here. Do not place backend API implementation here.

### `components/dashboard/`

Dashboard shell and dashboard-level UI.

Examples:

- `DashboardLayout.jsx`
- `DashboardSkeleton.jsx`

The dashboard shell owns the shared sidebar, topbar, page content container, and loading shell.

### Feature Component Folders

Each feature has its own component folder:

- `components/attendance/`
- `components/events/`
- `components/settings/teacher/`
- `components/students/`
- `components/subjects/`
- `components/timetable/`

Keep feature-specific cards, modals, headers, tables, toolbars, and tabs inside the feature folder.

### `services/`

Service files contain business operations and data access wrappers.

Current examples:

- `authService.js`
- `attendanceService.js`
- `teacherDashboardService.js`
- `timetableGenerator.js`

When a real backend is added, service files should become API clients. Components should call services, not raw `fetch` scattered everywhere.

### `context/`

Global frontend state.

Current examples:

- `AuthContext.jsx`
- `ThemeContext.jsx`

Keep context limited to cross-app concerns such as session state, theme, active school, and global permissions.

### `data/`

Mock data used during frontend development.

Current examples:

- `users.js`
- `subjects.js`
- `students.js`
- `events.js`
- `teacherDashboard.js`
- `teacherSettings.js`
- `timetable.js`

This folder should shrink or disappear once real backend APIs are connected.

### `lib/`

Small reusable low-level helpers.

Current example:

- `storage.js`

Use `lib/` for generic helpers, not feature business logic.

## If A Real Backend Is Added

If a Python Django backend is introduced, the frontend should remain a clean Next.js client that talks to Django through API services.

### Files That Should Be Replaced Or Removed Later

These files are mock-data or local-development stand-ins and should eventually be removed or rewritten:

- `data/users.js`
- `data/teacherDashboard.js`
- `data/teacherSettings.js`
- `data/students.js`
- `data/subjects.js`
- `data/events.js`
- `data/timetable.js`
- localStorage registration logic in `lib/storage.js`
- mock login/register logic in `services/authService.js`
- mock dashboard data logic in `services/teacherDashboardService.js`
- mock attendance data logic in `services/attendanceService.js`

Do not delete these until the backend endpoints exist and the frontend services have been rewritten to call them.

### Files That Should Not Be Removed

These are core frontend architecture and UI files:

- `app/`
- `components/`
- `context/`
- `constants/`
- `hooks/`
- `styles/`
- `components/dashboard/DashboardLayout.jsx`
- `components/sidebar/Sidebar.jsx`
- `components/topbar/Topbar.jsx`
- `components/ui/`
- feature folders such as `components/subjects/`, `components/attendance/`, `components/settings/teacher/`

These should remain and become API-powered rather than mock-data-powered.

### Files That Should Be Updated Instead Of Removed

- `services/authService.js`: replace mock user lookup with API calls to Django auth endpoints.
- `services/teacherDashboardService.js`: replace mock dashboard data with `/api/teacher/dashboard/`.
- `services/attendanceService.js`: replace mock attendance data with `/api/attendance/`.
- `lib/storage.js`: keep only token/session helpers if needed.
- `context/AuthContext.jsx`: keep session state, but load user from backend or verified token.
- `constants/sidebarLinks.js`: keep role navigation, but optionally filter with permissions returned by the backend.

## Recommended Django Backend Structure

A scalable Django backend should be modular by domain, not one giant app.

Recommended layout:

```txt
backend/
├── config/
│   ├── settings/
│   │   ├── base.py
│   │   ├── development.py
│   │   └── production.py
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   ├── accounts/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── permissions.py
│   │   ├── services.py
│   │   └── urls.py
│   ├── schools/
│   ├── teachers/
│   ├── students/
│   ├── parents/
│   ├── subjects/
│   ├── classes/
│   ├── attendance/
│   ├── timetable/
│   ├── events/
│   ├── reports/
│   ├── notifications/
│   └── billing/
├── manage.py
└── requirements.txt
```

### Suggested Django Apps

#### `accounts`

Owns authentication, roles, user profiles, password reset, sessions, and token refresh.

Core models:

- User
- Role
- Permission
- UserProfile

#### `schools`

Owns school workspace data.

Core models:

- School
- SchoolTerm
- SchoolSession
- Department

#### `teachers`

Owns teacher-specific details and onboarding.

Core models:

- TeacherProfile
- TeacherSubjectAssignment
- TeacherClassAssignment
- TeacherOnboarding

#### `students`

Owns student biodata and class enrollment.

Core models:

- StudentProfile
- StudentEnrollment
- GuardianLink

#### `subjects`

Owns school subjects, curriculum, resources, and materials.

Core models:

- Subject
- CurriculumUnit
- SubjectResource
- SubjectMaterial

#### `classes`

Owns classes, arms, and class teachers.

Core models:

- ClassLevel
- ClassArm
- ClassMembership

#### `attendance`

Owns attendance sessions and attendance records.

Core models:

- AttendanceSession
- AttendanceRecord

#### `timetable`

Owns timetable generation and schedules.

Core models:

- Timetable
- TimetableSlot
- TeacherAvailability

#### `events`

Owns school events, reminders, and event RSVP data.

Core models:

- Event
- EventAudience
- EventReminder

#### `reports`

Owns report cards, assessment summaries, and performance analytics.

Core models:

- Assessment
- Score
- ReportCard
- PerformanceSummary

## API Design Recommendation

Use versioned endpoints:

```txt
/api/v1/auth/login/
/api/v1/auth/register/
/api/v1/auth/me/
/api/v1/teachers/onboarding/
/api/v1/teacher/dashboard/
/api/v1/subjects/
/api/v1/classes/
/api/v1/attendance/
/api/v1/timetable/
/api/v1/events/
```

Frontend service files should map cleanly to these endpoints:

```txt
services/authService.js
services/teacherDashboardService.js
services/attendanceService.js
services/subjectService.js
services/timetableService.js
services/eventService.js
```

## Frontend Migration Plan To Django

1. Build Django auth endpoints first.
2. Replace `services/authService.js` mock logic with API requests.
3. Update `AuthContext.jsx` to store a token or session and call `/auth/me/`.
4. Add backend onboarding endpoint for teachers.
5. Replace `data/subjects.js` with `subjectService.getSubjects()`.
6. Replace each mock data service one feature at a time.
7. Keep UI components stable while replacing only the data source.
8. Remove old mock files after each feature is fully API-powered.

## Do And Do Not

### Do

- Keep route pages thin.
- Keep feature UI inside its feature folder.
- Keep backend calls inside `services/`.
- Keep role names consistent with `constants/roles.js`.
- Use shared layout components for dashboards.
- Add loading, empty, and error states for every backend-powered feature.
- Validate role access on both frontend and backend.
- Keep mock data until a backend endpoint fully replaces it.
- Use clear names such as `TeacherOnboarding`, `AttendanceTable`, and `SubjectToolbar`.
- Write small service functions that are easy to test.

### Do Not

- Do not call backend APIs directly from deeply nested UI components.
- Do not mix teacher, student, parent, and admin logic in one giant component.
- Do not use localStorage as the final production database.
- Do not trust frontend route guards as the only security layer.
- Do not delete mock files before the replacement API is connected.
- Do not hard-code permissions in many components.
- Do not create one huge Django app for every feature.
- Do not put business rules inside visual components.
- Do not let page files become large feature implementations.
- Do not change shared UI tokens casually because it can break visual consistency across roles.

## Current Frontend Auth Notes

Current auth is intentionally frontend-only:

- Seed users live in `data/users.js`.
- Registered users are stored in localStorage.
- Teacher onboarding is stored in localStorage.
- Dashboard protection is handled in the route and AuthContext.

This is useful for prototyping, but it must be replaced by real backend authentication before production.

