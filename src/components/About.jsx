import { motion } from "framer-motion";
import img from '../assets/me.jpeg'
export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-32 h-32 md:w-44 md:h-44 mb-8">
            <img
              src={img}
              alt="Aswanth Chandran"
              className="w-full h-full rounded-full object-cover border-4 border-paper shadow-md"
            />
          </div>

          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">
            about me
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            Thoughtful interfaces.
            <br />
            Practical functionality.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-ink-soft leading-relaxed md:text-[17px]"
        >
          <p>
            I'm a software engineer who builds web applications with React on
            the front end and Node.js, Express, and MongoDB on the back end.
          </p>
          <p>
            As Founder &amp; Developer of Everloom, I lead the design and
            development of personalised wedding invitation websites, from
            reusable templates and custom designs through to deployment on
            Vercel and ongoing updates based on client feedback.
          </p>
          <p>
            I'm looking for a full-time software engineering role in
            Bengaluru, and I'm available to join immediately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
