import {
  CheckCircle2,
  Download,
  Eye,
  FileText,
  Pencil,
  Plus,
  Sparkles,
  Upload,
} from "lucide-react";

function Resume() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1.5 text-xs font-medium text-indigo-300">
              <Sparkles size={14} />
              Resume Intelligence
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Resume Center
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Build, improve, and manage an ATS-friendly resume for your
              placement journey.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50"
          >
            <Plus size={17} />
            Create new version
          </button>
        </div>
      </section>

      {/* Resume overview */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <FileText size={21} />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Current resume
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Awadh_Lal_Resume.pdf
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            ATS score
          </p>

          <div className="mt-2 flex items-end gap-2">
            <p className="text-3xl font-bold text-slate-900">82</p>
            <p className="mb-1 text-sm font-semibold text-emerald-600">
              Good
            </p>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600"
              style={{ width: "82%" }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Last updated
          </p>

          <p className="mt-2 text-xl font-bold text-slate-900">
            Aug 28, 2026
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Keep your resume updated before applying.
          </p>
        </div>
      </section>

      {/* Main */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {/* Resume card */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
            <div>
              <h2 className="font-bold text-slate-900">
                Your resume
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your latest resume version.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Eye size={16} />
                Preview
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
              >
                <Download size={16} />
                Download
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <FileText size={27} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Awadh_Lal_Resume.pdf
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      PDF • Updated Aug 28, 2026
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Pencil size={15} />
                  Edit
                </button>
              </div>
            </div>

            {/* Resume sections */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ResumeSection
                title="Contact information"
                complete
              />

              <ResumeSection
                title="Professional summary"
                complete
              />

              <ResumeSection
                title="Skills"
                complete
              />

              <ResumeSection
                title="Projects"
                complete
              />

              <ResumeSection
                title="Education"
                complete
              />

              <ResumeSection
                title="Experience"
                complete={false}
              />
            </div>
          </div>
        </section>

        {/* AI suggestions */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600">
                <Sparkles size={20} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  AI suggestions
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Improve your resume quality.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-5 sm:p-6">
            <Suggestion
              title="Add measurable impact"
              description="Add numbers to your project achievements where possible."
            />

            <Suggestion
              title="Strengthen experience"
              description="Add internship or practical experience to improve your profile."
            />

            <Suggestion
              title="Optimize keywords"
              description="Add relevant technical keywords for frontend roles."
            />

            <div className="rounded-xl bg-indigo-50 p-4">
              <p className="text-sm font-semibold text-indigo-900">
                Ready to improve your score?
              </p>

              <p className="mt-1 text-xs leading-5 text-indigo-700">
                Run an AI resume review to get personalized suggestions.
              </p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
              >
                <Sparkles size={14} />
                Analyze resume
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Upload */}
      <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          <Upload size={22} />
        </div>

        <h2 className="mt-4 font-bold text-slate-900">
          Upload another resume
        </h2>

        <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
          Upload a PDF resume to create a new version and analyze it with
          PlacementOS AI.
        </p>

        <button
          type="button"
          className="mt-5 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Choose PDF
        </button>
      </section>
    </div>
  );
}

function ResumeSection({
  title,
  complete,
}: {
  title: string;
  complete: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
      <CheckCircle2
        size={18}
        className={
          complete ? "text-emerald-500" : "text-slate-300"
        }
      />

      <span
        className={
          complete
            ? "text-sm font-medium text-slate-700"
            : "text-sm font-medium text-slate-400"
        }
      >
        {title}
      </span>
    </div>
  );
}

function Suggestion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-sm font-semibold text-slate-800">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default Resume;