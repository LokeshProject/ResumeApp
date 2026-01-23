import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

function SkillCard({ title, items }) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-4">
        {items.map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const s = resumeData.skills;
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="Tech stack + tools" />

        <div className="grid md:grid-cols-2 gap-6">
          <SkillCard title="Frontend" items={s.frontend} />
          <SkillCard title="Mobile Development" items={s.mobile} />
          <SkillCard title="Backend" items={s.backend} />
          <SkillCard title="Database" items={s.database} />
          <SkillCard title="Developer Tools" items={s.tools} />
          <SkillCard title="APIs & Integrations" items={s.integrations} />
          <SkillCard title="AI Tools" items={s.aiTools} />
          <SkillCard title="Deployment" items={s.deployment} />
        </div>
      </div>
    </PageWrapper>
  );
}
