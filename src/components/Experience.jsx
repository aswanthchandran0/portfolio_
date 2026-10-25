import { motion } from "framer-motion";
import { site } from "../data/site";

const RESPONSIBILITIES = [
  "Created reusable invitation templates and custom designs based on client preferences.",
  "Discussed requirements with clients and recommended suitable templates or custom solutions.",
  "Built responsive interfaces using React, Vite, Tailwind CSS, and Framer Motion.",
  "Managed deployment on Vercel and ongoing website updates.",
  "Incorporated client feedback to refine designs and functionality.",
];

const TECH = ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub", "Vercel"];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface scroll-mt-4">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">
            work history
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            Experience
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-line bg-paper p-6 sm:p-8 md:p-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display font-semibold text-xl md:text-2xl text-ink">
                Everloom — Founder &amp; Developer
              </h3>
              <p className="mt-1 font-mono text-xs text-ink-faint uppercase tracking-wide">
                July 2026 – Present
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-signal-soft px-4 py-3 self-start">
              <span className="font-display font-semibold text-3xl text-signal leading-none">
                13+
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wide text-signal-deep leading-tight">
                clients
                <br />
                served
              </span>
            </div>
          </div>

          <p className="mt-6 text-ink-soft leading-relaxed max-w-3xl">
            Founded a wedding invitation website business and led the design,
            development, and deployment of personalised websites for 13+ clients.
          </p>

          <div className={`mt-8 grid gap-8 ${site.everloomScreenshot ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
            <div>
              <ul className="space-y-3">
                {RESPONSIBILITIES.map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-[15px] text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-ink-soft leading-relaxed border-l-2 border-line pl-4">
                I own design, development, and deployment, and take part in
                client discussions about requirements and templates. My partner
                supports marketing and client communication.
              </p>
            </div>

            {site.everloomScreenshot && (
              <a
                href={site.everloomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block self-start overflow-hidden rounded-xl border border-line"
              >
                <img
                  src={site.everloomScreenshot}
                  alt="Screenshot of the Everloom wedding invitation website"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </a>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-line flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
              {TECH.map((t) => (
                <li
                  key={t}
                  className="font-mono text-[11px] text-ink-soft bg-surface border border-line rounded-full px-2.5 py-1"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={site.everloomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper text-sm font-medium px-5 py-2.5 hover:bg-signal transition-colors self-start sm:self-auto"
            >
              Visit Everloom ↗
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
