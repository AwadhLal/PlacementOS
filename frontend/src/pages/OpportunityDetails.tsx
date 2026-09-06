import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { opportunities } from "../data/placementData";

function OpportunityDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const opportunity = opportunities.find(
    (item) => String(item.id) === String(id),
  );

  if (!opportunity) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <BriefcaseBusiness size={24} />
        </div>

        <h1 className="mt-5 text-xl font-bold text-slate-900">
          Opportunity not found
        </h1>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          The opportunity you are looking for may no longer be
          available.
        </p>

        <button
          type="button"
          onClick={() => navigate("/opportunities")}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          <ArrowLeft size={16} />
          Back to opportunities
        </button>
      </section>
    );
  }

  const formattedDeadline = new Date(
    `${opportunity.deadline}T00:00:00`,
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Back */}
      <button
        type="button"
        onClick={() => navigate("/opportunities")}
        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <ArrowLeft size={17} />
        Back to opportunities
      </button>

      {/* Hero */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-950">
            {opportunity.logo}
          </div>

          <div className="min-w-0 flex-1">
            <span className="inline-flex rounded-full bg-indigo-500/15 px-3 py-1.5 text-xs font-semibold text-indigo-300">
              {opportunity.type}
            </span>

            <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {opportunity.role}
            </h1>

            <p className="mt-2 text-base font-medium text-slate-300">
              {opportunity.company}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {opportunity.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {opportunity.mode}
              </span>

              <span className="font-semibold text-white">
                {opportunity.salary}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-900">
            Opportunity overview
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Explore the role details, requirements, and important
            information for this placement opportunity.
          </p>

          <h3 className="mt-6 text-sm font-bold text-slate-900">
            Required skills
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {opportunity.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900">
            Application details
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <CalendarDays
                size={18}
                className="mt-0.5 text-indigo-600"
              />

              <div>
                <p className="text-xs text-slate-400">
                  Application deadline
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {formattedDeadline}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BriefcaseBusiness
                size={18}
                className="mt-0.5 text-indigo-600"
              />

              <div>
                <p className="text-xs text-slate-400">
                  Opportunity type
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {opportunity.type}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default OpportunityDetails;