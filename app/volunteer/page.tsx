import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer | Hala Equity Heroes",
  description:
    "Offer your skills — join a project team in product, data, operations, or storytelling.",
};

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Volunteer
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          Join a project team in product, data, operations, or storytelling.
          Your professional talents have the power to transform lives. We
          welcome people at every stage of their journey — the only requirements
          are a commitment to equity, a willingness to learn, and respect for
          community leadership.
        </p>
        <div className="mt-12 rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Offer your skills
          </h2>
          <p className="mt-2 text-slate-700">
            Tell us your skills and availability. We&apos;ll match you with
            initiatives that align with your values and capacity.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400"
          >
            Get in touch to volunteer
          </Link>
        </div>
      </main>
    </div>
  );
}
