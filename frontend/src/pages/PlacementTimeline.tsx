import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Circle,
  FileText,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const timeline = [
  {
    title: "Profile completed",
    description:
      "Your basic student profile and academic information are ready.",
    date: "Aug 20, 2026",
    icon: UserIcon,
    status: "completed",
  },
  {
    title: "Resume created",
    description:
      "Your ATS-friendly resume was created and added to your profile.",
    date: "Aug 24, 2026",
    icon: FileText,
    status: "completed",
  },
  {
    title: "Placement opportunities discovered",
    description:
      "You started exploring opportunities matched with your skills.",
    date: "Aug 27, 2026",
    icon: BriefcaseBusiness,
    status: "completed",
  },
  {
    title: "Applications in progress",
    description:
      "Track your applications and monitor recruiter responses.",
    date: "Current stage",
    icon: Rocket,
    status: "current",
  },
  {
    title: "Interview preparation",
    description:
      "Prepare for upcoming interviews with personalized guidance.",
    date: "Next step",
    icon: Sparkles,
    status: "upcoming",
  },
  {
    title: "Placement outcome",
    description:
      "Complete your placement journey and track your final outcome.",
    date: "Upcoming",
    icon: GraduationCap,
    status: "upcoming",
  },
];

function UserIcon({ size = 20 }: { size?: number }) {
  return <Circle size={size} />;
}

function PlacementTimeline() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1.5 text-xs font-medium text-indigo-300">
              <Sparkles size={14} />
              Placement journey
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Placement Timeline
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Follow your placement journey from profile preparation
              to your final placement outcome.
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <CalendarDays size={24} />
          </div>
        </div>
      </section>

      {/* Progress summary */}
      <section className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Journey progress"
          value="50%"
          description="You're halfway through"
        />

        <SummaryCard
          label="Completed stages"
          value="3"
          description="Milestones completed"
        />

        <SummaryCard
          label="Current stage"
          value="Applications"
          description="Keep applying"
        />
      </section>

      {/* Timeline */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
          <h2 className="font-bold text-slate-900">
            Your placement journey
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            A clear view of your placement milestones and next steps.
          </p>
        </div>

        <div className="p-5 sm:p-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-5 left-[19px] top-5 w-px bg-slate-200 sm:left-[23px]" />

            <div className="space-y-8">
              {timeline.map((item) => {
                const Icon = item.icon;

                const isCompleted =
                  item.status === "completed";

                const isCurrent =
                  item.status === "current";

                return (
                  <div
                    key={item.title}
                    className="relative flex gap-4 sm:gap-6"
                  >
                    {/* Timeline icon */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white sm:h-12 sm:w-12 ${
                        isCompleted
                          ? "bg-emerald-500 text-white"
                          : isCurrent
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={20} />
                      ) : (
                        <Icon size={19} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pb-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3
                              className={`font-bold ${
                                isCompleted || isCurrent
                                  ? "text-slate-900"
                                  : "text-slate-400"
                              }`}
                            >
                              {item.title}
                            </h3>

                            {isCurrent && (
                              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-indigo-600">
                                Current
                              </span>
                            )}
                          </div>

                          <p
                            className={`mt-1 max-w-2xl text-sm leading-6 ${
                              isCompleted || isCurrent
                                ? "text-slate-500"
                                : "text-slate-400"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 text-xs font-medium ${
                            isCompleted
                              ? "text-emerald-600"
                              : isCurrent
                              ? "text-indigo-600"
                              : "text-slate-400"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>

                      {/* Current stage action */}
                      {isCurrent && (
                        <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm font-semibold text-indigo-900">
                                Keep your momentum going
                              </p>

                              <p className="mt-1 text-xs leading-5 text-indigo-700">
                                Explore recommended opportunities and
                                keep your applications updated.
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                navigate("/opportunities")
                              }
                              className="inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
                            >
                              View opportunities
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Rocket size={21} />
          </div>

          <div>
            <h2 className="font-bold text-slate-900">
              What's next?
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Keep your profile updated, apply to relevant
              opportunities, and prepare for upcoming interviews.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default PlacementTimeline;