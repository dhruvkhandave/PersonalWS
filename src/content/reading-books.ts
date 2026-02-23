export type ReadingStatus = "finished" | "currently reading";

export type ReadingBook = {
  title: string;
  author: string;
  status: ReadingStatus;
  tags?: string[];
  takeaways: string[];
};

export const readingBooks: ReadingBook[] = [
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    status: "finished",
    tags: ["philosophy", "wealth", "decision-making"],
    takeaways: [
      "Happiness is a skill you can train, not something to chase.",
      "Specific knowledge and accountability create outsized leverage.",
      "Play long-term games with long-term people to compound trust and outcomes.",
    ],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "finished",
    tags: ["classic", "ambition", "society"],
    takeaways: [
      "Reinventing yourself has limits when it is disconnected from truth.",
      "Status and wealth can hide loneliness rather than solve it.",
      "Nostalgia can trap you when you try to relive the past.",
    ],
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "currently reading",
    tags: ["habits", "systems", "self-improvement"],
    takeaways: ["Build systems, not goals.",
                "The ultimate goal is to build habits to solve life problems with as little energy as possible"
    ],
  },
];
