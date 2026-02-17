export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6">
      <div className="space-y-8">
        {/* Terminal path */}
        <div className="animate-fade-in">
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
            ~/dhruv-khandave
            <span className="animate-blink ml-0.5 inline-block text-accent">
              |
            </span>
          </p>
        </div>

        {/* Name + identity */}
        <div className="animate-fade-in stagger-1 space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Dhruv Khandave
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            building things at the intersection of{" "}
            <span className="text-zinc-800 dark:text-zinc-200">software</span>{" "}
            &amp;{" "}
            <span className="text-zinc-800 dark:text-zinc-200">curiosity</span>
          </p>
        </div>

        {/* Divider */}
        <div className="animate-fade-in stagger-2 flex items-center gap-3">
          <div className="h-px w-12 bg-accent/40" />
          <div className="h-1 w-1 rounded-full bg-accent/40" />
        </div>

        {/* Bio */}
        <p className="animate-fade-in stagger-3 max-w-lg text-[15px] leading-7 text-zinc-500 dark:text-zinc-400">
          I like building products, thinking about systems, and writing about
          what I learn along the way. Currently exploring AI systems, startup
          engineering, and the tradeoffs that shape good software.
        </p>

        {/* Links */}
        <div className="animate-fade-in stagger-4 flex gap-5 pt-1">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
          >
            <span className="text-accent/50 transition-colors group-hover:text-accent">
              &gt;
            </span>
            github
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
          >
            <span className="text-accent/50 transition-colors group-hover:text-accent">
              &gt;
            </span>
            twitter
          </a>
          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
          >
            <span className="text-accent/50 transition-colors group-hover:text-accent">
              &gt;
            </span>
            email
          </a>
        </div>
      </div>
    </main>
  );
}
