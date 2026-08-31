import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import { applications } from "../data/placementData";

const statusConfig = {
  Applied: {
    icon: Clock3,
    className: "bg-slate-100 text-slate-600",
  },
  Shortlisted: {
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700",
  },
  Interview: {
    icon: CalendarDays,
    className: "bg-amber-50 text-amber-700",
  },
  Selected: {
    icon: CheckCircle2,
    className: "bg-indigo-50 text-indigo-700",
  },
  Rejected: {
    icon: XCircle,
    className: "bg-red-50 text-red-600",
  },
};

const statusSteps = ["Applied", "Shortlisted", "Interview", "Selected"];

function Applications() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <BriefcaseBusiness size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                My Applications
              </h1>

              <p className="mt-1 text-sm text-slate-400 sm:text-base">
                Track all your placement applications in one place.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-400">Active applications</p>

            <p className="mt-1 text-xl font-bold">
              {
                applications.filter(
                  (application) =>
                    application.status !== "Rejected" &&
                    application.status !== "Selected",
                ).length
              }
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard label="Total Applications" value={applications.length} />

        <SummaryCard
          label="Shortlisted"
          value={
            applications.filter(
              (application) => application.status === "Shortlisted",
            ).length
          }
        />

        <SummaryCard
          label="Interviews"
          value={
            applications.filter(
              (application) => application.status === "Interview",
            ).length
          }
        />

        <SummaryCard
          label="Selected"
          value={
            applications.filter(
              (application) => application.status === "Selected",
            ).length
          }
        />
      </section>

      {/* Application tracker */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
          <h2 className="font-bold text-slate-900">Application tracker</h2>

          <p className="mt-1 text-sm text-slate-500">
            Monitor the progress of every application.
          </p>
        </div>

        {applications.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {applications.map((application) => {
              const config = statusConfig[application.status];
              const StatusIcon = config.icon;

              const currentStep = statusSteps.indexOf(application.status);

              return (
                <article
                  key={application.id}
                  className="p-5 transition hover:bg-slate-50 sm:p-6"
                >
                  {/* Company + status */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                        {application.company.slice(0, 2).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900">
                          {application.role}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {application.company}
                        </p>

                        <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                          <CalendarDays size={14} />
                          Applied on {application.appliedDate}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold ${config.className}`}
                    >
                      <StatusIcon size={14} />
                      {application.status}
                    </span>
                  </div>

                  {/* Progress */}
                  {application.status !== "Rejected" && (
                    <div className="mt-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-500">
                          Application progress
                        </p>

                        <p className="text-xs font-semibold text-indigo-600">
                          {application.status}
                        </p>
                      </div>

                      <div className="relative px-3 sm:px-4">
                        {/* Full progress line */}
                        <div className="absolute left-[12.5%] right-[12.5%] top-3.5 h-1 rounded-full bg-slate-100" />

                        {/* Completed progress line */}
                        {currentStep > 0 && (
                          <div
                            className="absolute left-[12.5%] top-3.5 h-1 rounded-full bg-indigo-600"
                            style={{
                              width: `${(currentStep / 3) * 75}%`,
                            }}
                          />
                        )}

                        {/* Steps */}
                        <div className="relative grid grid-cols-4">
                          {statusSteps.map((step, index) => {
                            const completed = index <= currentStep;
                            const isCurrent = index === currentStep;

                            return (
                              <div
                                key={step}
                                className="flex min-w-0 flex-col items-center"
                              >
                                {/* Circle */}
                                <div
                                  className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ring-4 ring-white ${
                                    completed
                                      ? "bg-indigo-600 text-white"
                                      : "bg-slate-100 text-slate-400"
                                  } ${
                                    isCurrent
                                      ? "shadow-md shadow-indigo-200"
                                      : ""
                                  }`}
                                >
                                  {index + 1}
                                </div>

                                {/* Label */}
                                <span
                                  className={`mt-3 text-center text-[10px] font-medium sm:text-xs ${
                                    completed
                                      ? "text-slate-600"
                                      : "text-slate-400"
                                  }`}
                                >
                                  {step}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Rejected state */}
                  {application.status === "Rejected" && (
                    <div className="mt-5 rounded-xl bg-red-50 px-4 py-3">
                      <p className="text-xs font-semibold text-red-600">
                        Application closed
                      </p>

                      <p className="mt-1 text-xs text-red-500">
                        This application is no longer active.
                      </p>
                    </div>
                  )}

                  {/* Next step */}
                  {application.nextStep && (
                    <div className="mt-5 flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          Next step
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                          {application.nextStep}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="inline-flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
                      >
                        View details
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <BriefcaseBusiness size={24} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              No applications yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Your applications will appear here once you apply to an
              opportunity.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}

export default Applications;
