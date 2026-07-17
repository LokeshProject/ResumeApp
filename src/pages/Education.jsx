import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Academics"
          title="Education"
          subtitle="The academic base behind the engineering craft."
        />

        <ol className="relative space-y-0 border-l border-line pl-8">
          {resumeData.education.map((e, index) => (
            <motion.li
              key={e.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-teal bg-paper" />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                {e.period}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink">{e.degree}</h2>
              <a
                href={e.instituteLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-ink-soft underline-offset-4 transition hover:text-teal hover:underline"
              >
                {e.institute}
              </a>
              <p className="mt-3 font-medium text-ink">{e.score}</p>
              {e.extra ? <p className="mt-2 text-sm text-ink-mute">{e.extra}</p> : null}
            </motion.li>
          ))}
        </ol>
      </div>
    </PageWrapper>
  );
}
