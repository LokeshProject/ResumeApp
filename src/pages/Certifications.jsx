import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

export default function Certifications() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Courses + achievements" />

        <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
          <ul className="list-disc pl-6 text-white/70 space-y-2">
            {resumeData.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
