import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

export default function Education() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Education" subtitle="Academic background" />

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.education.map((e) => (
            <div key={e.degree} className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold">{e.degree}</h3>
              <p className="text-white/70 mt-1">{e.institute}</p>
              <p className="text-white/60 mt-2 text-sm">{e.period}</p>
              <p className="mt-3 text-white/70">{e.score}</p>
              <p className="mt-3 text-white/60 text-sm">{e.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
