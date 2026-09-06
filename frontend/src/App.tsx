import { useState } from "react";
import { Menu } from "lucide-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import OpportunityDetails from "./pages/OpportunityDetails";
import Applications from "./pages/Applications";
import Resume from "./pages/Resume";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import PlacementTimeline from "./pages/PlacementTimeline";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        {/* Fixed Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Application Area */}
        <main className="min-h-screen lg:pl-72">
          {/* Mobile Header */}
          <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white/90 px-4 backdrop-blur lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100"
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </button>

            <div className="ml-3">
              <h1 className="text-sm font-bold text-slate-900">
                PlacementOS
              </h1>
              <p className="text-xs text-slate-500">Student Portal</p>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
            <div className="mx-auto max-w-7xl">
              <Routes>
                {/* Default Route */}
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />

                {/* Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Opportunities */}
                <Route
                  path="/opportunities"
                  element={<Opportunities />}
                />

                {/* Opportunity Details */}
                <Route
                  path="/opportunities/:id"
                  element={<OpportunityDetails />}
                />

                {/* Applications */}
                <Route path="/applications" element={<Applications />} />

                {/* Resume */}
                <Route path="/resume" element={<Resume />} />

                {/* Profile */}
                <Route path="/profile" element={<Profile />} />

                {/* Notifications */}
                <Route
                  path="/notifications"
                  element={<Notifications />}
                />

                {/* Settings */}
                <Route path="/settings" element={<Settings />} />

                {/* Placement Timeline */}
                <Route
                  path="/placement-timeline"
                  element={<PlacementTimeline />}
                />

                {/* Catch-all Route */}
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;