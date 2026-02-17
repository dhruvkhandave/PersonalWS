"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  name: string;
  src: string;
};

type InspirationSlideshowProps = {
  slides: Slide[];
  intervalMs?: number;
};

export default function InspirationSlideshow({
  slides,
  intervalMs = 3200,
}: InspirationSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-zinc-200/80 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const hasFailed = failedSlides[slide.src];

          return (
            <div
              key={slide.name}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              {hasFailed ? (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(91,91,214,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(120,120,120,0.22),transparent_45%)] px-6">
                  <p className="text-center font-mono text-sm text-zinc-700 dark:text-zinc-200">
                    {slide.name}
                  </p>
                </div>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                  onError={() =>
                    setFailedSlides((current) => ({ ...current, [slide.src]: true }))
                  }
                />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-8">
                <p className="font-mono text-xs text-zinc-100">{slide.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-5 bg-accent"
                : "w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600"
            }`}
            aria-label={`Show ${slide.name}`}
          />
        ))}
      </div>
    </div>
  );
}
