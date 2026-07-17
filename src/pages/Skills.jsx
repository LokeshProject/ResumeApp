import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";

const groups = [
  { title: "Frontend", key: "frontend" },
  { title: "Mobile", key: "mobile" },
  { title: "Backend", key: "backend" },
  { title: "Database", key: "database" },
  { title: "Tools", key: "tools" },
  { title: "Integrations", key: "integrations" },
  { title: "AI", key: "aiTools" },
  { title: "Deployment", key: "deployment" },
];

export default function Skills() {
  const s = resumeData.skills;

  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Toolkit"
          title="Skills"
          subtitle="Everything I use to design, build, and ship products that hold up in production."
        />

        <div className="space-y-10">
          {groups.map((group, index) => (
            <motion.section
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.04 }}
              className="border-t border-line pt-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                <h2 className="w-40 shrink-0 font-display text-lg font-semibold text-ink">
                  {group.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {s[group.key].map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {s.languages?.length ? (
          <p className="mt-12 text-sm text-ink-mute">
            Languages: {s.languages.join(" · ")}
          </p>
        ) : null}
      </div>
    </PageWrapper>
  );
}
