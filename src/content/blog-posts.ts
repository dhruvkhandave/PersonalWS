export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags?: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-love-ai",
    title: "Why I Love AI",
    summary:
      "Why AI is both a cognitive risk and the greatest leverage tool we have ever built.",
    publishedAt: "2026-02-23",
    tags: ["ai", "thinking", "agi"],
    content: [
      "Why I love AI:",
      "Everyone says we’re in an AI revolution.\nWhat most people don’t realize is that we’re also in a cognitive revolution.\nThe real risk isn’t that AI replaces jobs.\nIt’s that it replaces thinking.",
      "In my eyes, the biggest downside for people living through this AI transition is the struggle to use it effectively without offloading our critical thinking skills.\nI’ve been guilty of this myself. I've offloaded tasks without providing proper context, only for the AI to hallucinate and spit out irrelevant answers. Because I wasn't critically analyzing the responses, it led to some real issues.",
      "So you may be asking how do I use AI while still preserving my critical thinking skills?",
      "1. Know your context -\nTo get a precise answer, you need to define two things: your specific question and your desired outcome. If you don't set boundaries, AI will fill the gaps with its own assumptions, leading to generic or hallucinated results.",
      "2. Use it too Stress Test not replace thinking\nThis goes hand in hand with the first point but if you have no idea what you want to ask then it will point you in a direction that you are not looking for.\nDon’t ask AI to solve something you haven’t thought through. Have an initial idea, then use AI to challenge it, ask for edge cases, weaknesses, and hidden assumptions.",
      "This applies most in Computer Science, but it’s true everywhere: the risk isn’t AI being wrong, it’s you stopping thinking.\nUse AI for automation, not direction. Great for summaries, formatting, and repetitive tasks. Bad as a substitute for your judgment.\nRemember launchpad, not brain.",
      "Now for the juicy part.",
      "AI is the greatest leverage tool humans have ever developed.",
      "Why am I so optimistic about AI in the world?",
      "First: automation.\nThere are thousands of annoying and repetitive tasks that quietly drain our time. Writing emails. Formatting documents. Researching basic questions. Comparing products. Summarizing information. Now imagine having a sidekick that handles all the boring tasks and you can focus on doing things that actually matter way more efficiently.\nThat alone changes productivity.",
      "But it goes deeper than automation.\nThink about how we use it today. Recently have been asking chat philosophical questions. I ask about tech products. I even uploaded photos before a dermatologist visit about my skin. I went to the dermatologist and they recommended niacinamide and retinol.\nWhat did my dermatologist recommend to me? You guessed it, niacinamide and retinol.",
      "I truly don't think people grasp that what would 50 years ago have taken 10s of books to answer a question we can now get it answered in 5 seconds.",
      "AI truly is the great equalizer if you want to build a product or business, you no longer have to spend hours and hours researching the smallest coding details you can ask AI to teach you. AI can help you prepare better questions before you see a doctor. You want detailed tracking of your expenses and where to invest. AI can help you understand your finances before you ever talk to an advisor.",
      "Usually when I say I love AI, someone responds with, “I tried it. It sucked.” Or they’ll say it in this slightly condescending tone, like they’re almost afraid of where it’s going.\nFirst, most people don’t actually know how to ask AI subject matter questions properly. If you give it vague input  you’ll get vague output like I said before. That’s not the model failing, that’s user error.\nSecond, large language models have only really gone mainstream in the last 2–3 years. We’re still early. If you look at the work happening at companies like Anthropic and other frontier labs, the progress is ridiculous. We’ve barely started. Which brings me to the next point: AGI.",
      "First, what is AGI?\nAGI = Artificial General Intelligence.\nWhile AI now excels at specific pattern prediction like answering basic questions and research, AGI represents a shift toward human flexibility, capable of reasoning across diverse fields and learning new skills without specialized retraining.",
      "Let me give you and example\nRight now, AI can help you write an essay (It's helping me write this blog rn I didn't know much about AGI either).\nIt can also help you solve a math problem.\nIt can even help you plan a workout.\nBut it doesn’t understand any of those things. It’s just predicting patterns based on data.\nAGI would be more like a human assistant.",
      "Here an example:\nIf you told an AGI to build a profitable software company, it wouldn't just give you a list of ideas; it would act like a pro founder by identifying a gap, writing some code, and pivoting based on real world feedback without needing a single prompt to switch gears.\nIt basically handles the entire lifecycle, from dev to marketing, by reasoning through problems and learning from results rather than just following something you said.\nThat general intelligence is the difference.",
      "So why is that a good thing?\nBecause it dramatically lowers the barrier to execution.\nRight now, building something meaningful usually takes capital, a team, and years of experience. That’s just reality. If you don’t have access to the right people or education, you’re already behind.\nAGI starts to shrink that gap.\nA solo founder could build something that used to require a small company.\nA student in a village without access to expensive education could learn at the pace of anyone else, without needing a private tutor.\nA doctor in a rural area could think through complex cases with support that rivals top institutions.\nThat doesn’t replace human drive.\nIt just removes friction.\nThe ambition still has to come from you.\nThe discipline still has to come from you.\nThe thinking still has to come from you.\nBut the ceiling moves higher.\nAnd the starting line moves closer.",
      "AI is the great equalizer. Now go use it to equalize yourself.",
      "Next week's blog will be about this video. Go watch it for a head start. https://www.youtube.com/watch?v=XbndDoht4D4",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
