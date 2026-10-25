import { motion } from "framer-motion";
import { featuredProject, otherProjects } from "../data/projects";

function ProjectLinks({ links }) {
  const items = [
    links.live && { href: links.live, label: "Live" },
    links.github && { href: links.github, label: "GitHub" },
  ].filter(Boolean);
  if (!items.length) return null;
  return (
    <div className="flex gap-4 text-sm font-medium">
      {items.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-signal transition-colors"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((t) => (
        <li
          key={t}
          className="font-mono text-[11px] text-ink-soft bg-surface border border-line rounded-full px-2.5 py-1"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">
            selected work
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            Projects
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-line p-6 sm:p-8 md:p-10 hover:shadow-lg transition-shadow duration-200"
        >
          <span className="font-mono text-[11px] uppercase tracking-wide text-signal bg-signal-soft rounded-full px-2.5 py-1">
            Featured · {featuredProject.tag}
          </span>
          <h3 className="mt-4 font-display font-semibold text-2xl md:text-3xl text-ink">
            {featuredProject.name}
          </h3>
          <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
            {featuredProject.description}
          </p>
          <div className="mt-6 pt-5 border-t border-line flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Stack items={featuredProject.stack} />
            <ProjectLinks links={featuredProject.links} />
          </div>
        </motion.article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line p-6 sm:p-7 hover:border-signal hover:shadow-lg transition-all duration-200"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                {p.tag}
              </span>
              <h3 className="mt-2 font-display font-semibold text-lg text-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {p.description}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Stack items={p.stack} />
                <ProjectLinks links={p.links} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
