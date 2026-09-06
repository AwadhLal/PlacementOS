import {
  Bell,
  ChevronRight,
  Lock,
  Moon,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { useState } from "react";

function Settings() {
  const [placementNotifications, setPlacementNotifications] =
    useState(true);

  const [opportunityAlerts, setOpportunityAlerts] =
    useState(true);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <UserRound size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Settings
            </h1>

            <p className="mt-1 text-sm text-slate-400 sm:text-base">
              Manage your account, preferences, and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Account */}
      <SettingsSection
        title="Account"
        description="Manage your personal account settings."
      >
        <SettingsItem
          icon={<UserRound size={19} />}
          title="Personal information"
          description="Update your name, email, and profile details."
        />

        <SettingsItem
          icon={<Lock size={19} />}
          title="Password & security"
          description="Manage your password and account security."
        />
      </SettingsSection>

      {/* Notifications */}
      <SettingsSection
        title="Notifications"
        description="Choose how PlacementOS keeps you informed."
      >
        <ToggleSetting
          icon={<Bell size={19} />}
          title="Placement notifications"
          description="Get notified about applications, interviews, and offers."
          enabled={placementNotifications}
          onToggle={() =>
            setPlacementNotifications((current) => !current)
          }
        />

        <ToggleSetting
          icon={<Bell size={19} />}
          title="Opportunity alerts"
          description="Receive alerts when relevant opportunities are available."
          enabled={opportunityAlerts}
          onToggle={() =>
            setOpportunityAlerts((current) => !current)
          }
        />
      </SettingsSection>

      {/* Appearance */}
      <SettingsSection
        title="Appearance"
        description="Customize how PlacementOS looks for you."
      >
        <ToggleSetting
          icon={<Moon size={19} />}
          title="Dark mode"
          description="Use a darker interface across the application."
          enabled={darkMode}
          onToggle={() => setDarkMode((current) => !current)}
        />
      </SettingsSection>

      {/* Privacy */}
      <SettingsSection
        title="Privacy"
        description="Control how your placement profile is shared."
      >
        <SettingsItem
          icon={<ShieldCheck size={19} />}
          title="Profile visibility"
          description="Control whether recruiters can discover your profile."
        />
      </SettingsSection>

      {/* Account status */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
          <h2 className="font-bold text-slate-900">
            Account status
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Authentication and account actions will be available when
            the backend authentication flow is connected.
          </p>
        </div>

        <div className="p-5 sm:p-6">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">
              Authentication not connected
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Logout is intentionally unavailable until PlacementOS
              authentication is integrated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SettingsSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
        <h2 className="font-bold text-slate-900">{title}</h2>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {children}
      </div>
    </section>
  );
}

function SettingsItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-50 sm:p-6"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <ChevronRight
        size={18}
        className="shrink-0 text-slate-300 transition group-hover:text-slate-500"
      />
    </button>
  );
}

function ToggleSetting({
  icon,
  title,
  description,
  enabled = false,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled?: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-4 p-5 sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-label={`Toggle ${title}`}
        aria-pressed={enabled}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-indigo-600" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export default Settings;