import PageWrapper from "../components/PageWrapper";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import profile from "../assets/lokesh.jpg";

export default function Home() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/70"
          >
            {resumeData.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mt-2 leading-tight"
          >
            {resumeData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mt-3"
          >
            {resumeData.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 mt-6 leading-relaxed"
          >
            {resumeData.summary}
          </motion.p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <a
              href="/projects"
              className="px-5 py-3 rounded-2xl bg-white text-black font-bold hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-white/20 text-white hover:border-white/40 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 text-sm text-white/70">
            <div>Email: {resumeData.email}</div>
            <div>Phone: {resumeData.phone}</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[40px] bg-white/10 blur-2xl" />
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-4">
            <img
              src={profile}
              alt="Lokesh Das"
              className="w-full max-w-md mx-auto rounded-[30px]"
            />
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
