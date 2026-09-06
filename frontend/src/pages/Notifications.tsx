import { useMemo, useState } from "react";
import {
  Bell,
  Check,
  CheckCheck,
  Clock3,
  Info,
  Sparkles,
  Trash2,
} from "lucide-react";

import { notifications as initialNotifications } from "../data/placementData";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  type: string;
};

type NotificationWithState = Notification & {
  read: boolean;
};

const notificationIcons: Record<string, typeof Check> = {
  success: Check,
  info: Info,
  warning: Clock3,
};

const notificationStyles: Record<string, string> = {
  success: "bg-emerald-50 text-emerald-600",
  info: "bg-indigo-50 text-indigo-600",
  warning: "bg-amber-50 text-amber-600",
};

function Notifications() {
  const [notificationList, setNotificationList] = useState<
    NotificationWithState[]
  >(
    initialNotifications.map((notification) => ({
      ...notification,
      read: false,
    })),
  );

  const unreadCount = useMemo(
    () =>
      notificationList.filter(
        (notification) => !notification.read,
      ).length,
    [notificationList],
  );

  const toggleReadStatus = (notificationId: number) => {
    setNotificationList((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === notificationId
          ? {
              ...notification,
              read: !notification.read,
            }
          : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotificationList((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  const removeNotification = (notificationId: number) => {
    setNotificationList((currentNotifications) =>
      currentNotifications.filter(
        (notification) => notification.id !== notificationId,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-indigo-600">
            <Bell size={16} />
            Notifications
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Stay updated
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Keep track of placement updates, application activity, and
            important opportunities.
          </p>
        </div>

        <button
          type="button"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCheck size={17} />
          Mark all as read
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          icon={Bell}
          label="Total notifications"
          value={notificationList.length}
        />

        <SummaryCard
          icon={Check}
          label="Unread"
          value={unreadCount}
        />

        <SummaryCard
          icon={Sparkles}
          label="Updates this week"
          value={notificationList.length}
        />
      </div>

      {/* Notifications list */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Recent activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {unreadCount > 0
                  ? `${unreadCount} unread notification${
                      unreadCount === 1 ? "" : "s"
                    }`
                  : "You're all caught up"}
              </p>
            </div>
          </div>
        </div>

        {notificationList.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {notificationList.map((notification) => {
              const Icon =
                notificationIcons[notification.type] ?? Info;

              const iconStyle =
                notificationStyles[notification.type] ??
                "bg-slate-100 text-slate-600";

              return (
                <div
                  key={notification.id}
                  className={`group flex flex-col gap-4 px-5 py-5 transition sm:flex-row sm:items-start sm:justify-between ${
                    notification.read
                      ? "bg-white hover:bg-slate-50"
                      : "bg-indigo-50/20 hover:bg-indigo-50/40"
                  }`}
                >
                  <div className="flex min-w-0 gap-4">
                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyle}`}
                    >
                      <Icon size={19} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex items-start gap-2">
                        <h3 className="font-semibold text-slate-900">
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-600"
                            aria-label="Unread notification"
                          />
                        )}
                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {notification.message}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock3 size={13} />
                        {notification.time}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2 sm:pt-1">
                    <button
                      type="button"
                      onClick={() =>
                        toggleReadStatus(notification.id)
                      }
                      className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      {notification.read
                        ? "Mark as unread"
                        : "Mark as read"}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        removeNotification(notification.id)
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <Bell size={24} />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-900">
              No notifications
            </h3>

            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
              You have cleared all your notifications. New placement
              updates will appear here.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

type SummaryCardProps = {
  icon: typeof Bell;
  label: string;
  value: number;
};

function SummaryCard({
  icon: Icon,
  label,
  value,
}: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          <Icon size={18} />
        </div>

        <span className="text-2xl font-bold text-slate-900">
          {value}
        </span>
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default Notifications;