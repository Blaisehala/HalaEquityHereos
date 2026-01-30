import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories | Hala Equity Heroes",
  description:
    "Stories from the field — impact, community initiatives, and voices from our Heroes and partners.",
};

const initiatives = [
  {
    title: "Community Equity Funds",
    body: "Micro‑grants to grassroots groups led by women, youth, and marginalized communities.",
  },
  {
    title: "Skills for Justice",
    body: "Designers, engineers, and operators volunteering their craft to power local campaigns.",
  },
  {
    title: "Stories that Shift Power",
    body: "Storytelling labs that amplify lived experience and challenge the status quo.",
  },
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#C7D2FE] to-[#312E81] text-slate-900">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stories
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-indigo-100">
          These are a few of the live areas where Heroes are currently showing
          up — with funding, mentorship, and hands-on builds.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {initiatives.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-indigo-200/40 bg-indigo-900/50 p-5 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold text-slate-50">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-indigo-100">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-indigo-200/80">
          New initiatives and stories are added by community partners on a
          rolling basis.
        </p>
      </main>
    </div>
  );
}
