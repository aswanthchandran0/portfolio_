import { motion } from "framer-motion";
import { site } from "../data/site";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
        <div>
          <motion.h1 {...fade(0.05)} className="font-display font-semibold tracking-tight text-ink">
            <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05]">
              {site.name}
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-signal">
              {site.title}
            </span>
          </motion.h1>

          <motion.p {...fade(0.12)} className="mt-4 font-display text-lg sm:text-xl text-ink font-medium">
            Founder &amp; Developer of{" "}
            <a
              href={site.everloomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-signal decoration-2 underline-offset-4 hover:text-signal transition-colors"
            >
              Everloom
            </a>
          </motion.p>

          <motion.p {...fade(0.2)} className="mt-6 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
            I build web applications with a focus on thoughtful interfaces and
            practical functionality. At Everloom, I lead design and development,
            delivering personalised wedding invitation websites for 13+ clients.
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper text-sm font-medium px-6 py-3 hover:bg-signal transition-colors"
            >
              View My Work
            </a>
            {site.resume && (
              <a
                href={site.resume}
                download
                className="inline-flex items-center justify-center rounded-full border border-line text-sm font-medium px-6 py-3 text-ink hover:border-signal hover:text-signal transition-colors"
              >
                Download Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line text-sm font-medium px-6 py-3 text-ink hover:border-signal hover:text-signal transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.p
            {...fade(0.36)}
            className="mt-8 flex items-start gap-2.5 text-sm text-ink-soft max-w-md"
          >
            <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span>
              Available for full-time software engineering opportunities in
              Bengaluru • Immediate joiner
            </span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden sm:block"
          aria-hidden="true"
        >
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-line" />
              <span className="w-2.5 h-2.5 rounded-full bg-line" />
              <span className="w-2.5 h-2.5 rounded-full bg-line" />
            </div>
            <pre className="font-mono text-[13px] leading-6 text-ink-soft overflow-x-auto">
{`stack.json

{
  "frontend": ["React", "Vite",
               "Tailwind CSS",
               "Framer Motion"],
  "backend": ["Node.js", "Express"],
  "database": "MongoDB",
  "deploy": "Vercel"
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
