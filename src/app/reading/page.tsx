import type { Metadata } from "next";
import { readingBooks } from "@/content/reading-books";

export const metadata: Metadata = {
  title: "Reading | Dhruv Khandave",
  description:
    "Books shaping me, what I have read, and what I am currently reading.",
};

export default function ReadingPage() {
  const orderedBooks = [...readingBooks].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "currently reading" ? -1 : 1;
  });

  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-6 pb-20 pt-28">
      <section className="animate-fade-in space-y-3">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          ~/dhruv-khandave/reading
          <span className="animate-blink ml-0.5 inline-block text-accent">|</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Reading
        </h1>
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Books shaping me, ones I&apos;ve read, and what I&apos;m currently
          reading. I made it a point to read 10 pages a day this year, and this
          is the outcome so far.
        </p>
      </section>

      <section className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-zinc-800/80 dark:border-zinc-800/80">
        {orderedBooks.map((book, index) => (
          <article key={book.title} className={`py-5 ${index === 0 ? "pt-4" : ""}`}>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {book.title}
                </h2>
                <span className="rounded-sm border border-zinc-300/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                  {book.status}
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {book.author}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {book.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-zinc-300/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-1">
                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {book.status === "currently reading"
                    ? "takeaways so far"
                    : "core takeaways"}
                </p>
                <ul className="mt-1 space-y-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {book.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-2">
                      <span className="text-zinc-300 dark:text-zinc-700">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
