import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";

export default function Contact() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let’s work together" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold">Details</h3>
            <div className="mt-4 text-white/70 space-y-2">
              <div><span className="text-white/50">Email:</span> {resumeData.email}</div>
              <div><span className="text-white/50">Phone:</span> {resumeData.phone}</div>
              <div><span className="text-white/50">Location:</span> {resumeData.location}</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold">Quick Message</h3>
            <p className="text-white/60 mt-2 text-sm">
              (This is a UI-only form. You can connect EmailJS later.)
            </p>

            <div className="mt-4 space-y-3">
              <input className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none"
                placeholder="Your Name" />
              <input className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none"
                placeholder="Your Email" />
              <textarea className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none h-28"
                placeholder="Message..." />
              <button className="w-full px-5 py-3 rounded-2xl bg-white text-black font-bold hover:opacity-90 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
