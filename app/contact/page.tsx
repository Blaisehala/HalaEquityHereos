import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hala Equity Heroes",
  description:
    "Get in touch with Hala Equity Heroes — start a circle, ask questions, or connect with our team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#1E1B4B] to-[#020617] text-slate-50">
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200">
          Have a question, want to start a local circle, or partner with us?
          Reach out below.
        </p>
        <form className="mt-12 max-w-xl space-y-4 rounded-2xl border border-indigo-500/40 bg-slate-950/70 p-6 backdrop-blur">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-indigo-500/50 bg-slate-900 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-indigo-500/50 bg-slate-900 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
              placeholder="you@example.org"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-indigo-500/50 bg-slate-900 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-300"
          >
            Send message
          </button>
        </form>
      </main>
    </div>
  );
}
