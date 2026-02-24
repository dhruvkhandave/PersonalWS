"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dhruvGradImage from "./about/dhruvgrad.jpg";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const totalScrollable = heroRef.current.offsetHeight - window.innerHeight;
      const rawScrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const nextProgress = totalScrollable > 0 ? rawScrolled / totalScrollable : 0;
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const introOpacity = clamp(1 - progress * 1.4, 0, 1);
  const introShiftY = progress * -46;

  const imageReveal = clamp((progress - 0.08) / 0.44, 0, 1);
  const imageOpacity = imageReveal;
  const imageShiftY = (1 - imageReveal) * 60;
  const imageScale = 1.12 - imageReveal * 0.12;
  const grayscale = clamp((progress - 0.5) / 0.42, 0, 1);

  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-24">
      <section ref={heroRef} className="relative h-[205vh]">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          <div
            className="relative z-10 mx-auto flex h-full max-w-2xl flex-col justify-center px-6"
            style={{
              opacity: introOpacity,
              transform: `translateY(${introShiftY}px)`,
            }}
          >
            <div className="space-y-8">
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                ~/dhruv-khandave
                <span className="animate-blink ml-0.5 inline-block text-accent">
                  |
                </span>
              </p>

              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Dhruv Khandave
                </h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                  building things at the intersection of{" "}
                  <span className="text-zinc-800 dark:text-zinc-200">
                    software
                  </span>{" "}
                  &amp;{" "}
                  <span className="text-zinc-800 dark:text-zinc-200">
                    curiosity
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-accent/40" />
                <div className="h-1 w-1 rounded-full bg-accent/40" />
              </div>

              <p className="max-w-lg text-[15px] leading-7 text-zinc-500 dark:text-zinc-400">
                I love building my own products and thinking about creating new
                things. Currently exploring software engineering, AI, and my own
                interests across other domains.
              </p>
            </div>
          </div>

          <div
            className="absolute inset-0 z-20 p-5 sm:p-6"
            style={{
              opacity: imageOpacity,
              transform: `translateY(${imageShiftY}px)`,
            }}
          >
            <div className="relative h-full overflow-hidden rounded-sm shadow-[0_24px_65px_-32px_rgba(0,0,0,0.55)]">
              <Image
                src={dhruvGradImage}
                alt="Dhruv Khandave graduation portrait"
                fill
                priority
                sizes="(max-width: 768px) 92vw, 720px"
                className="object-cover transition-[filter,transform] duration-200"
                style={{
                  filter: `grayscale(${Math.round(grayscale * 100)}%)`,
                  transform: `scale(${imageScale})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 flex max-w-2xl gap-5 pt-7">
          <a
            href="https://github.com/dhruvkhandave"
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
            href="mailto:dhruv.khandave@gmail.com"
            className="group flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
          >
            <span className="text-accent/50 transition-colors group-hover:text-accent">
              &gt;
            </span>
            email
          </a>
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
      </section>
    </main>
  );
}
