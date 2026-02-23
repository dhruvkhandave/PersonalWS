import type { Metadata } from "next";
import InspirationSlideshow from "@/components/inspiration-slideshow";

export const metadata: Metadata = {
  title: "About | Dhruv Khandave",
  description: "Background, interests, direction, and ways to get in touch.",
};

export default function AboutPage() {
  const inspirationSlides = [
    { name: "Naval Ravikant", src: "/inspirations/naval.jpg" },
    { name: "Shi Heng Yi", src: "/inspirations/shiy.jpg" },
    { name: "Cristiano Ronaldo", src: "/inspirations/cris.jpg" },
    { name: "Bryan Johnson", src: "/inspirations/bryan.jpg" },
    { name: "Kyrie Irving", src: "/inspirations/kyi.jpg" },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 pb-20 pt-28">
      <section className="animate-fade-in space-y-3">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          ~/dhruv-khandave/about
          <span className="animate-blink ml-0.5 inline-block text-accent">|</span>
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          About
        </h1>

        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          A bit more about me: who I am, what my interests are, and some of my inspirations.
        </p>
      </section>

      <section className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-zinc-800/80 dark:border-zinc-800/80">
        <article className="animate-fade-in stagger-1 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            who i am/what i enjoy
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            I love building things and am truly obsessed with AI, it’s become an absolute staple in my daily life. Fun fact I am in the top 1 percent of chatgpt users, not sure about Claude but im sure its not very far behind. 
            Beyond tech, I’m really into fitness and wellness. I&apos;m fascinated by the health-tech space and wearables, and I make sure to carve out time for lifting and meditation.
          </p>
        </article>

    
        <article className="animate-fade-in stagger-3 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            what i&apos;m building toward
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            I’m building toward becoming the best engineer I can be: someone who is approachable, can translate difficult concepts into clear ideas, and is a great communicator. My goal is to build systems that have a real, tangible impact on users&apos; lives.
          </p>
        </article>

        <article className="animate-fade-in stagger-4 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            inspirations
          </p>
          <div className="mt-3">
            <InspirationSlideshow slides={inspirationSlides} />
          </div>
        </article>
      </section>

      <section className="mt-10 animate-fade-in stagger-4 space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Get In Touch
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Open to collaborations, conversations and interesting problems.
        </p>

        <div className="flex gap-5 pt-1">
          <a
            href="https://www.linkedin.com/in/dhruvkhandave"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
          >
            <span className="text-accent/50 transition-colors group-hover:text-accent">
              &gt;
            </span>
            linkedin
          </a>

          <a
            href="mailto:dhruv.khandave@gmail.com"
            className="group flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
          >
            <span className="text-accent/50 transition-colors group-hover:text-accent">
              &gt;
            </span>
            email
          </a>
        </div>
      </section>
    </main>
  );
}
