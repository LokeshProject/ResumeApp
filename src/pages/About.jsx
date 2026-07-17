import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Profile"
          title="About"
          subtitle="Three years of shipping products that stay fast, stable, and loved at scale."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-2xl font-bold text-ink">Objective</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{resumeData.objective}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-2xl font-bold text-ink">Summary</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{resumeData.summary}</p>
          </motion.div>
        </div>

        <div className="divider-line my-14" />

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-3"
        >
          {[
            { value: resumeData.yearsExperience, label: "Years shipping production apps" },
            { value: "50M+", label: "Users reached across platforms" },
            { value: "150+", label: "Microapps live on the stores" },
          ].map((item) => (
            <li key={item.label}>
              <p className="font-display text-4xl font-bold tracking-tight text-teal">{item.value}</p>
              <p className="mt-2 text-sm text-ink-mute">{item.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </PageWrapper>
  );
}
