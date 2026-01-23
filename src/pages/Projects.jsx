import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

function ProjectGrid({ title, items }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="grid md:grid-cols-3 gap-5 mt-4">
        {items.map((p) => (
          <div key={p.name} className="p-5 rounded-3xl border border-white/10 bg-white/5">
            <h4 className="font-bold">{p.name}</h4>
            <p className="text-white/70 mt-2 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="Live + enterprise projects" />

        <ProjectGrid title="Key Web Projects (React.js)" items={resumeData.webProjects} />
        <ProjectGrid title="Government App Deployments" items={resumeData.governmentApps} />
        <ProjectGrid title="Other Notable Apps" items={resumeData.otherApps} />
      </div>
    </PageWrapper>
  );
}
