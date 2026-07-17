import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Credentials"
          title="Certifications"
          subtitle="Credentials that sharpened how I design, code, and solve problems."
        />

        <ol className="divide-y divide-line border-y border-line">
          {resumeData.certifications.map((c, index) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-5 py-5 md:gap-8"
            >
              <span className="font-display text-sm font-bold text-teal tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">{c}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </PageWrapper>
  );
}
