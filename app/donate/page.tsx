import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Hala Equity Heroes",
  description:
    "Give what you can — 100% of community gifts go to equity initiatives.",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#1E1B4B] to-[#020617] text-slate-50">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Donate
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200">
          Give what you can, when you can. 100% of community gifts go to equity
          initiatives. Your donations are the driving force behind our mission.
        </p>
        <div className="mt-12 max-w-xl space-y-6 rounded-2xl border border-indigo-500/40 bg-slate-950/70 p-6 backdrop-blur">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-slate-200">
              Amount
            </label>
            <select
              id="amount"
              className="mt-1 w-full rounded-lg border border-indigo-500/50 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-emerald-400"
            >
              <option value="10">$10</option>
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="90">$90</option>
              <option value="100">$100</option>
              <option value="custom">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="donate-email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="donate-email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-indigo-500/50 bg-slate-900 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
              placeholder="you@example.org"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-400"
          >
            Donate now
          </button>
          <p className="text-xs text-slate-400">
            You can change or pause your giving at any time. We publish
            transparent breakdowns for each initiative.
          </p>
        </div>
      </main>
    </div>
  );
}
