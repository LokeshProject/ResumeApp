import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import profile from "../assets/lokesh.jpg";

const highlights = [
  { value: "3+", label: "Years experience" },
  { value: "50M+", label: "Users reached" },
  { value: "150+", label: "Apps shipped" },
];

const focusAreas = [
  "React & React Native",
  "Java Spring & APIs",
  "Store releases & OTA",
  "Payments & POS",
];

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 90% 10%, rgba(14,124,107,0.14), transparent 55%), radial-gradient(ellipse 55% 40% at 5% 85%, rgba(200,240,77,0.12), transparent 50%), linear-gradient(160deg, #f7faf8 0%, #e8f0eb 45%, #dfeae4 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,24,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,20,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="page-shell relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-14 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-2xl flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-4"
            >
              <img
                src={profile}
                alt={resumeData.name}
                className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-teal/40 ring-offset-2 ring-offset-[#eef3f0] sm:h-20 sm:w-20"
              />
              <div>
                <p className="section-kicker">Available for opportunities</p>
                <p className="mt-1 text-sm text-ink-mute">{resumeData.location}</p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m {resumeData.name}
              <span className="text-teal">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="font-display mt-4 text-lg font-semibold text-teal-deep md:text-xl"
            >
              {resumeData.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
            >
              I build fast, stable web &amp; mobile products people rely on every day —
              booking platforms, logistics tools, and government-scale apps used by tens
              of millions. Clean code, sharp UX, and releases that hold up in production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {focusAreas.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.36 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/projects" className="btn-spark">
                View projects
              </Link>
              <Link to="/experience" className="btn-secondary">
                See experience
              </Link>
              <Link to="/contact" className="btn-primary">
                Get in touch
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full shrink-0 lg:max-w-xs"
          >
            <p className="section-kicker mb-5">At a glance</p>
            <ul className="space-y-6 border-t border-line pt-6">
              {highlights.map((item) => (
                <li key={item.label}>
                  <p className="font-display text-3xl font-bold tracking-tight text-teal">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-mute">{item.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-ink-mute">
              Currently shipping at Maventech Labs — React Native, POS integrations,
              and multi-operator booking platforms.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
