import { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { site } from "../data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unsupported; the mailto link still works */
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-signal-light uppercase tracking-widest mb-4">
            contact
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
            Get in touch
          </h2>
          <p className="mt-5 text-paper/70 max-w-md mx-auto">
            Open to full-time software engineering opportunities in Bengaluru.
            Available to join immediately.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-signal text-paper text-sm font-medium px-6 py-3 hover:bg-signal-deep transition-colors"
            >
              <HiOutlineMail size={17} aria-hidden="true" />
              Email me
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-full border border-paper/25 text-sm font-medium px-6 py-3 hover:border-paper/60 transition-colors"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {site.github && (
              <a
                href={site.github}
                aria-label="GitHub"
                className="p-3 text-paper/70 hover:text-paper transition-colors"
              >
                <SiGithub size={20} />
              </a>
            )}
            {site.linkedin && (
              <a
                href={site.linkedin}
                aria-label="LinkedIn"
                className="p-3 text-paper/70 hover:text-paper transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
        <p className="font-mono text-xs text-paper/60">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs text-paper/60">
          built with React · Vite · Tailwind CSS
        </p>
      </div>
    </section>
  );
}
