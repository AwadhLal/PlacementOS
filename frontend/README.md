# PlacementOS — Student Portal

PlacementOS is a student-focused placement management portal designed to help students discover opportunities, manage applications, maintain their professional profile, and track their placement journey from preparation to placement.

## Overview

The Student Portal provides a centralized workspace for students to manage important placement activities in one place.

The implementation focuses on a clean, responsive, and easy-to-use interface with dedicated sections for opportunities, applications, resumes, profiles, notifications, settings, and placement progress.

## Features

### Dashboard
- Placement overview and key statistics
- Recommended opportunities
- Application progress
- Placement readiness information
- Upcoming placement activities

### Opportunities
- Browse available internships and full-time opportunities
- Search by role, company, skills, or category
- Filter opportunities by type
- View location, work mode, salary, required skills, and deadlines

### Application Tracker
- Track all submitted applications
- Application status tracking
- Shortlisted and interview status
- Selected and rejected application states
- Next-step information
- Visual application progress tracker

### Resume Center
- Resume overview
- Resume completeness information
- ATS-oriented resume insights
- Resume sections and improvement suggestions
- Resume management interface

### Student Profile
- Personal information
- Education details
- Target role
- Technical skill profile
- Placement readiness score
- Portfolio section
- Professional profile links

### Placement Timeline
- Track major placement milestones
- Completed, current, and upcoming stages
- Placement journey progress
- Next-step guidance

### Notifications
- Application updates
- New opportunity notifications
- Interview reminders

### Settings
- Student portal preferences and account settings

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Project Structure

```text
frontend/
├── public/
│   └── favicon.svg
│
├── src/
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
│   │   ├── PlacementTimeline.tsx
│   │   ├── Profile.tsx
│   │   ├── Resume.tsx
│   │   └── Settings.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md