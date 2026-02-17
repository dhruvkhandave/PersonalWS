import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dhruv Khandave",
  description: "Selected projects and current work.",
};

const projects = [
  {
    name: "MedRoute",
    summary: "AI-powered triage system that converts unstructured patient symptoms and medical documents into structured data and deterministic severity scores for clinical review.",
    problem:
      "Patients need early, reliable medical guidance from unstructured symptom descriptions, grounded in medical data rather than generic LLM responses.",
    impact:
      "Live with active users, delivering structured, source grounded early medical guidance through RAG and deterministic severity scoring.",
    currentFocus:
      "Working with physicians to refine MedRoute as a powerful pre-visit tool that answers early patient questions and routes concerns to doctors before appointments.",
    githubUrl: "https://github.com/dhruvkhandave/MedrouteSymptomCheckRAG",
    liveUrl: "https://symptom-check-groq-new.vercel.app",
    status: "active",
    year: "2025-2026",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-6 pb-20 pt-28">
      <section className="animate-fade-in space-y-3">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          ~/dhruv-khandave/projects
          <span className="animate-blink ml-0.5 inline-block text-accent">|</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Things I&apos;ve built, why they matter, and what I&apos;m focused on
          right now.
        </p>
      </section>

      <section className="mt-8 space-y-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="animate-fade-in stagger-1 border border-zinc-200/80 bg-white/60 p-5 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/50"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {project.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] lowercase text-zinc-400 dark:text-zinc-500">
                  <span className="rounded border border-zinc-300/80 px-1.5 py-0.5 dark:border-zinc-700">
                    {project.status}
                  </span>
                  <span>{project.year}</span>
                </div>
              </div>

              <div className="h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />

              <div className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                <p>
                  <span className="font-mono text-xs lowercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    problem
                  </span>{" "}
                  <span className="text-zinc-300 dark:text-zinc-700">· </span>
                  {project.problem}
                </p>
                <p>
                  <span className="font-mono text-xs lowercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    impact
                  </span>{" "}
                  <span className="text-zinc-300 dark:text-zinc-700">· </span>
                  {project.impact}
                </p>
                <p>
                  <span className="font-mono text-xs lowercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    current focus
                  </span>{" "}
                  <span className="text-zinc-300 dark:text-zinc-700">· </span>
                  {project.currentFocus}
                </p>
              </div>

              <div className="flex gap-4 pt-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
                >
                  <span className="text-accent/50 transition-colors group-hover:text-accent">
                    &gt;
                  </span>
                  github
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
                >
                  <span className="text-accent/50 transition-colors group-hover:text-accent">
                    &gt;
                  </span>
                  live
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      
  
    </main>
  );
}
