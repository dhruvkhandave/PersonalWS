import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Dhruv Khandave",
    };
  }

  return {
    title: `${post.title} | Dhruv Khandave`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const numberedLines = [
    "A solo founder could build something that used to require a small company.",
    "A student in a village without access to expensive education could learn at the pace of anyone else, without needing a private tutor.",
    "A doctor in a rural area could think through complex cases with support that rivals top institutions.",
  ];
  const bulletLines = [
    "The ambition still has to come from you.",
    "The discipline still has to come from you.",
    "The thinking still has to come from you.",
  ];
  const popPhrases = [
    "Now for the juicy part.",
    "First, what is AGI?",
    "AGI = Artificial General Intelligence.",
    "So why is that a good thing?",
  ];

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 pb-20 pt-28">
      <section className="animate-fade-in space-y-3">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          ~/dhruv-khandave/blog/{post.slug}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2">
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
      </section>

      <article className="mx-auto mt-10 max-w-[72ch] space-y-6 text-base leading-8 text-zinc-700 dark:text-zinc-200">
        {post.content.map((paragraph) => {
          const trimmed = paragraph.trim();
          const lines = paragraph.split("\n");
          const hasMultipleLines = lines.length > 1;
          const isHighlightLine =
            trimmed ===
            "AI is the great equalizer. Now go use it to equalize yourself.";
          const isSectionLine =
            trimmed === "Why I love AI:" ||
            trimmed === "Now for the juicy part." ||
            trimmed === "AI is the greatest leverage tool humans have ever developed." ||
            trimmed === "Why am I so optimistic about AI in the world?" ||
            trimmed === "First, what is AGI?" ||
            trimmed === "AGI = Artificial General Intelligence." ||
            trimmed === "Here an example:";
          const isPopPhrase = popPhrases.includes(trimmed);
          const isNumberedLine =
            trimmed.startsWith("1. ") || trimmed.startsWith("2. ");
          const paragraphClass = isHighlightLine
            ? "whitespace-pre-line pt-2 text-lg font-semibold leading-9 text-zinc-900 dark:text-zinc-100"
            : isPopPhrase
              ? "whitespace-pre-line pt-4 text-lg font-semibold leading-8 text-zinc-900 dark:text-zinc-100"
            : isSectionLine
              ? "whitespace-pre-line pt-3 text-base font-medium leading-8 text-zinc-800 dark:text-zinc-200"
              : isNumberedLine
                ? "whitespace-pre-line pt-2 text-base font-medium leading-8 text-zinc-800 dark:text-zinc-200"
                : "whitespace-pre-line";

          return (
            <div key={paragraph} className={paragraphClass}>
              {hasMultipleLines ? (
                <div className="space-y-2.5">
                  {lines.map((line, index) => {
                    const trimmedLine = line.trim();
                    const numberedIndex = numberedLines.indexOf(trimmedLine);
                    const isBulletLine = bulletLines.includes(trimmedLine);
                    const isPopLine = popPhrases.includes(trimmedLine);

                    if (trimmedLine === "") {
                      return <div key={`${paragraph}-${index}`} className="h-1" />;
                    }

                    if (numberedIndex !== -1) {
                      return (
                        <div
                          key={`${paragraph}-${index}`}
                          className="flex items-start gap-2 border-l border-zinc-200 pl-3 dark:border-zinc-800"
                        >
                          <span className="mt-0.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                            {numberedIndex + 1}.
                          </span>
                          <p className="text-pretty">{line}</p>
                        </div>
                      );
                    }

                    if (isBulletLine) {
                      return (
                        <div
                          key={`${paragraph}-${index}`}
                          className="flex items-start gap-2 border-l border-zinc-200 pl-3 dark:border-zinc-800"
                        >
                          <span className="mt-0.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                            •
                          </span>
                          <p className="text-pretty">{line}</p>
                        </div>
                      );
                    }

                    if (isPopLine) {
                      return (
                        <p
                          key={`${paragraph}-${index}`}
                          className="text-pretty pt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100"
                        >
                          {line}
                        </p>
                      );
                    }

                    return (
                      <p key={`${paragraph}-${index}`} className="text-pretty">
                        {line}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p className="text-pretty">{paragraph}</p>
              )}
            </div>
          );
        })}
      </article>

      <section className="mt-10 border-t border-zinc-200/80 pt-5 dark:border-zinc-800/80">
        <Link
          href="/blog"
          className="font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
        >
          <span aria-hidden>←</span> back to blog
        </Link>
      </section>
    </main>
  );
}
