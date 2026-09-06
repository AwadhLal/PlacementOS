import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { opportunities } from "../data/placementData";

type Filter = "All" | "Internship" | "Full-time";

function Opportunities() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const activeOpportunities = useMemo(() => {
    const today = new Date();

    return opportunities.filter((opportunity) => {
      const deadline = new Date(`${opportunity.deadline}T23:59:59`);

      return deadline >= today;
    });
  }, []);

  const filteredOpportunities = useMemo(() => {
    const query = search.toLowerCase().trim();

    return activeOpportunities
      .filter((opportunity) => {
        const matchesFilter =
          filter === "All" || opportunity.type === filter;

        const matchesSearch =
          !query ||
          opportunity.role.toLowerCase().includes(query) ||
          opportunity.company.toLowerCase().includes(query) ||
          opportunity.skills.some((skill) =>
            skill.toLowerCase().includes(query),
          ) ||
          opportunity.category.toLowerCase().includes(query);

        return matchesFilter && matchesSearch;
      })
      .sort(
        (a, b) =>
          new Date(`${a.deadline}T23:59:59`).getTime() -
          new Date(`${b.deadline}T23:59:59`).getTime(),
      );
  }, [activeOpportunities, search, filter]);

  const formatDeadline = (deadline: string) => {
    return new Date(`${deadline}T00:00:00`).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      },
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1.5 text-xs font-medium text-indigo-300">
              <Sparkles size={14} />
              Personalized for you
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Find your next opportunity
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Discover internships and jobs that match your skills,
              interests, and placement goals.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <BriefcaseBusiness size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Available opportunities
              </p>

              <p className="text-xl font-bold">
                {activeOpportunities.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by role, company, skill..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden h-12 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm text-slate-500 sm:flex">
              <SlidersHorizontal size={17} />
              Filter
            </div>

            <div className="flex h-12 rounded-xl bg-slate-100 p-1">
              {(["All", "Internship", "Full-time"] as Filter[]).map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`rounded-lg px-3 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                      filter === item
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recommended opportunities
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredOpportunities.length} opportunities found
          </p>
        </div>

        <div className="hidden items-center gap-2 text-sm font-semibold text-slate-600 sm:flex">
          <span>Most relevant</span>
          <SlidersHorizontal size={15} />
        </div>
      </div>

      {/* Opportunity cards */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredOpportunities.map((opportunity) => (
            <article
              key={opportunity.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:p-6"
            >
              <div className="flex gap-4">
                {/* Company logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                  {opportunity.logo}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {opportunity.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {opportunity.company}
                      </p>
                    </div>

                    <span className="inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-indigo-50 px-3.5 py-2 text-xs font-semibold leading-none text-indigo-700">
                      {opportunity.type}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {opportunity.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {opportunity.mode}
                    </span>

                    <span className="font-semibold text-slate-700">
                      {opportunity.salary}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {opportunity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={14} />

                      <span>
                        Deadline{" "}
                        <strong className="font-semibold text-slate-700">
                          {formatDeadline(opportunity.deadline)}
                        </strong>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => navigate("/opportunities")}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
                    >
                      View opportunity
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty state */
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Search size={24} />
          </div>

          <h3 className="mt-5 font-bold text-slate-900">
            No opportunities found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Try searching for another role, company, or skill.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setFilter("All");
            }}
            className="mt-5 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
          >
            Clear filters
          </button>
        </section>
      )}
    </div>
  );
}

export default Opportunities;