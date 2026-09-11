# PlacementOS — Student Portal

PlacementOS Student Portal is a student-focused placement management interface designed to provide students with a centralized workspace for discovering opportunities, tracking applications, managing their resume and profile, receiving placement-related notifications, and monitoring their placement journey.

This implementation focuses on the **Student Portal frontend**, with an emphasis on responsive design, clear navigation, reusable UI components, and meaningful user interactions.

---

## Overview

The Student Portal brings important placement activities into a single, organized workspace.

Students can:

- View their placement overview and readiness
- Explore internship and full-time opportunities
- Search and filter opportunities
- View detailed opportunity information
- Track application progress
- Manage resume information
- Maintain their professional profile
- Manage placement-related notifications
- Review placement milestones
- Configure portal preferences

The frontend is designed to be clean, responsive, and easy to navigate across desktop and mobile screen sizes.

---

## Features

### Dashboard

The dashboard provides a quick overview of the student's placement journey.

- Placement overview and key statistics
- Placement readiness information
- Recommended opportunities
- Application progress
- Upcoming placement activities
- Quick actions for common placement tasks
- Responsive dashboard layout

---

### Opportunities

The opportunities section allows students to discover available placement opportunities.

- Browse internship and full-time opportunities
- Search by:
  - Role
  - Company
  - Skills
  - Category
- Filter opportunities by type
- View:
  - Company
  - Role
  - Location
  - Work mode
  - Salary
  - Required skills
  - Application deadline
- Automatically hide expired opportunities
- Sort upcoming opportunities by deadline
- Dedicated opportunity detail page

---

### Opportunity Details

Each opportunity has a dedicated detail view so students can inspect an opportunity before deciding on the next step.

- Opportunity-specific detail page
- Role and company information
- Employment type
- Location
- Work mode
- Salary information
- Required skills
- Application deadline
- Navigation back to opportunities

---

### Application Tracker

The application tracker helps students monitor the status of their applications.

- View submitted applications
- Track application status
- Shortlisted and interview stages
- Selected and rejected states
- View additional application details
- Expand/collapse application information
- Visual application progress tracking
- Next-step information

---

### Resume Center

The Resume Center provides an interface for managing resume-related information.

- Resume overview
- Resume completeness information
- ATS-oriented resume insights
- Resume sections and improvement suggestions
- Resume management interface
- Select a resume PDF from the device
- Validate selected file type
- Validate maximum file size
- Display selected resume file information

> Note: Resume selection and validation are implemented on the frontend. Persistent resume upload, storage, versioning, and backend processing would require API/backend integration.

---

### Student Profile

The profile section provides a centralized view of the student's professional information.

- Personal information
- Education details
- Target role
- Technical skills
- Placement readiness score
- Portfolio information
- Professional profile links
- Profile completion information
- Add/manage skills and certifications

Portfolio links are displayed as external links when available, while empty portfolio states provide a clear path to profile settings.

---

### Placement Timeline

The placement timeline helps students understand their progress through the placement journey.

- Placement milestones
- Completed stages
- Current stage
- Upcoming stages
- Placement journey progress
- Next-step guidance
- Navigation to relevant opportunities

---

### Notifications

The notification center keeps students informed about important placement activities.

- Application updates
- New opportunity notifications
- Interview reminders
- Mark individual notifications as read/unread
- Mark all notifications as read
- Remove notifications
- Dynamic unread notification count
- Dynamic unread indicators
- Weekly notification summary
- Empty notification state

---

### Settings

The settings section provides controls for student portal preferences.

- Placement notification preferences
- Opportunity alert preferences
- Appearance preference
- Account status information
- Responsive settings interface

Authentication-related actions are intentionally not presented as functional logout operations because authentication/backend integration is outside the current frontend scope.

---

## Responsive Design

The Student Portal is designed to work across different screen sizes.

### Desktop

- Persistent sidebar navigation
- Spacious dashboard layout
- Multi-column cards and sections
- Optimized content presentation

### Mobile

- Collapsible navigation
- Responsive layouts
- Mobile-friendly cards and controls
- Adaptive spacing and typography

Tailwind CSS responsive utilities are used throughout the application to maintain consistency across screen sizes.

---

## Technology Stack

### Frontend

- **React** — Component-based UI development
- **TypeScript** — Type safety and maintainable code
- **Vite** — Development server and production build tooling
- **Tailwind CSS** — Responsive styling and utility-based design
- **React Router** — Client-side navigation and routing
- **Lucide React** — Icons and interface elements

---

## Project Structure

```text
frontend/
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   └── Sidebar.tsx
│   │
│   ├── data/
│   │   └── placementData.ts
│   │
│   ├── pages/
│   │   ├── Applications.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Notifications.tsx
│   │   ├── Opportunities.tsx
│   │   ├── OpportunityDetails.tsx
│   │   ├── PlacementTimeline.tsx
│   │   ├── Profile.tsx
│   │   ├── Resume.tsx
│   │   └── Settings.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts