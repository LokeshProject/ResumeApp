import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Objective + Summary" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="font-bold text-xl">Objective</h3>
            <p className="text-white/70 mt-3 leading-relaxed">{resumeData.objective}</p>
          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="font-bold text-xl">Professional Summary</h3>
            <p className="text-white/70 mt-3 leading-relaxed">{resumeData.summary}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
