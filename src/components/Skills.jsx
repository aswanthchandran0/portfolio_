import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const GROUPS = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5 & CSS3", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    label: "Tools & Deployment",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-10 md:mb-12"
        >
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">
            toolkit
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            Skills
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Technologies I use across my projects and at Everloom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-4">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink hover:border-signal transition-colors"
                  >
                    <item.icon className="text-signal shrink-0" size={18} aria-hidden="true" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
