import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | Hala Equity Heroes",
  description:
    "A community-led charity for real equity work. We center communities closest to the challenge and furthest from resources.",
};

export default function MissionPage() {
  const pillars = [
    {
      title: "Equity first",
      body: "We center communities who are closest to the challenge and furthest from resources.",
    },
    {
      title: "Radical transparency",
      body: "From intake to impact, every decision and dollar is traceable.",
    },
    {
      title: "Everyday heroes",
      body: "You do not need a foundation to change the world. You just need to start.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Mission
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          A community-led charity for real equity work. Traditional philanthropy
          often leaves the most impacted people out of the room. Hala Equity
          Heroes flips the script by moving decisions, resources, and
          storytelling power into the hands of community organizers, educators,
          caregivers, and youth leaders.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm shadow-sky-200/60"
            >
              <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
