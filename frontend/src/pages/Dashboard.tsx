import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  applications,
  opportunities,
  studentProfile,
} from "../data/placementData";

const statusStyles = {
  Applied: "bg-slate-100 text-slate-600",
  Shortlisted: "bg-emerald-50 text-emerald-700",
  Interview: "bg-amber-50 text-amber-700",
  Selected: "bg-indigo-50 text-indigo-700",
  Rejected: "bg-red-50 text-red-600",
};

const statusProgress = {
  Applied: "25%",
  Shortlisted: "50%",
  Interview: "75%",
  Selected: "100%",
  Rejected: "100%",
};

function Dashboard() {
  const recentApplications = applications.slice(0, 4);
  const upcomingOpportunities = opportunities.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Placement season is active
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Good morning, {studentProfile.name.split(" ")[0]} 👋
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Stay on top of your placement journey, discover relevant
              opportunities, and keep your profile ready.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
              <Target size={24} />
            </div>

            <div>
              <p className="text-xs text-slate-400">Placement readiness</p>
              <p className="text-xl font-bold">
                {studentProfile.placementReadiness}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Profile completion"
          value={`${studentProfile.profileCompletion}%`}
          helper="Keep your profile updated"
          icon={<TrendingUp size={20} />}
          iconClass="bg-indigo-50 text-indigo-600"
        />

        <StatCard
          label="Applications"
          value={applications.length.toString()}
          helper="Across active opportunities"
          icon={<BriefcaseBusiness size={20} />}
          iconClass="bg-blue-50 text-blue-600"
        />

        <StatCard
          label="Interviews"
          value={applications
            .filter((app) => app.status === "Interview")
            .length.toString()}
          helper="Upcoming interview stages"
          icon={<CalendarDays size={20} />}
          iconClass="bg-amber-50 text-amber-600"
        />

        <StatCard
          label="Shortlisted"
          value={applications
            .filter((app) => app.status === "Shortlisted")
            .length.toString()}
          helper="Applications progressing"
          icon={<CheckCircle2 size={20} />}
          iconClass="bg-emerald-50 text-emerald-600"
        />
      </section>

      {/* Main content */}
      <div className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
        {/* Opportunities */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <h2 className="font-bold text-slate-900">
                Upcoming opportunities
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Opportunities matching your profile
              </p>
            </div>

            <button
              type="button"
              className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 sm:flex"
            >
              View all
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {upcomingOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="p-5 transition hover:bg-slate-50 sm:p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                    {opportunity.logo}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {opportunity.role}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {opportunity.company}
                        </p>
                      </div>

                      <span className="inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-indigo-50 px-3.5 py-2 text-xs font-semibold leading-none text-indigo-700">
                        {opportunity.type}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {opportunity.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={14} />
                        {opportunity.mode}
                      </span>

                      <span className="font-medium text-slate-700">
                        {opportunity.salary}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                      >
                        View
                        <ArrowUpRight size={15} />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={14} />
                      Application deadline:{" "}
                      <span className="font-semibold text-slate-700">
                        {opportunity.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application progress */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <h2 className="font-bold text-slate-900">Application progress</h2>
            <p className="mt-1 text-sm text-slate-500">
              Track where your applications stand
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="space-y-5">
              {recentApplications.map((application) => (
                <div key={application.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {application.role}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {application.company}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        statusStyles[application.status]
                      }`}
                    >
                      {application.status}
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-indigo-600 transition-all"
                      style={{
                        width: statusProgress[application.status],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View application tracker
              <ChevronRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* Bottom section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile readiness */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-bold text-slate-900">Profile readiness</h2>
              <p className="mt-1 text-sm text-slate-500">
                Complete these areas before applying.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-indigo-100 text-sm font-bold text-indigo-600">
              {studentProfile.profileCompletion}%
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600"
              style={{ width: `${studentProfile.profileCompletion}%` }}
            />
          </div>

          <div className="mt-5 space-y-3">
            <ReadinessItem label="Basic profile information" complete />
            <ReadinessItem label="Skills added" complete />
            <ReadinessItem label="Resume uploaded" complete />
            <ReadinessItem label="Portfolio updated" />
          </div>
        </section>

        {/* Quick actions */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="font-bold text-slate-900">Quick actions</h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep your placement profile ready.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <QuickAction
              icon={<FileText size={19} />}
              title="Update resume"
              description="Keep your latest resume ready"
            />

            <QuickAction
              icon={<Target size={19} />}
              title="Explore opportunities"
              description="Find roles matching your skills"
            />

            <QuickAction
              icon={<UserRoundIcon />}
              title="Complete profile"
              description="Improve your profile strength"
            />

            <QuickAction
              icon={<CalendarDays size={19} />}
              title="View applications"
              description="Check your application status"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
  helper: string;
  icon: React.ReactNode;
  iconClass: string;
};

function StatCard({ label, value, helper, icon, iconClass }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className={`rounded-xl p-2.5 ${iconClass}`}>{icon}</div>
      </div>

      <p className="mt-4 text-xs text-slate-500">{helper}</p>
    </div>
  );
}

function ReadinessItem({
  label,
  complete = false,
}: {
  label: string;
  complete?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <CheckCircle2
        size={18}
        className={complete ? "text-emerald-500" : "text-slate-300"}
      />
      <span className={complete ? "text-slate-700" : "text-slate-400"}>
        {label}
      </span>
    </div>
  );
}

function QuickAction({
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
      className="group flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-left transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/40"
    >
      <div className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600 transition group-hover:bg-indigo-100">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
    </button>
  );
}

function UserRoundIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default Dashboard;
