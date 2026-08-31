import {
  Bell,
  Check,
  CheckCheck,
  Clock3,
  Info,
  Sparkles,
  Trash2,
} from "lucide-react";

import { notifications } from "../data/placementData";

const notificationIcons = {
  success: Check,
  info: Info,
  warning: Clock3,
};

const notificationStyles = {
  success: "bg-emerald-50 text-emerald-600",
  info: "bg-indigo-50 text-indigo-600",
  warning: "bg-amber-50 text-amber-600",
};

function Notifications() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1.5 text-xs font-medium text-indigo-300">
              <Sparkles size={14} />
              Stay updated
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Notifications
            </h1>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Keep track of important placement updates and reminders.
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Bell size={24} />
          </div>
        </div>
      </section>

      {/* Notification summary */}
      <section className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Total notifications"
          value={notifications.length}
        />

        <SummaryCard
          label="Unread"
          value={notifications.length}
        />

        <SummaryCard
          label="Updates this week"
          value={notifications.length}
        />
      </section>

      {/* Notifications list */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-bold text-slate-900">
              Recent notifications
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest placement activity.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <CheckCheck size={16} />
            Mark all as read
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {notifications.map((notification) => {
            const Icon = notificationIcons[
              notification.type as keyof typeof notificationIcons
            ];

            const iconStyle =
              notificationStyles[
                notification.type as keyof typeof notificationStyles
              ];

            return (
              <div
                key={notification.id}
                className="group flex gap-4 p-5 transition hover:bg-slate-50 sm:p-6"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyle}`}
                >
                  <Icon size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {notification.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {notification.message}
                      </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-1.5 text-xs text-slate-400">
                      <Clock3 size={13} />
                      {notification.time}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
                    >
                      <Check size={14} />
                      Mark as read
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Unread indicator */}
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}

export default Notifications;