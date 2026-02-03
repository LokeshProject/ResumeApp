import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectGrid({ title, items }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mt-12">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
      >
        {title}
      </motion.h3>
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((p) => (
          <motion.div
            key={p.name}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/30 transition-all duration-300 card-hover overflow-hidden relative"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <h4 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                {p.name}
              </h4>
              <p className="text-white/60 mt-3 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {p.desc}
              </p>
              <motion.div
                className="mt-4 flex justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <FaExternalLinkAlt className="text-white/40 group-hover:text-white/80 transition-colors text-lg" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="Live + enterprise projects that showcase my expertise" />

        <ProjectGrid title="🚀 Key Web Projects (React.js)" items={resumeData.webProjects} />
        <ProjectGrid title="🏛️ Government App Deployments" items={resumeData.governmentApps} />
        <ProjectGrid title="⭐ Other Notable Apps" items={resumeData.otherApps} />
      </div>
    </PageWrapper>
  );
}
