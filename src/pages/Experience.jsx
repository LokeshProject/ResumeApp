import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Work"
          title="Experience"
          subtitle="Where I own delivery end to end — performance, stability, and scale."
        />

        <div className="space-y-12">
          {resumeData.experience.map((exp) => (
            <motion.article
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-line pt-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                    {exp.title}
                  </h2>
                  <p className="mt-1 text-ink-soft">{exp.company}</p>
                </div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
                  {exp.period}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-4 text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
