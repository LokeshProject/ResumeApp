import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

export default function Experience() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Experience" subtitle="Work + responsibilities" />

        {resumeData.experience.map((exp) => (
          <div key={exp.title} className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-white/70">{exp.company}</p>
              </div>
              <div className="text-white/70">{exp.period}</div>
            </div>

            <ul className="list-disc pl-6 mt-4 text-white/70 space-y-2">
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
