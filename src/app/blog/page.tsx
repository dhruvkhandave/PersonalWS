import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Dhruv Khandave",
  description: "Weekly writing on tech, interests, and things I am learning.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-6 pb-20 pt-28">
      <section className="animate-fade-in space-y-3">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          ~/dhruv-khandave/blog
          <span className="animate-blink ml-0.5 inline-block text-accent">|</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Just writing weekly about certain topics like tech, fitness, my own interests,
          and things I&apos;m learning. If you want to suggest what I should
          write about next week, email me at{" "}
          <a
            href="mailto:dhruv.khandave@gmail.com"
            className="font-mono text-xs text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-accent dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-accent"
          >
            email
          </a>
          .
        </p>
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/dhruvkhandave"
          method="post"
          referrerPolicy="unsafe-url"
          className="pt-2"
        >
          <label
            htmlFor="bd-email"
            className="font-mono text-xs text-zinc-500 dark:text-zinc-400"
          >
            weekly blog updates
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              id="bd-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-sm border border-zinc-300/80 bg-transparent px-3 py-2 text-sm text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-accent dark:border-zinc-700 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            />
            <input type="hidden" name="embed" value="1" />
            <button
              type="submit"
              className="rounded-sm border border-zinc-300/80 px-3 py-2 font-mono text-xs text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
            >
              subscribe
            </button>
          </div>
          <p className="mt-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
            <a
              href="https://buttondown.com/refer/dhruvkhandave"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-2 hover:text-accent dark:decoration-zinc-700 dark:hover:text-accent"
            >
              Powered by Buttondown.
            </a>
          </p>
        </form>
      </section>

      <section className="mt-8 animate-fade-in stagger-1">
        <article className="relative overflow-hidden rounded-sm border border-zinc-200/80 bg-white/40 p-4 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/15 blur-2xl" />
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
            next week sneak peek
          </p>
          <h2 className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Why wanting it too badly ruins everything
          </h2>
          <div className="mt-3 space-y-2">
            <p className="select-none text-sm leading-6 text-zinc-500 blur-[2px] dark:text-zinc-400">
              Chasing outcomes too aggressively can make your decisions worse,
              not better.
            </p>
            <p className="select-none text-sm leading-6 text-zinc-500 blur-[2px] dark:text-zinc-400">
              This one is about control, patience, and building from clarity
              instead of urgency.
            </p>
          </div>
          <a
            href="https://www.youtube.com/watch?v=XbndDoht4D4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
          >
            <span className="text-accent/50">&gt;</span>
            watch the source video
          </a>
        </article>
      </section>

      <section className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-zinc-800/80 dark:border-zinc-800/80">
        {blogPosts.map((post, index) => (
          <article key={post.slug} className={`py-5 ${index === 0 ? "pt-4" : ""}`}>
            <Link href={`/blog/${post.slug}`} className="group block space-y-2">
              <h2 className="text-lg font-medium text-zinc-900 transition-colors group-hover:text-accent dark:text-zinc-100 dark:group-hover:text-accent">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {post.summary}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                  {post.publishedAt}
                </p>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-zinc-300/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="pt-1 font-mono text-xs text-zinc-400 transition-colors group-hover:text-accent dark:text-zinc-500 dark:group-hover:text-accent">
                read post <span aria-hidden>→</span>
              </p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
