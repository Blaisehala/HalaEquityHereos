import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hala Equity Heroes",
  description:
    "Learn about Hala Equity Heroes — who we are, how we work, and our commitment to community-led equity.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About Us
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          Hala Equity Heroes is a community-based charity that directs time,
          skills, and resources to grassroots leaders advancing gender, racial,
          economic, and educational equity. No gatekeeping. No saviorism. Just
          people showing up for each other.
        </p>
        <section className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              How we work
            </h2>
            <p className="mt-2 text-slate-700">
              We keep the model simple, transparent, and accountable. Community
              partners share what equity work looks like where they live; we
              match heroes to initiatives; resources flow directly to partners
              with regular updates and impact notes shared back to the
              community.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Our community
            </h2>
            <p className="mt-2 text-slate-700">
              We operate as a community-based charity with a small core team and
              a wide network of volunteer circles. Local partners lead on
              priorities and design; Heroes provide resources, skills, and
              amplification.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
