import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved | Hala Equity Heroes",
  description:
    "Donate, volunteer, or start a local circle. There is a role for every kind of Hero.",
};

const waysToJoin = [
  {
    title: "Donate monthly",
    body: "Give what you can, when you can. 100% of community gifts go to equity initiatives.",
    href: "/donate",
    cta: "Start a monthly gift",
  },
  {
    title: "Volunteer your skills",
    body: "Join a project team in product, data, operations, or storytelling.",
    href: "/volunteer",
    cta: "Offer your skills",
  },
  {
    title: "Start a local circle",
    body: "Bring Hala Equity Heroes to your campus, company, or neighborhood.",
    href: "/contact",
    cta: "Launch a circle",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Get Involved
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          There is a role for every kind of Hero. Whether you can give 10
          minutes a month or launch a full chapter, your contribution matters.
          Choose the on‑ramp that matches your current capacity.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {waysToJoin.map((way) => (
            <div
              key={way.title}
              className="flex flex-col rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm shadow-sky-200/60"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {way.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                {way.body}
              </p>
              <Link
                href={way.href}
                className="mt-4 inline-flex justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400"
              >
                {way.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
