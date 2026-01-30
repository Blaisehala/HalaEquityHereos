'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2340] via-[#E6F3FF] to-[#15162b] text-slate-900">
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-14 sm:pt-28 sm:pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-emerald-400 rounded-full mb-6"
          />
          
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-700">
            Hala Equity Heroes is a community-based charity that directs time,
            skills, and resources to grassroots leaders advancing gender, racial,
            economic, and educational equity. No gatekeeping. No saviorism. Just
            people showing up for each other.
          </p>
        </motion.div>

        {/* Content Sections */}
        <section className="mt-16 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  How we work
                </h2>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  We keep the model simple, transparent, and accountable. Community
                  partners share what equity work looks like where they live; we
                  match heroes to initiatives; resources flow directly to partners
                  with regular updates and impact notes shared back to the
                  community.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤝</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Our community
                </h2>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  We operate as a community-based charity with a small core team and
                  a wide network of volunteer circles. Local partners lead on
                  priorities and design; Heroes provide resources, skills, and
                  amplification.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Optional: Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/volunteer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full hover:from-emerald-500 hover:to-emerald-600 shadow-lg transition-all duration-300"
            >
              Join as a Hero
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-base font-semibold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-emerald-400 hover:text-emerald-600 shadow-lg transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}