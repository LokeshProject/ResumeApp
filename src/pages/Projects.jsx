import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectTitle({ project }) {
  const className =
    "font-display text-lg font-semibold text-ink transition group-hover:text-teal-deep inline-flex items-center gap-2";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`${className} hover:underline underline-offset-4`}
      >
        {project.name}
        <FaExternalLinkAlt className="text-[0.65rem] opacity-50" aria-hidden />
      </a>
    );
  }

  return <span className={className}>{project.name}</span>;
}

function ProjectLinks({ project }) {
  if (!project.links?.length) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-3">
      {project.links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-deep transition hover:text-teal hover:underline underline-offset-4"
        >
          {link.label}
          <FaExternalLinkAlt className="text-[0.6rem] opacity-60" aria-hidden />
        </a>
      ))}
    </div>
  );
}

function ProjectList({ title, items }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-xl font-bold text-ink md:text-2xl">{title}</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {items.map((p, i) => (
          <motion.li
            key={p.name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group grid gap-2 py-5 transition md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <h3 className="md:col-span-4">
              <ProjectTitle project={p} />
            </h3>
            <div className="md:col-span-8">
              <p className="text-ink-mute leading-relaxed">{p.desc}</p>
              <ProjectLinks project={p} />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default function Projects() {
  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Selected work"
          title="Projects"
          subtitle="Real products in the wild — transport, logistics, and government platforms."
        />

        <ProjectList title="Web platforms" items={resumeData.webProjects} />
        <ProjectList title="Government apps" items={resumeData.governmentApps} />
        <ProjectList title="Other apps" items={resumeData.otherApps} />
      </div>
    </PageWrapper>
  );
}
