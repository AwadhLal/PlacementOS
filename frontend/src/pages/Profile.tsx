import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Edit3,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Plus,
  UserRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { studentProfile } from "../data/placementData";

function Profile() {
  const navigate = useNavigate();

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-bold shadow-lg shadow-indigo-950/40">
              {getInitials(studentProfile.name)}
            </div>

            <div>
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-medium text-indigo-300">
                <UserRound size={14} />
                Student Profile
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {studentProfile.name}
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                {studentProfile.role}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/settings")}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50"
          >
            <Edit3 size={16} />
            Edit profile
          </button>
        </div>
      </section>

      {/* Profile completion */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-bold text-slate-900">
              Profile completion
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete your profile to improve your placement visibility.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-indigo-600"
                style={{
                  width: `${studentProfile.profileCompletion}%`,
                }}
              />
            </div>

            <span className="text-sm font-bold text-indigo-600">
              {studentProfile.profileCompletion}%
            </span>
          </div>
        </div>
      </section>

      {/* Main profile grid */}
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Personal information */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <h2 className="font-bold text-slate-900">
                Personal information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your basic profile information.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/settings")}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Edit personal information"
            >
              <Edit3 size={17} />
            </button>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <InfoItem
              icon={<UserRound size={18} />}
              label="Full name"
              value={studentProfile.name}
            />

            <InfoItem
              icon={<Mail size={18} />}
              label="Email"
              value={studentProfile.email}
            />

            <InfoItem
              icon={<GraduationCap size={18} />}
              label="Degree"
              value={studentProfile.degree}
            />

            <InfoItem
              icon={<MapPin size={18} />}
              label="Location"
              value={studentProfile.location}
            />

            <InfoItem
              icon={<BriefcaseBusiness size={18} />}
              label="Target role"
              value={studentProfile.role}
            />

            <InfoItem
              icon={<Phone size={18} />}
              label="Phone"
              value="Not added yet"
              muted
            />
          </div>
        </section>

        {/* Placement readiness */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <h2 className="font-bold text-slate-900">
              Placement readiness
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your current placement profile strength.
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex justify-center">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-indigo-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    {studentProfile.placementReadiness}%
                  </p>

                  <p className="text-xs font-medium text-slate-500">
                    Ready
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <ReadinessItem label="Profile information" />
              <ReadinessItem label="Technical skills" />
              <ReadinessItem label="Resume" />
              <ReadinessItem label="Projects" />
              <ReadinessItem
                label="Portfolio"
                complete={false}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Skills */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-bold text-slate-900">
              Skill profile
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Skills recruiters can use to discover your profile.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/settings")}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Plus size={16} />
            Add skill
          </button>
        </div>

        <div className="flex flex-wrap gap-2 p-5 sm:p-6">
          {studentProfile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-2 text-xs font-semibold text-indigo-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education + Portfolio */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <h2 className="font-bold text-slate-900">
              Education
            </h2>
          </div>

          <div className="flex gap-4 p-5 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <GraduationCap size={21} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {studentProfile.degree}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {studentProfile.college}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Undergraduate program
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <h2 className="font-bold text-slate-900">
                Portfolio
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Showcase your professional presence.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/settings")}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Edit portfolio"
            >
              <Edit3 size={17} />
            </button>
          </div>

          <div className="space-y-3 p-5 sm:p-6">
            <PortfolioLink
              icon={<Code2 size={18} />}
              label="GitHub"
              value={studentProfile.portfolio.github}
            />

            <PortfolioLink
              icon={<BriefcaseBusiness size={18} />}
              label="LinkedIn"
              value={studentProfile.portfolio.linkedin}
            />

            <PortfolioLink
              icon={<ExternalLink size={18} />}
              label="Portfolio website"
              value={studentProfile.portfolio.website}
            />

            {!studentProfile.portfolio.github &&
              !studentProfile.portfolio.linkedin &&
              !studentProfile.portfolio.website && (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="text-sm font-semibold text-slate-700">
                    No portfolio links added
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Add your GitHub, LinkedIn, or portfolio website
                    to strengthen your profile.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate("/settings")}
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-600"
                  >
                    <Edit3 size={14} />
                    Add portfolio links
                  </button>
                </div>
              )}
          </div>
        </section>
      </div>

      {/* Certifications */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-bold text-slate-900">
              Certifications
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add certifications that strengthen your profile.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/settings")}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Plus size={16} />
            Add certification
          </button>
        </div>

        <div className="flex items-center gap-3 p-5 sm:p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Award size={19} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              No certifications added
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Add your relevant certifications to improve your profile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  muted = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400">
          {label}
        </p>

        <p
          className={`mt-1 text-sm font-medium ${
            muted ? "text-slate-400" : "text-slate-700"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function ReadinessItem({
  label,
  complete = true,
}: {
  label: string;
  complete?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={17}
        className={
          complete ? "text-emerald-500" : "text-slate-300"
        }
      />

      <span
        className={`text-sm ${
          complete ? "text-slate-700" : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function PortfolioLink({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const hasLink = Boolean(value);

  if (!hasLink) {
    return (
      <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-400">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-800">
            {label}
          </p>

          <p className="mt-0.5 truncate text-xs text-slate-400">
            Add your {label} profile
          </p>
        </div>

        <ExternalLink
          size={15}
          className="shrink-0 text-slate-200"
        />
      </div>
    );
  }

  const href =
    value.startsWith("http://") || value.startsWith("https://")
      ? value
      : `https://${value}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50/40"
    >
      <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-800">
          {label}
        </p>

        <p className="mt-0.5 truncate text-xs text-indigo-600">
          {value}
        </p>
      </div>

      <ExternalLink
        size={15}
        className="shrink-0 text-slate-400"
      />
    </a>
  );
}

export default Profile;